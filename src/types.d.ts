import { User } from "./user";
import { Channels_guild_channels } from "./embed/Channels";
import { NewMessage_message } from "./embed/NewMessage";
import { MessageUpdated_messageUpdate } from "./embed/MessageUpdated";
import { NewDirectMessage_directMessage } from "./embed/NewDirectMessage";
import { Channel, Message, UpdatedMessage } from "./embed/nextjs";

export namespace IServer {
  export interface Options {
    id: string;
    targetOrigin?: string;
  }

  export interface Events {
    ready: undefined;
    signIn: User;
    alreadySignedIn: User;
    signOut: undefined;

    message: {
      channel?: Channels_guild_channels | Channel;
      message: NewMessage_message | Message;
    };
    messageUpdate: {
      channel?: Channels_guild_channels | Channel;
      message: MessageUpdated_messageUpdate | Partial<UpdatedMessage>;
    };
    messageDelete: {
      channel?: Channels_guild_channels | Channel;
      id: string;
    };
    messageDeleteBulk: {
      channel?: Channels_guild_channels | Channel;
      ids: string[];
    };

    directMessage: {
      message: NewDirectMessage_directMessage;
    };
    unreadCountUpdate: {
      count: number;
    };

    sentMessage: {
      channel?: Channels_guild_channels | Channel;
      content: string;
      thread?: string | null;
      fileData?: string | null;
      fileName?: string | null;
      fileAlt?: string | null;
    };
    sentDirectMessage: {
      user: string;
      content: string;
    };
  }

  type Event = keyof Events;
}

export namespace IClient {
  export interface Options {
    id: string;
    iframe: HTMLIFrameElement;
  }

  export interface Events {
    sendMessage:
      | string
      | {
          channel: string;
          message: string;
        };

    navigate:
      | string
      | {
          guild?: string;
          channel?: string;
        };
    color: [variable: string, val: string];
    login: undefined;
    logout: undefined;
    setToken: string;
  }

  type Event = keyof Events;
}
