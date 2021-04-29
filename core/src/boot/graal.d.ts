declare global {
  /**
   * GraalJS and GraalVM information.
   */
  class Graal {
    /**
     * GraalJS version.
     */
    static readonly versionJS: string;

    /**
     * GraalVM version, if this is executing on GraalVM.
     */
    static readonly versionGraalVM: string | null;

    /**
     * Whether this is executed on GraalVM. If false, performance is likely
     * to be bad.
     */
    static isGraalRuntime(): boolean;
  }

  /**
   * GraalJS Java interoperability tools.
   */
  class Java {
    /**
     * Gets a Java class or throws if it cannot be found.
     * @param name Fully qualified name.
     * @returns Java class.
     */
    static type(name: string): any;

    /**
     * Greates a shallow copy of given Java array or list.
     * This is usually unnecessary, because you can use the Java arrays and lists
     * directly as well.
     * @param obj Java array or list.
     * @returns JavaScript array.
     */
    static from<T>(obj: T[] | List<T>): T[];

    /**
     * Converts a JavaScript value to Java type. This is usually handled
     * automatically.
     * @param value JavaScript value.
     * @param javaType Java type to convert it to.
     * @returns Java object.
     */
    static to(value: any, javaType: any): any;

    /**
     * Checks if a value is Java object or native JavaScript value.
     * @param value Value to check.
     * @returns If it is a Java object.
     */
    static isJavaObject(value: any): boolean;

    /**
     * Checks if a value is Java class instance (type).
     * @param value Value to check.
     * @returns If it is a Java class instance.
     */
    static isType(value: any): boolean;

    /**
     * Gets type name of given Java class instance.
     * @param value Value to get type name for.
     * @returns Type name of given class instance, or undefined if a value that
     * is not a class instance was given.
     */
    static typeName(value: any): string | undefined;
  }

  /**
   * Contains all top-level packages (e.g. 'java', 'net', 'org').
   */
  const Packages: JavaPackage;

  /**
   * Contains sub-packages and Java classes.
   */
  interface JavaPackage {
    [name: string]: Package | any;
  }
}

export {};
