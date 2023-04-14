const GenerateID = (function () {
    /**
     * @returns {number}
     */
    function* getNumberID(): Generator<number> {
        let count = 1;

        while (true) {
            yield count++;
        }
    }

    /**
     * @param  {Array} sourceArr=[] - array to check if it has objects or not.
     */
    function isArrayNotEmpty(sourceArr: Array<object> = []) {
        return sourceArr.length !== 0;
    }

    /**
     * @param  {Array} dataArr=[] - array has objects and insert IDs into each one.
     */
    function insertIDIntoData(dataArr: Array<object> = []) {
        if (isArrayNotEmpty(dataArr)) {
            const counter = getNumberID();

            dataArr.forEach((row) => {
                if (typeof row === "object") {
                    if (Object.prototype.hasOwnProperty.call(row, "id")) {
                        Object.defineProperty(row, "id", {
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
        insert: insertIDIntoData,
    };
})();

export default GenerateID.insert;
