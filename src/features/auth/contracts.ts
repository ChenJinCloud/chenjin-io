export type SessionState =
  | { status: 'authenticated'; user: { id: string; name: string }; expiresAt: string }
  | { status: 'anonymous' }
  | { status: 'unavailable' };

/** Verified by a server adapter using request cookies, never a user id from JSON. */
export interface SessionReader {
  read(headers: Headers): Promise<SessionState>;
}
