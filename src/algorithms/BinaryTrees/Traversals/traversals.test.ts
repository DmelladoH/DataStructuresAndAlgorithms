import { describe, expect, test } from 'vitest'
import { type BTreeNode } from '../../../dataStructures/TreeNode'
import { getTreeInOrder } from './inOrder'
import { getTreePostOrder } from './postOrder'
import { getTreePreOrder } from './preOrder'

//
//               4
//          1         5
//      2      9  2       10
//   6                3
//
//
//
const BTree: BTreeNode<number> = {
  val: 4,
  left: {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 6,
        left: undefined,
        right: undefined
      },
      right: undefined
    },
    right: {
      val: 9,
      left: undefined,
      right: undefined
    }
  },
  right: {
    val: 5,
    left: {
      val: 2,
      left: undefined,
      right: {
        val: 3,
        left: undefined,
        right: undefined
      }
    },
    right: {
      val: 10,
      left: undefined,
      right: undefined
    }
  }
}
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
