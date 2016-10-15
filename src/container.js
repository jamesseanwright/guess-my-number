import { updateMin, updateMax } from './actions';

export default function initContainer(dispatch, getState, view) {
    view.onYesClick = () => dispatch(updateMin());
    view.onNoClick = () => dispatch(updateMax());

    return function onStateUpdated() {
        const state = getState();
        view.modifier = state.modifier;
        view.currentGuess = state.currentGuess;
    };
}