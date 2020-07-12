declare const require: (path: string) => any;
declare const load: (path: string) => any;
declare const Packages: any;
declare const java: any;
declare const org: any;
declare const __ctx: any;
declare const __filename: string;

interface JIterable<T> {
  [index: number]: T;
  [Symbol.iterator]: () => Iterator<T>;
}

declare module 'java.util' {
  interface Collection<E> extends JIterable<E> { }

  interface List<E> extends JIterable<E> { }
}