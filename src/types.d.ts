import { User } from './user'
import { Channels_guild_channels } from './embed/Channels'
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
    alreadySignedIn: User
    signOut: undefined

    message: {
      channel: Channels_guild_channels
      message: NewMessage_message
    }
    messageUpdate: {
      channel: Channels_guild_channels
      message: MessageUpdated_messageUpdate
    }
    messageDelete: {
      channel: Channels_guild_channels
      id: string
    }
    messageDeleteBulk: {
      channel: Channels_guild_channels
      ids: string[]
    }

    directMessage: {
      message: NewDirectMessage_directMessage
    }
    unreadCountUpdate: {
      count: number
    }

    sentMessage: {
      channel: Channels_guild_channels;
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
    sendMessage: string | {
      channel: string
      message: string
    }

    navigate: string | {
      guild?: string;
      channel?: string;
    }

    logout: undefined
  }

  type Event = keyof Events
}
