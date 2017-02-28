'use strict';

const bem = require('./index');
const expect = require('chai').expect;

describe('bem-cn', function () {
    it('should return block css-class without arguments', function () {
        var b = bem('block-name');
        expect(b()).to.be.equal('block-name');
    });

    it('should return element css-class with `element` argument', function () {
        var b = bem('block-name');
        expect(b('element-name')).to.be.equal('block-name__element-name');
    });

    it('should return block with mod css-class with `mods` argument', function () {
        var b = bem('block-name');
        expect(b({
            'some-mod': 'visible'
        })).to.be.equal('block-name block-name_some-mod_visible');
    });

    it('should return block with mod css-class with `mods` argument (Boolean mod)', function () {
        var b = bem('block-name');
        expect(b({
            'some-mod': true
        })).to.be.equal('block-name block-name_some-mod');
    });

    it('should return block without mod css-class with `mods` argument and empty mods values', function () {
        var b = bem('block-name');
        expect(b({
            'some-mod': false,
            'some-mode2': undefined,
            'some-mode3': null,
            'some-mode4': 0
        })).to.be.equal('block-name');
    });

    it('should return element with mods css-classes with `element` and `mods` arguments', function () {
        var b = bem('block-name');
        expect(b(
            'element-name',
            {
                'some-mod': 'visible',
                'some-mod2': true
            }
        )).to.be.equal(
            'block-name__element-name block-name__element-name_some-mod_visible block-name__element-name_some-mod2'
        );
    });
});
