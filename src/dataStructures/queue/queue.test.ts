import { describe, expect, test } from 'vitest'
import { Queue } from './queue'
describe('queue', () => {
  test('enqueue', () => {
    const queue: Queue<number> = new Queue<number>()
    expect(queue.size).toEqual(0)
    queue.enqueue(4)
    queue.enqueue(5)
    expect(queue.size).toEqual(2)
  })

  test('dequeue', () => {
    const queue: Queue<number> = new Queue<number>()
    queue.enqueue(5)
    queue.enqueue(6)
    queue.enqueue(7)

    expect(queue.dequeue()).toEqual(5)
    expect(queue.dequeue()).toEqual(6)
    expect(queue.size).toEqual(1)
  })

  test('dequeue in empty queue', () => {
    const queue: Queue<number> = new Queue<number>()
    expect(queue.dequeue()).toBeUndefined()
  })

  test('peek', () => {
    const queue: Queue<number> = new Queue<number>()

    queue.enqueue(5)
    queue.enqueue(6)

    expect(queue.peek()).toEqual(5)
    expect(queue.size).toEqual(2)
  })

  test('peek in empty queue', () => {
    const queue: Queue<number> = new Queue<number>()
    expect(queue.peek()).toBeUndefined()
  })
})
