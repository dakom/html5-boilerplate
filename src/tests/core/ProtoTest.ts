import { expect } from 'chai';
import { appConfig } from '../../protobufs-compiled/app/app.config.proto';
import { ObjectUtils } from '../../app/core/utils/ObjectUtils';

export class ProtoTest {
    constructor() {
        describe('protobuf', () => {
            it('should fail verification', () => {
                expect(appConfig.Info.verify("" as any)).to.not.equal(null);
            });

            it('should pass basic verification', () => {
                expect(appConfig.Info.verify({})).to.equal(null);
            });

            it('should fail deep verification', () => {
                let appInfo:appConfig.Info = appConfig.Info.create({
                    version: ""
                });
                
                expect(ObjectUtils.Validate(appConfig.Info.toObject(appInfo))).to.equal(false);
            });

            it('should pass deep verification', () => {
                let appInfo:appConfig.Info = appConfig.Info.create({
                    version: "foo"
                });

                expect(ObjectUtils.Validate(appConfig.Info.toObject(appInfo))).to.equal(true);
            });
        });
    }
}