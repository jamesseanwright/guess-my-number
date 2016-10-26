'use strict';

import { getNumber } from '../src/reducer';

describe('the reducer tests', function () {
    describe('the getNumber function', function () {
        it('should return the current guess incremented by one if the guess is correct, the guess is for a min value, and the update type is min', function () {
            const currentGuess = {
                isHigher: true,
                number: 1
            };

            const isCorrectGuess = true;
            const isMinUpdate = true;
            const expectedNumber = 2;
            const actualNumber = getNumber(currentGuess, isCorrectGuess, isMinUpdate);

            expect(actualNumber).to.equal(expectedNumber);
        });

        it('should return the current guess if the guess is incorrect, the guess is for a max value, and the update type is min', function () {
            const currentGuess = {
                isHigher: false,
                number: 1
            };

            const isCorrectGuess = false;
            const isMinUpdate = true;
            const expectedNumber = 1;
            const actualNumber = getNumber(currentGuess, isCorrectGuess, isMinUpdate);

            expect(actualNumber).to.equal(expectedNumber);
        });

        it('should return the current guess decremented by one if the guess is correct, the guess is for a max value, and the update type is max', function () {
            const currentGuess = {
                isHigher: false,
                number: 1
            };

            const isCorrectGuess = true;
            const isMinUpdate = false;
            const expectedNumber = 0;
            const actualNumber = getNumber(currentGuess, isCorrectGuess, isMinUpdate);

            expect(actualNumber).to.equal(expectedNumber);
        });

        it('should return the current guess if the guess is incorrect, the guess is for a min value, and the update type is max', function () {
            const currentGuess = {
                isHigher: true,
                number: 1
            };

            const isCorrectGuess = false;
            const isMinUpdate = false;
            const expectedNumber = 1;
            const actualNumber = getNumber(currentGuess, isCorrectGuess, isMinUpdate);

            expect(actualNumber).to.equal(expectedNumber);
        });
    });
});