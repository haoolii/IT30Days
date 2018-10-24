import {Component} from './Component';

export class Oil implements Component{
    getTaste():string{
        return '油油的~';
    }
}