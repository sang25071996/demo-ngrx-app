import { ActionReducerMap } from "@ngrx/store";
import { HeroActions } from '../state/hero-action';
import * as fromHero from "../state/hero.reduce"

export interface AppState {
    heros: fromHero.HeroState
}

export const reducers: ActionReducerMap<AppState, HeroActions> = {
    heros: fromHero.HeroReduce
}