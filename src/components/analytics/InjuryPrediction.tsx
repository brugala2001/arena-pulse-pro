
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertTriangle, Activity, Calendar, Search, Filter, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

export function InjuryPrediction() {
  // Dados de previsão de lesão
  const injuryPredictionData = [
    { id: 1, name: "Carlos Silva", position: "Atacante", age: 28, minutes: 840, fatigue: 76, risk: 82, history: "Alto" },
    { id: 2, name: "Marcelo Santos", position: "Lateral", age: 32, minutes: 920, fatigue: 68, risk: 75, history: "Médio" },
    { id: 3, name: "Paulo Oliveira", position: "Zagueiro", age: 30, minutes: 810, fatigue: 62, risk: 68, history: "Baixo" },
    { id: 4, name: "Ricardo Costa", position: "Volante", age: 29, minutes: 780, fatigue: 81, risk: 78, history: "Médio" },
    { id: 5, name: "Henrique Lima", position: "Meia", age: 27, minutes: 760, fatigue: 70, risk: 64, history: "Baixo" },
    { id: 6, name: "Lucas Pereira", position: "Meia", age: 33, minutes: 650, fatigue: 59, risk: 71, history: "Alto" },
    { id: 7, name: "André Martins", position: "Atacante", age: 25, minutes: 690, fatigue: 65, risk: 58, history: "Baixo" },
    { id: 8, name: "Fernando Souza", position: "Goleiro", age: 31, minutes: 900, fatigue: 52, risk: 49, history: "Baixo" },
  ];

  // Dados de carga de treinamento e lesões
  const trainingLoadData = [
    { week: 'Sem 1', load: 850, injuries: 0 },
    { week: 'Sem 2', load: 920, injuries: 0 },
    { week: 'Sem 3', load: 980, injuries: 1 },
    { week: 'Sem 4', load: 1050, injuries: 2 },
    { week: 'Sem 5', load: 920, injuries: 0 },
    { week: 'Sem 6', load: 880, injuries: 0 },
    { week: 'Sem 7', load: 950, injuries: 1 },
    { week: 'Sem 8', load: 910, injuries: 0 },
  ];

  // Tipos de lesões
  const injuryTypesData = [
    { name: 'Muscular', value: 45, color: '#8B5CF6' },
    { name: 'Ligamentos', value: 25, color: '#F97316' },
    { name: 'Tendinite', value: 15, color: '#10B981' },
    { name: 'Fraturas', value: 8, color: '#06B6D4' },
    { name: 'Outros', value: 7, color: '#6B7280' },
  ];

  // Configuração de cores para os gráficos
  const chartConfig = {
    load: { label: "Carga de Treino", color: "#8B5CF6" },
    injuries: { label: "Lesões", color: "#F97316" },
    risk: { label: "Risco", color: "#F97316" },
    fatigue: { label: "Fadiga", color: "#8B5CF6" },
    // Para o gráfico de pizza
    Muscular: { color: "#8B5CF6" },
    Ligamentos: { color: "#F97316" },
    Tendinite: { color: "#10B981" },
    Fraturas: { color: "#06B6D4" },
    Outros: { color: "#6B7280" },
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-2">
          <Input type="date" className="h-9 w-full md:w-auto" defaultValue="2025-04-01" />
          <span className="hidden md:flex items-center mx-2">até</span>
          <Input type="date" className="h-9 w-full md:w-auto" defaultValue="2025-04-15" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Jogadores em Risco</CardTitle>
            <CardDescription className="text-2xl font-bold">
              3
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Risco de lesão > 70%</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Índice Médio de Fadiga</CardTitle>
            <CardDescription className="text-2xl font-bold">
              68%
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Baseado em dados biométricos</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Lesões na Temporada</CardTitle>
            <CardDescription className="text-2xl font-bold">
              14
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">9 musculares, 3 articulares, 2 outros</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Previsão de Risco de Lesões</CardTitle>
          <CardDescription>Análise preditiva de risco baseada em dados históricos e biométricos</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list">
            <TabsList className="mb-4">
              <TabsTrigger value="list">Lista de Jogadores</TabsTrigger>
              <TabsTrigger value="chart">Gráfico de Risco</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list">
              <div className="rounded-md border overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="p-3 text-left text-xs font-medium text-muted-foreground">Jogador</th>
                      <th className="p-3 text-left text-xs font-medium text-muted-foreground">Posição</th>
                      <th className="p-3 text-left text-xs font-medium text-muted-foreground">Idade</th>
                      <th className="p-3 text-left text-xs font-medium text-muted-foreground">Min. Jogados</th>
                      <th className="p-3 text-left text-xs font-medium text-muted-foreground">Fadiga</th>
                      <th className="p-3 text-left text-xs font-medium text-muted-foreground">Histórico</th>
                      <th className="p-3 text-left text-xs font-medium text-muted-foreground">Risco</th>
                      <th className="p-3 text-xs font-medium text-muted-foreground">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {injuryPredictionData.sort((a, b) => b.risk - a.risk).map((player) => (
                      <tr key={player.id} className="border-t">
                        <td className="p-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{player.name}</span>
                            {player.risk >= 75 && (
                              <AlertTriangle className="h-4 w-4 text-amber-500" />
                            )}
                          </div>
                        </td>
                        <td className="p-3 text-sm">{player.position}</td>
                        <td className="p-3 text-sm">{player.age}</td>
                        <td className="p-3 text-sm">{player.minutes}'</td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <Progress value={player.fatigue} className="h-2 w-16" />
                            <span className="text-xs">{player.fatigue}%</span>
                          </div>
                        </td>
                        <td className="p-3 text-sm">
                          <Badge variant={
                            player.history === "Alto" ? "destructive" :
                            player.history === "Médio" ? "secondary" : "outline"
                          }>
                            {player.history}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <Progress value={player.risk} className={`h-2 w-16 ${
                              player.risk >= 75 ? "text-red-500" : 
                              player.risk >= 60 ? "text-amber-500" : ""
                            }`} />
                            <span className={`text-xs ${
                              player.risk >= 75 ? "text-red-500 font-medium" : 
                              player.risk >= 60 ? "text-amber-500" : ""
                            }`}>{player.risk}%</span>
                          </div>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Search className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="chart">
              <div className="h-[400px]">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={injuryPredictionData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="fatigue" name="Fadiga" stackId="a" fill="#8B5CF6" />
                      <Bar dataKey="risk" name="Risco" stackId="b" fill="#F97316" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Correlação: Carga de Treino x Lesões</CardTitle>
            <CardDescription>Relação entre intensidade dos treinos e ocorrência de lesões</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer config={chartConfig}>
                <LineChart data={trainingLoadData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="load" name="Carga de Treino" stroke="#8B5CF6" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="injuries" name="Lesões" stroke="#F97316" strokeWidth={2} />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tipos de Lesões</CardTitle>
            <CardDescription>Distribuição por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ChartContainer config={chartConfig}>
                <PieChart>
                  <Pie
                    data={injuryTypesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {injuryTypesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </PieChart>
              </ChartContainer>
            </div>
            <div className="mt-2">
              <Button variant="link" className="px-0 h-auto">Ver análises detalhadas</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-end">
        <Button>
          <Activity className="h-4 w-4 mr-2" />
          Gerenciar Planos de Prevenção
        </Button>
      </div>
    </div>
  );
}
