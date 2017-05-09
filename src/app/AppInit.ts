import {GameController} from './game/GameController';

class AppInit {
    constructor() {
       let gameController:GameController = new GameController();

        gameController.init.then(() => {
                   console.log('game ready!');
        });
    }
    
}

new AppInit();



