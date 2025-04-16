
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function YouthDevelopment() {
  // Dados de desenvolvimento de habilidades dos atletas
  const developmentData = [
    { month: 'Jan', tecnica: 72, fisica: 68, tatica: 65, mental: 70 },
    { month: 'Fev', tecnica: 73, fisica: 70, tatica: 67, mental: 72 },
    { month: 'Mar', tecnica: 74, fisica: 73, tatica: 69, mental: 73 },
    { month: 'Abr', tecnica: 76, fisica: 75, tatica: 72, mental: 75 },
    { month: 'Mai', tecnica: 78, fisica: 76, tatica: 74, mental: 77 },
    { month: 'Jun', tecnica: 80, fisica: 78, tatica: 76, mental: 78 },
  ];

  // Configuração para o gráfico
  const chartConfig = {
    tecnica: {
      label: "Técnica",
      color: "#8B5CF6"
    },
    fisica: {
      label: "Física",
      color: "#10B981"
    },
    tatica: {
      label: "Tática",
      color: "#F97316"
    },
    mental: {
      label: "Mental",
      color: "#06B6D4"
    }
  };

  // Dados dos atletas destacados
  const topTalentsData = [
    { 
      id: 1, 
      name: "Gabriel Silva", 
      age: 17, 
      position: "Atacante", 
      category: "Sub-19",
      technical: 85,
      physical: 80,
      tactical: 78,
      mental: 82,
      promotion_chance: 90,
      image: "/placeholder.svg"
    },
    { 
      id: 2, 
      name: "Lucas Mendes", 
      age: 16, 
      position: "Meia", 
      category: "Sub-17",
      technical: 82,
      physical: 75,
      tactical: 80,
      mental: 79,
      promotion_chance: 85,
      image: "/placeholder.svg"
    },
    { 
      id: 3, 
      name: "Juan Martinez", 
      age: 14, 
      position: "Lateral", 
      category: "Sub-15",
      technical: 79,
      physical: 78,
      tactical: 75,
      mental: 76,
      promotion_chance: 80,
      image: "/placeholder.svg"
    },
    { 
      id: 4, 
      name: "Arthur Costa", 
      age: 15, 
      position: "Atacante", 
      category: "Sub-15",
      technical: 83,
      physical: 77,
      tactical: 73,
      mental: 78,
      promotion_chance: 82,
      image: "/placeholder.svg"
    },
  ];

  // Planos de desenvolvimento
  const developmentPlans = [
    { id: 1, title: "Plano de Desenvolvimento Técnico", category: "Sub-19", players: 8, coach: "Fernando Silva", duration: "6 meses", focus: "Finalização", status: "Em andamento" },
    { id: 2, title: "Plano de Desenvolvimento Físico", category: "Sub-17", players: 12, coach: "Roberto Costa", duration: "3 meses", focus: "Resistência", status: "Em andamento" },
    { id: 3, title: "Plano de Desenvolvimento Tático", category: "Sub-19", players: 10, coach: "Carlos Mendes", duration: "4 meses", focus: "Posicionamento", status: "Planejado" },
    { id: 4, title: "Plano de Desenvolvimento Mental", category: "Sub-15", players: 15, coach: "Paulo Ferreira", duration: "6 meses", focus: "Concentração", status: "Em andamento" },
    { id: 5, title: "Plano de Desenvolvimento de Goleiros", category: "Todas", players: 6, coach: "Marcos Oliveira", duration: "8 meses", focus: "Reflexos", status: "Planejado" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Evolução de Desenvolvimento</CardTitle>
          <CardDescription>Progresso médio de habilidades por categoria nos últimos 6 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] mt-4">
            <ChartContainer config={chartConfig}>
              <LineChart data={developmentData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} domain={[60, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="tecnica" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="fisica" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="tatica" 
                  stroke="#F97316" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="mental" 
                  stroke="#06B6D4" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Principais Talentos</CardTitle>
            <CardDescription>Jovens com maior potencial de promoção</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {topTalentsData.map((player) => (
                <div key={player.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border rounded-lg">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={player.image} alt={player.name} />
                    <AvatarFallback>{player.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{player.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          {player.age} anos • {player.position} • {player.category}
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <Badge className="bg-green-600">{player.promotion_chance}% chance de promoção</Badge>
                      </div>
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Técnica</span>
                            <span>{player.technical}/100</span>
                          </div>
                          <Progress value={player.technical} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Física</span>
                            <span>{player.physical}/100</span>
                          </div>
                          <Progress value={player.physical} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Tática</span>
                            <span>{player.tactical}/100</span>
                          </div>
                          <Progress value={player.tactical} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Mental</span>
                            <span>{player.mental}/100</span>
                          </div>
                          <Progress value={player.mental} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="outline">Ver Todos os Talentos</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Planos de Desenvolvimento</CardTitle>
            <CardDescription>Programas específicos para evolução de atletas</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active">
              <TabsList className="mb-4 w-full">
                <TabsTrigger value="active" className="flex-1">Ativos</TabsTrigger>
                <TabsTrigger value="planned" className="flex-1">Planejados</TabsTrigger>
                <TabsTrigger value="completed" className="flex-1">Concluídos</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4">
                {developmentPlans
                  .filter(plan => plan.status === "Em andamento")
                  .map(plan => (
                    <div key={plan.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{plan.title}</h3>
                          <div className="text-sm text-muted-foreground mt-1">
                            Categoria: {plan.category} • Atletas: {plan.players}
                          </div>
                          <div className="text-sm mt-3">
                            <span className="text-muted-foreground">Treinador:</span> {plan.coach}
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Duração:</span> {plan.duration}
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Foco:</span> {plan.focus}
                          </div>
                        </div>
                        <Badge>{plan.status}</Badge>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline">Detalhes</Button>
                        <Button size="sm">Atualizar</Button>
                      </div>
                    </div>
                ))}
              </TabsContent>

              <TabsContent value="planned" className="space-y-4">
                {developmentPlans
                  .filter(plan => plan.status === "Planejado")
                  .map(plan => (
                    <div key={plan.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{plan.title}</h3>
                          <div className="text-sm text-muted-foreground mt-1">
                            Categoria: {plan.category} • Atletas: {plan.players}
                          </div>
                          <div className="text-sm mt-3">
                            <span className="text-muted-foreground">Treinador:</span> {plan.coach}
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Duração:</span> {plan.duration}
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Foco:</span> {plan.focus}
                          </div>
                        </div>
                        <Badge variant="outline">{plan.status}</Badge>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline">Detalhes</Button>
                        <Button size="sm">Iniciar</Button>
                      </div>
                    </div>
                ))}
              </TabsContent>

              <TabsContent value="completed">
                <div className="border rounded-lg p-6 text-center">
                  <p className="text-muted-foreground">Nenhum plano de desenvolvimento concluído recentemente.</p>
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-4 flex justify-end">
              <Button>
                Criar Novo Plano
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
