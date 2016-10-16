export default class View {
    constructor(rootViewSelector) {
        this._createBindings(rootViewSelector);
    }

    _createBindings(rootViewSelector) {
        const viewRoot = document.querySelector(rootViewSelector);

        this.bindings = new Map();
        this.bindings.set('guessesRemaining', viewRoot.querySelector('.game-view__guesses-remaining'));
        this.bindings.set('modifier', viewRoot.querySelector('.game-view__modifier'));
        this.bindings.set('currentGuess', viewRoot.querySelector('.game-view__current-guess'));
        this.bindings.set('yesButton', viewRoot.querySelector('.game-view__button--yes'));
        this.bindings.set('noButton', viewRoot.querySelector('.game-view__button--no'));
    }

    _updateBinding(name, value) {
        const element = this.bindings.get(name);
        element.textContent = value;
    }

    _updateClickBinding(name, handler) {
        const element = this.bindings.get(name);
        element.onclick = handler;
    }

    set modifier(value) {
        this._updateBinding('modifier', value);
    }

    set currentGuess(value) {
        this._updateBinding('currentGuess', value);
    }

    set guessesRemaining(value) {
        this._updateBinding('guessesRemaining', value);
    }

    set onYesClick(handler) {
        this._updateClickBinding('yesButton', handler);
    }

    set onNoClick(handler) {
        this._updateClickBinding('noButton', handler);
    }
}