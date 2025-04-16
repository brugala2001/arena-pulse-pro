
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, ChevronUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Opponent } from "@/models/match";
import { toast } from "sonner";

// Mock data for opponents
const mockOpponents: Opponent[] = [
  {
    id: "1",
    name: "Real Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    coach: "Carlo Ancelotti",
    formation: "4-3-3",
    strengths: ["Counter Attack", "Set Pieces", "Wing Play"],
    weaknesses: ["High Defensive Line", "Defending against quick transitions"]
  },
  {
    id: "2",
    name: "Bayern Munich",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    coach: "Thomas Tuchel",
    formation: "4-2-3-1",
    strengths: ["Possession Play", "Pressing", "Goal Scoring"],
    weaknesses: ["Defensive Transitions", "Aerial Duels"]
  },
  {
    id: "3",
    name: "Manchester City",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    coach: "Pep Guardiola",
    formation: "4-3-3",
    strengths: ["Possession Play", "Tactical Flexibility", "Set Pieces"],
    weaknesses: ["Counter Attacks", "Defensive Depth"]
  }
];

export default function PreMatch() {
  const [selectedOpponent, setSelectedOpponent] = useState<Opponent | null>(null);
  const [strategy, setStrategy] = useState("");
  const [matchLocation, setMatchLocation] = useState("home");
  const [matchDate, setMatchDate] = useState("");
  const [stadiumName, setStadiumName] = useState("");
  const [strategySaved, setStrategySaved] = useState(false);

  const handleSaveStrategy = () => {
    // In a real app, this would call an API
    toast.success("Estratégia salva com sucesso!");
    setStrategySaved(true);
  };

  const handleOpponentSelect = (id: string) => {
    const opponent = mockOpponents.find(o => o.id === id);
    if (opponent) {
      setSelectedOpponent(opponent);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Próxima Partida</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="opponent">Adversário</Label>
              <Select onValueChange={handleOpponentSelect}>
                <SelectTrigger id="opponent">
                  <SelectValue placeholder="Selecione o adversário" />
                </SelectTrigger>
                <SelectContent>
                  {mockOpponents.map(opponent => (
                    <SelectItem key={opponent.id} value={opponent.id}>
                      {opponent.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Local</Label>
                <Select value={matchLocation} onValueChange={setMatchLocation}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Selecione o local" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Casa</SelectItem>
                    <SelectItem value="away">Fora</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="matchDate">Data da Partida</Label>
                <Input
                  id="matchDate"
                  type="date"
                  value={matchDate}
                  onChange={(e) => setMatchDate(e.target.value)}
                />
              </div>
            </div>
            
            {matchLocation === "home" && (
              <div>
                <Label htmlFor="stadium">Estádio</Label>
                <Input
                  id="stadium"
                  value={stadiumName}
                  onChange={(e) => setStadiumName(e.target.value)}
                  placeholder="Nome do estádio"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      {selectedOpponent && (
        <Card>
          <CardHeader>
            <CardTitle>Análise do Adversário: {selectedOpponent.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Técnico:</span>
              <span>{selectedOpponent.coach}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Formação típica:</span>
              <span>{selectedOpponent.formation}</span>
            </div>
            
            <Collapsible className="border rounded-md">
              <CollapsibleTrigger className="flex w-full items-center justify-between p-4 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Pontos fortes</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pb-4">
                <ul className="space-y-1 list-disc pl-5">
                  {selectedOpponent.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="border rounded-md">
              <CollapsibleTrigger className="flex w-full items-center justify-between p-4 font-medium">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span>Pontos fracos</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pb-4">
                <ul className="space-y-1 list-disc pl-5">
                  {selectedOpponent.weaknesses.map((weakness, index) => (
                    <li key={index}>{weakness}</li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      )}
      
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Estratégia para a Partida</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Tabs defaultValue="formation">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="formation">Formação Tática</TabsTrigger>
                <TabsTrigger value="key-players">Jogadores-Chave</TabsTrigger>
                <TabsTrigger value="set-pieces">Bolas Paradas</TabsTrigger>
              </TabsList>
              
              <TabsContent value="formation" className="space-y-4 mt-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a formação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4-3-3">4-3-3</SelectItem>
                    <SelectItem value="4-4-2">4-4-2</SelectItem>
                    <SelectItem value="3-5-2">3-5-2</SelectItem>
                    <SelectItem value="4-2-3-1">4-2-3-1</SelectItem>
                    <SelectItem value="5-3-2">5-3-2</SelectItem>
                  </SelectContent>
                </Select>
                
                <div>
                  <Label htmlFor="formation-notes">Notas sobre a formação</Label>
                  <Textarea 
                    id="formation-notes" 
                    placeholder="Detalhes sobre a formação tática escolhida..."
                    rows={4}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="key-players" className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="key-players-notes">Jogadores para observar</Label>
                  <Textarea 
                    id="key-players-notes" 
                    placeholder="Identificação de jogadores-chave do adversário e nossa estratégia para neutralizá-los..."
                    rows={4}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="set-pieces" className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="offensive-set-pieces">Bolas Paradas Ofensivas</Label>
                  <Textarea 
                    id="offensive-set-pieces" 
                    placeholder="Estratégias para escanteios, faltas, etc..."
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="defensive-set-pieces">Bolas Paradas Defensivas</Label>
                  <Textarea 
                    id="defensive-set-pieces" 
                    placeholder="Como defender escanteios, faltas, etc..."
                    rows={3}
                  />
                </div>
              </TabsContent>
            </Tabs>
            
            <div>
              <Label htmlFor="overall-strategy">Estratégia Geral</Label>
              <Textarea 
                id="overall-strategy" 
                value={strategy}
                onChange={(e) => setStrategy(e.target.value)}
                placeholder="Descreva a estratégia geral para esta partida..."
                rows={6}
              />
            </div>
            
            <div className="flex justify-end gap-2">
              <Button onClick={handleSaveStrategy}>
                Salvar Estratégia
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
