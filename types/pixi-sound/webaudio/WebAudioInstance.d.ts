/// <reference types="pixi.js" />
import WebAudioMedia from "./WebAudioMedia";
import { IMediaInstance } from "../interfaces/IMediaInstance";
export default class WebAudioInstance extends PIXI.utils.EventEmitter implements IMediaInstance {
    id: number;
    private _media;
    private _paused;
    private _lastUpdate;
    private _elapsed;
    private _fadeIn;
    private _fadeOut;
    private _speed;
    private _end;
    private _loop;
    private _duration;
    private _progress;
    private _updateListener;
    private _source;
    constructor(media: WebAudioMedia);
    stop(): void;
    play(start: number, end: number, speed: number, loop: boolean, fadeIn: number, fadeOut: number): void;
    private _toSec(time?);
    private _enabled;
    readonly progress: number;
    paused: boolean;
    destroy(): void;
    toString(): string;
    private _now();
    private _update(force?);
    init(media: WebAudioMedia): void;
    private _internalStop();
    private _onComplete();
}
