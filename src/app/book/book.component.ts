import { AppState } from './../hero/store/index';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { getHeros } from '../hero/selector/hero.selector';
import { Hero } from '../hero/model/hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {


  heroSubject$: Observable<Hero[]> = this.store.pipe(select(getHeros));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log('aaaaaaa');
    this.heroSubject$.subscribe(resp => {
      console.log(resp);
    })
  }

  ngOnDestroy(): void {
    
  }

}
