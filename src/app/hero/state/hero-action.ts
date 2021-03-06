import { Action } from "@ngrx/store";
import { Hero } from "../model/hero";

export enum HeroActionTypes {
    ADD = '[HERO] ADD',
    VIEW = '[HERO] VIEW',
    DELETE = '[HERO] DELETE',
    EDIT = '[HERO] EDIT',
    LOADING = '[HERO] Loading Hero',
    LOADING_SUCCESS = '[HERO] Loading Success'
}

export class HeroAddAction implements Action {
    public readonly type = HeroActionTypes.ADD;
    constructor(public payload: Hero) {}
}

export class HeroViewAction implements Action {
    public readonly type = HeroActionTypes.VIEW;
    constructor() {}
}

export class HeroDeleteAction implements Action {
    public readonly type = HeroActionTypes.DELETE;
    constructor(public payload: Hero) {}
}

export class HeroEditAction implements Action {
    public readonly type = HeroActionTypes.EDIT;
    constructor(public payload: Hero) {}
}

export class HeroLoadingAction implements Action {
    readonly type = HeroActionTypes.LOADING
}

export class HeroLoadingSuccessAction implements Action {
    readonly type = HeroActionTypes.LOADING_SUCCESS
    constructor(public payload: Hero[]) {}
}

export type HeroActions = HeroAddAction | HeroViewAction | HeroDeleteAction | HeroEditAction | HeroLoadingAction | HeroLoadingSuccessAction;