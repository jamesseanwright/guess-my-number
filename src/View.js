export default class View {
    constructor(rootViewSelector) {
        this._init(rootViewSelector);
    }

    _init(rootViewSelector) {
        const viewRoot = document.querySelector(rootViewSelector);

        this.modifier = viewRoot.querySelector('.game-view__modifier');
        this.currentGuess = viewRoot.querySelector('.game-view__current-guess');
        this.yesButton = viewRoot.querySelector('.game-view__button--yes');
        this.noButton = viewRoot.querySelector('.game-view__button--no');
    }
}