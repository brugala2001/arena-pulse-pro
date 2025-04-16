
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Filter, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function SalariesManagement() {
  const salaryData = [
    { id: 1, name: "Lionel Messi", role: "Jogador", department: "Elenco Principal", salary: 1200000, bonuses: 300000, taxes: 450000, netSalary: 1050000, status: "Pago" },
    { id: 2, name: "Cristiano Ronaldo", role: "Jogador", department: "Elenco Principal", salary: 1100000, bonuses: 250000, taxes: 405000, netSalary: 945000, status: "Pendente" },
    { id: 3, name: "Xavi Hernández", role: "Treinador", department: "Comissão Técnica", salary: 500000, bonuses: 100000, taxes: 180000, netSalary: 420000, status: "Pago" },
    { id: 4, name: "Gerard Piqué", role: "Gestor", department: "Diretoria", salary: 400000, bonuses: 50000, taxes: 135000, netSalary: 315000, status: "Pago" },
    { id: 5, name: "Carles Puyol", role: "Coordenador", department: "Base", salary: 300000, bonuses: 30000, taxes: 99000, netSalary: 231000, status: "Pendente" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex items-center gap-2 w-full md:w-1/3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar colaborador..." className="h-9" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <Download className="h-4 w-4 mr-2" />
                Exportar
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Exportar como PDF</DropdownMenuItem>
              <DropdownMenuItem>Exportar como Excel</DropdownMenuItem>
              <DropdownMenuItem>Exportar como CSV</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="h-9">
            <Plus className="h-4 w-4 mr-2" />
            Novo Pagamento
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Gerenciamento de Salários</CardTitle>
          <CardDescription>Visão geral de pagamentos e benefícios para todos os funcionários</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Função</TableHead>
                  <TableHead>Departamento</TableHead>
                  <TableHead className="text-right">Salário Bruto</TableHead>
                  <TableHead className="text-right">Bônus</TableHead>
                  <TableHead className="text-right">Impostos</TableHead>
                  <TableHead className="text-right">Salário Líquido</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salaryData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.role}</TableCell>
                    <TableCell>{item.department}</TableCell>
                    <TableCell className="text-right">{item.salary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                    <TableCell className="text-right">{item.bonuses.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                    <TableCell className="text-right">{item.taxes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                    <TableCell className="text-right">{item.netSalary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === "Pago" ? "default" : "secondary"}>
                        {item.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
