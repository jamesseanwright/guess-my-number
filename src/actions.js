export const RESPOND_TO_GUESS = 'RESPOND_TO_GUESS';

export function respondToGuess(isGuessCorrect) {
    return {
        type: RESPOND_TO_GUESS,
        isGuessCorrect
    };
}