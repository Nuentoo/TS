function sleep(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis))
}

// async function(millis: number): Promise<void> {
//     return await new Promise(resolve => setTimeout(resolve, millis)) // async ver
// }

// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100