
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { MultiSelect } from "../ui/multi-select";
import { fetchPerformanceData } from "@/api/training";

// Performance chart config
const performanceConfig = {
  velocity: {
    label: "Velocidade",
    theme: { light: "#1a365d", dark: "#3b82f6" },
  },
  distance: {
    label: "Distância",
    theme: { light: "#3c8c40", dark: "#10b981" },
  },
  acceleration: {
    label: "Aceleração",
    theme: { light: "#f97316", dark: "#fb923c" },
  },
};

// Mock performance data generation
const generatePerformanceData = () => {
  // Generate 30 days of data
  return Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (30 - i));
    
    return {
      date: date.toISOString().split('T')[0],
      velocity: Math.random() * 10 + 20, // 20-30 km/h
      distance: Math.random() * 3 + 7, // 7-10 km
      acceleration: Math.random() * 3 + 2, // 2-5 m/s²
    };
  });
};

export default function TrainingMonitoring() {
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>(["1"]);
  const [chartType, setChartType] = useState("weekly");
  const [performanceData, setPerformanceData] = useState(generatePerformanceData());
  
  // Mock player options
  const playerOptions = [
    { value: "1", label: "Lionel Messi" },
    { value: "2", label: "Cristiano Ronaldo" },
    { value: "3", label: "Neymar Jr." },
    { value: "4", label: "Robert Lewandowski" },
    { value: "5", label: "Kevin De Bruyne" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="w-full md:w-[250px]">
          <MultiSelect
            options={playerOptions}
            selected={selectedPlayers}
            onChange={setSelectedPlayers}
            placeholder="Selecionar jogadores"
          />
        </div>
        
        <Tabs value={chartType} onValueChange={setChartType} className="w-full md:w-auto">
          <TabsList className="grid w-full md:w-auto grid-cols-3">
            <TabsTrigger value="weekly">Semanal</TabsTrigger>
            <TabsTrigger value="monthly">Mensal</TabsTrigger>
            <TabsTrigger value="seasonal">Temporada</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Evolução de Desempenho</span>
              <Select defaultValue="velocity">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Métricas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="velocity">Velocidade (km/h)</SelectItem>
                  <SelectItem value="distance">Distância (km)</SelectItem>
                  <SelectItem value="acceleration">Aceleração (m/s²)</SelectItem>
                </SelectContent>
              </Select>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer config={performanceConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={performanceData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return `${date.getDate()}/${date.getMonth() + 1}`;
                    }}
                  />
                  <YAxis hide />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                  />
                  <Area
                    type="monotone"
                    dataKey="velocity"
                    stroke="var(--color-velocity)"
                    fill="var(--color-velocity)"
                    fillOpacity={0.2}
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Distância Percorrida</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer config={performanceConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={performanceData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return `${date.getDate()}/${date.getMonth() + 1}`;
                    }}
                  />
                  <YAxis hide />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                  />
                  <Area
                    type="monotone"
                    dataKey="distance"
                    stroke="var(--color-distance)"
                    fill="var(--color-distance)"
                    fillOpacity={0.2}
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Aceleração</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer config={performanceConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={performanceData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return `${date.getDate()}/${date.getMonth() + 1}`;
                    }}
                  />
                  <YAxis hide />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                  />
                  <Area
                    type="monotone"
                    dataKey="acceleration"
                    stroke="var(--color-acceleration)"
                    fill="var(--color-acceleration)"
                    fillOpacity={0.2}
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
