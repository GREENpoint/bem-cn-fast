'use strict';

/**
 * BEM class name factory.
 *
 * @typedef {Function} BemCn
 * @param {String|Object} [elementOrMods] Element name or hash object with mods
 * @param {Object} [mods] Hash object with mods
 * @returns {String}
 */

/**
 * Returns BEM class name factory.
 *
 * @param {String} componentName Block name
 * @param {Object} [customDelimeters={}] Custom delimiters
 * @returns {BemCn}
 */
module.exports = function bem(componentName, customDelimiters = {}) {

    const defaultDelimiters = {
        el: '__',
        mod: '_',
        modValue: '_'
    };

    const delimiters = Object.assign({}, defaultDelimiters, customDelimiters);

    return function (elementOrMods, mods) {       

        if (!elementOrMods) {
            return componentName;
        }

        var element;

        if (typeof elementOrMods === 'string') {
            element = elementOrMods;
        } else {
            mods = elementOrMods;
        }

        if (process.env.NODE_ENV !== 'production') {
            if (element && typeof element !== 'string') {
                throw new Error('You must provide `element` as string');
            }

            if (mods && typeof mods !== 'object') {
                throw new Error('You must provide `mods` as plain object');
            }
        }

        var base = componentName;
        if (element) {
            base += delimiters['el'] + element;
        }

        return base + (
            mods
                ? Object.keys(mods).reduce(function (result, name) {
                    var value = mods[name];

                    if (value) {
                        result += ' ' + (
                            typeof value === 'boolean'
                                ? (base + delimiters['mod'] + name)
                                : (base + delimiters['mod'] + name + delimiters['modValue'] + value)
                        );
                    }

                    return result;
                }, '')
                : ''
        );
    };
}
