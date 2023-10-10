type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
	return async function(...args) {
        const res = fn(...args);
        const rej = new Promise((_, rej) => setTimeout(rej, t, 'Time Limit Exceeded'));
        return await Promise.race([res, rej])
    }
};

// let fn = async (n) => { 
//     await new Promise(res => setTimeout(res, 100));
//     return n * n;
// }
// let inputs = [5]
// let t = 50
// const limited = timeLimit(fn, t)
// const start = performance.now()
// let result;
// (async() => {
// try {
//     const res = await limited(...inputs)
//     result = {"resolved": res, "time": Math.floor(performance.now() - start)};
// } catch (err) {
//     result = {"rejected": err, "time": Math.floor(performance.now() - start)};
// }
// console.log(result) // Output
// })()