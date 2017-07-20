import Filter from './Filter';
export default class EqualizerFilter extends Filter {
    static F32: number;
    static F64: number;
    static F125: number;
    static F250: number;
    static F500: number;
    static F1K: number;
    static F2K: number;
    static F4K: number;
    static F8K: number;
    static F16K: number;
    bands: BiquadFilterNode[];
    bandsMap: {
        [id: number]: BiquadFilterNode;
    };
    constructor(f32?: number, f64?: number, f125?: number, f250?: number, f500?: number, f1k?: number, f2k?: number, f4k?: number, f8k?: number, f16k?: number);
    setGain(frequency: number, gain?: number): void;
    getGain(frequency: number): number;
    f32: number;
    f64: number;
    f125: number;
    f250: number;
    f500: number;
    f1k: number;
    f2k: number;
    f4k: number;
    f8k: number;
    f16k: number;
    reset(): void;
    destroy(): void;
}
