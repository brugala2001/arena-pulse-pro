
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, User, UserPlus, AlertTriangle, Award, RotateCw } from "lucide-react";
import { toast } from "sonner";

// Mock data for players
const mockPlayers = [
  { id: "1", name: "Manuel Neuer", position: "GK", number: 1 },
  { id: "2", name: "Joshua Kimmich", position: "RB", number: 6 },
  { id: "3", name: "Dayot Upamecano", position: "CB", number: 5 },
  { id: "4", name: "Lucas Hernández", position: "CB", number: 21 },
  { id: "5", name: "Alphonso Davies", position: "LB", number: 19 },
  { id: "6", name: "Leon Goretzka", position: "CM", number: 8 },
  { id: "7", name: "Thomas Müller", position: "AM", number: 25 },
  { id: "8", name: "Serge Gnabry", position: "RW", number: 7 },
  { id: "9", name: "Leroy Sané", position: "LW", number: 10 },
  { id: "10", name: "Jamal Musiala", position: "AM", number: 42 },
  { id: "11", name: "Robert Lewandowski", position: "ST", number: 9 },
  { id: "12", name: "Kingsley Coman", position: "RW", number: 11 },
  { id: "13", name: "Eric Maxim Choupo-Moting", position: "ST", number: 13 },
  { id: "14", name: "Benjamin Pavard", position: "RB", number: 5 },
];

// Mock match events
const initialEvents = [
  { type: "start", minute: 0, description: "Início da partida", timestamp: new Date().toISOString() },
];

export default function LiveMatch() {
  const [matchTime, setMatchTime] = useState(0);
  const [score, setScore] = useState({ team: 0, opponent: 0 });
  const [events, setEvents] = useState(initialEvents);
  const [note, setNote] = useState("");
  const [isMatchRunning, setIsMatchRunning] = useState(false);
  const [selectedAction, setSelectedAction] = useState("note");
  
  // Substitution state
  const [playerOut, setPlayerOut] = useState("");
  const [playerIn, setPlayerIn] = useState("");
  const [subReason, setSubReason] = useState("");
  
  // Card state
  const [cardPlayer, setCardPlayer] = useState("");
  const [cardType, setCardType] = useState("yellow");
  const [cardReason, setCardReason] = useState("");
  
  // Goal state
  const [goalScorer, setGoalScorer] = useState("");
  const [goalAssist, setGoalAssist] = useState("");
  const [goalType, setGoalType] = useState("open-play");
  
  // Timer interval ref
  const [timerInterval, setTimerIntervalValue] = useState<number | null>(null);
  
  const startMatch = () => {
    if (isMatchRunning) return;
    
    setIsMatchRunning(true);
    // Update match time every second (1000ms)
    const interval = window.setInterval(() => {
      setMatchTime(prev => prev + 1);
    }, 1000) as unknown as number;
    
    setTimerIntervalValue(interval);
    
    addEvent("start", "Início da partida");
    toast.success("Partida iniciada!");
  };
  
  const stopMatch = () => {
    if (!isMatchRunning) return;
    
    setIsMatchRunning(false);
    if (timerInterval !== null) {
      clearInterval(timerInterval);
      setTimerIntervalValue(null);
    }
    
    addEvent("end", "Fim da partida");
    toast.success("Partida finalizada!");
  };
  
  const formatMatchTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  const addEvent = (type: string, description: string) => {
    const newEvent = {
      type,
      minute: Math.floor(matchTime / 60),
      description,
      timestamp: new Date().toISOString(),
    };
    
    setEvents(prev => [...prev, newEvent]);
  };
  
  const handleAddNote = () => {
    if (!note.trim()) return;
    
    addEvent("note", note);
    setNote("");
    toast.success("Nota adicionada!");
  };
  
  const handleSubstitution = () => {
    if (!playerOut || !playerIn) {
      toast.error("Selecione os jogadores para a substituição");
      return;
    }
    
    const playerOutName = mockPlayers.find(p => p.id === playerOut)?.name;
    const playerInName = mockPlayers.find(p => p.id === playerIn)?.name;
    
    const description = `Substituição: ${playerInName} entra no lugar de ${playerOutName}${subReason ? ` (${subReason})` : ''}`;
    addEvent("substitution", description);
    
    setPlayerOut("");
    setPlayerIn("");
    setSubReason("");
    toast.success("Substituição registrada!");
  };
  
  const handleCard = () => {
    if (!cardPlayer) {
      toast.error("Selecione o jogador");
      return;
    }
    
    const playerName = mockPlayers.find(p => p.id === cardPlayer)?.name;
    const cardTypeText = cardType === "yellow" ? "amarelo" : "vermelho";
    
    const description = `Cartão ${cardTypeText} para ${playerName}${cardReason ? ` (${cardReason})` : ''}`;
    addEvent("card", description);
    
    setCardPlayer("");
    setCardReason("");
    toast.success("Cartão registrado!");
  };
  
  const handleGoal = () => {
    if (!goalScorer) {
      toast.error("Selecione o jogador que marcou o gol");
      return;
    }
    
    const scorerName = mockPlayers.find(p => p.id === goalScorer)?.name;
    const assistName = goalAssist ? mockPlayers.find(p => p.id === goalAssist)?.name : undefined;
    
    let description = `GOL! ${scorerName}`;
    if (assistName) {
      description += ` (Assistência: ${assistName})`;
    }
    
    const goalTypes: Record<string, string> = {
      "open-play": "em jogada aberta",
      "penalty": "de pênalti",
      "free-kick": "de falta",
      "header": "de cabeça",
      "own-goal": "contra"
    };
    
    if (goalType !== "open-play") {
      description += ` ${goalTypes[goalType]}`;
    }
    
    addEvent("goal", description);
    
    // Update score
    if (goalType === "own-goal") {
      setScore(prev => ({ ...prev, opponent: prev.opponent + 1 }));
    } else {
      setScore(prev => ({ ...prev, team: prev.team + 1 }));
    }
    
    setGoalScorer("");
    setGoalAssist("");
    toast.success("Gol registrado!");
  };
  
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Partida ao Vivo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4 md:gap-10">
              <div className="flex items-center gap-2 text-2xl font-bold">
                <span>FC Barcelona</span>
                <span className="px-3 py-1 bg-muted rounded-md">{score.team}</span>
                <span>-</span>
                <span className="px-3 py-1 bg-muted rounded-md">{score.opponent}</span>
                <span>Real Madrid</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-xl font-mono bg-primary text-primary-foreground px-2 py-1 rounded-md">
                  {formatMatchTime(matchTime)}
                </div>
                
                <div className="space-x-2">
                  {!isMatchRunning ? (
                    <Button onClick={startMatch} variant="outline" size="sm">
                      <Clock className="mr-1 h-4 w-4" /> Iniciar
                    </Button>
                  ) : (
                    <Button onClick={stopMatch} variant="outline" size="sm" className="bg-red-100 dark:bg-red-900">
                      <Clock className="mr-1 h-4 w-4" /> Finalizar
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="note" onValueChange={setSelectedAction}>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="note">
                  <RotateCw className="mr-1 h-4 w-4" /> Nota
                </TabsTrigger>
                <TabsTrigger value="substitution">
                  <UserPlus className="mr-1 h-4 w-4" /> Substituição
                </TabsTrigger>
                <TabsTrigger value="card">
                  <AlertTriangle className="mr-1 h-4 w-4" /> Cartão
                </TabsTrigger>
                <TabsTrigger value="goal">
                  <Award className="mr-1 h-4 w-4" /> Gol
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="note" className="space-y-4">
                <Textarea 
                  placeholder="Adicione uma nota sobre o jogo..." 
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
                <Button onClick={handleAddNote}>Adicionar Nota</Button>
              </TabsContent>
              
              <TabsContent value="substitution" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="playerOut">Jogador que sai</Label>
                    <Select value={playerOut} onValueChange={setPlayerOut}>
                      <SelectTrigger id="playerOut">
                        <SelectValue placeholder="Selecione o jogador" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockPlayers.map((player) => (
                          <SelectItem key={player.id} value={player.id}>
                            {player.number} - {player.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="playerIn">Jogador que entra</Label>
                    <Select value={playerIn} onValueChange={setPlayerIn}>
                      <SelectTrigger id="playerIn">
                        <SelectValue placeholder="Selecione o jogador" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockPlayers
                          .filter(p => p.id !== playerOut)
                          .map((player) => (
                            <SelectItem key={player.id} value={player.id}>
                              {player.number} - {player.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subReason">Motivo (opcional)</Label>
                  <Textarea 
                    id="subReason" 
                    placeholder="Motivo da substituição..." 
                    value={subReason}
                    onChange={(e) => setSubReason(e.target.value)}
                  />
                </div>
                
                <Button onClick={handleSubstitution}>Registrar Substituição</Button>
              </TabsContent>
              
              <TabsContent value="card" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="cardPlayer">Jogador</Label>
                    <Select value={cardPlayer} onValueChange={setCardPlayer}>
                      <SelectTrigger id="cardPlayer">
                        <SelectValue placeholder="Selecione o jogador" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockPlayers.map((player) => (
                          <SelectItem key={player.id} value={player.id}>
                            {player.number} - {player.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="cardType">Tipo de Cartão</Label>
                    <Select value={cardType} onValueChange={setCardType}>
                      <SelectTrigger id="cardType">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yellow">Amarelo</SelectItem>
                        <SelectItem value="red">Vermelho</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="cardReason">Motivo (opcional)</Label>
                  <Textarea 
                    id="cardReason" 
                    placeholder="Motivo do cartão..." 
                    value={cardReason}
                    onChange={(e) => setCardReason(e.target.value)}
                  />
                </div>
                
                <Button onClick={handleCard}>Registrar Cartão</Button>
              </TabsContent>
              
              <TabsContent value="goal" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="goalScorer">Marcador</Label>
                    <Select value={goalScorer} onValueChange={setGoalScorer}>
                      <SelectTrigger id="goalScorer">
                        <SelectValue placeholder="Selecione o jogador" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockPlayers.map((player) => (
                          <SelectItem key={player.id} value={player.id}>
                            {player.number} - {player.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="goalType">Tipo de Gol</Label>
                    <Select value={goalType} onValueChange={setGoalType}>
                      <SelectTrigger id="goalType">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open-play">Jogada Aberta</SelectItem>
                        <SelectItem value="penalty">Pênalti</SelectItem>
                        <SelectItem value="free-kick">Falta</SelectItem>
                        <SelectItem value="header">Cabeçada</SelectItem>
                        <SelectItem value="own-goal">Gol Contra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="goalAssist">Assistência (opcional)</Label>
                  <Select value={goalAssist} onValueChange={setGoalAssist}>
                    <SelectTrigger id="goalAssist">
                      <SelectValue placeholder="Selecione o jogador" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Sem assistência</SelectItem>
                      {mockPlayers
                        .filter(p => p.id !== goalScorer)
                        .map((player) => (
                          <SelectItem key={player.id} value={player.id}>
                            {player.number} - {player.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button onClick={handleGoal}>Registrar Gol</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Linha do Tempo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <p>Nenhum evento registrado</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-[600px] overflow-auto">
                  {events.map((event, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 pb-4 relative">
                      <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-primary"></div>
                      <div className="text-sm text-muted-foreground">
                        {event.minute}' 
                      </div>
                      <div className="font-medium">{event.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
