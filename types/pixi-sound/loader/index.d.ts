import SoundLibrary from "../SoundLibrary";
export default class LoaderMiddleware {
    static EXTENSIONS: string[];
    static _sound: SoundLibrary;
    static install(sound: SoundLibrary): void;
    static legacy: boolean;
    private static plugin(resource, next);
}
