import { INCREMENT_COUNT, DECREMENT_COUNT } from './counterActionTypes';

export const incrementCount = () => {
    return {
        type : INCREMENT_COUNT,
    }
}

export const decrementCount = () => {
    return {
        type : DECREMENT_COUNT,
    }
}