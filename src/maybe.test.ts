import { Maybe, Nothing, Just } from './maybe';
import { describe, expect, test } from 'vitest';
describe('Maybe', () => {
    test('should create a Nothing instance', () => {
        const nothing = Nothing<number>();
        expect(nothing.IsNothing()).toBe(true);
        expect(nothing.IsJust()).toBe(false);
    });

    test('should create a Just instance with a value', () => {
        const value = 42;
        const just = Just(value);
        expect(just.IsJust()).toBe(true);
        expect(just.IsNothing()).toBe(false);
        expect(just.FromJust()).toBe(value);
    });

    test('should throw an error when accessing FromJust on a Nothing instance', () => {
        expect(() => Nothing<number>().FromJust()).toThrowError("Maybe: Attempted to access value of Nothing");
    });

    test('should resolve FromMaybe to value when instance is Just and to default value when instance is Nothing', () => {
        const defaultValue = 99;
        expect(Nothing<number>().FromMaybe(defaultValue)).toBe(defaultValue);
        expect(Just(42).FromMaybe(defaultValue)).toBe(42);
    });

    test('should set value in output object using To method when instance is Just', () => {
        const value = 42;
        const just = Just(value);
        // const out: { value?: number } = {};
        const out: Maybe<number> = Nothing<number>();
        expect(out.IsNothing()).toBe(true);
        expect(just.To(out)).toBe(true);
        expect(out.IsNothing()).toBe(false);
        expect(out.FromJust()).toBe(value);
    });

    test('should not set value in output object using To method when instance is Nothing', () => {
        const out: Maybe<number> = Just(42);
        expect(out.IsNothing()).toBe(false);
        expect(Nothing<number>().To(out)).toBe(false);
        expect(out.IsNothing()).toBe(false);
        expect(Just(43).To(out)).toBe(true);
        expect(out.IsNothing()).toBe(false);
        expect(out.FromJust()).toBe(43);

    });

    test('should return true for equals when both instances are Just with same value', () => {
        const value = 42;
        const just1 = Just(value);
        const just2 = Just(value);
        expect(just1.equals(just2)).toBe(true);
        expect(Just(43).equals(Just(43))).toBe(true);
    });

    test('should return false for equals when one instance is Just and the other is Nothing', () => {
        const just = Just(42);
        const nothing = Nothing<number>();
        expect(just.equals(nothing)).toBe(false);
    });

    test('should return true for notEquals when one instance is Just and the other is Nothing', () => {
        const just = Just(42);
        const nothing = Nothing<number>();
        expect(just.notEquals(nothing)).toBe(true);
    });

    test('should throw an error when Check is called on a Nothing instance', () => {
        const nothing = Nothing<number>();
        expect(() => nothing.Check()).toThrowError("Maybe: Attempted to access value of Nothing");
    });

    test('should not throw an error when Check is called on a Just instance', () => {
        const just = Just(42);
        expect(() => just.Check()).not.toThrow();
    });

    test('should return the value from ToChecked when instance is Just', () => {
        const value = 42;
        const just = Just(value);
        expect(just.ToChecked()).toBe(value);
    });

    test('should throw an error from ToChecked when instance is Nothing', () => {
        const nothing = Nothing<number>();
        expect(() => nothing.ToChecked()).toThrowError("Maybe: Attempted to access value of Nothing");
    });

    test('should return properly', () => {
        type Person = { name: string, age: number };
        const maybePerson: (just: boolean) => Maybe<Person> = (just: boolean) => just ? Just<Person>({ name: 'John', age: 42 }) : Nothing();
        expect(maybePerson(true).ToChecked()).toEqual({ name: 'John', age: 42 });
        expect(() => maybePerson(false).ToChecked()).toThrowError("Maybe: Attempted to access value of Nothing");

    });
});
