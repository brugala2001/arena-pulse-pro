
import { Activity, Users, Calendar, CreditCard, Trophy, Heart, AlertCircle } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <p className="text-muted-foreground">
        Bem-vindo ao Arena Pulse Pro. Aqui está um resumo das informações do seu clube.
      </p>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="medical">Saúde</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard 
              title="Total de Jogadores"
              value="27"
              description="3 jogadores adicionados este mês"
              icon={<Users className="h-4 w-4" />}
              trend={{ value: 12, positive: true }}
            />
            <StatsCard 
              title="Próxima Partida"
              value="2 dias"
              description="vs Real Madrid - Camp Nou"
              icon={<Calendar className="h-4 w-4" />}
            />
            <StatsCard 
              title="Desempenho Geral"
              value="87%"
              description="Baseado em estatísticas do último mês"
              icon={<Activity className="h-4 w-4" />}
              trend={{ value: 4, positive: true }}
            />
            <StatsCard 
              title="Orçamento Restante"
              value="€2.4M"
              description="Para janela de transferências"
              icon={<CreditCard className="h-4 w-4" />}
              trend={{ value: 8, positive: false }}
            />
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Últimos Resultados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { opponent: "Juventus", result: "V", score: "2-0", date: "14/04/2025", competition: "Champions League" },
                    { opponent: "Valencia", result: "V", score: "3-1", date: "10/04/2025", competition: "La Liga" },
                    { opponent: "Sevilla", result: "E", score: "2-2", date: "05/04/2025", competition: "La Liga" },
                    { opponent: "Bayern Munich", result: "D", score: "1-3", date: "02/04/2025", competition: "Champions League" },
                  ].map((match, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-2">
                        <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs text-white ${
                          match.result === "V" ? "bg-team-green" : 
                          match.result === "E" ? "bg-team-orange" : "bg-red-500"
                        }`}>
                          {match.result}
                        </div>
                        <span className="font-medium">{match.opponent}</span>
                        <span className="text-sm text-muted-foreground">{match.score}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {match.date} · {match.competition}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Próximos Jogos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { opponent: "Real Madrid", date: "18/04/2025", competition: "La Liga", location: "Casa" },
                    { opponent: "Atlético Madrid", date: "25/04/2025", competition: "La Liga", location: "Fora" },
                    { opponent: "PSG", date: "30/04/2025", competition: "Champions League", location: "Casa" },
                  ].map((match, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Trophy className="h-5 w-5 text-team-blue" />
                      </div>
                      <div>
                        <p className="font-medium">{match.opponent}</p>
                        <p className="text-xs text-muted-foreground">
                          {match.date} · {match.competition} · {match.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas de Equipe</CardTitle>
                <CardDescription>Desempenho nos últimos 5 jogos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Posse de Bola</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-team-blue" style={{ width: "65%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Finalizações por Jogo</span>
                    <span className="text-sm font-medium">17</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-team-blue" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Precisão de Passes</span>
                    <span className="text-sm font-medium">89%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-team-blue" style={{ width: "89%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Artilheiros</CardTitle>
                <CardDescription>Gols na temporada atual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Lionel Messi", position: "ATA", goals: 23 },
                    { name: "Luis Suárez", position: "ATA", goals: 18 },
                    { name: "Antoine Griezmann", position: "ATA", goals: 12 },
                    { name: "Frenkie de Jong", position: "MEI", goals: 7 },
                  ].map((player, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-team-blue text-white">
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-medium">{player.name}</p>
                          <p className="text-xs text-muted-foreground">{player.position}</p>
                        </div>
                      </div>
                      <div className="font-bold">{player.goals}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Assistências</CardTitle>
                <CardDescription>Assistências na temporada atual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Jordi Alba", position: "LAT", assists: 14 },
                    { name: "Lionel Messi", position: "ATA", assists: 12 },
                    { name: "Sergio Busquets", position: "VOL", assists: 8 },
                    { name: "Pedri", position: "MEI", assists: 7 },
                  ].map((player, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-team-green text-white">
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-medium">{player.name}</p>
                          <p className="text-xs text-muted-foreground">{player.position}</p>
                        </div>
                      </div>
                      <div className="font-bold">{player.assists}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="medical" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Status da Equipe</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-team-green" />
                      <span>Disponíveis</span>
                    </div>
                    <span className="font-medium">23</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-team-orange" />
                      <span>Em recuperação</span>
                    </div>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-red-500" />
                      <span>Lesionados</span>
                    </div>
                    <span className="font-medium">2</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Jogadores Lesionados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Ansu Fati",
                      position: "ATA",
                      injury: "Lesão no joelho",
                      expectedReturn: "3 semanas",
                      status: "Em tratamento",
                    },
                    {
                      name: "Ronald Araújo",
                      position: "ZAG",
                      injury: "Lesão muscular na coxa",
                      expectedReturn: "2 semanas",
                      status: "Em reabilitação",
                    },
                  ].map((player, i) => (
                    <div key={i} className="flex items-center border-b pb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Heart className="h-5 w-5 text-red-500" />
                          <p className="font-medium">{player.name}</p>
                          <span className="rounded-full bg-muted px-2 py-1 text-xs">
                            {player.position}
                          </span>
                        </div>
                        <p className="mt-1 text-sm">{player.injury}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Retorno em: {player.expectedReturn}</p>
                        <p className="text-sm text-muted-foreground">{player.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 rounded-lg border border-dashed border-team-orange bg-muted/50 p-4">
                  <div className="flex items-center gap-2 text-team-orange">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm font-medium">Dica Médica</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Os jogadores que retornaram de lesão recentemente precisam de monitoramento especial durante os treinos desta semana.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
