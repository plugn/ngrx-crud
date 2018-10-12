import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import actions from  './actions/counter';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch({ type: actions.INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: actions.DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: actions.RESET });
  }  
}
