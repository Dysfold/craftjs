import { WebSocketHandle } from './boot/craftjs';

export class WebSocket {
  static open(
    address: string,
    httpHeaders?: Map<string, string>,
  ): Promise<WebSocket> {
    return new Promise((resolve, reject) => {
      __craftjs.openWebSocket(
        address,
        httpHeaders ?? new Map(),
        (handle) => {
          resolve(new WebSocket(address, handle));
        },
        (error) => {
          reject(error);
        },
      );
    });
  }

  /**
   * Java-side WebSocket handle.
   */
  private handle: WebSocketHandle;

  /**
   * Server address.
   */
  readonly address: string;

  private constructor(address: string, handle: WebSocketHandle) {
    this.address = address;
    this.handle = handle;
  }

  /**
   * Is this socket connected to server or not.
   */
  get connected(): boolean {
    return !this.handle.isClosed();
  }

  /**
   * Receives a message sent by server, waiting if none are available.
   * @returns A promise that is resolved when a message is available, or
   * rejected if an error becomes available before that. If there are no
   * messages or errors and the connection is closed, it is immediately
   * rejected.
   */
  async receive(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.handle.receive(
        resolve,
        (code, reason, remote) => {
          reject(new ConnectionClosed(this.address, code, reason, remote));
        },
        reject,
      );
    });
  }

  /**
   * Sends a message.
   * @param msg Message content.
   */
  send(msg: string): void {
    const [closeCode, reason, remote] = this.handle.send(msg);
    if (closeCode) {
      // Connection is closed and message was not sent
      throw new ConnectionClosed(this.address, closeCode, reason, remote);
    }
  }

  /**
   * Closes this WebSocket.
   * @param reason Reason to send to server.
   * @returns Promise that is resolved after the connection.
   */
  close(reason: string): Promise<void> {
    return new Promise((resolve) => {
      this.handle.close(reason, resolve);
    });
  }
}

/**
 * Thrown when trying to receive from a WebSocket that is closed.
 */
export class ConnectionClosed extends Error {
  /**
   * Address of the server which connection was opened to.
   */
  readonly address: string;

  /**
   * Close code, as defined registered to IANA.
   * @see https://www.iana.org/assignments/websocket/websocket.xml#close-code-number
   */
  readonly code: number;

  /**
   * Reason for closing, set by server or this client.
   */
  readonly reason: string;

  /**
   * When true, this connection was closed by server. Otherwise, this client
   * closed it.
   */
  readonly remote: boolean;

  constructor(address: string, code: number, reason: string, remote: boolean) {
    super();
    this.address = address;
    this.code = code;
    this.reason = reason;
    this.remote = remote;
  }
}
