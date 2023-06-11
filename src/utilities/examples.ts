import { type BTreeNode } from '../dataStructures/treeNode'

//
//               4
//          1         5
//      2      9  2       10
//   6                3
//
//
//
export const BTree: BTreeNode<number> = {
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

interface Person {
  name: string
  age: number
}

export const BTreeOfObj: BTreeNode<Person> = {
  val: { name: 'Pepe', age: 50 },
  left: {
    val: { name: 'Gustavo', age: 3 }
  },
  right: {
    val: { name: 'Carlos', age: 2 }
  }
}
