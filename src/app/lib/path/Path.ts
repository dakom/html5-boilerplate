declare const CDN_SERVER: string;
declare const DIST_SERVER: string;


export enum MediaType {
    IMAGE,
    AUDIO,
    VIDEO,
    JSON,
}

export class Path {

    static _audioExt: string;
    static _videoExt: string;

    static get audioExt(): string {
        if (this._audioExt === undefined) {

            const Modernizr: any = (window as any).Modernizr;

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

            const Modernizr: any = (window as any).Modernizr;
            if (Modernizr.video.h264 == "probably") {
                this._videoExt = '.mp4';
            } else if (Modernizr.video.webm == "probably") {
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

    static MediaPath(mediaType:MediaType, path:string):string {
        const ext = this.GetExt(path);

        switch(mediaType) {
            case MediaType.AUDIO:
                if(ext === "") {
                    path += this.audioExt;
                }
                return "audio/" + path;
            case MediaType.IMAGE:
                return "images/" + path;
            case MediaType.VIDEO:
                if(ext === "") {
                    path += this.videoExt;
                }
                return "video/" + path;
            default: return "";
        }
    }

    static GetExt(path:string):string {
        const idx = path.lastIndexOf(".");
        if(idx === -1) {
            return "";
        }

        return(path.substring(idx+1));
    }

    public static Image(path:string):string {
        return CDN_SERVER + Path.MediaPath(MediaType.IMAGE, path); 
    }
}