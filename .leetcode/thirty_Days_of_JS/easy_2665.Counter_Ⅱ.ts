interface Counter {
    increment: () => number;
    reset: () => number;
    decrement: () => number;
}

var createCounter = (init: number): Counter => {
    let value = init;
    return {
        increment: () => ++value,
        reset: () => (value = init),  // value = init; return value; のショートハンド
        decrement: () => --value
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */