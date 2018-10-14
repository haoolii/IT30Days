import {Subject} from './Subject';

export interface Observer{
    subject:Subject;
    Update():void;
}