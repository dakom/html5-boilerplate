declare var DIST_SERVER: string;
declare var CDN_SERVER: string;

export class Path {

    static _audioExt: string;
    static _videoExt: string;

    static get audioExt(): string {
        if (this._audioExt === undefined) {
            
            let Modernizr: any = (window as any).Modernizr;

            if (Modernizr.audio.mp3 == "probably") {
                this._audioExt = '.mp3';
            } else if (Modernizr.audio.ogg == "probably") {
                this._audioExt = '.ogg';
            } else if (Modernizr.audio.m4a == "probably" || Modernizr.audio.aac == "probably") {
                this._audioExt = '.m4a';
            } else {
                this._audioExt = '.mp3';
                console.log("unable to detect any supported audio format, defaulting to " + this._audioExt);
            }

            console.log("Audio ext is not set, setting to " + this._audioExt);
        }

        return this._audioExt;
    }

    static get videoExt(): string {
        if (this._videoExt === undefined) {
            
            let Modernizr: any = (window as any).Modernizr;
if (Modernizr.video.h264 == "probably") {
                this._videoExt = '.mp4';
            }else if (Modernizr.video.webm == "probably") {
                this._videoExt = '.webm';
            } else if (Modernizr.video.ogg == "probably") {
                this._videoExt = '.ogv';
            } else {
                this._videoExt = '.mp4';
                console.log("unable to detect any supported video format, defaulting to " + this._videoExt);
            }

            console.log("Vidio ext is not set, setting to " + this._videoExt);
        }

        return this._videoExt;
    }

    public static GetCdnPath(path: string): string {
        return CDN_SERVER + path;
    }

    public static GetDistPath(path: string): string {
        return DIST_SERVER + path;
    }

    public static GetImagePath(path: string): string {
        return Path.GetCdnPath("graphics/" + path);
    }


    public static GetConfigPath(path: string): string {
        return Path.GetDistPath("app-config/" + path);
    }

    public static GetAudioPath(path: string): string {
        return Path.GetCdnPath("audio/" + path) + this.audioExt;
    }

    public static GetVideoPath(path: string): string {
        //video->texture has some cross-origin issues we don't want to deal with atm
        //anyway, for production purposes video would typically be on a streaming server (dash/hls/etc.)

        return Path.GetDistPath("video/" + path + this.videoExt);
    }

}