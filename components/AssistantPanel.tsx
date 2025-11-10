"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateAgentResponse } from "@/lib/aiAgent";

type Message = {
  id: string;
  role: "user" | "agent";
  content: string;
  timestamp: string;
};

function createMessage(role: Message["role"], content: string): Message {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    content,
    timestamp: new Date().toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit"
    })
  };
}

export function AssistantPanel() {
  const [messages, setMessages] = useState<Message[]>([
    createMessage(
      "agent",
      "Namaste! I’m the Bharat Life Care social media command agent. I’ve synced live performance, workflows, and approvals. What should we optimize first?"
    )
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = createMessage("user", trimmed);
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsThinking(true);

    await new Promise((resolve) => setTimeout(resolve, 450));

    const response = createMessage("agent", generateAgentResponse(trimmed));

    setMessages((prev) => [...prev, response]);
    setIsThinking(false);
  };

  return (
    <section className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Agent Co-Pilot</h2>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
          Real-time orchestration
        </span>
      </div>
      <div className="mt-4 flex-1 space-y-3 overflow-y-auto rounded-2xl bg-slate-50/80 p-4">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.article
              key={message.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-1 rounded-2xl bg-white p-3 shadow-sm"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700">
                  {message.role === "agent" ? "AI Agent" : "You"}
                </span>
                <span>{message.timestamp}</span>
              </div>
              <p className="whitespace-pre-line text-sm text-slate-700">{message.content}</p>
            </motion.article>
          ))}
        </AnimatePresence>
        {isThinking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 rounded-2xl bg-white p-3 text-xs text-slate-500 shadow-sm"
          >
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-brand-500" />
            Agent synthesizing Bharat Life Care insights...
          </motion.div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
          placeholder="Ask for campaign ideas, workflow tweaks, analytics, or crisis playbooks..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          type="submit"
          className="rounded-2xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        >
          Deploy
        </button>
      </form>
    </section>
  );
}
