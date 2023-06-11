import { type BTreeNode } from '../../../dataStructures/treeNode'

export function getTreePreOrder<T> (TreeRoot: BTreeNode<T>): T[] {
  const path: T[] = []
  walkTreePreOrder(TreeRoot, path)
  return path
}

function walkTreePreOrder<T> (node: BTreeNode<T> | undefined, path: T[]): void {
  if (node === undefined) return

  path.push(node.val)
  walkTreePreOrder(node.left, path)
  walkTreePreOrder(node.right, path)
}
