export class Canvas {
    private app:PIXI.Application;
    private windowScaleRatio:number;

    constructor() {
        //if saving images, use preserveDrawingBuffer: true
        this.app = new PIXI.Application(1024, 720, {backgroundColor : 0x1099bb}); //preserveDrawingBuffer for saving images
        document.body.appendChild(this.app.view);

   
        this.doScaleWindow();
        window.addEventListener("resize", this.doScaleWindow.bind(this));
    }

    doScaleWindow() {
        this.windowScaleRatio = (window as any).scaleToWindow(this.app.renderer.view, 0xFFFFFF);
    }

    get stage(): PIXI.Container {
        return this.app.stage;
    }

    get renderer(): PIXI.CanvasRenderer | PIXI.WebGLRenderer {
        return this.app.renderer
    }

    get ticker():PIXI.ticker.Ticker {
        return this.app.ticker;
    }
}
