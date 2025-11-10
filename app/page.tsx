import Header from "@/components/Header";
import { KpiGrid } from "@/components/KpiGrid";
import { PipelineBoard } from "@/components/PipelineBoard";
import { ScheduleBoard } from "@/components/ScheduleBoard";
import { AssistantPanel } from "@/components/AssistantPanel";
import { StrategyBuilder } from "@/components/StrategyBuilder";
import { BrandVoicePanel } from "@/components/BrandVoicePanel";
import { CampaignSpotlight } from "@/components/CampaignSpotlight";
import { AutomationPlaybooks } from "@/components/AutomationPlaybooks";
import { kpiHighlights, pipelineStages, todaySchedule } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 p-6 lg:p-10">
      <Header />
      <KpiGrid kpis={kpiHighlights} />
      <div className="grid gap-6 xl:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <CampaignSpotlight />
          <PipelineBoard stages={pipelineStages} />
          <ScheduleBoard schedule={todaySchedule} />
          <StrategyBuilder />
          <AutomationPlaybooks />
        </div>
        <div className="flex flex-col gap-6">
          <AssistantPanel />
          <BrandVoicePanel />
        </div>
      </div>
    </main>
  );
}
