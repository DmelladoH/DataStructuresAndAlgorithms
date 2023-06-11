export interface BTreeNode<T> {
  val: T
  left?: BTreeNode<T>
  right?: BTreeNode<T>
}
