import { describe, expect, test } from 'vitest'
import { BTree, BTree2 } from '../../../utilities/examples'
import { isSameTree } from './isSameTree'

describe('Is same tree', () => {
  test('Is same tree', () => {
    expect(isSameTree(BTree, BTree)).toBeTruthy()
    expect(isSameTree(BTree, BTree2)).toBeFalsy()
  })
})
