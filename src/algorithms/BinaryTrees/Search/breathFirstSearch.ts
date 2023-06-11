import { Queue } from '../../../dataStructures/queue/queue'
import { type BTreeNode } from '../../../dataStructures/treeNode'

export function BFSearch<T> (root: BTreeNode<T>, needle: T): boolean {
  const queue = new Queue<BTreeNode<T> | null | undefined>(root)

  while (queue.size >= 0) {
    const curr = queue.dequeue()

    if (curr == null) continue
    if (curr.val === needle) return true

    queue.enqueue(root.left)
    queue.enqueue(root.right)
  }

  return false
}
