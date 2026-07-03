import { useLanguage } from '@/contexts/LanguageContext';
import { getKnowledgeRegistry } from '@/content/registry';
import { routeChatMessage } from './chatRouter';
import type { ChatRouteResult } from './chatTypes';
import { ArrowRight, ArrowUp, FileText, Paperclip, Plus, Send, X } from 'lucide-react';
import { useMemo, useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

interface ChatGatewayProps {
  variant?: 'hero' | 'floating';
  autoFocus?: boolean;
}

type ChatTopic = string | {
  label: string;
  prompt: string;
};

const variantClasses = {
  hero: {
    shell: 'w-full max-w-2xl 2xl:max-w-3xl [@media(min-width:2400px)]:max-w-4xl mx-auto',
    form: 'relative rounded-[28px] border border-accent/25 bg-card/90 backdrop-blur-sm shadow-[0_8px_28px_-8px_hsl(var(--accent)/0.18)] focus-within:border-accent/50 focus-within:shadow-[0_10px_36px_-6px_hsl(var(--accent)/0.28)] transition-all duration-300',
    textarea: 'min-h-[40px] max-h-[200px] py-2 text-[15px]',
    topicWrap: 'justify-center mt-5',
    result: 'mt-5 rounded-2xl border border-border bg-card/85 p-4 text-left shadow-sm',
    topicButton: 'px-4 py-1.5',
  },
  floating: {
    shell: 'w-full',
    form: 'border-b border-border',
    textarea: 'min-h-[76px] max-h-[180px] pt-4 pb-2 text-sm',
    topicWrap: 'px-4 pb-4',
    result: 'mx-4 mb-4 rounded-xl border border-border bg-background/80 p-3 text-left',
    topicButton: 'px-3 py-1',
  },
};

const ChatGateway = ({ variant = 'hero', autoFocus = false }: ChatGatewayProps) => {
  const { t, language } = useLanguage();
  const classes = variantClasses[variant];
  const isZh = language === 'zh';
  const registry = useMemo(() => getKnowledgeRegistry(language), [language]);
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const [result, setResult] = useState<ChatRouteResult | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resetTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
  };

  const fitTextarea = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
  };

  const getTopicLabel = (topic: ChatTopic) => (typeof topic === 'string' ? topic : topic.label);
  const getTopicPrompt = (topic: ChatTopic) => (typeof topic === 'string' ? topic : topic.prompt);

  const setTopic = (topic: ChatTopic) => {
    setMessage(getTopicPrompt(topic));
    requestAnimationFrame(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      fitTextarea(textarea);
      textarea.focus();
    });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;

    setResult(routeChatMessage(trimmed, registry, language));
    setMessage('');
    setFileName('');
    if (fileRef.current) fileRef.current.value = '';
    resetTextareaHeight();
  };

  return (
    <div className={classes.shell}>
      {variant === 'hero' && (
        <p className="mb-5 text-center font-display text-base italic text-accent md:text-lg 2xl:mb-7 2xl:text-xl">
          {t.hero.chatGuide}
        </p>
      )}

      <form onSubmit={submit} className={classes.form}>
        {fileName && (
          <div className="flex items-center gap-2 px-5 pt-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent">
              <FileText className="h-3 w-3" />
              {fileName}
            </span>
            <button
              type="button"
              onClick={() => {
                setFileName('');
                if (fileRef.current) fileRef.current.value = '';
              }}
              className="text-xs text-muted-foreground/50 transition-colors hover:text-foreground"
              aria-label={isZh ? '移除附件' : 'Remove attachment'}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        <div className="flex items-end gap-2 px-2.5 py-2">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            aria-label={t.hero.chatUpload}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
          >
            {variant === 'hero' ? <Plus className="h-[18px] w-[18px]" /> : <Paperclip className="h-[18px] w-[18px]" />}
          </button>
          <input
            ref={fileRef}
            type="file"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) setFileName(file.name);
            }}
            className="hidden"
          />

          <textarea
            ref={textareaRef}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              fitTextarea(event.target);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                if (message.trim()) event.currentTarget.form?.requestSubmit();
              }
            }}
            placeholder={t.hero.chatPlaceholder}
            rows={1}
            autoFocus={autoFocus}
            className={`flex-1 self-center resize-none overflow-y-auto bg-transparent px-1 font-light leading-6 text-foreground placeholder:text-muted-foreground/40 focus:outline-none ${classes.textarea}`}
          />

          <button
            type="submit"
            aria-label={t.hero.chatSend}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground/40"
            disabled={!message.trim()}
          >
            {variant === 'hero' ? <ArrowUp className="h-4 w-4" /> : <Send className="h-4 w-4" />}
          </button>
        </div>
      </form>

      {variant === 'floating' && (
        <div className={`flex flex-wrap gap-2 ${classes.topicWrap}`}>
          {t.hero.chatTopics.map((topic) => (
            <button
              key={getTopicLabel(topic)}
              type="button"
              onClick={() => setTopic(topic)}
              className={`rounded-full border border-border text-xs font-light text-muted-foreground transition-all hover:-translate-y-px hover:border-accent/40 hover:bg-accent/5 hover:text-foreground ${classes.topicButton}`}
            >
              {getTopicLabel(topic)}
            </button>
          ))}
        </div>
      )}

      {result && (
        <div className={classes.result}>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
            {isZh ? '站内知识路由' : 'Site Knowledge Router'}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {result.answer}
          </p>

          {result.recommendations.length > 0 && (
            <div className="mt-4 space-y-2">
              {result.recommendations.map((item) => (
                <Link
                  key={item.id}
                  to={item.route}
                  className="group block rounded-lg border border-border bg-background/70 p-3 transition-colors hover:border-accent/40"
                >
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-foreground">{item.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {result.actions.map((action) => (
              <Link
                key={`${action.route}-${action.label}`}
                to={action.route}
                className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/15"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatGateway;
