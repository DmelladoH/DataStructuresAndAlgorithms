import { type Node } from '../node'

export class Queue<T> {
  size: number
  head?: Node<T>
  tail?: Node<T>

  constructor (headVal?: T) {
    this.size = 0
    let newHead: Node<T> | undefined

    if (headVal !== undefined) {
      newHead = { val: headVal }
    }

    this.head = this.tail = newHead
  }

  enqueue (elem: T): void {
    this.size++

    const newNode: Node<T> = { val: elem }

    if (this.tail != null) {
      this.tail.next = newNode
      this.tail = newNode
      return
    }

    this.head = this.tail = newNode
  }

  dequeue (): T | undefined {
    if (this.head == null) return

    this.size--

    const node = this.head

    if (this.head.next != null) {
      this.head = this.head.next
    } else {
      this.head = this.tail = undefined
    }

    return node.val
  }

  peek (): T | undefined {
    return this.head?.val
  }
}
