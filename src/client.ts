import API from "./api";
import { IClient, IServer } from "./types";

class Client extends API<IServer.Events> {
  iframe: HTMLIFrameElement;

  constructor(options: IClient.Options) {
    super();
    Object.assign(this, options);
    window.addEventListener("message", (message) => {
      this.socketEvent(
        message.data,
        (event, data) =>
          event !== "imageClick" || this.acceptsImageClick(message, data)
      );
    });
  }

  private getIframeOrigin() {
    try {
      const url = new URL(this.iframe?.src);
      return url.protocol === "https:" || url.protocol === "http:"
        ? url.origin
        : undefined;
    } catch {
      return undefined;
    }
  }

  private acceptsImageClick({ source, origin }: MessageEvent, data: unknown) {
    if (
      !source ||
      source !== this.iframe?.contentWindow ||
      origin !== this.getIframeOrigin()
    ) {
      return false;
    }

    if (
      !data ||
      typeof data !== "object" ||
      !("url" in data) ||
      typeof data.url !== "string" ||
      !/^https?:\/\//i.test(data.url)
    ) {
      return false;
    }

    try {
      const url = new URL(data.url);
      return !url.username && !url.password;
    } catch {
      return false;
    }
  }

  /**
   * Emits an event to the client
   * @param event Event name
   * @param data Event data
   */
  public emit<T extends IClient.Event>(event: T, data?: IClient.Events[T]) {
    const iframeWindow = this.iframe?.contentWindow;
    if (!window.parent || !iframeWindow) return false;

    const targetOrigin =
      event === "setHostImagePreview" ? this.getIframeOrigin() : "*";
    if (
      !targetOrigin ||
      (event === "setHostImagePreview" && typeof data !== "boolean")
    ) {
      return false;
    }

    const parsed = JSON.stringify({
      widgetbot: true,
      id: this.id,
      event,
      data,
    });

    iframeWindow.postMessage(parsed, targetOrigin);
    return true;
  }

  public server = {
    emit: <T extends IServer.Event>(event: T, data?: IServer.Events[T]) => {
      const listeners: Function[] = this.listeners[event];

      if (listeners) {
        listeners.forEach((listener) => listener(data));
      }
    },
  };
}

export default Client;
