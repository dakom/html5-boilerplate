import { GameController } from '../../GameController';
import { Path } from '../../../core/utils/Path';

export class VideoManager extends PIXI.Container {
    public videoElement: HTMLVideoElement;
    
    constructor(private gameController: GameController) {
        super();

    }

    play() {
        
        this.videoElement = document.createElement('video') as HTMLVideoElement;
        this.videoElement.muted = true;
        this.videoElement.crossOrigin = "anonymous";
        this.videoElement.loop = true;
        this.videoElement.autoplay = true;
        this.videoElement.src = Path.GetVideoPath("bees");
        

        this.videoElement.addEventListener('ended', (e) => {
            console.log("Video ended!");
        });

        this.videoElement.addEventListener('timeupdate', (e) => {
            //we could get the time if we wanted...
            //console.log(e);
        });


        console.log(this.videoElement);
        var texture: PIXI.Texture = PIXI.Texture.fromVideo(this.videoElement);
        var videoSprite = new PIXI.Sprite(texture);
        videoSprite.width = 1024;
        videoSprite.height = 768;
        this.addChild(videoSprite);

    }

    stop() {
        this.videoElement.pause(); //seems like this is the only way to stop the video... remove/delete didn't work o_O
        delete this.videoElement;

    }
}