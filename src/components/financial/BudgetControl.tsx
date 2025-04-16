
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Filter, Plus, Search, Sliders } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from "recharts";

export function BudgetControl() {
  // Dados de despesas por categoria
  const expenseData = [
    { name: 'Salários', value: 65000000, color: '#8B5CF6' },
    { name: 'Transferências', value: 25000000, color: '#EC4899' },
    { name: 'Instalações', value: 12000000, color: '#10B981' },
    { name: 'Viagens', value: 8000000, color: '#F97316' },
    { name: 'Marketing', value: 5000000, color: '#06B6D4' },
    { name: 'Jovens/Base', value: 7500000, color: '#F59E0B' },
    { name: 'Outros', value: 4500000, color: '#6B7280' },
  ];
  
  // Dados de transações recentes
  const recentTransactions = [
    { id: 1, description: "Transferência de Jogador - Carlos Silva", category: "Transferências", date: "15/04/2025", amount: 12500000, type: "expense" },
    { id: 2, description: "Pagamento Mensal - Salários Elenco", category: "Salários", date: "01/04/2025", amount: 5200000, type: "expense" },
    { id: 3, description: "Venda de Jogador - Marcos Pereira", category: "Transferências", date: "28/03/2025", amount: 8700000, type: "income" },
    { id: 4, description: "Viagem para Campeonato Continental", category: "Viagens", date: "25/03/2025", amount: 950000, type: "expense" },
    { id: 5, description: "Manutenção do Centro de Treinamento", category: "Instalações", date: "20/03/2025", amount: 780000, type: "expense" },
  ];

  // Configuração para o gráfico
  const chartConfig = {
    Salários: { color: '#8B5CF6' },
    Transferências: { color: '#EC4899' },
    Instalações: { color: '#10B981' },
    Viagens: { color: '#F97316' },
    Marketing: { color: '#06B6D4' },
    'Jovens/Base': { color: '#F59E0B' },
    Outros: { color: '#6B7280' },
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Orçamento Total</CardTitle>
            <CardDescription className="text-2xl font-bold">
              R$ 180.000.000
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Temporada 2024/2025</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Despesas Realizadas</CardTitle>
            <CardDescription className="text-2xl font-bold">
              R$ 127.000.000
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">70.5% do orçamento</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Saldo Disponível</CardTitle>
            <CardDescription className="text-2xl font-bold">
              R$ 53.000.000
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">29.5% do orçamento</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Despesas</CardTitle>
            <CardDescription>Alocação do orçamento por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer config={chartConfig}>
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Transações Recentes</CardTitle>
              <CardDescription>Principais movimentações do último mês</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              <Sliders className="h-4 w-4 mr-2" />
              Filtrar
            </Button>
          </CardHeader>
          <CardContent>
            <div className="rounded-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{tx.description}</p>
                          <p className="text-xs text-muted-foreground">{tx.category}</p>
                        </div>
                      </TableCell>
                      <TableCell>{tx.date}</TableCell>
                      <TableCell className={`text-right ${tx.type === 'income' ? 'text-green-600' : ''}`}>
                        {tx.type === 'income' ? '+' : '-'}{tx.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="outline">Ver Todas as Transações</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="expenses">
        <TabsList className="mb-4">
          <TabsTrigger value="expenses">Despesas</TabsTrigger>
          <TabsTrigger value="projections">Projeções</TabsTrigger>
          <TabsTrigger value="approvals">Aprovações</TabsTrigger>
        </TabsList>
        
        <TabsContent value="expenses">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Registro de Despesas</CardTitle>
                <CardDescription>Todas as despesas do clube</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrar
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Despesa
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead className="text-right">Valor</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Salários do Elenco Principal - Abril</TableCell>
                      <TableCell>Salários</TableCell>
                      <TableCell>01/04/2025</TableCell>
                      <TableCell className="text-right">R$ 5.200.000</TableCell>
                      <TableCell><Badge>Pago</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Contratação de Jogador - Transferência</TableCell>
                      <TableCell>Transferências</TableCell>
                      <TableCell>15/03/2025</TableCell>
                      <TableCell className="text-right">R$ 12.500.000</TableCell>
                      <TableCell><Badge>Pago</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Viagem para Liga dos Campeões</TableCell>
                      <TableCell>Viagens</TableCell>
                      <TableCell>22/03/2025</TableCell>
                      <TableCell className="text-right">R$ 950.000</TableCell>
                      <TableCell><Badge>Pago</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Manutenção do Centro de Treinamento</TableCell>
                      <TableCell>Instalações</TableCell>
                      <TableCell>10/03/2025</TableCell>
                      <TableCell className="text-right">R$ 780.000</TableCell>
                      <TableCell><Badge>Pago</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Equipamentos para Departamento Médico</TableCell>
                      <TableCell>Instalações</TableCell>
                      <TableCell>05/04/2025</TableCell>
                      <TableCell className="text-right">R$ 350.000</TableCell>
                      <TableCell><Badge variant="outline">Pendente</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Campanha de Marketing Temporada 2025</TableCell>
                      <TableCell>Marketing</TableCell>
                      <TableCell>01/04/2025</TableCell>
                      <TableCell className="text-right">R$ 1.200.000</TableCell>
                      <TableCell><Badge variant="secondary">Em Aprovação</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="projections">
          <Card>
            <CardHeader>
              <CardTitle>Projeções Financeiras</CardTitle>
              <CardDescription>Estimativas para os próximos períodos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Próximo Trimestre</h3>
                    <div className="text-2xl font-bold">R$ 45.500.000</div>
                    <p className="text-sm text-muted-foreground">Despesas previstas</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Final da Temporada</h3>
                    <div className="text-2xl font-bold">R$ 168.700.000</div>
                    <p className="text-sm text-muted-foreground">Despesas totais estimadas</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Temporada 2025/2026</h3>
                    <div className="text-2xl font-bold">R$ 195.000.000</div>
                    <p className="text-sm text-muted-foreground">Orçamento preliminar</p>
                  </div>
                </div>
                
                <div className="rounded-md border p-4">
                  <h3 className="font-medium mb-4">Projeção de Gastos com Transferências</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Janela de Verão 2025</span>
                        <span>R$ 35.000.000</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Planejamento para reforçar o elenco principal</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Janela de Inverno 2026</span>
                        <span>R$ 15.000.000</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Ajustes pontuais no elenco</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="approvals">
          <Card>
            <CardHeader>
              <CardTitle>Aprovações Pendentes</CardTitle>
              <CardDescription>Despesas que aguardam aprovação da diretoria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Solicitado por</TableHead>
                      <TableHead>Departamento</TableHead>
                      <TableHead className="text-right">Valor</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Campanha de Marketing Temporada 2025</TableCell>
                      <TableCell>Carlos Oliveira</TableCell>
                      <TableCell>Marketing</TableCell>
                      <TableCell className="text-right">R$ 1.200.000</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" className="h-8 px-2 text-xs" variant="default">Aprovar</Button>
                          <Button size="sm" className="h-8 px-2 text-xs" variant="outline">Rejeitar</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Equipamentos para Departamento Médico</TableCell>
                      <TableCell>Pedro Almeida</TableCell>
                      <TableCell>Médico</TableCell>
                      <TableCell className="text-right">R$ 350.000</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" className="h-8 px-2 text-xs" variant="default">Aprovar</Button>
                          <Button size="sm" className="h-8 px-2 text-xs" variant="outline">Rejeitar</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Reforma das Salas de Fisioterapia</TableCell>
                      <TableCell>Ana Santos</TableCell>
                      <TableCell>Fisioterapia</TableCell>
                      <TableCell className="text-right">R$ 520.000</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" className="h-8 px-2 text-xs" variant="default">Aprovar</Button>
                          <Button size="sm" className="h-8 px-2 text-xs" variant="outline">Rejeitar</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Contratação de Scout Internacional</TableCell>
                      <TableCell>Roberto Fernandes</TableCell>
                      <TableCell>Olheiros</TableCell>
                      <TableCell className="text-right">R$ 175.000</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" className="h-8 px-2 text-xs" variant="default">Aprovar</Button>
                          <Button size="sm" className="h-8 px-2 text-xs" variant="outline">Rejeitar</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
