
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, Calendar as CalendarIcon } from "lucide-react";
import { AddExerciseForm } from "./AddExerciseForm";
import { format } from "date-fns";

export default function TrainingPlanning() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock training data
  const [trainingEvents, setTrainingEvents] = useState([
    {
      id: 1,
      date: new Date(2025, 3, 15),
      title: "Treino Tático",
      description: "Trabalho de posicionamento defensivo",
      exercises: ["Marcação por zona", "Saída de bola"]
    },
    {
      id: 2,
      date: new Date(2025, 3, 17),
      title: "Treino Físico",
      description: "Preparação física de alta intensidade",
      exercises: ["Sprints curtos", "Exercícios pliométricos"]
    },
  ]);

  // Show events for selected date
  const selectedDateEvents = trainingEvents.filter(
    event => date && event.date.toDateString() === date.toDateString()
  );

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Calendário de Treinos</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-full"
            initialFocus
          />
        </CardContent>
      </Card>
      
      <Card className="md:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            {date ? format(date, "dd/MM/yyyy") : "Selecione uma data"}
          </CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-4 w-4" />
                <span>Adicionar Treino</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Novo Treino</DialogTitle>
              </DialogHeader>
              <AddExerciseForm selectedDate={date} />
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {selectedDateEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDateEvents.map((event) => (
                <div key={event.id} className="border rounded-md p-4">
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                  <div className="mt-3">
                    <h4 className="text-xs font-semibold uppercase text-muted-foreground">Exercícios:</h4>
                    <ul className="mt-1 text-sm">
                      {event.exercises.map((exercise, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-primary"></div>
                          {exercise}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-32 text-center">
              <CalendarIcon className="h-10 w-10 text-muted-foreground/50 mb-2" />
              <p className="text-muted-foreground">
                {date 
                  ? "Nenhum treino agendado para esta data"
                  : "Selecione uma data para ver os treinos"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
