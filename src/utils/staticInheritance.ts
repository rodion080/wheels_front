export interface AbsInterface{}

export function staticImplements<T>() {
  // eslint-disable-next-line no-unused-expressions,@typescript-eslint/no-unused-expressions
  return <U extends T>(constructor: U) => { constructor; };
}
