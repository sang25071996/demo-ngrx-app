import { Hero } from "../model/hero";
import { HeroActions, HeroActionTypes } from './hero-action';


export interface HeroState {
    heros: Hero[]
}

const initHeroState: HeroState = {
    heros: [
        {
            id: 1,
            name: 'sang'
        },
        {
            id: 2,
            name: 'huyen'
        }
    ]
}

export function HeroReduce(state: HeroState = initHeroState, action: HeroActions): HeroState {
    switch(action.type) {
        
        case HeroActionTypes.ADD:
            const payload = action.payload;
            const heros = [...state.heros, payload];
            return { heros: heros };
        case HeroActionTypes.DELETE:
            const index = state.heros.findIndex(item => item.id == action.payload.id);
            state.heros.splice(index, 1);
            return state;
        default:
            return state;
    }
}