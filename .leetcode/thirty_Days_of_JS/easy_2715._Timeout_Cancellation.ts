type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
	const setTimeoutID = setTimeout(fn, t, ...args);
    return () => clearTimeout(setTimeoutID);
};

// const result = []

// const fn = (x1, x2) => x1 * x2

// const args = [2, 4], t = 30, cancelT = 50 // input

// const start = performance.now()

// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({"time": diff, "returned": fn(...argsArr)})
// }

// const cancel = cancellable(log, args, t);

// const maxT = Math.max(t, cancelT)

// setTimeout(() => {
//    cancel()  // クロージャ
// }, cancelT)

// setTimeout(() => {
//    console.log(result) // [{"time": 30, "returned": 8}]
// }, maxT + 15)