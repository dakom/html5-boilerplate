/// <reference types="pixi.js" />
import { IMediaContext } from "../interfaces/IMediaContext";
import Filter from "../filters/Filter";
export default class HTMLAudioContext extends PIXI.utils.EventEmitter implements IMediaContext {
    private _muted;
    private _volume;
    private _paused;
    constructor();
    paused: boolean;
    muted: boolean;
    volume: number;
    filters: Filter[];
    readonly audioContext: AudioContext;
    toggleMute(): boolean;
    togglePause(): boolean;
    destroy(): void;
}
