export class ToggleButton extends PIXI.Container {
    private style: PIXI.TextStyle = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: 36,
                fontWeight: 'bold',
                fill: "white"
            });

    private _enabled:boolean;


    get enabled():boolean {
        return this._enabled;
    }

    private container:PIXI.Container;

    constructor(private bgTexture:PIXI.Texture, private knobTexture:PIXI.Texture, private label:string) {

        super();
        this.interactive = this.buttonMode = true;
        this.enabled = false;
    }
    
    set enabled(flag:boolean) {
        if(flag === this._enabled) {
            return;
        }

        this._enabled = flag;

        if(this.container !== undefined) {
            this.removeChild(this.container);
        }

        let container:PIXI.Container = new PIXI.Container();
        let bg:PIXI.Sprite = new PIXI.Sprite(this.bgTexture);
        let knob:PIXI.Sprite = new PIXI.Sprite(this.knobTexture);

        container.addChild(bg);
        container.addChild(knob);
        knob.y = (bg.height - knob.height)/2;
        
        var text:PIXI.Text = new PIXI.Text(this.label);
        text.style = this.style;
        text.y = (bg.height - text.height)/2;
        container.addChild(text);

        if(flag) {
            knob.x = (bg.width - knob.width)-10;
            text.x = (knob.x - text.width)-10;
            bg.tint = 0x00FF00;
        } else {
            knob.x = 10;
            text.x = knob.x + knob.width + 10;
            bg.tint = 0xcccccc;

        }

        

        
        
        this.container = container;
        this.addChild(this.container);
    }
}