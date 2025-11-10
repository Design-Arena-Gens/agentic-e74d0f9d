"use client";

import { useMemo, useState } from "react";
import { brandVoice } from "@/lib/data";

type FocusArea = "awareness" | "education" | "conversion" | "retention";
type Channel = "Instagram" | "LinkedIn" | "YouTube" | "Twitter/X" | "Facebook";

const focusRecommendations: Record<FocusArea, string> = {
  awareness:
    "Lead with cultural moments, doctor-led storytelling, and vernacular hooks to keep Bharat Life Care top-of-mind.",
  education:
    "Double down on preventive health explainers, compliance-proof claims, and evidence-backed wellness narratives.",
  conversion:
    "Deploy testimonials, pricing transparency assets, and lead magnets tied to diagnostic and wellness packages.",
  retention:
    "Nurture existing community with habit trackers, follow-up care reminders, and loyalty spotlights."
};

const channelTactics: Record<Channel, string[]> = {
  Instagram: [
    "Carousel: '3 Morning Rituals Backed by Bharat Life Care Nutritionists'",
    "Reel: Behind-the-scenes montage from diagnostic labs",
    "Stories: Q&A sticker with preventive cardiology specialist"
  ],
  "LinkedIn": [
    "Thought leadership article on corporate preventive health ROI",
    "Carousel of clinical outcomes by specialty",
    "Data snapshot infographic tailored for HR stakeholders"
  ],
  YouTube: [
    "5-minute explainer on Ayurveda x modern diagnostics synergy",
    "Doctor-led myth-busting segment on seasonal immunity",
    "Patient journey testimonial focusing on preventive screenings"
  ],
  "Twitter/X": [
    "Thread debunking common hypertension myths",
    "Live Q&A session with cardiologist (text and voice snippets)",
    "Quick tips series with culturally contextual nutrition swaps"
  ],
  Facebook: [
    "Community poll on wellness challenges with dynamic follow-up recommendations",
    "Long-form post telling a caregiver success story",
    "Live stream event invitation with RSVP reminder automation"
  ]
};

function synthesizePlan(focus: FocusArea, channels: Channel[]) {
  return {
    focusSummary: focusRecommendations[focus],
    channelIdeas: channels.map((channel) => ({
      channel,
      ideas: channelTactics[channel]
    })),
    voiceChecks: brandVoice.messagingPrinciples
  };
}

export function StrategyBuilder() {
  const [focus, setFocus] = useState<FocusArea>("education");
  const [selectedChannels, setSelectedChannels] = useState<Channel[]>(["Instagram", "LinkedIn"]);

  const plan = useMemo(() => synthesizePlan(focus, selectedChannels), [focus, selectedChannels]);

  const toggleChannel = (channel: Channel) => {
    setSelectedChannels((current) =>
      current.includes(channel) ? current.filter((item) => item !== channel) : [...current, channel]
    );
  };

  return (
    <section className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-900">Strategy Auto-Composer</h2>
        <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-700">
          Powered by Bharat insights
        </span>
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <div className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Primary Focus</p>
          <div className="flex flex-wrap gap-2">
            {(["awareness", "education", "conversion", "retention"] as FocusArea[]).map((option) => (
              <button
                key={option}
                onClick={() => setFocus(option)}
                className={
                  focus === option
                    ? "rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-white shadow-sm"
                    : "rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm hover:bg-brand-50 hover:text-brand-600"
                }
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Channels</p>
          <div className="flex flex-wrap gap-2">
            {(["Instagram", "LinkedIn", "YouTube", "Twitter/X", "Facebook"] as Channel[]).map((channel) => {
              const active = selectedChannels.includes(channel);
              return (
                <button
                  key={channel}
                  onClick={() => toggleChannel(channel)}
                  className={
                    active
                      ? "rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-sm"
                      : "rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm hover:bg-emerald-50 hover:text-emerald-600"
                  }
                  type="button"
                >
                  {channel}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-800">Mission Brief</h3>
          <p className="mt-2 text-sm text-slate-600">{plan.focusSummary}</p>
        </article>
        <article className="rounded-2xl bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-800">Voice Consistency Checks</h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            {plan.voiceChecks.map((principle, index) => (
              <li key={index} className="rounded-xl bg-white px-3 py-2 shadow-sm">
                {principle}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="space-y-3">
        {plan.channelIdeas.map((channelPlan) => (
          <article key={channelPlan.channel} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
            <h4 className="text-sm font-semibold text-slate-800">{channelPlan.channel}</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              {channelPlan.ideas.map((idea, index) => (
                <li key={index} className="rounded-xl bg-white px-3 py-2 shadow-sm">
                  {idea}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
