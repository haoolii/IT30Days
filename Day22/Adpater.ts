import {Player} from './Player';
import {OldPlayer} from './OldPlayer';
export class Adpater implements Player{
    private OldPlayer:OldPlayer;
    constructor(){
        this.OldPlayer = new OldPlayer();
    }
    play():void{
        //if... else ...
        this.OldPlayer.playTheMusicPlease('oldSetting');
    }
}