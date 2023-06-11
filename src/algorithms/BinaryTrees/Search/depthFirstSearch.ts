
import { type BTreeNode } from '../../../dataStructures/treeNode'

export function DFSearch<T> (root: BTreeNode<T>, needle: T): boolean {
  return preOrderSearch(root, needle)
}

function preOrderSearch<T> (node: BTreeNode<T> | undefined, needle: T): boolean {
  if (node == null) return false

  // Pre Order, first we check for the value
  if (node.val === needle) return true

  return preOrderSearch(node.left, needle) || preOrderSearch(node.right, needle)
}
