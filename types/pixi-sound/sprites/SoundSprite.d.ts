import Sound from "../Sound";
import { CompleteCallback } from "../Sound";
import { IMediaInstance } from '../interfaces/IMediaInstance';
export interface SoundSpriteData {
    start: number;
    end: number;
    speed?: number;
}
export declare type SoundSprites = {
    [id: string]: SoundSprite;
};
export default class SoundSprite {
    parent: Sound;
    start: number;
    end: number;
    speed: number;
    duration: number;
    constructor(parent: Sound, options: SoundSpriteData);
    play(complete?: CompleteCallback): IMediaInstance | Promise<IMediaInstance>;
    destroy(): void;
}
