
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, Star, MapPin, BarChart3, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";

export function VirtualScouting() {
  // Dados de jogadores de outros clubes
  const externalPlayersData = [
    { id: 1, name: "João Silva", age: 22, club: "FC Porto", country: "Portugal", position: "Atacante", matches: 28, goals: 15, assists: 7, rating: 8.2, price: 25000000, match_rate: 89, fit_rate: 85 },
    { id: 2, name: "Miguel López", age: 24, club: "Sevilla", country: "Espanha", position: "Meia", matches: 30, goals: 8, assists: 12, rating: 7.9, price: 22000000, match_rate: 82, fit_rate: 80 },
    { id: 3, name: "Takashi Yamamoto", age: 23, club: "Ajax", country: "Japão", position: "Lateral", matches: 26, goals: 2, assists: 6, rating: 7.6, price: 18000000, match_rate: 75, fit_rate: 90 },
    { id: 4, name: "Pierre Dubois", age: 25, club: "Lyon", country: "França", position: "Volante", matches: 32, goals: 5, assists: 4, rating: 7.8, price: 20000000, match_rate: 78, fit_rate: 75 },
    { id: 5, name: "Ahmed Hassan", age: 21, club: "Al-Ahly", country: "Egito", position: "Ponta", matches: 24, goals: 10, assists: 8, rating: 7.7, price: 15000000, match_rate: 73, fit_rate: 82 },
    { id: 6, name: "Karl Schmidt", age: 27, club: "Borussia Dortmund", country: "Alemanha", position: "Zagueiro", matches: 29, goals: 1, assists: 2, rating: 8.0, price: 28000000, match_rate: 88, fit_rate: 78 },
    { id: 7, name: "James Wilson", age: 19, club: "Ajax", country: "Inglaterra", position: "Meia", matches: 20, goals: 3, assists: 5, rating: 7.4, price: 12000000, match_rate: 70, fit_rate: 92 },
  ];

  // Dados para o gráfico de radar (comparação de atributos)
  const radarData = [
    { subject: 'Finalização', player: 85, time: 80, fullMark: 100 },
    { subject: 'Passe', player: 75, time: 82, fullMark: 100 },
    { subject: 'Velocidade', player: 90, time: 76, fullMark: 100 },
    { subject: 'Drible', player: 82, time: 75, fullMark: 100 },
    { subject: 'Físico', player: 70, time: 72, fullMark: 100 },
    { subject: 'Defesa', player: 65, time: 68, fullMark: 100 },
  ];

  // Configuração para o gráfico de radar
  const chartConfig = {
    player: { label: "Jogador", color: "#8B5CF6" },
    time: { label: "Média do Time", color: "#10B981" }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
            <div>
              <CardTitle>Scouting Virtual</CardTitle>
              <CardDescription>
                Análise de jogadores de outros clubes com base em dados públicos
              </CardDescription>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar jogador..." className="h-9 md:w-[180px]" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9">
                      <MapPin className="h-4 w-4 mr-2" />
                      Região
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Europa</DropdownMenuItem>
                    <DropdownMenuItem>América do Sul</DropdownMenuItem>
                    <DropdownMenuItem>América do Norte</DropdownMenuItem>
                    <DropdownMenuItem>África</DropdownMenuItem>
                    <DropdownMenuItem>Ásia</DropdownMenuItem>
                    <DropdownMenuItem>Oceania</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>PDF</DropdownMenuItem>
                    <DropdownMenuItem>Excel</DropdownMenuItem>
                    <DropdownMenuItem>CSV</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-left text-xs font-medium text-muted-foreground">Jogador</th>
                  <th className="p-3 text-left text-xs font-medium text-muted-foreground">Idade</th>
                  <th className="p-3 text-left text-xs font-medium text-muted-foreground">Clube</th>
                  <th className="p-3 text-left text-xs font-medium text-muted-foreground">Posição</th>
                  <th className="p-3 text-left text-xs font-medium text-muted-foreground">J</th>
                  <th className="p-3 text-left text-xs font-medium text-muted-foreground">G</th>
                  <th className="p-3 text-left text-xs font-medium text-muted-foreground">A</th>
                  <th className="p-3 text-left text-xs font-medium text-muted-foreground">Nota</th>
                  <th className="p-3 text-left text-xs font-medium text-muted-foreground">Valor Est.</th>
                  <th className="p-3 text-left text-xs font-medium text-muted-foreground">Match</th>
                  <th className="p-3 text-left text-xs font-medium text-muted-foreground">Fit</th>
                  <th className="p-3 text-xs font-medium text-muted-foreground">Ações</th>
                </tr>
              </thead>
              <tbody>
                {externalPlayersData.sort((a, b) => b.match_rate - a.match_rate).map((player) => (
                  <tr key={player.id} className="border-t">
                    <td className="p-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{player.name}</div>
                          <div className="text-xs text-muted-foreground">{player.country}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-sm">{player.age}</td>
                    <td className="p-3 text-sm">{player.club}</td>
                    <td className="p-3 text-sm">{player.position}</td>
                    <td className="p-3 text-sm">{player.matches}</td>
                    <td className="p-3 text-sm">{player.goals}</td>
                    <td className="p-3 text-sm">{player.assists}</td>
                    <td className="p-3 text-sm">{player.rating}</td>
                    <td className="p-3 text-sm">€{(player.price / 1000000).toFixed(1)}M</td>
                    <td className="p-3 text-sm">
                      <Badge variant={
                        player.match_rate >= 85 ? "default" :
                        player.match_rate >= 75 ? "secondary" : "outline"
                      }>
                        {player.match_rate}%
                      </Badge>
                    </td>
                    <td className="p-3 text-sm">
                      <Badge variant={
                        player.fit_rate >= 85 ? "default" :
                        player.fit_rate >= 75 ? "secondary" : "outline"
                      }>
                        {player.fit_rate}%
                      </Badge>
                    </td>
                    <td className="p-3 text-sm">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Search className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Star className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <BarChart3 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Comparação de Atributos</CardTitle>
            <CardDescription>João Silva vs. Média da Equipe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ChartContainer config={chartConfig}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Jogador" dataKey="player" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
                  <Radar name="Média do Time" dataKey="time" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                  <Legend />
                  <ChartTooltip />
                </RadarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análise de Compatibilidade</CardTitle>
            <CardDescription>João Silva - FC Porto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Compatibilidade com o Modelo de Jogo</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Excelente encaixe no sistema ofensivo do time, com alta mobilidade e finalização.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Compatibilidade com a Filosofia do Clube</span>
                  <span className="font-medium">78%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '78%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Bom alinhamento com os valores e cultura do clube, com potencial de adaptação.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Valor de Mercado x Orçamento</span>
                  <span className="font-medium">65%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500" style={{ width: '65%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Valor um pouco elevado para o orçamento atual, mas dentro do possível com ajustes.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Potencial de Valorização</span>
                  <span className="font-medium">90%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '90%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Alto potencial de crescimento e valorização futura considerando idade e evolução.
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <div className="flex gap-2">
                <Button variant="outline">Relatório Detalhado</Button>
                <Button>Adicionar à Watchlist</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
