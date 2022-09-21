import { User } from './user'
import { NewMessage_message } from './embed/NewMessage'
import { MessageUpdated_messageUpdate } from './embed/MessageUpdated'
import { NewDirectMessage_directMessage } from './embed/NewDirectMessage'

export namespace IServer {
  export interface Options {
    id: string
    targetOrigin?: string
  }

  export interface Events {
    signIn: User

    message: {
      channel: string
      message: NewMessage_message
    }
    messageUpdate: {
      channel: string
      message: MessageUpdated_messageUpdate
    }
    messageDelete: {
      channel: string
      id: string
    }
    messageDeleteBulk: {
      channel: string
      ids: string[]
    }

    directMessage: {
      user: string
      message: NewDirectMessage_directMessage
    }

    sentMessage: {
      channel: string;
      content: string;
      thread?: string | null;
      fileData?: string | null;
      fileName?: string | null;
      fileAlt?: string | null;
    }
    sentDirectMessage: {
      user: string;
      content: string;
    }
  }

  type Event = keyof Events
}

export namespace IClient {
  export interface Options {
    id: string
    iframe: HTMLIFrameElement
  }

  export interface Events {
    sendMessage:
      | string
      | {
          channel: string
          message: string
        }
  }

  type Event = keyof Events
}
