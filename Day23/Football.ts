import {Game} from './Game';

export class Football extends Game{
    initialize():void{
        console.log('Football initializing..');
    }
    startPlay():void{
        console.log('Football startPlaying..');
    }
    endPlay():void{
        console.log('Football endPlaying..');
    }
}