import {TreeNode} from "./nhiphan";

export interface Tree<E>{
    insert(data : E) : TreeNode<E>;
    inorder(node : TreeNode<E>);
    getsize() : number;
}