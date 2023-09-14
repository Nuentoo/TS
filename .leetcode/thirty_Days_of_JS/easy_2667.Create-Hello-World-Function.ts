function createHelloWorld(): () => string {
	return function<T>(...args: T[]): string {
        return "Hello World"
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
