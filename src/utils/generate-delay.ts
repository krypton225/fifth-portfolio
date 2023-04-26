const Delay = (function () {
    function* getNumberID(start?: number): Generator<number> {
        if (start) {
            if (start < 0 && start > 3000) {
                throw new Error("start must be number type.");
            }

            let increase: number = start;

            // * Yield the value of start in the first. After that yield the increase values.
            yield start;

            while (true) {
                yield (increase += 100);
            }
        }
    }

    /**
     * @param  {Array} targetArray=[] - array to check if it has objects or not.
     */
    function isArrayNotEmpty(targetArray: Array<object> = []): boolean {
        return targetArray.length !== 0;
    }

    /**
     * @param  {Array} dataArr=[] - array has objects and insert delayAnimation into each one.
     */
    // prettier-ignore
    function generateNumber(dataArr: Array<object> = [], startFrom: number): void {
        if (isArrayNotEmpty(dataArr)) {
            const counter: Generator<number> = getNumberID(startFrom);

            dataArr.forEach((row) :void => {
                if (typeof row === "object") {
                    if (!row.hasOwnProperty("delayAnimation")) { // eslint-disable-line
                        Object.defineProperty(row, "delayAnimation", {
                            value: counter.next().value,
                            writable: false,
                            enumerable: true,
                        });
                    }
                } else {
                    throw new Error(`Array must contain only object.`);
                }
            });
        } else {
            throw new Error("Array must not be empty of objects.");
        }
    }

    return {
        generate: generateNumber,
    };
})();

export default Delay;
