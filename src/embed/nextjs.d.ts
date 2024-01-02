// from https://github.com/widgetbot-io/embed/blob/nextjs/src/graphql/graphql.ts

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type Application = {
  __typename?: 'Application';
  icon: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Attachment = {
  __typename?: 'Attachment';
  filename: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  size: Scalars['Int'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type Author = {
  __typename?: 'Author';
  /** @deprecated Use avatarUrl instead. */
  avatar: Scalars['String'];
  avatarUrl: Scalars['String'];
  bot?: Maybe<Scalars['Boolean']>;
  discriminator: Scalars['String'];
  flags?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isWebhook: Scalars['Boolean'];
  roles: Array<Scalars['String']>;
  system: Scalars['Boolean'];
  username: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
  position: Scalars['Int'];
};

export type Channel = {
  canSend: Scalars['Boolean'];
  category?: Maybe<Category>;
  id: Scalars['String'];
  name: Scalars['String'];
  nsfw: Scalars['Boolean'];
  position: Scalars['Int'];
  rateLimitPerUser?: Maybe<Scalars['Int']>;
  threads?: Maybe<Array<Channel>>;
  type: ChannelType;
};

export enum ChannelType {
  AnnouncementThread = 'AnnouncementThread',
  Dm = 'DM',
  GroupDm = 'GroupDm',
  GuildAnnouncement = 'GuildAnnouncement',
  GuildCategory = 'GuildCategory',
  GuildDirectory = 'GuildDirectory',
  GuildForum = 'GuildForum',
  GuildStageVoice = 'GuildStageVoice',
  GuildText = 'GuildText',
  GuildVoice = 'GuildVoice',
  PrivateThread = 'PrivateThread',
  PublicThread = 'PublicThread',
  Unknown = 'Unknown'
}

export type Embed = {
  __typename?: 'Embed';
  author?: Maybe<EmbedAuthor>;
  color?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<EmbedField>>;
  footer?: Maybe<EmbedFooter>;
  image?: Maybe<EmbedImage>;
  provider?: Maybe<EmbedProvider>;
  thumbnail?: Maybe<EmbedThumbnail>;
  timestamp?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  video?: Maybe<EmbedVideo>;
};

export type EmbedAuthor = {
  __typename?: 'EmbedAuthor';
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  proxyIconUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EmbedField = {
  __typename?: 'EmbedField';
  inline?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

export type EmbedFooter = {
  __typename?: 'EmbedFooter';
  proxyIconUrl?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type EmbedImage = {
  __typename?: 'EmbedImage';
  height?: Maybe<Scalars['Int']>;
  proxyUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type EmbedProvider = {
  __typename?: 'EmbedProvider';
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EmbedThumbnail = {
  __typename?: 'EmbedThumbnail';
  height?: Maybe<Scalars['Int']>;
  proxyUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type EmbedVideo = {
  __typename?: 'EmbedVideo';
  height?: Maybe<Scalars['Int']>;
  proxyUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export enum FormatType {
  Apng = 'APNG',
  Lottie = 'LOTTIE',
  Png = 'PNG',
  Unknown = 'Unknown'
}

export type Mention = {
  __typename?: 'Mention';
  id: Scalars['String'];
  name: Scalars['String'];
  type: MentionType;
};

export enum MentionType {
  Channel = 'Channel',
  Member = 'Member',
  Role = 'Role'
}

export type Message = {
  __typename?: 'Message';
  application?: Maybe<Application>;
  attachments: Array<Attachment>;
  author: User;
  channelId: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['Long'];
  editedAt?: Maybe<Scalars['Long']>;
  embeds: Array<Embed>;
  flags?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  interaction?: Maybe<MessageInteraction>;
  isGuest: Scalars['Boolean'];
  mentions: Array<Mention>;
  messageReference?: Maybe<MessageReference>;
  reactions?: Maybe<Array<Reaction>>;
  referencedMessage?: Maybe<Message>;
  stickers: Array<Sticker>;
  thread?: Maybe<Thread>;
  type: MessageType;
  unread: Scalars['Boolean'];
};

export type MessageInteraction = {
  __typename?: 'MessageInteraction';
  id: Scalars['String'];
  name: Scalars['String'];
  user: Author;
};

export type MessageReference = {
  __typename?: 'MessageReference';
  channelId: Scalars['String'];
  guildId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
};

export enum MessageType {
  Call = 'Call',
  ChannelFollowAdd = 'ChannelFollowAdd',
  ChannelIconChange = 'ChannelIconChange',
  ChannelNameChange = 'ChannelNameChange',
  ChannelPinnedMessage = 'ChannelPinnedMessage',
  ChatInputCommand = 'ChatInputCommand',
  ContextMenuCommand = 'ContextMenuCommand',
  Default = 'Default',
  GuildDiscoveryDisqualified = 'GuildDiscoveryDisqualified',
  GuildDiscoveryGracePeriodFinalWarning = 'GuildDiscoveryGracePeriodFinalWarning',
  GuildDiscoveryGracePeriodInitialWarning = 'GuildDiscoveryGracePeriodInitialWarning',
  GuildDiscoveryRequalified = 'GuildDiscoveryRequalified',
  GuildInviteReminder = 'GuildInviteReminder',
  GuildMemberJoin = 'GuildMemberJoin',
  RecipientAdd = 'RecipientAdd',
  RecipientRemove = 'RecipientRemove',
  Reply = 'Reply',
  ThreadCreated = 'ThreadCreated',
  ThreadStarterMessage = 'ThreadStarterMessage',
  Unknown = 'Unknown',
  UserPremiumGuildSubscription = 'UserPremiumGuildSubscription',
  UserPremiumGuildTier1 = 'UserPremiumGuildTier1',
  UserPremiumGuildTier2 = 'UserPremiumGuildTier2',
  UserPremiumGuildTier3 = 'UserPremiumGuildTier3'
}

export type Reaction = {
  __typename?: 'Reaction';
  animated?: Maybe<Scalars['Boolean']>;
  count: Scalars['Int'];
  emojiId?: Maybe<Scalars['String']>;
  emojiName?: Maybe<Scalars['String']>;
  me: Scalars['Boolean'];
};

export type Sticker = {
  __typename?: 'Sticker';
  formatType: FormatType;
  id: Scalars['String'];
  lottieData?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Thread = {
  __typename?: 'Thread';
  archivedAt?: Maybe<Scalars['Long']>;
  id: Scalars['String'];
  locked: Scalars['Boolean'];
  messageCount: Scalars['Int'];
  name: Scalars['String'];
};

export type UpdatedMessage = {
  __typename?: 'UpdatedMessage';
  application?: Maybe<Application>;
  attachments?: Maybe<Array<Attachment>>;
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Long']>;
  editedAt?: Maybe<Scalars['Long']>;
  embeds?: Maybe<Array<Embed>>;
  flags?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  interaction?: Maybe<MessageInteraction>;
  isGuest?: Maybe<Scalars['Boolean']>;
  mentions?: Maybe<Array<Mention>>;
  messageReference?: Maybe<MessageReference>;
  reactions?: Maybe<Array<Reaction>>;
  referencedMessage?: Maybe<Message>;
  stickers?: Maybe<Array<Sticker>>;
  thread?: Maybe<Thread>;
  type?: Maybe<MessageType>;
};

export type User = {
  __typename?: 'User';
  /** @deprecated Use avatarUrl instead. */
  avatar: Scalars['String'];
  avatarUrl: Scalars['String'];
  bot: Scalars['Boolean'];
  color: Scalars['Int'];
  discrim: Scalars['String'];
  flags?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isWebhook: Scalars['Boolean'];
  name: Scalars['String'];
  profile: UserProfile;
  roles?: Maybe<Array<Scalars['String']>>;
  system: Scalars['Boolean'];
};

export type UserProfileArgs = {
  guild: Scalars['String'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  buttons: Array<UserProfileButton>;
};

export type UserProfileButton = {
  __typename?: 'UserProfileButton';
  action?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  iconLocation?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

