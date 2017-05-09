import {MathTest} from './core/MathTest';
import {UtilsTest} from './core/UtilsTest';
import {ProtoTest} from './core/ProtoTest';
import {GameTester} from './game/GameTester';
import {GameController} from '../app/game/GameController';
import { expect } from 'chai';

class TesterInit {
    
    constructor() {
       let gameController:GameController = new GameController();
       new UtilsTest();
       new ProtoTest();
       new MathTest();
       new GameTester(gameController);
       
    }
    
}

new TesterInit();



