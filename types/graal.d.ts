import { Bukkit } from "org.bukkit";
import { Plugin } from "org.bukkit.plugin";

declare global {
  const load: (path: string) => any;
  const Packages: any;
  const server: typeof Bukkit;
  const java: any;
  const Java: any;
  const org: any;
  const __ctx: any;
  const global: typeof globalThis;
  const __plugin: Plugin;
  const __filename: string;

}


interface JIterable<T> {
  [index: number]: T;
  [Symbol.iterator]: () => Iterator<T>;
  length: number;
}

declare module 'java.util' {
  interface Collection<E> extends JIterable<E> { }

  interface List<E> extends JIterable<E> { }
}