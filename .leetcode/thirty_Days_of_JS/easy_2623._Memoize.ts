type Fn2 = (...params: number[]) => number;

function memoize(fn: Fn2): Fn2 {
    const cache = new Map<string, number>();
    // console.log('cache1', cache);
    return function(...args) {
        const key = args.toString();
        // console.log('cache2', cache);
        // console.log(cache.has(key));
        if (cache.has(key)) {
            return cache.get(key)!;
        } else {
            const result = fn(...args);
            cache.set(key, result);
        //   console.log('cache3', cache);
            return result;
        }
    }
}

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//     callCount += 1;
//     return a + b;
// })

// console.log(memoizedFn(2, 3)) // 5, 1
// console.log(memoizedFn(2, 3)) // 5
// console.log(memoizedFn(3, 3)) // 6, 2
// console.log(memoizedFn(1, 5)) // 6, 3
// console.log(memoizedFn(3, 2)) // 6, 4
// console.log(memoizedFn(1, 5)) // 6
// console.log('callCount', callCount) // 4