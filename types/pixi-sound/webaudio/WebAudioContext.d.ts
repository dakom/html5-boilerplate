import Filterable from "../Filterable";
import { IMediaContext } from "../interfaces/IMediaContext";
export default class WebAudioContext extends Filterable implements IMediaContext {
    gain: GainNode;
    compressor: DynamicsCompressorNode;
    analyser: AnalyserNode;
    private _ctx;
    private _offlineCtx;
    private _muted;
    private _volume;
    private _paused;
    private _unlocked;
    constructor();
    private _unlock();
    playEmptySound(): void;
    static readonly AudioContext: typeof AudioContext;
    static readonly OfflineAudioContext: typeof OfflineAudioContext;
    destroy(): void;
    readonly audioContext: AudioContext;
    readonly offlineContext: OfflineAudioContext;
    muted: boolean;
    volume: number;
    paused: boolean;
    toggleMute(): boolean;
    togglePause(): boolean;
    decode(arrayBuffer: ArrayBuffer, callback: (err?: Error, buffer?: AudioBuffer) => void): void;
}
