const {
    Parser
} = require('acorn');
const Walker = require('./walker');

class OnionJs {
    constructor(code) {
        this.ast = Parser.parse(code);
        this.init();
    }

    init () {
        this.nodeIterator = new Walker(null, {});
    }

    execution() {
        this.nodeIterator.walk(this.ast);
    }
}

module.exports = OnionJs;