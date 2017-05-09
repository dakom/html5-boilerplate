import { GameController } from '../GameController';

export class StatusDisplay extends PIXI.Container {
    private textSprite: PIXI.Text;

    constructor(private gameController:GameController) {

        super();
    }

    set label(_label:string) {
        if (this.textSprite === undefined) {
            var style: PIXI.TextStyle = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: 36,
                fontWeight: 'bold',
                fill: ['#ffffff', '#00ff99'], // gradient
                stroke: '#4a1850',
                strokeThickness: 5,
                dropShadow: true,
                dropShadowColor: '#000000',
                dropShadowBlur: 4,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
                wordWrap: false,
                align: 'right'
            });

            this.textSprite = new PIXI.Text();
            this.textSprite.x = 30;
            this.textSprite.y = 60;
            this.textSprite.style = style;
            this.addChild(this.textSprite);
        }

        this.textSprite.text = _label;
        this.textSprite.x = (this.gameController.canvas.renderer.width - this.textSprite.width) - 10;
        this.textSprite.y = 10; //(this.gameController.canvas.renderer.height - this.textSprite.height) /3;
    }
}