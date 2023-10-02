type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    // console.log('args', args);
    // console.log('arguments', arguments);
    // console.log('...args', ...args);
	return args.length;
};

// argumentsLength(1, 2, 3); // 3