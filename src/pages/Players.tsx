
import { useState } from "react";
import { 
  Search, 
  Plus, 
  Filter, 
  Trophy, 
  Heart, 
  Check, 
  X, 
  ChevronDown 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Player = {
  id: number;
  name: string;
  position: string;
  age: number;
  nationality: string;
  status: "Disponível" | "Em recuperação" | "Lesionado";
  number: number;
  contractEnd: string;
  value: string;
  photo?: string;
};

const mockPlayers: Player[] = [
  {
    id: 1,
    name: "Lionel Messi",
    position: "ATA",
    age: 36,
    nationality: "Argentina",
    status: "Disponível",
    number: 10,
    contractEnd: "Jun 2026",
    value: "€45M",
  },
  {
    id: 2,
    name: "Ronald Araújo",
    position: "ZAG",
    age: 25,
    nationality: "Uruguai",
    status: "Lesionado",
    number: 4,
    contractEnd: "Jun 2025",
    value: "€60M",
  },
  {
    id: 3,
    name: "Frenkie de Jong",
    position: "VOL",
    age: 27,
    nationality: "Holanda",
    status: "Disponível",
    number: 21,
    contractEnd: "Jun 2026",
    value: "€80M",
  },
  {
    id: 4,
    name: "Pedri",
    position: "MEI",
    age: 22,
    nationality: "Espanha",
    status: "Disponível",
    number: 8,
    contractEnd: "Jun 2028",
    value: "€100M",
  },
  {
    id: 5,
    name: "Ansu Fati",
    position: "ATA",
    age: 21,
    nationality: "Espanha",
    status: "Em recuperação",
    number: 11,
    contractEnd: "Jun 2027",
    value: "€50M",
  },
  {
    id: 6,
    name: "Marc-André ter Stegen",
    position: "GOL",
    age: 32,
    nationality: "Alemanha",
    status: "Disponível",
    number: 1,
    contractEnd: "Jun 2025",
    value: "€30M",
  },
  {
    id: 7,
    name: "Jules Koundé",
    position: "ZAG/LAT",
    age: 25,
    nationality: "França",
    status: "Disponível",
    number: 23,
    contractEnd: "Jun 2027",
    value: "€70M",
  },
  {
    id: 8,
    name: "Gavi",
    position: "MEI",
    age: 20,
    nationality: "Espanha",
    status: "Em recuperação",
    number: 6,
    contractEnd: "Jun 2029",
    value: "€90M",
  },
];

export default function Players() {
  const [searchTerm, setSearchTerm] = useState("");
  const [players, setPlayers] = useState<Player[]>(mockPlayers);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.nationality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Elenco</h1>
          <p className="text-muted-foreground">
            Gerencie os jogadores do seu time, contratos e estatísticas.
          </p>
        </div>
        <Button className="bg-team-blue hover:bg-team-blue/90">
          <Plus className="mr-2 h-4 w-4" />
          Novo Jogador
        </Button>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="list">Lista</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="tactics">Tática</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar jogador..."
                className="pl-8 w-[250px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Todos os Jogadores</DropdownMenuItem>
                <DropdownMenuItem>Disponíveis</DropdownMenuItem>
                <DropdownMenuItem>Em Recuperação</DropdownMenuItem>
                <DropdownMenuItem>Lesionados</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">Nº</TableHead>
                    <TableHead>Jogador</TableHead>
                    <TableHead>Posição</TableHead>
                    <TableHead className="text-center">Idade</TableHead>
                    <TableHead>Nacionalidade</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Fim do Contrato</TableHead>
                    <TableHead className="text-right">Valor de Mercado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPlayers.map((player) => (
                    <TableRow key={player.id}>
                      <TableCell className="font-medium">{player.number}</TableCell>
                      <TableCell className="font-medium">{player.name}</TableCell>
                      <TableCell>{player.position}</TableCell>
                      <TableCell className="text-center">{player.age}</TableCell>
                      <TableCell>{player.nationality}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              player.status === "Disponível"
                                ? "bg-team-green"
                                : player.status === "Em recuperação"
                                ? "bg-team-orange"
                                : "bg-red-500"
                            }`}
                          />
                          <span>{player.status}</span>
                        </div>
                      </TableCell>
                      <TableCell>{player.contractEnd}</TableCell>
                      <TableCell className="text-right">{player.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPlayers.map((player) => (
              <Card key={player.id} className="overflow-hidden">
                <div className="bg-team-blue h-32 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 flex items-center gap-2">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        player.status === "Disponível"
                          ? "bg-team-green"
                          : player.status === "Em recuperação"
                          ? "bg-team-orange"
                          : "bg-red-500"
                      }`}
                    />
                    <span className="text-xs font-medium text-white">{player.status}</span>
                  </div>
                  <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-team-blue">
                    {player.number}
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="text-center mb-4">
                    <div className="font-bold">{player.name}</div>
                    <div className="text-sm text-muted-foreground">{player.position} · {player.age} anos</div>
                  </div>
                  <div className="grid grid-cols-2 text-sm gap-y-2">
                    <div className="text-muted-foreground">Nacionalidade:</div>
                    <div className="text-right">{player.nationality}</div>
                    <div className="text-muted-foreground">Contrato até:</div>
                    <div className="text-right">{player.contractEnd}</div>
                    <div className="text-muted-foreground">Valor:</div>
                    <div className="text-right font-medium">{player.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tactics">
          <Card className="overflow-hidden">
            <div className="bg-field p-8 relative min-h-[600px] flex flex-col">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM0YWRlODAiIC8+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogIDxsaW5lIHgxPSI1MCUiIHkxPSIwIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogIDxjaXJjbGUgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAlIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgPHJlY3QgeD0iMCIgeT0iMTUlIiB3aWR0aD0iMjAlIiBoZWlnaHQ9IjcwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogIDxyZWN0IHg9IjgwJSIgeT0iMTUlIiB3aWR0aD0iMjAlIiBoZWlnaHQ9IjcwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogIDxyZWN0IHg9IjAlIiB5PSIzMCUiIHdpZHRoPSI3JSIgaGVpZ2h0PSI0MCUiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgLz4KICA8cmVjdCB4PSI5MyUiIHk9IjMwJSIgd2lkdGg9IjclIiBoZWlnaHQ9IjQwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgo8L3N2Zz4=')]"></div>

              <div className="mt-auto flex justify-between items-end w-full z-10">
                <div className="flex justify-evenly w-full pb-16">
                  {[
                    "ter Stegen",
                    "Koundé",
                    "Araújo",
                    "Christensen",
                    "Alba"
                  ].map((name, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center"
                    >
                      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer mb-1">
                        <div className="h-10 w-10 bg-team-blue rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {i + 1}
                        </div>
                      </div>
                      <span className="text-xs font-bold bg-white/80 px-2 py-0.5 rounded text-team-blue">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-end w-full z-10 mt-12">
                <div className="flex justify-evenly w-full pb-24">
                  {[
                    "Busquets",
                    "de Jong",
                    "Pedri"
                  ].map((name, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center"
                    >
                      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer mb-1">
                        <div className="h-10 w-10 bg-team-blue rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {i + 6}
                        </div>
                      </div>
                      <span className="text-xs font-bold bg-white/80 px-2 py-0.5 rounded text-team-blue">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-end w-full z-10 mt-16">
                <div className="flex justify-evenly w-full pb-32">
                  {[
                    "Dembélé",
                    "Messi",
                    "Fati"
                  ].map((name, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center"
                    >
                      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer mb-1">
                        <div className="h-10 w-10 bg-team-blue rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {i === 1 ? 10 : i === 0 ? 7 : 11}
                        </div>
                      </div>
                      <span className="text-xs font-bold bg-white/80 px-2 py-0.5 rounded text-team-blue">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded-lg shadow-md">
                <div className="text-sm font-medium">Formação: 4-3-3</div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
