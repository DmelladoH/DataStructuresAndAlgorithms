import { expect, describe, it } from 'vitest'
import { isSubTree } from './isSubTree'
import { tree1, tree2, BTree } from '../../../utilities/examples'

describe('isSubset', () => {
  it('returns true when tree1 is a subset of tree2', () => {
    expect(isSubTree(tree1, tree2)).toBe(true)
  })

  it('returns false when tree1 is not a subset of tree2', () => {
    expect(isSubTree(tree1, BTree)).toBe(false)
  })
})
