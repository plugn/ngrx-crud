import { Action } from '@ngrx/store';
import actions from  '../actions/counter';
import { from } from 'rxjs';

const initialState = 0;

export function counterReducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case actions.INCREMENT :
      return state + 1;

    case actions.DECREMENT:
      return state - 1;

    case actions.RESET:
      return 0;

    default:
      return state;
  }
}