
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PreMatch from "@/components/matches/PreMatch";
import LiveMatch from "@/components/matches/LiveMatch";
import PostMatch from "@/components/matches/PostMatch";

export default function Matches() {
  const [activeTab, setActiveTab] = useState("pre-match");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gestão de Partidas</h1>
        <p className="text-muted-foreground">
          Análise pré-jogo, monitoramento em tempo real e relatórios pós-jogo
        </p>
      </div>

      <Tabs
        defaultValue="pre-match"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="pre-match">Pré-Jogo</TabsTrigger>
          <TabsTrigger value="live-match">Durante o Jogo</TabsTrigger>
          <TabsTrigger value="post-match">Pós-Jogo</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pre-match" className="space-y-6">
          <PreMatch />
        </TabsContent>
        
        <TabsContent value="live-match" className="space-y-6">
          <LiveMatch />
        </TabsContent>
        
        <TabsContent value="post-match" className="space-y-6">
          <PostMatch />
        </TabsContent>
      </Tabs>
    </div>
  );
}
