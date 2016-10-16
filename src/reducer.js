import { RESPOND_TO_GUESS } from './actions';

const MIN_NUMBER = 0;
const MAX_NUMBER = 1000;

const initialState = {
    minNumber: MIN_NUMBER,
    maxNumber: MAX_NUMBER,

    currentGuess: {
        number: Math.round(MIN_NUMBER + Math.random() * (MAX_NUMBER - MIN_NUMBER)),
        isHigher: !!Math.round(Math.random())
    }
};

function computeCurrentGuess(min, max) {
    return {
        number: Math.round((max - min / 2)),
        isHigher: !!Math.round(Math.random())
    };
}

function getMinNumber(isCorrectGuess, state) {
    const { currentGuess, minNumber } = state;

    return isCorrectGuess && currentGuess.isHigher ? currentGuess.number + 1 : minNumber;
}

function getMaxNumber(isCorrectGuess, state) {
    const { currentGuess, maxNumber } = state;

    return isCorrectGuess && !currentGuess.isHigher ? currentGuess.number - 1 : maxNumber;
}

export default function reducer(state = initialState, action) {
    let minNumber;
    let maxNumber;

    switch (action.type) {
        case RESPOND_TO_GUESS:
            minNumber = getMinNumber(action.isCorrectGuess, state);
            maxNumber = getMaxNumber(action.isCorrectGuess, state);

            return Object.assign({
                minNumber,
                maxNumber,
                currentGuess: computeCurrentGuess(minNumber, maxNumber)
            });

        default:
            return state;
    }
}