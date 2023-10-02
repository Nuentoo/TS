type F = (x: number) => number;

function compose(functions: F[]): F {
	return function(x) {
        return functions.reduceRight((acc, cur) => {
          // console.log('acc', acc);
          // console.log('cur', cur.toString());
          return cur(acc);
        }, x);
    }
};

// let fn = compose([x => x + 1, function(x){ return 2 * x }]);
// console.log('fn(4)', fn(4));  // 9

// fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
// console.log('fn(1)', fn(1));  // 1000

// fn = compose([]);
// console.log('fn(42)', fn(42));  // 42  // callbackfnは実行されない