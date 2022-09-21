// from https://github.com/widgetbot-io/embed/blob/master/src/stores/auth.ts

interface DiscordUser {
  avatar: string
  discriminator: null
  username: string
  _id: string
}

interface GuestUser {
  avatarUrl: string
  id: string
  provider: 'Guest'
  username: string
}

interface GuildUser {
  avatarUrl: string
  id: string
  provider: 'Guild'
  username: string
}

export type User = DiscordUser | GuestUser | GuildUser;
