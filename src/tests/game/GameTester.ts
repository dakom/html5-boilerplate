import {GameController} from '../../app/game/GameController';
import { expect } from 'chai';
export class GameTester {
    constructor(gameController:GameController) {

        describe('gameController', () => {
            it('configuration check', () => {
                //Note - for promises it returns the result
                
                return gameController.init.then(() => {
                    expect(gameController.config.playBackgroundMusic).to.equal(true, "background music settings in config");
                });
                    
            });

            it('version should exist', () => {
                return gameController.init.then(() => {
                    expect(gameController.assets.info.version).to.not.be.empty;
                });
            });
        });
    }
}