import { RESPOND_TO_GUESS } from './actions';
import { ASKING, GUESSING } from './gameStates';

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

const initialState = {
    gameState: ASKING,
    minNumber: MIN_NUMBER,
    maxNumber: MAX_NUMBER,
    guessesRemaining: Math.ceil(Math.log2(MAX_NUMBER - MIN_NUMBER)) + 1,

    currentGuess: {
        number: Math.round(MIN_NUMBER + Math.random() * (MAX_NUMBER - MIN_NUMBER)),
        isHigher: !!Math.round(Math.random())
    }
};

function computeCurrentGuess(min, max) {
    const number = Math.round(min + Math.random() * (max - min));

    return {
        number,
        isHigher: number < (max - min) / 2
    };
}

function getMinNumber(isCorrectGuess, state) {
    const { currentGuess, minNumber } = state;
    const shouldUpdate = isCorrectGuess && currentGuess.isHigher || !isCorrectGuess && !currentGuess.isHigher;

    return shouldUpdate ? currentGuess.number + 1 : minNumber;
}

function getMaxNumber(isCorrectGuess, state) {
    const { currentGuess, maxNumber } = state;
    const shouldUpdate = isCorrectGuess && !currentGuess.isHigher || !isCorrectGuess && currentGuess.isHigher;

    return shouldUpdate ? currentGuess.number - 1 : maxNumber;
}

export default function reducer(state = initialState, action) {
    let minNumber;
    let maxNumber;
    let guessesRemaining;

    switch (action.type) {
        case RESPOND_TO_GUESS:
            minNumber = getMinNumber(action.isCorrectGuess, state);
            maxNumber = getMaxNumber(action.isCorrectGuess, state);
            guessesRemaining = state.guessesRemaining - 1;

            return Object.assign({
                gameState: minNumber === maxNumber || !guessesRemaining ? GUESSING : ASKING,
                minNumber,
                maxNumber,
                guessesRemaining,
                currentGuess: computeCurrentGuess(minNumber, maxNumber)
            });

        default:
            return state;
    }
}