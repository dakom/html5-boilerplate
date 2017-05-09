import { Canvas } from '../core/helpers/pixi/Canvas';
import { Path } from '../core/utils/Path';
import { ObjectUtils, EverythingIsSetOptions } from '../core/utils/ObjectUtils';
import { AssetManager } from './assets/AssetManager';
import { MenuManager } from './menu/MenuManager';
import { LayerManager } from './layers/LayerManager';
import { StatusDisplay } from './status/StatusDisplay';

import { gameConfig } from '../../protobufs-compiled/game/game.config.proto';

export class GameController {
    public canvas: Canvas;
    public assets: AssetManager;
    public layers: LayerManager;
    public menu: MenuManager;

    public init: Promise<void>;

    private statusDisplay: StatusDisplay;

    public config: gameConfig.Options;

    setConfig() {

        let jsonObj: any = this.assets.loader.resources.config.data.game;
        let err: any = gameConfig.Options.verify(jsonObj);
        if (err !== null) {
            throw err;
        }
        
        this.config = gameConfig.Options.create(jsonObj);

        let opts:EverythingIsSetOptions = new EverythingIsSetOptions();
        opts.numberNegativeAllowed = false;
        opts.numberZeroAllowed = false;

        if(!ObjectUtils.EverythingIsSet(this.config.toObject(), opts)) {
            throw new Error("bad game configuration");
        }
    }

    constructor() {
        console.log("Game Controller Constructor");
        
        this.canvas = new Canvas();

        this.statusDisplay = new StatusDisplay(this);
        this.canvas.stage.addChild(this.statusDisplay);

        this.statusDisplay.label = "Loading...";

        this.init = new Promise<void>((resolve, reject) => {
            this.assets = new AssetManager();

            this.assets.promise.then(() => {
                console.log("assets loaded!");

                this.setConfig();



                this.layers = new LayerManager(this);
                this.canvas.stage.addChild(this.layers);

                this.menu = new MenuManager(this);
                this.canvas.stage.addChild(this.menu);

                this.layers.onMenuUpdate();

                this.canvas.stage.setChildIndex(this.statusDisplay, this.canvas.stage.children.length - 1);

                PIXI.ticker.shared.add((d: number) => {
                    let str: string = PIXI.ticker.shared.FPS.toFixed(0).toString() + "fps";

                    if (this.menu.worker.enabled) {
                        str = "Core: " + str + "\nWorker: " + this.layers.worker.getStatusInfo();
                    }

                    this.statusDisplay.label = str;

                });
                resolve();
            });
        });
    }
}