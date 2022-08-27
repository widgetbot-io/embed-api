abstract class API<Events extends Object> {
  id: string
  listeners = {} as {
    [event in keyof Events]: ((data: Events[event]) => void)[]
  }

  protected socketEvent(raw: string) {
    let message;
    try {
      message = JSON.parse(raw)
    } catch (e) {
      return
    }

    if (
      message instanceof Object &&
      message.widgetbot === true &&
      message.id === this.id
    ) {
      const { event, data } = message
      const listeners: Function[] = this.listeners[event]

      if (listeners) {
        listeners.forEach(listener => listener(data))
      }
    }
  }

  /**
   * Listens to events from the client
   * @param event Event name
   * @param callback The callback to execute when this event is triggered
   */
  public on<T extends keyof Events>(
    event: T,
    callback: (data: Events[T]) => void
  ) {
    if (!this.listeners[event]) this.listeners[event] = []

    const listeners = this.listeners[event]
    listeners.push(callback)

    console.debug(`[embed-api] on '${String(event)}'`, callback)
  }
}

export default API
