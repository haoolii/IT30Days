import {Game} from './Game';

export class Cricket extends Game{
    initialize():void{
        console.log('Cricket initializing..');
    }
    startPlay():void{
        console.log('Cricket startPlaying..');
    }
    endPlay():void{
        console.log('Cricket endPlaying..');
    }
}