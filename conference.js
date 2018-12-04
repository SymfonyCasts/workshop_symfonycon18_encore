module.exports = class {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    printNameLater() {
        setTimeout(function() {
            console.log(this.name);
        }, 500);
    }
};
