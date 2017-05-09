import { GameController } from '../../GameController';
import { Character } from './Character';

export class CharacterManager extends PIXI.Container {
    private tux:Character;
    private ticker:PIXI.ticker.Ticker;

    constructor(private gameController:GameController) {
        super();
        
        this.tux = new Character(gameController.assets.loader.resources.gameassets.textures["character"],(gameController.assets.loader.resources.fx as any).sound, gameController.canvas.renderer.width, gameController.canvas.renderer.height);
        
        this.addChild(this.tux);

        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.add(this.tux.update.bind(this.tux));
        this.ticker.start();

        this.addListener('removed', () => {
            this.ticker.stop();
        });
    }
}