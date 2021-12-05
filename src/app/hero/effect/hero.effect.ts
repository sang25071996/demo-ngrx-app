import { HeroViewAction, HeroActions, HeroActionTypes, HeroLoadingSuccessAction } from './../state/hero-action';
import { HeroService } from './../services/hero.service';

import { Injectable } from '@angular/core';
import {Actions, ofType, Effect} from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class HeroEffects {

    constructor(private actions: Actions, private heroService: HeroService) {

    }

    @Effect()
    loadingHero$ = this.actions.pipe(ofType<HeroViewAction>(HeroActionTypes.LOADING),
        mergeMap(() => this.heroService.getHeros().pipe(map(heros => new HeroLoadingSuccessAction(heros))))
    );
}