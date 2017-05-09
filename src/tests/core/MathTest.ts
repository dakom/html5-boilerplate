import {MathHelpers} from '../../app/core/helpers/math/MathHelpers';
import { expect } from 'chai';
export class MathTest {
    constructor() {
        describe('subtract', () => {
            it('should pass', () => {
                expect(MathHelpers.returnTest()).to.equal(14);
            });

             
            /*
            it('should fail', () => {
                expect(MathHelpers.returnTest()).to.equal(10, "this is on purposes ;)");
            });
            */
            
        });

    }
}