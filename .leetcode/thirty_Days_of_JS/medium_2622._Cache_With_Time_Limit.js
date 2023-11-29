const TimeLimitedCache = function() {
    this.cache = new Map();
};

/**
    @param {number} key
    @param {number} value
    @param {number} duration time until expiration in ms
    @return {boolean} if un-expired key already existed
 */

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const isCache = this.cache.has(key);
    if (isCache) {
        const [, timeoutID] = this.cache.get(key);
        clearTimeout(timeoutID);
    }
    const timeoutID = setTimeout(() => this.cache.delete(key), duration);
    this.cache.set(key, [value, timeoutID]);
    return isCache;
};

/**
    @param {number} key
    @return {number} value associated with key
 */

TimeLimitedCache.prototype.get = function(key) {
    const isCache = this.cache.has(key);
    return isCache ? this.cache.get(key)[0] : -1;
};

/**
    @return {number} count of non-expired keys
 */

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

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