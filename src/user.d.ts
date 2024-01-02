// from https://github.com/widgetbot-io/embed/blob/master/src/stores/auth.ts

type Provider = 'Discord' | 'Guest' | 'Guild';

interface BaseUser {
  provider: Provider;
  username: string;
  avatarUrl: string;
  id: string;
}

interface DiscordUser extends BaseUser {
  provider: 'Discord';
  discriminator: string;
  blockedUsers: string[];
}

interface GuestUser extends BaseUser {
  provider: 'Guest';
}

interface GuildUser extends BaseUser {
  provider: 'Guild';
}

export type User = DiscordUser | GuestUser | GuildUser;
