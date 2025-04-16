
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { PerformanceDashboard } from "@/components/analytics/PerformanceDashboard";
import { InjuryPrediction } from "@/components/analytics/InjuryPrediction";
import { VirtualScouting } from "@/components/analytics/VirtualScouting";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Business Intelligence</h1>
        <p className="text-muted-foreground">
          Dados consolidados, análises preditivas e ferramentas de scouting virtual.
        </p>
      </div>

      <Tabs
        defaultValue="dashboard"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="dashboard">Dashboards</TabsTrigger>
          <TabsTrigger value="prediction">Previsões</TabsTrigger>
          <TabsTrigger value="scouting">Scouting Virtual</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <PerformanceDashboard />
        </TabsContent>

        <TabsContent value="prediction" className="space-y-4">
          <InjuryPrediction />
        </TabsContent>

        <TabsContent value="scouting" className="space-y-4">
          <VirtualScouting />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
