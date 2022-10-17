export class TreeNode<E>{
    public data :E;
    public left : TreeNode<E>
    public right : TreeNode<E>

    constructor(data: E) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
