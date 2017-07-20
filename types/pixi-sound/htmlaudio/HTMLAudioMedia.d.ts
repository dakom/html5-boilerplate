/// <reference types="pixi.js" />
import { LoadedCallback } from '../Sound';
import Sound from "../Sound";
import { IMedia } from '../interfaces/IMedia';
import HTMLAudioContext from "./HTMLAudioContext";
import HTMLAudioInstance from "./HTMLAudioInstance";
import Filter from "../filters/Filter";
export default class HTMLAudioMedia extends PIXI.utils.EventEmitter implements IMedia {
    parent: Sound;
    private _source;
    init(parent: Sound): void;
    create(): HTMLAudioInstance;
    readonly isPlayable: boolean;
    volume: number;
    loop: boolean;
    speed: number;
    readonly duration: number;
    readonly context: HTMLAudioContext;
    filters: Filter[];
    destroy(): void;
    readonly source: HTMLAudioElement;
    load(callback?: LoadedCallback): void;
}
