

interface Zoom {
    center?: {
        x: number,
        y: number
    },
    factor:number
}

export class Mandelbrot {
    private currentOriginReal: number = 0.0;
    private currentOriginImaginary: number = 0.0;
    private currentRadius: number = 2.0;
    private zoom:Zoom = {
        factor: .9
    }

    private palettes: Array<Array<number>> = [];

    constructor(private _imgData: ImageData, private width: number, private height: number) {
        //these settings are arbitrary, tweaked by hand to get an average interesting view
        this.zoom.center = {
           x: 920,
           y: 96
        };

        this.currentOriginReal = 0.3988906701602579;
        this.currentOriginImaginary = 0.31251882189683733;
        this.currentRadius = 0.005477854899906823;
    }

    

    crunchData(dataBuf: ArrayBuffer, maxIterations:number): void {
        //making the array just uses the ArrayBuffer as the backing store, no copy
        let imgBuf: Uint8ClampedArray = new Uint8ClampedArray(dataBuf);
        imgBuf.fill(0);
        this.updatePalette(maxIterations);

        this.drawFractal(imgBuf, maxIterations, this.currentOriginReal, this.currentOriginImaginary, this.currentRadius,  this.width, this.height);
        
        //cycle the palettes so we can see some movement ;)
        this.palettes.unshift(this.palettes.pop());
    }

    updatePalette(maxIterations:number) {
        for (let i = this.palettes.length; i <= maxIterations; i++) {
            let col: Array<number> = [];
            col.push(Math.random() * 0xFF);
            col.push(Math.random() * 0xFF);
            col.push(Math.random() * 0xFF);
            col.push(0xFF);

            this.palettes.push(col);
        }
    }
    
    //based off https://github.com/thomasbratt/Mandelbrot

    drawFractal(imgBuf: Uint8ClampedArray, maxIterations:number, or: number, oi: number, radius: number, width: number, height: number) {
        
        let scaleX:number = (2.0 * radius) / width;
        let scaleY:number = (2.0 * radius) / height;

        for (var y = 0; y < height; ++y) {
            for (var x = 0; x < width; ++x) {
                let cr:number = (or - radius) + x * scaleX;
                let ci:number = (oi - radius) + y * scaleY;
                let zr:number = 0.0;
                let zi:number = 0.0;
                
                for (let iter:number = 0; iter < maxIterations; ++iter) {
                    let zr2:number = zr * zr;
                    let zi2:number = zi * zi;

                    if (zr2 + zi2 >= 4.0) {
                        
                        this.putPixel(imgBuf, x, y, this.palettes[iter]);
                        break;
                    }

                    let znr:number = zr2 - zi2 + cr;
                    let zni:number = 2.0 * (zr * zi) + ci;
                    zr = znr;
                    zi = zni;
                }

               

            }
        }
    }
   
    putPixel(imgBuf: Uint8ClampedArray, x: number, y: number, col: Array<number>) {

        let offset: number = (((y * this.width) + x) * 4);

        
        imgBuf[offset] = col[0];
        imgBuf[offset + 1] = col[1];
        imgBuf[offset + 2] = col[2];
        imgBuf[offset + 3] = col[3];
    }

    //not really used, but keeping around as a reference anyway
    //this.zoom center could be based off mouse click, for example
    updateZoom() {
        let nx:number = (2.0 * this.currentRadius * this.zoom.center.x) / this.width;
        let ny:number = (2.0 * this.currentRadius * this.zoom.center.y) / this.height;

        this.currentOriginReal += (nx - this.currentRadius);
        this.currentOriginImaginary += (ny - this.currentRadius);
        this.currentRadius *= this.zoom.factor;
    }

}