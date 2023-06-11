import { describe, expect, test } from 'vitest'
import { BTree } from '../../../utilities/examples'
import { BFSearch } from './breathFirstSearch'

describe('Breath First Search', () => {
  test('search', () => {
    expect(BFSearch(BTree, 10)).toBeTruthy()
    expect(BFSearch(BTree, 8)).toBeFalsy()
  })
})
