
export interface Exercise {
  id: string;
  title: string;
  type: string;
  description: string;
  videoUrl?: string;
  date: Date;
}

export interface PerformanceData {
  date: string;
  velocity: number;
  distance: number;
  acceleration: number;
}

export interface TrainingSession {
  id: string;
  date: Date;
  title: string;
  description: string;
  exercises: string[]; // Array of exercise IDs
  duration: number; // in minutes
  intensity: "low" | "medium" | "high";
}

export interface PlayerPerformance {
  playerId: string;
  date: string;
  metrics: {
    velocity: number; // km/h
    distance: number; // km
    acceleration: number; // m/s²
    sprints: number; // count
    heartRate: number; // bpm
  };
  notes?: string;
}
