class TimeLimitedCache {
    cache: Map<number, [number, NodeJS.Timeout]>;
    constructor() {
        this.cache = new Map();
    }

    set(key: number, value: number, duration: number): boolean {
        const isCache = this.cache.has(key);
        if (isCache) {
            const [, timeoutID] = this.cache.get(key);
            clearTimeout(timeoutID);
        }
        const timeoutID = setTimeout(() => this.cache.delete(key), duration);
        this.cache.set(key, [value, timeoutID]);
        return isCache;
    }

    get(key: number): number {
        const isCache = this.cache.has(key);
        return isCache ? this.cache.get(key)[0] : -1;
    }

    count(): number {
        return this.cache.size;
    }
}

const timeLimitedCache = new TimeLimitedCache();

(async() => {
    const timeLimitedCache = new TimeLimitedCache();
    await new Promise((res) => setTimeout(() => {
        console.log('set2', timeLimitedCache.set(1, 42, 50)); // false
        res();
    }, 0));
    await new Promise((res) => setTimeout(() => {
        console.log('set2', timeLimitedCache.set(1, 50, 100)); // true
        res();
    }, 40));
    await new Promise((res) => setTimeout(() => {
        console.log('get2', timeLimitedCache.get(1)); // 50
        res();
    }, 10));
    await new Promise((res) => setTimeout(() => {
        console.log('get2', timeLimitedCache.get(1)); // 50
        res();
    }, 70));
    await new Promise((res) => setTimeout(() => {
        console.log('get2', timeLimitedCache.get(1)); // -1
        res();
    }, 80));
    await new Promise((res) => setTimeout(() => {
        console.log('count2', timeLimitedCache.count());// 0
        res();
    }, 50));
})();