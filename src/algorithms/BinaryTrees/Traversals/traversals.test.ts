import { describe, expect, test } from 'vitest'
import { getTreeInOrder } from './inOrder'
import { getTreePostOrder } from './postOrder'
import { getTreePreOrder } from './preOrder'
import { BTree } from '../../../utilities/examples'

describe('Traversals', () => {
  test('inOrder', () => {
    const res = [6, 2, 1, 9, 4, 2, 3, 5, 10]
    expect(getTreeInOrder(BTree)).toEqual(res)
  })
  test('preOrder', () => {
    const res = [4, 1, 2, 6, 9, 5, 2, 3, 10]
    expect(getTreePreOrder(BTree)).toEqual(res)
  })
  test('postOrder', () => {
    const res = [6, 2, 9, 1, 3, 2, 10, 5, 4]
    expect(getTreePostOrder(BTree)).toEqual(res)
  })
})
