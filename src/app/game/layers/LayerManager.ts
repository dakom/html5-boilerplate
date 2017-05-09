import { GameController } from '../GameController';
import { CharacterManager } from './Character/CharacterManager';
import { WorkerManager } from './Worker/WorkerManager';
import { VideoManager } from './Video/VideoManager';

export class LayerManager extends PIXI.Container {
    private character:CharacterManager;
    public worker:WorkerManager;
    private video:VideoManager;

    constructor(private gameController:GameController) {
        super();
    }

    onMenuUpdate() {
        if(this.gameController.menu.video.enabled) {
            if(this.video === undefined) {
                this.video = new VideoManager(this.gameController);
                this.addChild(this.video);
                this.video.play();
            } else {
                this.setChildIndex(this.video, this.children.length-1);
            }
        } else {
            if(this.video !== undefined) {
                this.video.stop();
                this.removeChild(this.video);
                delete this.video;
            }
        }

        if(this.gameController.menu.worker.enabled) {
            if(this.worker === undefined) {
                this.worker = new WorkerManager(this.gameController);
                this.addChild(this.worker);
            } else {
                this.setChildIndex(this.worker, this.children.length-1);
            }
        } else {
            if(this.worker !== undefined) {
                this.removeChild(this.worker);
                delete this.worker;
            }
        }

        if(this.gameController.menu.character.enabled) {
            if(this.character === undefined) {
                this.character = new CharacterManager(this.gameController);
                this.addChild(this.character);
            } else {
                this.setChildIndex(this.character, this.children.length-1);
            }
        } else {
            if(this.character !== undefined) {
                this.removeChild(this.character);
                delete this.character;
            }
        }

        console.log("got menu update!");
    }
}