class Variable {
    constructor (value, kind) {
        this.value = value;
        this.kind = kind;
    }

    get () {
        return this.value;
    }

    set (newVal) {
        this.value = newVal;
    }
}

class Scope {
    constructor(type, parentScope) {
        this.type = type;
        this.parentScope = parentScope;
        this.vo = Object.create(null);
    }

    get(label) {
        if (this.vo[label]) {
            return this.vo[label];
        } else if (this.parentScope) {
            return this.parentScope.get(label);
        } else if (this.globalScope[label]) {
            return this.globalScope[label];
        }

        throw new ReferenceError(`${label} 没有定义`);
    }

    set(label, value) {
        if (this.vo[label]) {
            this.vo[label] = value;
        } else if (this.parentScope) {
            this.parentScope.set(label, value);
        } else if (this.globalScope[label]) {
            this.globalScope.set(label, value);
        } else {
            throw new ReferenceError(`${label} 没有定义`);
        }
    }

    addDeclare(label, value, kind) {
        this.vo[label] = new Variable(value, kind);
    }
}