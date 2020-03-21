/**
 * Exposes functions for random functions.
 */
var Randomizer = Randomizer || {};

/**
 * @class Randomizer
 * @singleton
 */
(function () {
    /**
     * 
     * @param {mixed[]} list Selects a random element from the list. Uses the `Math.random()` function for the RNG.
     */
    function list (list) {
        if (!(list instanceof Array)) {
            throw new TypeError('An instance of Array is expected!');
        }

        var min = 0;
        var max = list.length - 1;

        return list[getRandomInt(min, max)];
    }

    /**
     * Returns a random number between `min` and `max`. Includes `min` and `max`.
     * @param {Number} min Lower bound
     * @param {Number} max Upper bound
     */
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    Randomizer.list = list;
    Randomizer.getRandomInt = getRandomInt;
})()