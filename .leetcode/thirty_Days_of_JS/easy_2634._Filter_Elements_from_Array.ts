type Fn = (number: number, index: number) => boolean | number | undefined;

var filter = function(arr: number[], fn: Fn) {
    let result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i],i)) result.push(arr[i]);
    }
    return result;
};

// const filter = (arr: number[], fn: Fn): number[] => arr.filter(fn);

// arr1 = [0,10,20,30];
// fn1 = function greaterThan10(n) { return n > 10; };
// newArray1 = filter(arr1, fn1);
// console.log(newArray1);  // [20, 30]

// arr2 = [1,2,3];
// fn2 = function firstIndex(n, i) { return i === 0; };
// newArray2 = filter(arr2, fn2);
// console.log(newArray2);  // [1]

// arr3 = [-2,-1,0,1,2];
// fn3 = function plusOne(n) { return n + 1 };
// newArray3 = filter(arr3, fn3);
// console.log(newArray3);  // [-2,0,1,2]