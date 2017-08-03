
import { expect } from 'chai';

class TesterInit {
    
    constructor() {
       describe('init', () => {
            it('should pass', () => {
                expect(1+1).to.equal(2);
            });
       });
    }
}

new TesterInit();



