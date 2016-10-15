import { UPDATE_MIN, UPDATE_MAX } from './actions';

const MIN_NUMBER = 0;
const MAX_NUMBER = 1000;

const initialState = {
    minNumber: MIN_NUMBER,
    maxNumber: MAX_NUMBER,
    currentGuess: Math.round(MIN_NUMBER + Math.random() * (MAX_NUMBER - MIN_NUMBER))
};

function computeCurrentGuess(min, max) {
    return Math.round((max - min / 2));
}

export default function reducer(state = initialState, action) {
    let minNumber;
    let maxNumber;

    switch (action.type) {
        case UPDATE_MIN:
            minNumber = state.currentGuess + 1;

            return Object.assign({}, state, {
                minNumber,
                currentGuess: computeCurrentGuess(minNumber, state.maxNumber)
            });

        case UPDATE_MAX:
            maxNumber = state.currentGuess - 1;

            return Object.assign({}, state, {
                maxNumber,
                currentGuess: computeCurrentGuess(state.minNumber, maxNumber)
            });

        default:
            return state;
    }
}