import 'server-only';
import type { SessionReader } from './contracts';

/** Architecture scaffold: replace only this adapter when real authentication is wired. */
export const sessionReader: SessionReader = {
  async read() {
    return { status: 'unavailable' };
  },
};
