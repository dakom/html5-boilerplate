import Filter from "./filters/Filter";
import { IMediaContext } from "./interfaces/IMediaContext";
import { IMediaInstance } from "./interfaces/IMediaInstance";
import { CompleteCallback, Options, PlayOptions } from "./Sound";
import Sound from "./Sound";
export declare type SoundMap = {
    [id: string]: Options | string | ArrayBuffer | HTMLAudioElement;
};
export default class SoundLibrary {
    static instance: SoundLibrary;
    private _useLegacy;
    private _context;
    private _webAudioContext;
    private _htmlAudioContext;
    private _sounds;
    constructor();
    readonly context: IMediaContext;
    static init(): SoundLibrary;
    global(): void;
    filtersAll: Filter[];
    readonly supported: boolean;
    add(alias: string, options: Options | string | ArrayBuffer | HTMLAudioElement | Sound): Sound;
    add(map: SoundMap, globalOptions?: Options): {
        [id: string]: Sound;
    };
    private _getOptions(source, overrides?);
    useLegacy: boolean;
    remove(alias: string): SoundLibrary;
    volumeAll: number;
    togglePauseAll(): boolean;
    pauseAll(): SoundLibrary;
    resumeAll(): SoundLibrary;
    toggleMuteAll(): boolean;
    muteAll(): SoundLibrary;
    unmuteAll(): SoundLibrary;
    removeAll(): SoundLibrary;
    stopAll(): SoundLibrary;
    exists(alias: string, assert?: boolean): boolean;
    find(alias: string): Sound;
    play(alias: string, options?: PlayOptions | CompleteCallback | string): IMediaInstance | Promise<IMediaInstance>;
    stop(alias: string): Sound;
    pause(alias: string): Sound;
    resume(alias: string): Sound;
    volume(alias: string, volume?: number): number;
    duration(alias: string): number;
    destroy(): void;
}
