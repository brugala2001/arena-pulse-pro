
import { Exercise, PerformanceData } from "@/models/training";

// Mock delay function to simulate API latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock database
let exercises: Exercise[] = [
  {
    id: "1",
    title: "Treino de Finalização",
    type: "tecnico",
    description: "Exercícios de finalização de diferentes distâncias",
    videoUrl: "https://example.com/video1",
    date: new Date(2025, 3, 14)
  },
  {
    id: "2",
    title: "Marcação por Zona",
    type: "tatico",
    description: "Exercício de posicionamento defensivo em zonas",
    videoUrl: "https://example.com/video2",
    date: new Date(2025, 3, 16)
  }
];

// CRUD operations for exercises
export const fetchExercises = async (): Promise<Exercise[]> => {
  await delay(800); // Simulate API delay
  return [...exercises];
};

export const addExercise = async (exercise: Omit<Exercise, "id">): Promise<Exercise> => {
  await delay(1000); // Simulate API delay
  const newExercise = {
    ...exercise,
    id: Math.random().toString(36).substring(2, 9)
  };
  
  exercises.push(newExercise);
  return newExercise;
};

export const updateExercise = async (exercise: Exercise): Promise<Exercise> => {
  await delay(1000); // Simulate API delay
  const index = exercises.findIndex(e => e.id === exercise.id);
  if (index === -1) {
    throw new Error("Exercise not found");
  }
  
  exercises[index] = exercise;
  return exercise;
};

export const deleteExercise = async (id: string): Promise<void> => {
  await delay(1000); // Simulate API delay
  exercises = exercises.filter(e => e.id !== id);
};

// Performance data operations
const generateRandomPerformanceData = (days: number): PerformanceData[] => {
  return Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - i));
    
    return {
      date: date.toISOString().split('T')[0],
      velocity: Math.random() * 10 + 20, // 20-30 km/h
      distance: Math.random() * 3 + 7, // 7-10 km
      acceleration: Math.random() * 3 + 2, // 2-5 m/s²
    };
  });
};

export const fetchPerformanceData = async (
  playerId: string,
  period: "weekly" | "monthly" | "seasonal" = "weekly"
): Promise<PerformanceData[]> => {
  await delay(800); // Simulate API delay
  
  const days = period === "weekly" ? 7 : period === "monthly" ? 30 : 90;
  return generateRandomPerformanceData(days);
};
