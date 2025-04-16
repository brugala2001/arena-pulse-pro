
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { YouthCategories } from "@/components/youth/YouthCategories";
import { YouthScouts } from "@/components/youth/YouthScouts";
import { YouthDevelopment } from "@/components/youth/YouthDevelopment";

const Youth = () => {
  const [activeTab, setActiveTab] = useState("categories");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Base/Juvenil</h1>
        <p className="text-muted-foreground">
          Gerenciamento das categorias de base e desenvolvimento de jovens talentos.
        </p>
      </div>

      <Tabs
        defaultValue="categories"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="categories">Categorias</TabsTrigger>
          <TabsTrigger value="development">Desenvolvimento</TabsTrigger>
          <TabsTrigger value="scouts">Olheiros</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-4">
          <YouthCategories />
        </TabsContent>

        <TabsContent value="development" className="space-y-4">
          <YouthDevelopment />
        </TabsContent>

        <TabsContent value="scouts" className="space-y-4">
          <YouthScouts />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Youth;
