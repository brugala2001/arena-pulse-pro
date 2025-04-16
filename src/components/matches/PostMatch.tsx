
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, Send } from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

// Mock match data
const matchData = {
  id: "match123",
  date: new Date("2025-05-01T19:45:00"),
  homeTeam: "FC Barcelona",
  awayTeam: "Real Madrid",
  score: {
    home: 3,
    away: 1
  }
};

// Mock statistics
const matchStats = {
  possession: { team: 65, opponent: 35 },
  shots: { team: 18, opponent: 7 },
  shotsOnTarget: { team: 9, opponent: 3 },
  corners: { team: 7, opponent: 3 },
  fouls: { team: 10, opponent: 15 },
  yellowCards: { team: 2, opponent: 4 },
  redCards: { team: 0, opponent: 0 },
  offsides: { team: 2, opponent: 1 },
  passes: { team: 678, opponent: 367 },
  passAccuracy: { team: 91, opponent: 80 },
};

// Mock players for individual ratings
const playerRatings = [
  { id: "1", name: "Ter Stegen", position: "GK", rating: 8.5 },
  { id: "2", name: "Jordi Alba", position: "LB", rating: 7.2 },
  { id: "3", name: "Gerard Piqué", position: "CB", rating: 8.0 },
  { id: "4", name: "Ronald Araujo", position: "CB", rating: 7.8 },
  { id: "5", name: "Sergi Roberto", position: "RB", rating: 6.9 },
  { id: "6", name: "Sergio Busquets", position: "CDM", rating: 7.5 },
  { id: "7", name: "Frenkie de Jong", position: "CM", rating: 8.2 },
  { id: "8", name: "Pedri", position: "CM", rating: 8.7 },
  { id: "9", name: "Ousmane Dembélé", position: "RW", rating: 7.3 },
  { id: "10", name: "Ansu Fati", position: "LW", rating: 7.9 },
  { id: "11", name: "Robert Lewandowski", position: "ST", rating: 9.1 },
];

// Convert stats for chart display
const createStatChartData = () => {
  return [
    { name: "Posse de bola (%)", team: matchStats.possession.team, opponent: matchStats.possession.opponent },
    { name: "Finalizações", team: matchStats.shots.team, opponent: matchStats.shots.opponent },
    { name: "Finalizações no gol", team: matchStats.shotsOnTarget.team, opponent: matchStats.shotsOnTarget.opponent },
    { name: "Escanteios", team: matchStats.corners.team, opponent: matchStats.corners.opponent },
    { name: "Faltas", team: matchStats.fouls.team, opponent: matchStats.fouls.opponent },
  ];
};

// Possession data for pie chart
const possessionData = [
  { name: matchData.homeTeam, value: matchStats.possession.team },
  { name: matchData.awayTeam, value: matchStats.possession.opponent },
];

const COLORS = ["#1E3A8A", "#e11d48"];

export default function PostMatch() {
  const [selectedTab, setSelectedTab] = useState("stats");
  const [analysisText, setAnalysisText] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [individualFeedbackText, setIndividualFeedbackText] = useState("");
  const isMobile = useIsMobile();

  const handleSaveAnalysis = () => {
    toast.success("Análise salva com sucesso!");
  };
  
  const handleSendFeedback = () => {
    if (!selectedPlayer) {
      toast.error("Selecione um jogador para enviar feedback");
      return;
    }
    
    toast.success(`Feedback enviado para ${playerRatings.find(p => p.id === selectedPlayer)?.name}`);
    setSelectedPlayer("");
    setIndividualFeedbackText("");
  };
  
  const handleGenerateReport = () => {
    toast.success("Relatório gerado! O arquivo PDF será baixado em breve.");
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="stats" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="stats">Estatísticas</TabsTrigger>
          <TabsTrigger value="analysis">Análise Técnica</TabsTrigger>
          <TabsTrigger value="individual">Avaliação Individual</TabsTrigger>
        </TabsList>
        
        <TabsContent value="stats" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Estatísticas da Partida</CardTitle>
                <CardDescription>
                  {matchData.homeTeam} {matchData.score.home} - {matchData.score.away} {matchData.awayTeam}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={createStatChartData()}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 20,
                      }}
                      layout={isMobile ? "vertical" : "horizontal"}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      {isMobile ? (
                        <>
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" width={150} />
                        </>
                      ) : (
                        <>
                          <XAxis dataKey="name" />
                          <YAxis />
                        </>
                      )}
                      <Tooltip />
                      <Bar dataKey="team" name={matchData.homeTeam} fill="#1E3A8A" />
                      <Bar dataKey="opponent" name={matchData.awayTeam} fill="#e11d48" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Posse de Bola</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={possessionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {possessionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas Detalhadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b">
                    <span>Finalizações</span>
                    <div className="flex gap-4 font-semibold">
                      <span className="w-6 text-right">{matchStats.shots.team}</span>
                      <span className="w-6 text-center">-</span>
                      <span className="w-6">{matchStats.shots.opponent}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between py-1 border-b">
                    <span>Finalizações no gol</span>
                    <div className="flex gap-4 font-semibold">
                      <span className="w-6 text-right">{matchStats.shotsOnTarget.team}</span>
                      <span className="w-6 text-center">-</span>
                      <span className="w-6">{matchStats.shotsOnTarget.opponent}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between py-1 border-b">
                    <span>Escanteios</span>
                    <div className="flex gap-4 font-semibold">
                      <span className="w-6 text-right">{matchStats.corners.team}</span>
                      <span className="w-6 text-center">-</span>
                      <span className="w-6">{matchStats.corners.opponent}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between py-1 border-b">
                    <span>Impedimentos</span>
                    <div className="flex gap-4 font-semibold">
                      <span className="w-6 text-right">{matchStats.offsides.team}</span>
                      <span className="w-6 text-center">-</span>
                      <span className="w-6">{matchStats.offsides.opponent}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b">
                    <span>Faltas</span>
                    <div className="flex gap-4 font-semibold">
                      <span className="w-6 text-right">{matchStats.fouls.team}</span>
                      <span className="w-6 text-center">-</span>
                      <span className="w-6">{matchStats.fouls.opponent}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between py-1 border-b">
                    <span>Cartões Amarelos</span>
                    <div className="flex gap-4 font-semibold">
                      <span className="w-6 text-right">{matchStats.yellowCards.team}</span>
                      <span className="w-6 text-center">-</span>
                      <span className="w-6">{matchStats.yellowCards.opponent}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between py-1 border-b">
                    <span>Cartões Vermelhos</span>
                    <div className="flex gap-4 font-semibold">
                      <span className="w-6 text-right">{matchStats.redCards.team}</span>
                      <span className="w-6 text-center">-</span>
                      <span className="w-6">{matchStats.redCards.opponent}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between py-1 border-b">
                    <span>Precisão nos passes (%)</span>
                    <div className="flex gap-4 font-semibold">
                      <span className="w-6 text-right">{matchStats.passAccuracy.team}</span>
                      <span className="w-6 text-center">-</span>
                      <span className="w-6">{matchStats.passAccuracy.opponent}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button onClick={handleGenerateReport}>
                  <Download className="mr-2 h-4 w-4" /> Gerar Relatório PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Análise Tática da Partida</CardTitle>
              <CardDescription>
                {matchData.homeTeam} {matchData.score.home} - {matchData.score.away} {matchData.awayTeam}
                {" | "}
                {new Date(matchData.date).toLocaleDateString('pt-BR')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea 
                  placeholder="Faça uma análise detalhada da partida..." 
                  className="min-h-[250px]"
                  value={analysisText}
                  onChange={(e) => setAnalysisText(e.target.value)}
                />
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" /> Salvar como Rascunho
                  </Button>
                  <Button onClick={handleSaveAnalysis}>
                    Salvar Análise
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Pontos a Melhorar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span>Transição defensiva após perda de bola</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span>Finalização das oportunidades criadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <span>Marcação em bola parada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <span>Variação de jogadas pelo lado direito</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Pontos Positivos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span>Controle do meio-campo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span>Precisão nos passes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span>Pressão alta no campo adversário</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span>Trabalho coletivo defensivo</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="individual" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Avaliação de Desempenho Individual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={playerRatings}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 0,
                          bottom: 60,
                        }}
                        layout="vertical"
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 10]} />
                        <YAxis
                          dataKey="name"
                          type="category"
                          width={120}
                          tick={(props) => {
                            const { x, y, payload } = props;
                            return (
                              <text x={x} y={y} dy={4} textAnchor="end" fill="#666" fontSize={12}>
                                {payload.value}
                              </text>
                            );
                          }}
                        />
                        <Tooltip />
                        <Bar
                          dataKey="rating"
                          name="Nota"
                          fill="#1E3A8A"
                          label={(props) => {
                            const { x, y, width, value } = props;
                            return (
                              <text x={x + width + 10} y={y + 4} fontSize={12} textAnchor="start">
                                {value}
                              </text>
                            );
                          }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Feedback Individual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Select value={selectedPlayer} onValueChange={setSelectedPlayer}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um jogador" />
                      </SelectTrigger>
                      <SelectContent>
                        {playerRatings.map((player) => (
                          <SelectItem key={player.id} value={player.id}>
                            {player.name} - {player.position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Textarea 
                    placeholder="Escreva um feedback para este jogador..." 
                    className="min-h-[200px]"
                    value={individualFeedbackText}
                    onChange={(e) => setIndividualFeedbackText(e.target.value)}
                  />
                  
                  <div className="flex justify-end">
                    <Button onClick={handleSendFeedback} disabled={!selectedPlayer || !individualFeedbackText}>
                      <Send className="mr-2 h-4 w-4" /> Enviar Feedback
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Destaques da Partida</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center bg-muted p-4 rounded-lg">
                    <span className="text-sm text-muted-foreground">Melhor em Campo</span>
                    <span className="font-bold text-lg mt-1">Robert Lewandowski</span>
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full mt-2">9.1</span>
                    <span className="text-sm mt-2">2 gols, 1 assistência</span>
                  </div>
                  
                  <div className="flex flex-col items-center bg-muted p-4 rounded-lg">
                    <span className="text-sm text-muted-foreground">Melhor Passe</span>
                    <span className="font-bold text-lg mt-1">Pedri</span>
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full mt-2">98% precisão</span>
                    <span className="text-sm mt-2">62 passes completados</span>
                  </div>
                  
                  <div className="flex flex-col items-center bg-muted p-4 rounded-lg">
                    <span className="text-sm text-muted-foreground">Melhor Defensor</span>
                    <span className="font-bold text-lg mt-1">Gerard Piqué</span>
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full mt-2">8.0</span>
                    <span className="text-sm mt-2">5 cortes, 3 interceptações</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
