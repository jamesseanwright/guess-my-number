import { respondToGuess } from './actions';

const HIGHER_LABEL = 'higher';
const LOWER_LABEL = 'lower';

export default function initContainer(dispatch, getState, view) {
    view.onYesClick = () => dispatch(respondToGuess(true));
    view.onNoClick = () => dispatch(respondToGuess(false));

    return function update() {
        console.log(getState());
        const { currentGuess } = getState();
        const { number, isHigher } = currentGuess;

        view.modifier = isHigher ? HIGHER_LABEL : LOWER_LABEL;
        view.currentGuess = number;
    };
}