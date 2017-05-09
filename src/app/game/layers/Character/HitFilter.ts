export interface RgbColor {
    r:number,
    g:number,
    b:number,
    a:number
}

export class HitFilter extends PIXI.Filter {
    constructor() {
        let fragmentSrc:string = `
            precision mediump float;

            varying vec2 vTextureCoord;
            uniform sampler2D uSampler;
            uniform vec4 rgbColor;
           
            void main(void) {
                gl_FragColor = texture2D(uSampler, vTextureCoord);
                vec4 tmpColor = mix(gl_FragColor, rgbColor, rgbColor.a) * gl_FragColor.a;
                tmpColor.a = gl_FragColor.a;
                gl_FragColor = tmpColor;
            }
        `;

        let vertexSrc:string = `
            attribute vec2 aVertexPosition;
            attribute vec2 aTextureCoord;

            uniform mat3 projectionMatrix;

            varying vec2 vTextureCoord;

            void main(void) {
                vTextureCoord = aTextureCoord;
                gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 1.0, 1.0);
            }
        `;

        let uniforms:any = {
            rgbColor: {
                value: [1.0, 1.0, 1.0, 1.0]
            }
        };

        super(vertexSrc, fragmentSrc, uniforms);
    }

    get rgbColor():RgbColor {
        let vals = this.uniforms.rgbColor;
        return {
            r: vals[0],
            g: vals[1],
            b: vals[2],
            a: vals[3]
        }
    }

    set rgbColor(value:RgbColor) {
        this.uniforms.rgbColor = [value.r, value.g, value.b, value.a];
    }

    /*
    get color():number {
        return PIXI.utils.rgb2hex(this.uniforms.rgbColor);
    }

    set color(value:number) {
        this.uniforms.rgbColor = PIXI.utils.hex2rgb(value);
    }
    */
}