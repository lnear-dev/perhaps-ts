// Internal API for Maybe type
const api_internal = {
    /**
     * Throws an error indicating an attempt to access the value of a Nothing instance.
     * @throws {Error} Throws an error with a specific message.
     */
    FromJustIsNothing(): void {
        throw new Error("Maybe: Attempted to access value of Nothing");
    }
};

/**
 * A class representing an optional value (Maybe type).
 * Can either be a Just (having a value) or a Nothing (no value).
 */
export class Maybe<T> {
    /**
     * Constructs a Maybe instance.
     * @param hasValue - Indicates whether the instance has a value.
     * @param value - The value contained in the Maybe instance (if any).
     */
    private constructor(
        private hasValue: boolean,
        private value?: T
    ) { }

    /**
     * Checks if the Maybe instance is Nothing (has no value).
     * @returns {boolean} True if the instance is Nothing, otherwise false.
     */
    IsNothing(): boolean {
        return !this.hasValue;
    }

    /**
     * Checks if the Maybe instance is Just (has a value).
     * @returns {boolean} True if the instance is Just, otherwise false.
     */
    IsJust(): boolean {
        return this.hasValue;
    }

    /**
     * Creates a Maybe instance representing Nothing.
     * @returns {Maybe<T>} A Maybe instance with no value.
     */
    static Nothing<T>(): Maybe<T> {
        return new Maybe<T>(false);
    }

    /**
     * Creates a Maybe instance representing Just with a given value.
     * @param value - The value to be contained in the Maybe instance.
     * @returns {Maybe<T>} A Maybe instance with the provided value.
     */
    static Just<T>(value: T): Maybe<T> {
        return new Maybe<T>(true, value);
    }

    /**
     * Retrieves the value of a Just instance or throws an error if it's Nothing.
     * Alias for FromJust method.
     * @returns {T} The value contained in the Just instance.
     * @throws {Error} If the instance is Nothing.
     */
    ToChecked(): T {
        return this.FromJust();
    }

    /**
     * Checks if the Maybe instance is Nothing and throws an error if it is.
     * @throws {Error} If the instance is Nothing.
     */
    Check(): void {
        if (this.IsNothing()) api_internal.FromJustIsNothing();
    }

    /**
     * Retrieves the value of a Just instance and sets it in the provided output object.
     * @param out - An object to hold the value if the instance is Just.
     * @param key - The key to use when setting the value in the output object.
     * @returns {boolean} True if the instance is Just, otherwise false.
     */
    To(out: { [key: string]: T }, key: string = 'value'): boolean {
        if (this.IsNothing()) return false;
        (out as any)[key] = this.value;
        return true;
    }

    /**
     * Retrieves the value of a Just instance or throws an error if it's Nothing.
     * @returns {T} The value contained in the Just instance.
     * @throws {Error} If the instance is Nothing.
     */
    FromJust(): T {
        if (this.IsNothing()) api_internal.FromJustIsNothing();
        return this.value as T;
    }

    /**
     * Retrieves the value of a Just instance or returns a default value if it's Nothing.
     * @param defaultValue - The default value to return if the instance is Nothing.
     * @returns {T} The value of the instance if it's Just, otherwise the default value.
     */
    FromMaybe(defaultValue: T): T {
        return this.hasValue ? this.value as T : defaultValue;
    }

    /**
     * Compares two Maybe instances for equality.
     * @param other - Another Maybe instance to compare with.
     * @returns {boolean} True if both instances are equal, otherwise false.
     */
    equals(other: Maybe<T>): boolean {
        return (this.IsJust() === other.IsJust()) && (!this.IsJust() || this.FromJust() === other.FromJust());
    }

    /**
     * Compares two Maybe instances for inequality.
     * @param other - Another Maybe instance to compare with.
     * @returns {boolean} True if both instances are not equal, otherwise false.
     */
    notEquals(other: Maybe<T>): boolean {
        return !this.equals(other);
    }
}

/**
 * Creates a Maybe instance representing Nothing.
 * @returns {Maybe<T>} A Maybe instance with no value.
 */
export const Nothing = Maybe.Nothing;
export type Nothing = Maybe<never>;

/**
 * Creates a Maybe instance representing Just with a given value.
 * @param value - The value to be contained in the Maybe instance.
 * @returns {Maybe<T>} A Maybe instance with the provided value.
 */
export const Just = Maybe.Just;
export type Just<T> = Maybe<T>;
