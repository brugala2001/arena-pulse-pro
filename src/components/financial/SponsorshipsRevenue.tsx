
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronUpIcon, TrendingUp, TrendingDown } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

export function SponsorshipsRevenue() {
  const sponsorData = [
    { id: 1, sponsor: "Nike", type: "Material Esportivo", amount: 15000000, startDate: "01/01/2023", endDate: "31/12/2025", status: "Ativo", compliance: 95 },
    { id: 2, sponsor: "Qatar Airways", type: "Principal", amount: 30000000, startDate: "01/01/2022", endDate: "31/12/2024", status: "Ativo", compliance: 100 },
    { id: 3, sponsor: "Rakuten", type: "Camisa", amount: 20000000, startDate: "01/01/2023", endDate: "31/12/2025", status: "Ativo", compliance: 90 },
    { id: 4, sponsor: "Beko", type: "Secundário", amount: 5000000, startDate: "01/01/2022", endDate: "31/12/2023", status: "Expirado", compliance: 100 },
    { id: 5, sponsor: "Gatorade", type: "Parceiro Oficial", amount: 3000000, startDate: "01/06/2023", endDate: "31/05/2024", status: "Ativo", compliance: 85 },
  ];

  const revenueData = [
    { month: 'Jan', patrocinadores: 6800000, bilheteria: 2400000, transferencias: 1500000 },
    { month: 'Fev', patrocinadores: 5900000, bilheteria: 1600000, transferencias: 900000 },
    { month: 'Mar', patrocinadores: 6000000, bilheteria: 2100000, transferencias: 500000 },
    { month: 'Abr', patrocinadores: 6800000, bilheteria: 2200000, transferencias: 3000000 },
    { month: 'Mai', patrocinadores: 5900000, bilheteria: 1900000, transferencias: 1200000 },
    { month: 'Jun', patrocinadores: 6000000, bilheteria: 2000000, transferencias: 800000 },
  ];

  const chartConfig = {
    patrocinadores: {
      label: "Patrocinadores",
      color: "#8B5CF6"
    },
    bilheteria: {
      label: "Bilheteria",
      color: "#10B981"
    },
    transferencias: {
      label: "Transferências",
      color: "#F97316"
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total de Patrocínios</CardTitle>
            <CardDescription className="text-3xl font-bold">
              R$ 73.000.000
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center gap-1 text-xs text-green-500 font-medium">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>+12% em relação ao ano anterior</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0 text-xs text-muted-foreground">Atualizado hoje</CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Patrocinadores Ativos</CardTitle>
            <CardDescription className="text-3xl font-bold">
              4
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center gap-1 text-xs text-green-500 font-medium">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>+1 desde janeiro</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0 text-xs text-muted-foreground">5 patrocinadores totais</CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Receitas Totais</CardTitle>
            <CardDescription className="text-3xl font-bold">
              R$ 125.680.000
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center gap-1 text-xs text-red-500 font-medium">
              <TrendingDown className="h-3.5 w-3.5" />
              <span>-3% em relação ao ano anterior</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0 text-xs text-muted-foreground">Últimos 12 meses</CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Receitas por Fonte</CardTitle>
          <CardDescription>Visualização das principais fontes de receita nos últimos 6 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] mt-4">
            <ChartContainer config={chartConfig}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickFormatter={(value) => `${value / 1000000}M`} tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="patrocinadores" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="bilheteria" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="transferencias" fill="#F97316" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="contracts">
        <TabsList className="mb-4">
          <TabsTrigger value="contracts">Contratos</TabsTrigger>
          <TabsTrigger value="goals">Metas de Patrocínio</TabsTrigger>
        </TabsList>
        
        <TabsContent value="contracts">
          <Card>
            <CardHeader>
              <CardTitle>Contratos de Patrocínio</CardTitle>
              <CardDescription>Todos os contratos de patrocínio ativos e históricos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patrocinador</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead className="text-right">Valor (anual)</TableHead>
                      <TableHead>Início</TableHead>
                      <TableHead>Término</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Cumprimento</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sponsorData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.sponsor}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell className="text-right">{item.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                        <TableCell>{item.startDate}</TableCell>
                        <TableCell>{item.endDate}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === "Ativo" ? "default" : "secondary"}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={item.compliance} className="h-2" />
                            <span className="text-sm">{item.compliance}%</span>
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
        
        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle>Metas de Patrocínio</CardTitle>
              <CardDescription>Metas de cumprimento para contratos e patrocinadores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Nike - Exposição de logo</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                  <p className="text-xs text-muted-foreground">Logo visível em todos os eventos e entrevistas oficiais</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Qatar Airways - Presença em mídias</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-muted-foreground">Menção em todos os press releases e mídia social</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Rakuten - Ativações</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                  <p className="text-xs text-muted-foreground">Eventos e campanhas promocionais</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Gatorade - Uso exclusivo</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground">Uso exclusivo do produto em treinamentos e jogos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end">
        <Button>Adicionar Novo Patrocinador</Button>
      </div>
    </div>
  );
}
