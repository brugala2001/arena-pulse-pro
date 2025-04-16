
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, TrendingDown, Download, Filter, RefreshCw, BarChart4 } from "lucide-react";
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";

export function PerformanceDashboard() {
  // Dados de desempenho por posição
  const positionPerformanceData = [
    { name: 'Goleiro', performance: 7.8 },
    { name: 'Zagueiro', performance: 7.2 },
    { name: 'Lateral', performance: 7.5 },
    { name: 'Volante', performance: 6.9 },
    { name: 'Meia', performance: 8.1 },
    { name: 'Atacante', performance: 7.6 },
  ];

  // Dados de custo x desempenho
  const costPerformanceData = [
    { name: 'J. Silva', cost: 8500000, performance: 8.2 },
    { name: 'P. Santos', cost: 12000000, performance: 7.8 },
    { name: 'R. Oliveira', cost: 9000000, performance: 7.9 },
    { name: 'A. Pereira', cost: 5000000, performance: 7.5 },
    { name: 'L. Costa', cost: 7000000, performance: 8.0 },
    { name: 'C. Melo', cost: 10000000, performance: 7.7 },
    { name: 'G. Dias', cost: 4000000, performance: 7.2 },
    { name: 'F. Lima', cost: 6500000, performance: 7.6 },
  ];

  // Dados de estatísticas de jogo
  const matchStatsData = [
    { name: 'Posse', value: 65, color: '#8B5CF6' },
    { name: 'Finalizações', value: 18, color: '#F97316' },
    { name: 'Passes', value: 87, color: '#10B981' },
    { name: 'Defesas', value: 76, color: '#06B6D4' },
  ];

  // Tendência de desempenho ao longo do tempo
  const performanceTrendData = [
    { month: 'Jan', performance: 7.2, rating: 72 },
    { month: 'Fev', performance: 7.4, rating: 74 },
    { month: 'Mar', performance: 7.1, rating: 71 },
    { month: 'Abr', performance: 7.8, rating: 78 },
    { month: 'Mai', performance: 8.0, rating: 80 },
    { month: 'Jun', performance: 7.7, rating: 77 },
  ];

  // Configuração de cores para os gráficos
  const chartConfig = {
    performance: { color: '#8B5CF6' },
    rating: { color: '#10B981' },
    cost: { color: '#F97316' }
  };

  // Dados de KPIs do time
  const teamKPIs = [
    { name: 'Aproveitamento', value: '68%', trend: '+5%', positive: true },
    { name: 'Gols/Jogo', value: '2.4', trend: '+0.3', positive: true },
    { name: 'Gols Sofridos/Jogo', value: '1.1', trend: '-0.2', positive: true },
    { name: 'Clean Sheets', value: '35%', trend: '+8%', positive: true },
    { name: 'Média de Passes', value: '543', trend: '+23', positive: true },
    { name: 'Jogadores Lesionados', value: '3', trend: '+1', positive: false },
  ];

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
          <Button variant="outline" size="sm" className="h-9">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {teamKPIs.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.name}</CardTitle>
              <CardDescription className="text-2xl font-bold">
                {kpi.value}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className={`flex items-center gap-1 text-xs ${kpi.positive ? 'text-green-500' : 'text-red-500'} font-medium`}>
                {kpi.positive ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                <span>{kpi.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Desempenho por Posição</CardTitle>
            <CardDescription>Avaliação média dos jogadores por posição</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] mt-4">
              <ChartContainer config={chartConfig}>
                <BarChart data={positionPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis domain={[0, 10]} tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="performance" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tendência de Desempenho</CardTitle>
            <CardDescription>Evolução da performance da equipe ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] mt-4">
              <ChartContainer config={chartConfig}>
                <LineChart data={performanceTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} domain={[50, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="performance" stroke="#8B5CF6" strokeWidth={2} />
                  <Line type="monotone" dataKey="rating" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Custo x Desempenho</CardTitle>
            <CardDescription>Relação entre salário e desempenho dos jogadores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] mt-4">
              <ChartContainer config={chartConfig}>
                <div className="h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={costPerformanceData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" domain={[0, 15000000]} tickFormatter={(value) => `${value / 1000000}M`} />
                      <YAxis dataKey="name" type="category" width={80} tickLine={false} axisLine={false} />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        formatter={(value, name) => {
                          if (name === "cost") {
                            return [`${(value / 1000000).toFixed(1)}M`];
                          }
                          return [value];
                        }}
                      />
                      <Legend />
                      <Bar dataKey="cost" stackId="a" fill="#F97316" />
                      <Bar dataKey="performance" stackId="b" fill="#8B5CF6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
          
        <Card>
          <CardHeader>
            <CardTitle>Estatísticas de Jogo</CardTitle>
            <CardDescription>Principais métricas de desempenho</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ChartContainer config={chartConfig}>
                <PieChart>
                  <Pie
                    data={matchStatsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {matchStatsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>
              
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Eficiência Defensiva:</span>
                  <span className="font-medium">76%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Eficiência Ofensiva:</span>
                  <span className="font-medium">68%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Conversão:</span>
                  <span className="font-medium">18%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Passes Certos:</span>
                  <span className="font-medium">87%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
        
      <div className="flex justify-end">
        <Button>
          <BarChart4 className="h-4 w-4 mr-2" />
          Criar Novo Dashboard
        </Button>
      </div>
    </div>
  );
}
