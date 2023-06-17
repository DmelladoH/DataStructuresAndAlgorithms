import { type BTreeNode } from '../../../dataStructures/treeNode'

export function isSameTree<T> (rootNode1: BTreeNode<T>, rootNode2: BTreeNode<T>): boolean {
  return preOrderComparation(rootNode1, rootNode2)
}

function preOrderComparation<T> (node1: BTreeNode<T> | undefined, node2: BTreeNode<T> | undefined): boolean {
  if ((node1 == null) && (node2 == null)) return true
  if ((node1 == null) || (node2 == null)) return false
  if (node1.val !== node2.val) return false

  return preOrderComparation(node1.left, node2.left) && preOrderComparation(node1.right, node2.right)
}
