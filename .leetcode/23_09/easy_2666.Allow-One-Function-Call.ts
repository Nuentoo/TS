type Fn = (...arg: number[]) => number | undefined;

var once = function(func: Fn): Fn {
    let isOnce = true;
    return function(...args: number[]): number | undefined {
        if (isOnce) {
            isOnce = false;
            return func(...args);
        };
    }
};

/**
 * let fn: Fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
*/