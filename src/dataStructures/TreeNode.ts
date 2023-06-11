export interface BTreeNode<T> {
  val: T
  left: BTreeNode<T> | undefined
  right: BTreeNode<T> | undefined
}
