import { HitFilter, RgbColor } from './HitFilter';

export class Character extends PIXI.Sprite {
    private speed: number = 10;
    private rotationLimit: number = .1;
    private dx: number;
    private dy: number;
    private dr: number;
    private yMin: number;
    private xMin: number;

    private hitFilter: HitFilter;
    private filterTicker: PIXI.ticker.Ticker;
    private filterDirection: number;
    private filterSpeed: number = .1;
    private filterColor: RgbColor;

    constructor(tex: PIXI.Texture, private boingSound: any, private xMax: number, private yMax: number) {
        super(tex);
        
        this.anchor.set(0.5);

        this.x = xMax / 2;
        this.y = yMax / 2;


        this.xMax -= this.width / 2;
        this.yMax -= this.height / 2;
        this.xMin = this.width / 2;
        this.yMin = this.height / 2;
        this.dx = Math.random() + .1;

        if (Math.random() > .5) {
            this.dx *= -1;
        }

        this.dy = Math.random() + .1;

        if (Math.random() > .5) {
            this.dy *= -1;
        }

        this.dr = Math.random();
        if (Math.random() > .5) {
            this.dr *= -1;
        }

        this.dr *= this.rotationLimit;


        this.hitFilter = new HitFilter();
    }

    public update(delta: number) {
        let hitEdge: boolean = false;

        this.x += this.dx * (delta * this.speed);
        this.y += this.dy * (delta * this.speed);

        this.rotation += this.dr * delta;

        if (this.y < this.yMin) {
            hitEdge = true;
            this.y = this.yMin;
            this.dy = Math.random() + .1;
        }

        if (this.y > this.yMax) {
            hitEdge = true;
            this.y = this.yMax
            this.dy = (Math.random() + .1) * -1;
        }

        if (this.x < this.xMin) {
            hitEdge = true;
            this.x = this.xMin;
            this.dx = Math.random() + .1;
        }

        if (this.x > this.xMax) {
            hitEdge = true;
            this.x = this.xMax;
            this.dx = (Math.random() + .1) * -1;
        }

        if (hitEdge) {

            this.dr = Math.random();
            if (Math.random() > .5) {
                this.dr *= -1;
            }

            this.dr *= this.rotationLimit;

            this.doBumpEffect();
        }

    }

    doBumpEffect() {
        this.boingSound.play();


        if (this.filterTicker === undefined) {
            this.filterColor = {
                r: Math.random(),
                g: Math.random(),
                b: Math.random(),
                a: 0
            };
            this.hitFilter.rgbColor = this.filterColor;

            this.filters = [this.hitFilter];
            this.filterDirection = 1;
            this.filterTicker = new PIXI.ticker.Ticker;
            this.filterTicker.add((deltaTime: number) => {
                this.updateFilter(deltaTime);
            });
            this.filterTicker.start();
        }
    }

    updateFilter(deltaTime: number) {
        let diff: number = deltaTime * this.filterSpeed;
        this.filterColor.a += (diff * this.filterDirection);

        if (this.filterColor.a > 1) {
            this.filterColor.a = 1;
            this.filterDirection = -1;

        }

        if (this.filterColor.a < 0) {
            this.filters = [];

            this.filterTicker.stop();
            delete this.filterTicker;
        } else {
            this.hitFilter.rgbColor = this.filterColor;
        }
    }
}