import { AppState } from './../store/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAppState = createFeatureSelector<AppState>('heros');
export const getHeroState = createSelector(getAppState, state => state.heros);
export const getHeros = createSelector(getHeroState, state => state.heros);