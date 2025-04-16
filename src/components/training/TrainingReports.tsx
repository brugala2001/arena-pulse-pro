
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DownloadIcon, FileIcon, PrinterIcon } from "lucide-react";

export default function TrainingReports() {
  // Mock player and report data
  const players = [
    { id: 1, name: "Lionel Messi", position: "Atacante", avgSpeed: 27.8, distance: 9.3, acceleration: 4.2 },
    { id: 2, name: "Cristiano Ronaldo", position: "Atacante", avgSpeed: 29.5, distance: 9.8, acceleration: 4.4 },
    { id: 3, name: "Neymar Jr.", position: "Atacante", avgSpeed: 28.1, distance: 8.7, acceleration: 4.6 },
    { id: 4, name: "Robert Lewandowski", position: "Atacante", avgSpeed: 26.9, distance: 9.5, acceleration: 3.8 },
    { id: 5, name: "Kevin De Bruyne", position: "Meio-Campo", avgSpeed: 25.2, distance: 10.7, acceleration: 3.7 },
  ];

  // Mocked report generation functions
  const generateIndividualReport = (playerId: number) => {
    console.log(`Generating report for player ID: ${playerId}`);
    // This would be replaced with actual API call
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Relatório Individual</span>
              <Select defaultValue="weekly">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Semanal</SelectItem>
                  <SelectItem value="monthly">Mensal</SelectItem>
                  <SelectItem value="seasonal">Temporada</SelectItem>
                </SelectContent>
              </Select>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Jogador</TableHead>
                  <TableHead>Posição</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {players.map((player) => (
                  <TableRow key={player.id}>
                    <TableCell>{player.name}</TableCell>
                    <TableCell>{player.position}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => generateIndividualReport(player.id)}
                      >
                        <FileIcon className="h-4 w-4 mr-1" />
                        Gerar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Relatório de Equipe</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Métrica</TableHead>
                  <TableHead className="text-right">Média</TableHead>
                  <TableHead className="text-right">Meta</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Velocidade Média</TableCell>
                  <TableCell className="text-right">27.5 km/h</TableCell>
                  <TableCell className="text-right">28.0 km/h</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Distância Percorrida</TableCell>
                  <TableCell className="text-right">9.6 km</TableCell>
                  <TableCell className="text-right">10.0 km</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Aceleração Média</TableCell>
                  <TableCell className="text-right">4.1 m/s²</TableCell>
                  <TableCell className="text-right">4.5 m/s²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sprints Totais</TableCell>
                  <TableCell className="text-right">37</TableCell>
                  <TableCell className="text-right">40</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" size="sm">
                <PrinterIcon className="h-4 w-4 mr-1" />
                Imprimir
              </Button>
              <Button variant="default" size="sm">
                <DownloadIcon className="h-4 w-4 mr-1" />
                Exportar PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Comparativo de Desempenho</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Jogador</TableHead>
                <TableHead className="text-right">Vel. Média (km/h)</TableHead>
                <TableHead className="text-right">Distância (km)</TableHead>
                <TableHead className="text-right">Aceleração (m/s²)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.id}>
                  <TableCell>{player.name}</TableCell>
                  <TableCell className="text-right">{player.avgSpeed}</TableCell>
                  <TableCell className="text-right">{player.distance}</TableCell>
                  <TableCell className="text-right">{player.acceleration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
