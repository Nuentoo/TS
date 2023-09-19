type Fn = (result: number, num: number) => number;

var reduce = function (nums: number[], fn: Fn, init: number): number {
    let result = init;
    for (const num of nums) {
        result = fn(result, num);
    }
    return result;
}

// const reduce = (nums: number[], fn: Fn, init: number): number => nums.reduce(fn, init);

// nums1 = [1,2,3,4];
// fn1 = function sum(accum, curr) { return accum + curr; };
// init1 = 0
// console.log(reduce(nums1, fn1, init1)); // 10

// nums2 = [1,2,3,4];
// fn2 = function sum(accum, curr) { return accum + curr * curr; };
// init2 = 100;
// console.log(reduce(nums2, fn2, init2)); // 130

// nums3 = [];
// fn3 = function sum(accum, curr) { return 0; };
// init3 = 25;
// console.log(reduce(nums3, fn3, init3)); // 25