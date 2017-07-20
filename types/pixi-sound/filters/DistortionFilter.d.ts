import Filter from './Filter';
export default class DistortionFilter extends Filter {
    private _distortion;
    private _amount;
    constructor(amount?: number);
    amount: number;
    destroy(): void;
}
