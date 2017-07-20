import Filter from './Filter';
export default class StereoFilter extends Filter {
    private _stereo;
    private _panner;
    private _pan;
    constructor(pan?: number);
    pan: number;
    destroy(): void;
}
