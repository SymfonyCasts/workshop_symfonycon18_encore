module.exports = class {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    printNameLater() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(this.name);
                resolve();
            }, 500);
        });
    }
};
