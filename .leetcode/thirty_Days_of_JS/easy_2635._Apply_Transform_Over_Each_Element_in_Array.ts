type Fn = (value: number, index: number) => number;

var map = function(arr: number[], fn: Fn): number[] {
    const result: number[] = [];
    for (const [index, val] of arr.entries()) {
        result.push(fn(val, index));
    }
    return result;
};

// const map = (arr: number[], fn: Fn): number[] => arr.map(fn);

// arr1 = [1,2,3];
// function plusone(n) { return n + 1; }
// newArray1 = map(arr1, plusone);
// console.log(newArray1); // [2,3,4]

// arr2 = [1,2,3];
// function plusI(n, i) { return n + i; }
// newArray2 = map(arr2, plusI);
// console.log(newArray2); // [1,3,5]

// arr3 = [10,20,30];
// function constant() { return 42; }
// newArray3 = map(arr3, constant);
// console.log(newArray3);  // [42,42,42]