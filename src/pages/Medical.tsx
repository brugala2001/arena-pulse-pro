
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Medical = () => {
  const [activeTab, setActiveTab] = useState("health");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Departamento Médico</h1>
        <p className="text-muted-foreground">
          Gestão da saúde dos atletas, prontuários e recuperação de lesões.
        </p>
      </div>

      <Tabs
        defaultValue="health"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="health">Prontuários</TabsTrigger>
          <TabsTrigger value="rehab">Reabilitação</TabsTrigger>
          <TabsTrigger value="exams">Exames</TabsTrigger>
        </TabsList>

        <TabsContent value="health" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Prontuários de Saúde</CardTitle>
              <CardDescription>Histórico médico completo dos atletas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-8 text-center">
                <p className="text-muted-foreground">Módulo de Prontuários em desenvolvimento.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rehab" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestão de Reabilitação</CardTitle>
              <CardDescription>Acompanhamento de recuperação de atletas lesionados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-8 text-center">
                <p className="text-muted-foreground">Módulo de Reabilitação em desenvolvimento.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Exames Periódicos</CardTitle>
              <CardDescription>Agendamento e resultados de exames de rotina</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-8 text-center">
                <p className="text-muted-foreground">Módulo de Exames em desenvolvimento.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Medical;
