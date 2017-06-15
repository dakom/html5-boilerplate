import { GameController } from '../../GameController';
import { DrawableSprite } from './DrawableSprite';

export class WorkerManager extends PIXI.Container {
    private worker: Worker;
    private dSprite:DrawableSprite;
    
    
    private ticker: PIXI.ticker.Ticker;
    private bgMusic: any;
    private lastUpdate: number;
    private fps: number;
    private iterations:number = 0;

    constructor(private gameController: GameController) {
        super();

        this.iterations = this.gameController.config.minimumIterations;
        
        this.bgMusic = (gameController.assets.loader.resources as any)["bg-music"].sound;
        this.bgMusic.loop = true;
        if (gameController.config.playBackgroundMusic === true) {
            this.bgMusic.play();
        }

        this.dSprite = new DrawableSprite(gameController.canvas.renderer.width, gameController.canvas.renderer.height);
        this.addChild(this.dSprite);

       
        
        this.worker = new Worker('fractalWorker.js');
        this.worker.addEventListener('message', (e: MessageEvent) => {
            if (e.data.cmd == 'ready') {
                this.requestDataUpdate();
            } else if (e.data.cmd == 'data') {
                this.onDataUpdate(e.data);
            }
        });
        this.worker.postMessage({
            cmd: "init",
            width: this.dSprite.imgWidth,
            height: this.dSprite.imgHeight

        });

        this.on('removed', () => {
            this.bgMusic.stop();
            this.worker.terminate();
        });
    }

    requestDataUpdate() {
        let timeNow: number = Date.now();
        if (this.lastUpdate !== undefined) {
            let targetFps:number = this.gameController.config.targetWorkerFps;
            let iterationJumpAmount:number = this.gameController.config.workerIterationJump;

            let diff: number = (timeNow - this.lastUpdate) / 1000;
            this.fps = Math.round(1 / (diff));
            if(this.fps > targetFps) {
                this.iterations += iterationJumpAmount;
            } else if(this.fps < targetFps && this.iterations > this.gameController.config.minimumIterations) {
                this.iterations -= iterationJumpAmount;
            }
        }

        this.lastUpdate = timeNow;

        //Second property will Transfer the ArrayBuffer rather than copy
        this.worker.postMessage({
            cmd: "getData",
            iterations: this.iterations,
            dataBuf: this.dSprite.dataBuf
        }, [
                this.dSprite.dataBuf
            ]);
    }

    onDataUpdate(data: any) {
        this.dSprite.dataBuf = data.buf;
        this.requestDataUpdate();
    }

    getStatusInfo() {
        if(this.fps !== undefined) {
            return this.fps + " fps " + this.iterations.toString() + " iter";
        } else {
            return "";
        }
        
    }
}