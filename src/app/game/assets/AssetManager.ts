import { Path } from '../../core/utils/Path';
import { ObjectUtils } from '../../core/utils/ObjectUtils';

import * as protobuf from 'protobufjs';


import {appConfig} from '../../../protobufs-compiled/app/app.config.proto';

export class AssetManager {
    public loader:PIXI.loaders.Loader;
    public promise:Promise<void>;

    public info:appConfig.Info;

    public constructor() {
        
        this.promise = new Promise<void>((resolve, reject) => {
            this.loader = new PIXI.loaders.Loader();

            this.loader.add('gameassets', Path.GetImagePath("game/gameassets.json"));
                this.loader.add('fx', Path.GetAudioPath("fx/touch"));
                this.loader.add('bg-music', Path.GetAudioPath("music/bg"));
                this.loader.add('config', Path.GetConfigPath("config.json"));

                this.loader.onError.add((e: Error) => {
                    reject(e);
                });

                this.loader.load((loader: PIXI.loaders.Loader, resources: any) => {
                    let jsonObj:any = resources.config.data.app;
                    let err:any = appConfig.Info.verify(jsonObj);
                    if(err !== null) {
                        throw err;
                    }
                    
                    this.info = appConfig.Info.create(jsonObj);
                    if(!ObjectUtils.EverythingIsSet(this.info.toObject())) {
                        throw new Error("bad app configuration");
                    }

                    console.log("Version: " + this.info.version)
                    resolve();
                });
        });
    }
}