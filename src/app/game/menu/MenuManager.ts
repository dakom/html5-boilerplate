import { GameController } from '../GameController';
import { AssetManager } from '../assets/AssetManager';
import { ToggleButton } from '../../core/display/ToggleButton';

export class MenuManager extends PIXI.Container {
    public character:ToggleButton;
    public video:ToggleButton;
    public worker:ToggleButton;

    constructor(private gameController:GameController) {
        super();

        let assets:AssetManager = gameController.assets;
        let bgTexture:PIXI.Texture = assets.loader.resources.gameassets.textures["bg"];
        let circleTexture:PIXI.Texture = assets.loader.resources.gameassets.textures["circle"];

        let xOffset:number = 0;
        let yOffset:number = 0;
        let yMargin:number = 10;

        this.character = new ToggleButton(bgTexture, circleTexture, "Character");
        this.character.x = xOffset;
        this.character.y = yOffset;
        
        this.character.on('pointerdown', this.buttonChanged.bind(this));
        yOffset += bgTexture.height + yMargin;
        
        this.worker = new ToggleButton(bgTexture, circleTexture, "Worker");
        this.worker.x = xOffset;
        this.worker.y = yOffset;
        this.worker.on('pointerdown', this.buttonChanged.bind(this));
        yOffset += bgTexture.height + yMargin;
        

        this.video = new ToggleButton(bgTexture, circleTexture, "Video");
        this.video.x = xOffset;
        this.video.y = yOffset;
        this.video.on('pointerdown', this.buttonChanged.bind(this));
        this.addChild(this.character, this.worker, this.video);

        //this.character.enabled = true;
        //this.worker.enabled = true;
        //this.video.enabled = true;
    }

    buttonChanged(e:Event) {
        if (e.currentTarget instanceof ToggleButton) {
            e.currentTarget.enabled = !e.currentTarget.enabled;
        }

        this.gameController.layers.onMenuUpdate();
    }
}