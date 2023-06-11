import { type BTreeNode } from '../../../dataStructures/treeNode'

export function getTreePostOrder<T> (TreeRoot: BTreeNode<T>): T[] {
  const path: T[] = []
  walkTreePostOrder(TreeRoot, path)
  return path
}

function walkTreePostOrder<T> (node: BTreeNode<T> | undefined, path: T[]): void {
  if (node === undefined) return

  walkTreePostOrder(node.left, path)
  walkTreePostOrder(node.right, path)
  path.push(node.val)
}
