import { HeroDeleteAction, HeroLoadingAction } from './../state/hero-action';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';
import { AppState } from '../store';
import { getHeros } from '../selector/hero.selector';
import { HeroAddAction } from '../state/hero-action';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {

  subject$ = new BehaviorSubject<Hero[]>([]);
  heroSubject$: Observable<Hero[]> = this.store.pipe(select(getHeros));

  constructor(private store: Store<AppState>) { }

   ngOnInit() {
    this.store.dispatch(new HeroLoadingAction());
  }

  addHero() {
    this.store.dispatch(new HeroAddAction({id: 3, name: 'machine'}))
  }

  deletetHero() {
    this.store.dispatch(new HeroDeleteAction({id: 2, name: 'huyen'}));
  }

  ngOnDestroy(): void {
    this.subject$.next([]);
    this.subject$.unsubscribe();
  }
}
