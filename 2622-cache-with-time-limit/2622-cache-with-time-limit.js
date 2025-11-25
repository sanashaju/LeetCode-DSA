var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const existing = this.cache.get(key);

    let existedAndNotExpired = false;

    if (existing && existing.expireTime > now) {
        existedAndNotExpired = true;
        clearTimeout(existing.timeoutId); 
    }

    const timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, {
        value,
        expireTime: now + duration,
        timeoutId
    });

    return existedAndNotExpired;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    const entry = this.cache.get(key);

    if (!entry || entry.expireTime <= now) {
        return -1;
    }

    return entry.value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let active = 0;

    for (const entry of this.cache.values()) {
        if (entry.expireTime > now) active++;
    }

    return active;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
