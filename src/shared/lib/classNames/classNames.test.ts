import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    })
    test('with two params', () => {
        expect(classNames('someClass', {}, ['addClass'])).toBe('someClass addClass');
    })
    test('with mods', () => {
        const expected = 'someClass addClass hovered';
        expect(classNames('someClass', { hovered: true }, ['addClass'])).toBe(expected);
    })
});
