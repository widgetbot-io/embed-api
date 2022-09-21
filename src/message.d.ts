/* from:
https://github.com/widgetbot-io/embed/blob/master/src/__generated__/globalTypes.ts
https://github.com/widgetbot-io/embed/blob/master/src/__generated__/Message.ts */

export default Message


//==============================================================
// START Enums and Input Objects
//==============================================================

export enum FormatType {
  APNG = "APNG",
  LOTTIE = "LOTTIE",
  PNG = "PNG",
  Unknown = "Unknown",
}

export enum MentionType {
  Channel = "Channel",
  Member = "Member",
  Role = "Role",
}

export enum MessageType {
  Call = "Call",
  ChannelFollowAdd = "ChannelFollowAdd",
  ChannelIconChange = "ChannelIconChange",
  ChannelNameChange = "ChannelNameChange",
  ChannelPinnedMessage = "ChannelPinnedMessage",
  ChatInputCommand = "ChatInputCommand",
  ContextMenuCommand = "ContextMenuCommand",
  Default = "Default",
  GuildDiscoveryDisqualified = "GuildDiscoveryDisqualified",
  GuildDiscoveryGracePeriodFinalWarning = "GuildDiscoveryGracePeriodFinalWarning",
  GuildDiscoveryGracePeriodInitialWarning = "GuildDiscoveryGracePeriodInitialWarning",
  GuildDiscoveryRequalified = "GuildDiscoveryRequalified",
  GuildInviteReminder = "GuildInviteReminder",
  GuildMemberJoin = "GuildMemberJoin",
  RecipientAdd = "RecipientAdd",
  RecipientRemove = "RecipientRemove",
  Reply = "Reply",
  ThreadCreated = "ThreadCreated",
  ThreadStarterMessage = "ThreadStarterMessage",
  Unknown = "Unknown",
  UserPremiumGuildSubscription = "UserPremiumGuildSubscription",
  UserPremiumGuildTier1 = "UserPremiumGuildTier1",
  UserPremiumGuildTier2 = "UserPremiumGuildTier2",
  UserPremiumGuildTier3 = "UserPremiumGuildTier3",
}

//==============================================================
// END Enums and Input Objects
//==============================================================

// ====================================================
// GraphQL fragment: Message
// ====================================================

export interface Message_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
  roles: string[] | null;
  system: boolean;
  isWebhook: boolean;
  color: number;
}

export interface Message_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface Message_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface Message_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface Message_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface Message_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface Message_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Message_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface Message_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Message_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface Message_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface Message_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface Message_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: Message_embeds_author | null;
  fields: Message_embeds_fields[] | null;
  image: Message_embeds_image | null;
  provider: Message_embeds_provider | null;
  footer: Message_embeds_footer | null;
  thumbnail: Message_embeds_thumbnail | null;
  video: Message_embeds_video | null;
}

export interface Message_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface Message_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface Message_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: Message_interaction_user;
}

export interface Message_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface Message_referencedMessage_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
  roles: string[] | null;
  system: boolean;
  isWebhook: boolean;
  color: number;
}

export interface Message_referencedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface Message_referencedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface Message_referencedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface Message_referencedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface Message_referencedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface Message_referencedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Message_referencedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface Message_referencedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Message_referencedMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface Message_referencedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface Message_referencedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface Message_referencedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: Message_referencedMessage_embeds_author | null;
  fields: Message_referencedMessage_embeds_fields[] | null;
  image: Message_referencedMessage_embeds_image | null;
  provider: Message_referencedMessage_embeds_provider | null;
  footer: Message_referencedMessage_embeds_footer | null;
  thumbnail: Message_referencedMessage_embeds_thumbnail | null;
  video: Message_referencedMessage_embeds_video | null;
}

export interface Message_referencedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface Message_referencedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface Message_referencedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: Message_referencedMessage_interaction_user;
}

export interface Message_referencedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface Message_referencedMessage {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: Message_referencedMessage_author;
  attachments: Message_referencedMessage_attachments[];
  stickers: Message_referencedMessage_stickers[];
  reactions: Message_referencedMessage_reactions[] | null;
  messageReference: Message_referencedMessage_messageReference | null;
  embeds: Message_referencedMessage_embeds[];
  mentions: Message_referencedMessage_mentions[];
  interaction: Message_referencedMessage_interaction | null;
  thread: Message_referencedMessage_thread | null;
}

export interface Message {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: Message_author;
  attachments: Message_attachments[];
  stickers: Message_stickers[];
  reactions: Message_reactions[] | null;
  messageReference: Message_messageReference | null;
  embeds: Message_embeds[];
  mentions: Message_mentions[];
  interaction: Message_interaction | null;
  thread: Message_thread | null;
  referencedMessage: Message_referencedMessage | null;
}
