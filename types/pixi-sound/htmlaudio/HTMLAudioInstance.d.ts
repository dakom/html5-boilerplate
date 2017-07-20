/// <reference types="pixi.js" />
import HTMLAudioMedia from "./HTMLAudioMedia";
import { IMediaInstance } from "../interfaces/IMediaInstance";
export default class HTMLAudioInstance extends PIXI.utils.EventEmitter implements IMediaInstance {
    static PADDING: number;
    id: number;
    private _source;
    private _parent;
    private _end;
    private _paused;
    private _duration;
    private _start;
    private _playing;
    private _onVolumeChanged;
    private _onPausedChanged;
    constructor(parent: HTMLAudioMedia);
    readonly progress: number;
    paused: boolean;
    private _onPlay();
    private _onPause();
    init(parent: HTMLAudioMedia): void;
    private _internalStop();
    stop(): void;
    play(start: number, end: number, speed: number, loop: boolean, fadeIn: number, fadeOut: number): void;
    private _onUpdate();
    private _onComplete();
    destroy(): void;
    toString(): string;
}
