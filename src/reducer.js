import { RESPOND_TO_GUESS } from './actions';
import { ASKING, GUESSING } from './gameStates';

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;
const MIN_TYPE = 'min';
const MAX_TYPE = 'max';

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

function getNumber(currentGuess, number, isCorrectGuess, type) {
    const shouldApplyModifier = type === MIN_TYPE ? currentGuess.isHigher : !currentGuess.isHigher;
    const isExclusiveUpdate = isCorrectGuess && shouldApplyModifier;
    const isInclusiveUpdate = !isCorrectGuess && !shouldApplyModifier;
    const exclusiveModifier = type === MIN_TYPE ? 1 : -1;

    let updatedNumber = number;

    if (isExclusiveUpdate) {
        updatedNumber = currentGuess.number + exclusiveModifier;
    } else if (isInclusiveUpdate) {
        updatedNumber = currentGuess.number;
    }

    return updatedNumber;
}

export default function reducer(state = initialState, action) {
    let minNumber;
    let maxNumber;
    let guessesRemaining;

    switch (action.type) {
        case RESPOND_TO_GUESS:
            minNumber = getNumber(state.currentGuess, state.minNumber, action.isCorrectGuess, MIN_TYPE);
            maxNumber = getNumber(state.currentGuess, state.maxNumber, action.isCorrectGuess, MAX_TYPE);
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