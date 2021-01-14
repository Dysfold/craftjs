import { HttpHeaders, HttpResponse } from 'java.net.http';

class HeadersImpl implements Headers {
  map: Map<string, string[]>;

  constructor(source?: HttpHeaders | HeadersInit) {
    this.map = new Map();

    // Implement conversion from Java HttpHeaders and native JS overloads
    if (source instanceof HttpHeaders) {
      for (const entry of source.map().entrySet()) {
        this.map.set(entry.key, entry.value);
      }
    } else if (source instanceof HeadersImpl) {
      this.map = new Map(source.map); // Clone map
    } else if (Array.isArray(source)) {
      for (const record of source) {
        this.append(record[0], record[1]);
      }
    } else if (source) {
      const record = source as Record<string, string>;
      for (const entry of Object.entries(record)) {
        this.set(entry[0], entry[1]);
      }
    }
  }

  get(name: string): string | null {
    const headers = this.map.get(name);
    if (headers) {
      return headers.join(',');
    } else {
      return null;
    }
  }

  has(name: string): boolean {
    return this.map.has(name);
  }

  set(name: string, value: string): void {
    this.map.set(name, [value]);
  }

  append(name: string, value: string): void {
    let headers = this.map.get(name);
    if (!headers) {
      headers = [];
      this.map.set(name, headers);
    }
    headers.push(value);
  }

  delete(name: string): void {
    this.map.delete(name);
  }

  forEach(
    callbackfn: (value: string, key: string, parent: Headers) => void,
    thisArg?: any,
  ): void {
    for (const key of this.map.keys()) {
      callbackfn(this.get(key) as string, key, thisArg ?? this);
    }
  }
}
globalThis.Headers = HeadersImpl;

class ResponseImpl implements Response, Body {
  readonly headers: Headers;
  readonly status: number;
  readonly ok: boolean;
  readonly type: ResponseType;
  readonly url: string;

  /**
   * Response content.
   */
  private readonly content: string;

  // Placeholders with no actual functionality
  // Usually due to Java HttpClient not supporting the feature
  readonly statusText: string;
  readonly redirected: boolean;
  readonly trailer: Promise<Headers>;
  readonly useFinalUrl: boolean;
  readonly body: ReadableStream<Uint8Array> | null;
  readonly bodyUsed: boolean;

  constructor(origin: HttpResponse<string>) {
    this.headers = new HeadersImpl(origin.headers());
    this.status = origin.statusCode();
    this.ok = this.status >= 200 && this.status <= 299;
    this.type = this.ok ? 'basic' : 'error';
    this.url = origin.request().uri.toString();
    this.content = origin.body();

    this.statusText = '';
    this.redirected = false;
    this.trailer = Promise.resolve(new HeadersImpl());
    this.useFinalUrl = true;
    this.body = null;
    this.bodyUsed = false;
  }

  clone(): Response {
    throw new Error('not implemented');
  }

  arrayBuffer(): Promise<ArrayBuffer> {
    throw new Error('not implemented');
  }

  blob(): Promise<Blob> {
    throw new Error('not implemented');
  }

  formData(): Promise<FormData> {
    throw new Error('not implemented');
  }

  async json(): Promise<any> {
    return JSON.parse(this.content);
  }

  async text(): Promise<string> {
    return this.content;
  }
}

// ResponseImpl is not fully compliant due to missing constructors
(globalThis as any).Response = ResponseImpl;

async function fetch(
  input: RequestInfo,
  init: RequestInit = {},
): Promise<Response> {
  if (typeof input != 'string') {
    throw new Error('request as input not implemented');
  }
  init = init ?? {};
  const method = init.method ?? 'GET';
  const headers: HeadersImpl =
    (init.headers as HeadersImpl) ?? new HeadersImpl();
  const body = init.body;
  if (typeof body != 'string' && typeof body != 'undefined') {
    throw new Error('non-string bodies are not implemented');
  }

  const javaHeaders = [];
  for (const [key, values] of headers.map.entries()) {
    for (const value of values) {
      javaHeaders.push(key);
      javaHeaders.push(value);
    }
  }
  const response = await __craftjs.fetch(input, method, body, javaHeaders);
  return new ResponseImpl(response);
}

globalThis.fetch = fetch;
