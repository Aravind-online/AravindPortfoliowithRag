import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MessageCircle, Send, X } from 'lucide-react';
import portrait from '../assets/hero_assets/hero_center_transparent.png';

const API_URL = (import.meta.env.VITE_CHAT_API_URL || 'http://localhost:8000').replace(/\/+$/, '');

const suggestions = [
  'Tell me about your projects',
  'What skills do you have?',
  'How can I contact you?',
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Aravind's portfolio assistant. What would you like to know?",
    },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const sendMessage = async (message) => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || isSending) return;

    const history = messages.map(({ role, content }) => ({ role, content }));
    setMessages((currentMessages) => [
      ...currentMessages,
      { role: 'user', content: trimmedMessage },
    ]);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmedMessage, history }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          typeof data.detail === 'string'
            ? data.detail
            : `Chat request failed (${response.status}).`,
        );
      }

      if (typeof data.answer !== 'string' || !data.answer.trim()) {
        throw new Error('The chat service returned an empty response.');
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        { role: 'assistant', content: data.answer },
      ]);
    } catch (error) {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: 'assistant',
          content:
            error instanceof TypeError
              ? 'I could not connect to the chat service. Please make sure the backend is running and try again.'
              : error.message,
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className={`fixed z-[60] ${
        isOpen
          ? 'inset-0 sm:inset-auto sm:bottom-6 sm:right-6'
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6'
      }`}
    >
      {isOpen ? (
        <section
          aria-label="Chat with Aravind's portfolio assistant"
          className="relative flex h-[100dvh] max-h-[100dvh] w-full flex-col overflow-hidden bg-[#f4f5f9] text-gray-950 shadow-2xl shadow-black/50 sm:h-[min(600px,calc(100dvh-3rem))] sm:max-h-[calc(100dvh-3rem)] sm:w-[min(380px,calc(100vw-3rem))] sm:rounded-3xl sm:border sm:border-white/10"
        >
          <header className="flex min-h-16 shrink-0 items-center justify-between bg-black px-4 pt-[env(safe-area-inset-top)] text-white sm:px-5 sm:pt-0">
            <div>
              <h2 className="text-sm font-semibold">Chat with Aravind</h2>
              <p className="mt-0.5 text-[11px] text-gray-400">Portfolio assistant</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Minimize chat"
                className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                <ChevronDown size={20} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                <X size={17} />
              </button>
            </div>
          </header>

          <div
            className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-5"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <p
                  className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'rounded-br-md bg-[#ccff00] text-gray-950'
                      : 'rounded-bl-md bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="mb-3 text-sm leading-relaxed text-gray-700">
                  Choose a topic to get started, or ask me anything about Aravind&apos;s work.
                </p>
                <div className="space-y-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      disabled={isSending}
                      className="w-full rounded-full border border-gray-300 px-3 py-2.5 text-left text-xs font-medium text-gray-800 transition hover:border-gray-950 hover:bg-gray-50 disabled:opacity-50"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isSending && (
              <p className="text-xs text-gray-500" role="status">
                Aravind&apos;s assistant is typing…
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>

          {input.trim() && !isSending && (
            <div
              aria-hidden="true"
              className="chat-typing-pop absolute bottom-[76px] right-3 z-10 flex items-end gap-1"
            >
              <span className="chat-typing-bubble rounded-2xl rounded-br-md bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-md">
                I&apos;m listening…
              </span>
              <img
                src={portrait}
                alt=""
                className="chat-typing-portrait h-[76px] w-[58px] object-contain object-bottom drop-shadow-lg"
              />
            </div>
          )}

          <form
            className="flex shrink-0 items-center gap-2 border-t border-gray-200 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-3"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
          >
            <label className="sr-only" htmlFor="portfolio-chat-input">
              Your message
            </label>
            <input
              id="portfolio-chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask me anything..."
              maxLength={10000}
              disabled={isSending}
              className="min-w-0 flex-1 rounded-full bg-gray-100 px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#ccff00] disabled:opacity-60"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim() || isSending}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-[#ccff00] transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={17} />
            </button>
          </form>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat with Aravind's portfolio assistant"
          className="flex items-center gap-2 rounded-full bg-[#ccff00] px-4 py-3.5 text-sm font-semibold text-black shadow-lg shadow-[#ccff00]/20 transition hover:scale-105 sm:px-5"
        >
          <MessageCircle size={18} />
          Chat with me
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
