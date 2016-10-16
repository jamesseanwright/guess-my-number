import { respondToGuess } from './actions';
import { ASKING } from './gameStates';

const HIGHER_LABEL = 'higher than ';
const LOWER_LABEL = 'lower than ';

export default function initContainer(dispatch, getState, view) {
    view.onYesClick = () => dispatch(respondToGuess(true));
    view.onNoClick = () => dispatch(respondToGuess(false));

    return function update() {
        console.log(JSON.stringify(getState(), null, 4));
        const { currentGuess, guessesRemaining, gameState } = getState();
        const { number, isHigher } = currentGuess;

        view.guessesRemaining = guessesRemaining;
        view.currentGuess = number;

        if (gameState === ASKING) {
            view.modifier = isHigher ? HIGHER_LABEL : LOWER_LABEL;
        } else {
            view.modifier = '';
        }
    };
}