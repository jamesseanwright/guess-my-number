'use strict';

import { getNumber } from '../src/reducer';

describe('the reducer tests', function () {
    describe('the getNumber function', function () {
        it('should return the current guess incremented by one if the guess is correct and the type is min', function () {
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
    });
});