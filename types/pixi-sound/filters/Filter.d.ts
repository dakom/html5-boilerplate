export default class Filter {
    destination: AudioNode;
    source: AudioNode;
    constructor(destination: AudioNode, source?: AudioNode);
    connect(destination: AudioNode): void;
    disconnect(): void;
    destroy(): void;
}
