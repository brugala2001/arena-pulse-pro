
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import TrainingPlanning from "@/components/training/TrainingPlanning";
import TrainingMonitoring from "@/components/training/TrainingMonitoring";
import TrainingReports from "@/components/training/TrainingReports";

export default function Training() {
  const [activeTab, setActiveTab] = useState("planning");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Treinamento e Desempenho
        </h1>
        <p className="text-muted-foreground">
          Gerencie treinos, monitore o desempenho e analise os resultados
        </p>
      </div>

      <Tabs
        defaultValue="planning"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="planning">Planejamento</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoramento</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
        </TabsList>
        
        <TabsContent value="planning" className="space-y-6">
          <TrainingPlanning />
        </TabsContent>
        
        <TabsContent value="monitoring" className="space-y-6">
          <TrainingMonitoring />
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-6">
          <TrainingReports />
        </TabsContent>
      </Tabs>
    </div>
  );
}
