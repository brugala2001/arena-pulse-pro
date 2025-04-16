
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { SalariesManagement } from "@/components/financial/SalariesManagement";
import { SponsorshipsRevenue } from "@/components/financial/SponsorshipsRevenue";
import { BudgetControl } from "@/components/financial/BudgetControl";

const Financial = () => {
  const [activeTab, setActiveTab] = useState("salaries");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Financeiro</h1>
        <p className="text-muted-foreground">
          Gerencie salários, patrocínios e orçamento do clube.
        </p>
      </div>

      <Tabs
        defaultValue="salaries"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="salaries">Salários e Bônus</TabsTrigger>
          <TabsTrigger value="sponsorships">Patrocínios</TabsTrigger>
          <TabsTrigger value="budget">Orçamento</TabsTrigger>
        </TabsList>

        <TabsContent value="salaries" className="space-y-4">
          <SalariesManagement />
        </TabsContent>

        <TabsContent value="sponsorships" className="space-y-4">
          <SponsorshipsRevenue />
        </TabsContent>

        <TabsContent value="budget" className="space-y-4">
          <BudgetControl />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Financial;
