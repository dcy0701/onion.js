// 遍历节点
class Walker {
    constructor(node, scope) {
        this.node = node;
        this.scope = scope;
    }
    walk(node) {
        // 怎么向下遍历呢？
        const walker = new Walker(node, this.scope);
    }

    createScope(type) {
        return new Scope(type,  this,scope);
    }
}

module.exports = Walker;