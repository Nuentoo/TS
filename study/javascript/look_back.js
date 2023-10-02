export function lookBack() {
  return 'look_back';
}

// コンストラクター & インスタンスメソッド --------------------------------------------------------------------------
function outerFunction　() {

    this.innerFunction1 = function () {
      console.log("内部関数1");
    }

    this.innerFunction2 = function () {
      console.log("内部関数2");
    }
  }
innerFunctions = new outerFunction();
console.log(innerFunctions);
innerFunctions.innerFunction2();

// 👆をインスタンス化しない場合 ------------------------------------------------------------------------------------
function outerFunction() {
  return {
    innerFunction1: () => {
      console.log("内部関数1");
    },
    innerFunction2: () => {
      console.log("内部関数2");
    }
  };
}
const innerFunctions = outerFunction();
console.log(innerFunctions);
innerFunctions.innerFunction2();

// クロージャ ---------------------------------------------------------------------------------------------------
const createCounter = function() {
  return function() {
      return n++;
  };
};
/**
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/

const once = function(func){
    let isOnce = true;
    return function(...args) {
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

// 引数にコールバック関数を使用でき、()なしでコールバック関数を自動的に実行するトリガーを持つインスタンスメソッド ----------------
setTimeout(callbackFn, time);
myPromise = new Promise((resolve, reject) => {
  callbackFn;
});
myPromise.then(callbackFn);
EventTarget.addEventListener('click', callbackFn);
Array.map(callbackFn);
Array.reduce(callbackFn, init);

// 関数のメモ化 + クロージャ ---------------------------------------------------------------------------------------
function memoizeEx(fn) {
  const cache = new Map(); // キャッシュ用の Map
  return function(...args) {
    const key = args.toString();  // 引数を文字列に変換してキャッシュのキーとする(toStringはあくまで一例)
    if (cache.has(key)) {
      return cache.get(key);  // キャッシュに結果があればそれを返す
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;  // キャッシュに結果がない場合は計算し、キャッシュに保存して返す
    }
  };
}