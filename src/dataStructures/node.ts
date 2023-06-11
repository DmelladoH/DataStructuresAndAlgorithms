export interface Node<T> {
  val: T
  next?: Node<T>
  prev?: Node<T>
}
