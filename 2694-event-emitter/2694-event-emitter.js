class EventEmitter {

    constructor() {
        this.events = {};   
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {

        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                const arr = this.events[eventName];
                if (!arr) return;

                const index = arr.indexOf(callback);
                if (index !== -1) arr.splice(index, 1);

                return undefined;
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {

        if (!this.events[eventName]) return [];

        const results = [];

        for (const cb of this.events[eventName]) {
            results.push(cb(...args));
        }

        return results;
    }
}
