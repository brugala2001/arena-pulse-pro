
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function YouthCategories() {
  // Dados simulados de jogadores das categorias de base
  const youthPlayersData = [
    { id: 1, name: "Gabriel Silva", age: 17, category: "Sub-19", position: "Atacante", nationality: "Brasil", joining: "2021", potential: "Alto", evaluation: 9.2, status: "Ativo" },
    { id: 2, name: "Lucas Mendes", age: 16, category: "Sub-17", position: "Meia", nationality: "Brasil", joining: "2020", potential: "Alto", evaluation: 8.7, status: "Ativo" },
    { id: 3, name: "Pedro Alves", age: 15, category: "Sub-17", position: "Goleiro", nationality: "Brasil", joining: "2022", potential: "Médio", evaluation: 7.5, status: "Ativo" },
    { id: 4, name: "Juan Martinez", age: 14, category: "Sub-15", position: "Lateral", nationality: "Argentina", joining: "2023", potential: "Alto", evaluation: 8.9, status: "Ativo" },
    { id: 5, name: "Carlos Oliveira", age: 18, category: "Sub-19", position: "Zagueiro", nationality: "Brasil", joining: "2019", potential: "Médio", evaluation: 7.8, status: "Ativo" },
    { id: 6, name: "Mateo Rodriguez", age: 16, category: "Sub-17", position: "Volante", nationality: "Uruguai", joining: "2022", potential: "Alto", evaluation: 9.0, status: "Lesionado" },
    { id: 7, name: "Felipe Santos", age: 17, category: "Sub-19", position: "Ponta", nationality: "Brasil", joining: "2020", potential: "Médio", evaluation: 8.3, status: "Ativo" },
    { id: 8, name: "Arthur Costa", age: 15, category: "Sub-15", position: "Atacante", nationality: "Brasil", joining: "2021", potential: "Alto", evaluation: 9.1, status: "Ativo" },
    { id: 9, name: "Thiago Pereira", age: 18, category: "Sub-19", position: "Volante", nationality: "Brasil", joining: "2019", potential: "Alto", evaluation: 8.8, status: "Emprestado" },
  ];

  // Dados de categorias
  const categoryData = [
    { category: "Sub-19", players: 24, coaches: 3, trainings: 5, matches_played: 15, wins: 10, draws: 3, losses: 2 },
    { category: "Sub-17", players: 28, coaches: 3, trainings: 5, matches_played: 18, wins: 12, draws: 2, losses: 4 },
    { category: "Sub-15", players: 30, coaches: 4, trainings: 4, matches_played: 14, wins: 9, draws: 4, losses: 1 },
    { category: "Sub-13", players: 32, coaches: 4, trainings: 4, matches_played: 12, wins: 7, draws: 3, losses: 2 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {categoryData.map((category) => (
          <Card key={category.category}>
            <CardHeader className="pb-2">
              <CardTitle>{category.category}</CardTitle>
              <CardDescription>{category.players} jogadores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Treinadores:</span>
                  <span>{category.coaches}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Treinos/semana:</span>
                  <span>{category.trainings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Jogos:</span>
                  <span>{category.matches_played}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-muted-foreground">Campanha:</span>
                  <span>{category.wins}V {category.draws}E {category.losses}D</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="sub19">Sub-19</TabsTrigger>
          <TabsTrigger value="sub17">Sub-17</TabsTrigger>
          <TabsTrigger value="sub15">Sub-15</TabsTrigger>
          <TabsTrigger value="sub13">Sub-13</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
                <div>
                  <CardTitle>Atletas da Base</CardTitle>
                  <CardDescription>Todos os jogadores das categorias de base</CardDescription>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar atleta..." className="h-9 md:w-[180px]" />
                  </div>
                  <Button variant="outline" size="sm" className="h-9">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                  <Button size="sm" className="h-9">
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Atleta
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
                      <TableHead>Categoria</TableHead>
                      <TableHead>Posição</TableHead>
                      <TableHead>Nacionalidade</TableHead>
                      <TableHead>Ingresso</TableHead>
                      <TableHead>Potencial</TableHead>
                      <TableHead className="text-right">Avaliação</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {youthPlayersData.map((player) => (
                      <TableRow key={player.id}>
                        <TableCell className="font-medium">{player.name}</TableCell>
                        <TableCell>{player.age}</TableCell>
                        <TableCell>{player.category}</TableCell>
                        <TableCell>{player.position}</TableCell>
                        <TableCell>{player.nationality}</TableCell>
                        <TableCell>{player.joining}</TableCell>
                        <TableCell>
                          <Badge variant={player.potential === "Alto" ? "default" : "secondary"}>
                            {player.potential}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{player.evaluation}</TableCell>
                        <TableCell>
                          <Badge variant={
                            player.status === "Ativo" ? "default" : 
                            player.status === "Lesionado" ? "destructive" : "outline"
                          }>
                            {player.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                              <DropdownMenuItem>Editar</DropdownMenuItem>
                              <DropdownMenuItem>Histórico</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Promover</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sub19">
          <Card>
            <CardHeader>
              <CardTitle>Categoria Sub-19</CardTitle>
              <CardDescription>Atletas da categoria Sub-19</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Idade</TableHead>
                      <TableHead>Posição</TableHead>
                      <TableHead>Nacionalidade</TableHead>
                      <TableHead>Potencial</TableHead>
                      <TableHead className="text-right">Avaliação</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {youthPlayersData
                      .filter((player) => player.category === "Sub-19")
                      .map((player) => (
                        <TableRow key={player.id}>
                          <TableCell className="font-medium">{player.name}</TableCell>
                          <TableCell>{player.age}</TableCell>
                          <TableCell>{player.position}</TableCell>
                          <TableCell>{player.nationality}</TableCell>
                          <TableCell>
                            <Badge variant={player.potential === "Alto" ? "default" : "secondary"}>
                              {player.potential}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">{player.evaluation}</TableCell>
                          <TableCell>
                            <Badge variant={
                              player.status === "Ativo" ? "default" : 
                              player.status === "Lesionado" ? "destructive" : "outline"
                            }>
                              {player.status}
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

        <TabsContent value="sub17">
          <Card>
            <CardHeader>
              <CardTitle>Categoria Sub-17</CardTitle>
              <CardDescription>Atletas da categoria Sub-17</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Conteúdo similar ao do Sub-19, filtrado para Sub-17 */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sub15">
          <Card>
            <CardHeader>
              <CardTitle>Categoria Sub-15</CardTitle>
              <CardDescription>Atletas da categoria Sub-15</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Conteúdo similar ao do Sub-19, filtrado para Sub-15 */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sub13">
          <Card>
            <CardHeader>
              <CardTitle>Categoria Sub-13</CardTitle>
              <CardDescription>Atletas da categoria Sub-13</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Conteúdo similar ao do Sub-19, filtrado para Sub-13 */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
