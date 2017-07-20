import Filter from "./filters/Filter";
import { IMedia } from "./interfaces/IMedia";
import { IMediaContext } from "./interfaces/IMediaContext";
import { IMediaInstance } from "./interfaces/IMediaInstance";
import SoundSprite from "./sprites/SoundSprite";
import { SoundSpriteData, SoundSprites } from "./sprites/SoundSprite";
export interface Options {
    autoPlay?: boolean;
    preaload?: boolean;
    singleInstance?: boolean;
    volume?: number;
    speed?: number;
    complete?: CompleteCallback;
    loaded?: LoadedCallback;
    preload?: boolean;
    loop?: boolean;
    url?: string;
    source?: ArrayBuffer | HTMLAudioElement;
    useXHR?: boolean;
    sprites?: {
        [id: string]: SoundSpriteData;
    };
}
export interface PlayOptions {
    start?: number;
    end?: number;
    speed?: number;
    loop?: boolean;
    fadeIn?: number;
    fadeOut?: number;
    sprite?: string;
    complete?: CompleteCallback;
    loaded?: LoadedCallback;
}
export declare type LoadedCallback = (err: Error, sound?: Sound, instance?: IMediaInstance) => void;
export declare type CompleteCallback = (sound: Sound) => void;
export default class Sound {
    private static _pool;
    isLoaded: boolean;
    isPlaying: boolean;
    autoPlay: boolean;
    singleInstance: boolean;
    preload: boolean;
    url: string;
    options: Options;
    media: IMedia;
    private _instances;
    private _sprites;
    private _autoPlayOptions;
    private _volume;
    private _loop;
    private _speed;
    static from(source: string | Options | ArrayBuffer | HTMLAudioElement): Sound;
    constructor(media: IMedia, options: Options);
    readonly context: IMediaContext;
    pause(): Sound;
    resume(): Sound;
    private paused;
    speed: number;
    filters: Filter[];
    addSprites(alias: string, data: SoundSpriteData): SoundSprite;
    addSprites(sprites: {
        [id: string]: SoundSpriteData;
    }): SoundSprites;
    destroy(): void;
    removeSprites(alias?: string): Sound;
    readonly isPlayable: boolean;
    stop(): Sound;
    play(alias: string, callback?: CompleteCallback): IMediaInstance | Promise<IMediaInstance>;
    play(source?: string | PlayOptions | CompleteCallback, callback?: CompleteCallback): IMediaInstance | Promise<IMediaInstance>;
    volume: number;
    loop: boolean;
    private _preload(callback?);
    readonly instances: IMediaInstance[];
    readonly sprites: SoundSprites;
    readonly duration: number;
    autoPlayStart(): IMediaInstance;
    private _removeInstances();
    private _onComplete(instance);
    private _createInstance();
    private _poolInstance(instance);
}
