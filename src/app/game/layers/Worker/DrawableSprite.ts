export class DrawableSprite extends PIXI.Container {
    private _dataBuf:ArrayBuffer;
    private ctx: CanvasRenderingContext2D;
    private imgData: ImageData;
    private canvas: HTMLCanvasElement;
    private _sprite:PIXI.Sprite;

    constructor(public imgWidth:number, public imgHeight:number) {
        super();

        this.canvas = document.createElement('canvas');
        
        this.canvas.width = imgWidth;
        this.canvas.height = imgHeight;

        this.ctx = this.canvas.getContext('2d');

        this._sprite = new PIXI.Sprite(PIXI.Texture.fromCanvas(this.canvas));

        this.addChild(this._sprite);

        this.imgData = this.ctx.createImageData(imgWidth, imgHeight);
        this.dataBuf = new ArrayBuffer(this.imgData.data.byteLength);
    }

    get dataBuf():ArrayBuffer {
        return this._dataBuf;
    }

    set dataBuf(buf:ArrayBuffer) {
        this._dataBuf = buf;

        //making the array just uses the ArrayBuffer as the backing store, no copy
        this.imgData.data.set(new Uint8ClampedArray(this.dataBuf));
        this.ctx.putImageData(this.imgData, 0, 0);
        this._sprite.texture.update();
    }
}