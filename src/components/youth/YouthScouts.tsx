
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Plus, MapPin, Calendar, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function YouthScouts() {
  const scoutsData = [
    { id: 1, name: "Ricardo Almeida", region: "Brasil - Sul", experience: 8, talents_discovered: 14, status: "Ativo", current_assignment: "Campeonato Estadual Sub-17" },
    { id: 2, name: "José Ferreira", region: "Brasil - Sudeste", experience: 12, talents_discovered: 23, status: "Ativo", current_assignment: "Copa São Paulo de Futebol Júnior" },
    { id: 3, name: "Miguel Torres", region: "Argentina", experience: 7, talents_discovered: 11, status: "Ativo", current_assignment: "Torneio Nacional Sub-19 Argentina" },
    { id: 4, name: "André Costa", region: "Brasil - Nordeste", experience: 5, talents_discovered: 9, status: "Ativo", current_assignment: "Copa do Nordeste Sub-17" },
    { id: 5, name: "Pablo Sanchez", region: "Europa - Espanha", experience: 10, talents_discovered: 18, status: "Em viagem", current_assignment: "La Liga Promises" },
    { id: 6, name: "Lucas Oliveira", region: "Brasil - Centro-Oeste", experience: 4, talents_discovered: 6, status: "Férias", current_assignment: null },
  ];

  const prospectsData = [
    { id: 1, name: "Matheus Silva", age: 16, club: "União FC", position: "Atacante", region: "Brasil - SP", potential: 5, scout: "José Ferreira", lastWatch: "15/03/2025", status: "Em observação" },
    { id: 2, name: "Eduardo Santos", age: 15, club: "Flamengo", position: "Meia", region: "Brasil - RJ", potential: 4, scout: "Ricardo Almeida", lastWatch: "02/04/2025", status: "Em negociação" },
    { id: 3, name: "Felipe Rodrigues", age: 17, club: "Grêmio", position: "Zagueiro", region: "Brasil - RS", potential: 5, scout: "Ricardo Almeida", lastWatch: "10/04/2025", status: "Em observação" },
    { id: 4, name: "Santiago Martinez", age: 16, club: "River Plate", position: "Goleiro", region: "Argentina", potential: 4, scout: "Miguel Torres", lastWatch: "05/03/2025", status: "Recomendado" },
    { id: 5, name: "Pedro Lima", age: 14, club: "Bahia", position: "Ponta", region: "Brasil - BA", potential: 3, scout: "André Costa", lastWatch: "20/03/2025", status: "Em observação" },
    { id: 6, name: "Rafael Torres", age: 17, club: "Barcelona", position: "Lateral", region: "Espanha", potential: 5, scout: "Pablo Sanchez", lastWatch: "01/04/2025", status: "Recomendado" },
    { id: 7, name: "Lucas Ferreira", age: 16, club: "Atlético Mineiro", position: "Meia", region: "Brasil - MG", potential: 4, scout: "José Ferreira", lastWatch: "12/04/2025", status: "Em observação" },
  ];

  const upcomingEvents = [
    { id: 1, name: "Copa São Paulo de Futebol Júnior", location: "São Paulo, Brasil", startDate: "02/01/2026", endDate: "25/01/2026", category: "Sub-20", scouts: ["José Ferreira", "Ricardo Almeida"] },
    { id: 2, name: "Campeonato Sul-Americano Sub-17", location: "Santiago, Chile", startDate: "15/03/2026", endDate: "30/03/2026", category: "Sub-17", scouts: ["Miguel Torres"] },
    { id: 3, name: "Torneio Internacional de Barcelona", location: "Barcelona, Espanha", startDate: "05/06/2025", endDate: "12/06/2025", category: "Sub-16", scouts: ["Pablo Sanchez"] },
    { id: 4, name: "Copa do Nordeste Sub-17", location: "Recife, Brasil", startDate: "10/05/2025", endDate: "25/05/2025", category: "Sub-17", scouts: ["André Costa"] },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Olheiros Ativos</CardTitle>
            <CardDescription className="text-2xl font-bold">
              {scoutsData.filter(scout => scout.status === "Ativo" || scout.status === "Em viagem").length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">De um total de {scoutsData.length} olheiros</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Prospectos em Observação</CardTitle>
            <CardDescription className="text-2xl font-bold">
              {prospectsData.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Jogadores sendo monitorados</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Eventos Futuros</CardTitle>
            <CardDescription className="text-2xl font-bold">
              {upcomingEvents.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Competições e torneios agendados</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="scouts">
        <TabsList className="mb-4">
          <TabsTrigger value="scouts">Olheiros</TabsTrigger>
          <TabsTrigger value="prospects">Prospectos</TabsTrigger>
          <TabsTrigger value="events">Eventos</TabsTrigger>
        </TabsList>

        <TabsContent value="scouts">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
                <div>
                  <CardTitle>Equipe de Olheiros</CardTitle>
                  <CardDescription>Profissionais responsáveis pela detecção de talentos</CardDescription>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar olheiro..." className="h-9 md:w-[180px]" />
                  </div>
                  <Button size="sm" className="h-9">
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Olheiro
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Região</TableHead>
                      <TableHead>Experiência</TableHead>
                      <TableHead>Talentos Descobertos</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Missão Atual</TableHead>
                      <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scoutsData.map((scout) => (
                      <TableRow key={scout.id}>
                        <TableCell className="font-medium">{scout.name}</TableCell>
                        <TableCell>{scout.region}</TableCell>
                        <TableCell>{scout.experience} anos</TableCell>
                        <TableCell>{scout.talents_discovered}</TableCell>
                        <TableCell>
                          <Badge variant={
                            scout.status === "Ativo" ? "default" : 
                            scout.status === "Em viagem" ? "secondary" : "outline"
                          }>
                            {scout.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{scout.current_assignment || "—"}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                              <Search className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                              <Calendar className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prospects">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
                <div>
                  <CardTitle>Prospectos</CardTitle>
                  <CardDescription>Jovens talentos em monitoramento</CardDescription>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar prospecto..." className="h-9 md:w-[180px]" />
                  </div>
                  <Button variant="outline" size="sm" className="h-9">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                  <Button size="sm" className="h-9">
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Prospecto
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Idade</TableHead>
                      <TableHead>Posição</TableHead>
                      <TableHead>Clube</TableHead>
                      <TableHead>Região</TableHead>
                      <TableHead>Potencial</TableHead>
                      <TableHead>Olheiro</TableHead>
                      <TableHead>Última Observação</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {prospectsData.map((prospect) => (
                      <TableRow key={prospect.id}>
                        <TableCell className="font-medium">{prospect.name}</TableCell>
                        <TableCell>{prospect.age}</TableCell>
                        <TableCell>{prospect.position}</TableCell>
                        <TableCell>{prospect.club}</TableCell>
                        <TableCell>{prospect.region}</TableCell>
                        <TableCell>
                          <div className="flex">
                            {Array(prospect.potential).fill(0).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            {Array(5 - prospect.potential).fill(0).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-muted-foreground opacity-30" />
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{prospect.scout}</TableCell>
                        <TableCell>{prospect.lastWatch}</TableCell>
                        <TableCell>
                          <Badge variant={
                            prospect.status === "Recomendado" ? "default" : 
                            prospect.status === "Em negociação" ? "secondary" : "outline"
                          }>
                            {prospect.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Eventos e Competições</CardTitle>
                <CardDescription>Torneios programados para observação de talentos</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Evento
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-medium text-lg">{event.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.startDate} a {event.endDate}</span>
                        </div>
                      </div>
                      <div className="mt-3 md:mt-0">
                        <Badge>{event.category}</Badge>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm font-medium">Olheiros designados:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {event.scouts.map((scout, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>{scout.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span>{scout}</span>
                          </div>
                        ))}
                        <Button variant="outline" size="sm" className="h-8 rounded-full">
                          <Plus className="h-4 w-4 mr-1" />
                          Adicionar
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">Detalhes</Button>
                      <Button size="sm">Relatórios</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
