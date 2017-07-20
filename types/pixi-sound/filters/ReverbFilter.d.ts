import Filter from './Filter';
export default class ReverbFilter extends Filter {
    private _convolver;
    private _seconds;
    private _decay;
    private _reverse;
    constructor(seconds?: number, decay?: number, reverse?: boolean);
    private _clamp(value, min, max);
    seconds: number;
    decay: number;
    reverse: boolean;
    private _rebuild();
    destroy(): void;
}
