import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '../../db'; // your drizzle instance
import { betterAuth } from 'better-auth';
import { APP_CONFIG } from '../app.config';
import { lastLoginMethod, openAPI } from 'better-auth/plugins';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  emailAndPassword: {
    enabled: true,
  },
  logger: {
    disabled: false,
    disableColors: false,
    level: 'error',
    log: (level, message, ...args) => {
      // Custom logging implementation
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      console.log(`[${level}] ${message}`, ...args);
    },
  },
  appName: APP_CONFIG.NAME,
  plugins: [lastLoginMethod(), openAPI()],
});
