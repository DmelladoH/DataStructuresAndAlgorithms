import { type BTreeNode } from '../../../dataStructures/treeNode'
import { isSameTree } from './isSameTree'

export function isSubTree<T> (root: BTreeNode<T>, subRoot: BTreeNode<T>): boolean {
  return isSubTreeRecursive(root, subRoot)
}

export function isSubTreeRecursive<T> (node: BTreeNode<T> | undefined, subNode: BTreeNode<T> | undefined): boolean {
  if (node == null) return false
  if ((subNode != null) && isSameTree(node, subNode)) return true

  return isSubTreeRecursive(node.left, subNode) || isSubTreeRecursive(node.right, subNode)
}
