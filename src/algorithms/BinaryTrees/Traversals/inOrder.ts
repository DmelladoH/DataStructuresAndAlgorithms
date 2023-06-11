import { type BTreeNode } from '../../../dataStructures/treeNode'

export function getTreeInOrder<T> (TreeRoot: BTreeNode<T>): T[] {
  const path: T[] = []
  walkTreeInOrder(TreeRoot, path)
  return path
}

function walkTreeInOrder<T> (node: BTreeNode<T> | undefined, path: T[]): void {
  if (node === undefined) return

  walkTreeInOrder(node.left, path)
  path.push(node.val)
  walkTreeInOrder(node.right, path)
}
