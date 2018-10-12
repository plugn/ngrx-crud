import { Action } from '@ngrx/store'

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}



export default {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
};