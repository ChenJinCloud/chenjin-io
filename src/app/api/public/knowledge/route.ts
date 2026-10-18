import { listPublicKnowledge } from '@/features/content/public.server';
import { routeChatMessage } from '@/features/chat/chatRouter';

export async function POST(request: Request) {
  // This endpoint is deliberately stateless: no session, DB or model dependency.
  const reader = request.body?.getReader();
  if (!reader) return Response.json({ error: 'EMPTY_BODY' }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > 12000) {
      await reader.cancel();
      return Response.json({ error: 'BODY_TOO_LARGE' }, { status: 413 });
    }
    chunks.push(value);
  }
  let input: unknown;
  try {
    input = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    return Response.json({ error: 'INVALID_JSON' }, { status: 400 });
  }
  if (!input || typeof input !== 'object' || !('message' in input) || typeof input.message !== 'string'
    || !input.message.trim() || input.message.length > 2000
    || !('language' in input) || (input.language !== 'zh' && input.language !== 'en')) {
    return Response.json({ error: 'INVALID_INPUT' }, { status: 400 });
  }
  return Response.json(routeChatMessage(input.message.trim(), listPublicKnowledge(input.language), input.language), {
    headers: { 'Cache-Control': 'no-store' },
  });
}
