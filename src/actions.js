export const RESPOND_TO_GUESS = 'RESPOND_TO_GUESS';

export function respondToGuess(isCorrectGuess) {
    return {
        type: RESPOND_TO_GUESS,
        isCorrectGuess
    };
}