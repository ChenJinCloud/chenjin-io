export interface Conversation {
  id: string;
  ownerId: string;
  title: string;
  updatedAt: string;
}

export interface StoredMessage {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

/** Every operation is scoped to a server-verified owner, including message writes. */
export interface ConversationRepository {
  list(ownerId: string): Promise<Conversation[]>;
  find(ownerId: string, conversationId: string): Promise<Conversation | null>;
  create(ownerId: string, title: string): Promise<Conversation>;
  messages(ownerId: string, conversationId: string): Promise<StoredMessage[]>;
  append(ownerId: string, conversationId: string, message: Omit<StoredMessage, 'id' | 'createdAt' | 'conversationId'>): Promise<StoredMessage>;
  remove(ownerId: string, conversationId: string): Promise<void>;
}

export interface AnswerProvider {
  answer(input: {
    messages: Pick<StoredMessage, 'role' | 'content'>[];
    sources: { id: string; url: string; text: string }[];
    signal: AbortSignal;
  }): Promise<{ text: string; citedSourceIds: string[] }>;
}
