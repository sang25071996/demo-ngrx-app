import { HeroDeleteAction } from './../state/hero-action';
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

  constructor(private heroService: HeroService, private store: Store<AppState>) { }

   ngOnInit() {
    this.heroService.getHeros().pipe(takeUntil(this.subject$)).subscribe(resp => {
      this.subject$.next(resp);
    });
    this.heroSubject$.subscribe(resp => {
      console.log(resp);
    })
    this.handleOuput();
  }

  addHero() {
    this.store.dispatch(new HeroAddAction({id: 3, name: 'machine'}))
  }

  deletetHero() {
    this.store.dispatch(new HeroDeleteAction({id: 2, name: 'huyen'}));
  }

  handleOuput() {
    this.subject$.subscribe(resp => {
      console.log(resp);
    })
  }

  ngOnDestroy(): void {
    this.subject$.next([]);
    this.subject$.unsubscribe();
  }
}
