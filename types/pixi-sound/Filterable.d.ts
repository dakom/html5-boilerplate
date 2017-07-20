import Filter from "./filters/Filter";
export default class Filterable {
    private _input;
    private _output;
    private _filters;
    constructor(input: AudioNode, output: AudioNode);
    readonly destination: AudioNode;
    filters: Filter[];
    destroy(): void;
}
