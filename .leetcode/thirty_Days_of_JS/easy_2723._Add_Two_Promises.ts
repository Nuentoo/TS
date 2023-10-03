type P = Promise<number>

async function addTwoPromises(...args: P[]): P {
    try {
        const result = await Promise.all(args);
        return result.reduce((a, b) => a + b);
    } catch(e) {
        return e;  // catchのeは１番最初にrejectした値のみ
    }
};

// function addTwoPromises(...args: P[]): P {
//     return Promise.all(args).then((arr) => arr.reduce((a, b) => a + b)).catch((e) => e);  // catchのeは１番最初にrejectした値のみ
// };

// const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(5), 3000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve(7), 5000));
// const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve(2), 1000));

// addTwoPromises(promise1, promise2, promise3)
//   .then(console.log); // 14