import { describe, expect, test } from 'vitest'
import { BTree } from '../../../utilities/examples'
import { DFSearch } from './depthFirstSearch'

describe('Depth First Search', () => {
  test('search', () => {
    expect(DFSearch(BTree, 10)).toBeTruthy()
    expect(DFSearch(BTree, 8)).toBeFalsy()
  })
})
