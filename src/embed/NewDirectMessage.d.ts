/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: NewDirectMessage
// ====================================================

export interface NewDirectMessage_directMessage_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
  roles: string[] | null;
}

export interface NewDirectMessage_directMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface NewDirectMessage_directMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface NewDirectMessage_directMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface NewDirectMessage_directMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface NewDirectMessage_directMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface NewDirectMessage_directMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface NewDirectMessage_directMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface NewDirectMessage_directMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface NewDirectMessage_directMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface NewDirectMessage_directMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface NewDirectMessage_directMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface NewDirectMessage_directMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: NewDirectMessage_directMessage_embeds_author | null;
  fields: NewDirectMessage_directMessage_embeds_fields[] | null;
  image: NewDirectMessage_directMessage_embeds_image | null;
  provider: NewDirectMessage_directMessage_embeds_provider | null;
  footer: NewDirectMessage_directMessage_embeds_footer | null;
  thumbnail: NewDirectMessage_directMessage_embeds_thumbnail | null;
  video: NewDirectMessage_directMessage_embeds_video | null;
}

export interface NewDirectMessage_directMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface NewDirectMessage_directMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface NewDirectMessage_directMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: NewDirectMessage_directMessage_interaction_user;
}

export interface NewDirectMessage_directMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface NewDirectMessage_directMessage_referencedMessage_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
  roles: string[] | null;
}

export interface NewDirectMessage_directMessage_referencedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface NewDirectMessage_directMessage_referencedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface NewDirectMessage_directMessage_referencedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface NewDirectMessage_directMessage_referencedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface NewDirectMessage_directMessage_referencedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface NewDirectMessage_directMessage_referencedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface NewDirectMessage_directMessage_referencedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface NewDirectMessage_directMessage_referencedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface NewDirectMessage_directMessage_referencedMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface NewDirectMessage_directMessage_referencedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface NewDirectMessage_directMessage_referencedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface NewDirectMessage_directMessage_referencedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: NewDirectMessage_directMessage_referencedMessage_embeds_author | null;
  fields: NewDirectMessage_directMessage_referencedMessage_embeds_fields[] | null;
  image: NewDirectMessage_directMessage_referencedMessage_embeds_image | null;
  provider: NewDirectMessage_directMessage_referencedMessage_embeds_provider | null;
  footer: NewDirectMessage_directMessage_referencedMessage_embeds_footer | null;
  thumbnail: NewDirectMessage_directMessage_referencedMessage_embeds_thumbnail | null;
  video: NewDirectMessage_directMessage_referencedMessage_embeds_video | null;
}

export interface NewDirectMessage_directMessage_referencedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface NewDirectMessage_directMessage_referencedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface NewDirectMessage_directMessage_referencedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: NewDirectMessage_directMessage_referencedMessage_interaction_user;
}

export interface NewDirectMessage_directMessage_referencedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface NewDirectMessage_directMessage_referencedMessage {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: NewDirectMessage_directMessage_referencedMessage_author;
  attachments: NewDirectMessage_directMessage_referencedMessage_attachments[];
  stickers: NewDirectMessage_directMessage_referencedMessage_stickers[];
  reactions: NewDirectMessage_directMessage_referencedMessage_reactions[] | null;
  messageReference: NewDirectMessage_directMessage_referencedMessage_messageReference | null;
  embeds: NewDirectMessage_directMessage_referencedMessage_embeds[];
  mentions: NewDirectMessage_directMessage_referencedMessage_mentions[];
  interaction: NewDirectMessage_directMessage_referencedMessage_interaction | null;
  thread: NewDirectMessage_directMessage_referencedMessage_thread | null;
}

export interface NewDirectMessage_directMessage {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: NewDirectMessage_directMessage_author;
  attachments: NewDirectMessage_directMessage_attachments[];
  stickers: NewDirectMessage_directMessage_stickers[];
  reactions: NewDirectMessage_directMessage_reactions[] | null;
  messageReference: NewDirectMessage_directMessage_messageReference | null;
  embeds: NewDirectMessage_directMessage_embeds[];
  mentions: NewDirectMessage_directMessage_mentions[];
  interaction: NewDirectMessage_directMessage_interaction | null;
  thread: NewDirectMessage_directMessage_thread | null;
  referencedMessage: NewDirectMessage_directMessage_referencedMessage | null;
}

export interface NewDirectMessage {
  directMessage: NewDirectMessage_directMessage | null;
}

export interface NewDirectMessageVariables {
  guild: string;
}
