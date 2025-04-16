
export interface Opponent {
  id: string;
  name: string;
  logo?: string;
  coach: string;
  formation: string;
  strengths: string[];
  weaknesses: string[];
}

export interface MatchStats {
  possession: number; // percentage
  shots: number;
  shotsOnTarget: number;
  corners: number;
  fouls: number;
  yellowCards: number;
  redCards: number;
  offsides: number;
  passes: number;
  passAccuracy: number; // percentage
}

export interface Goal {
  playerId: string;
  playerName: string;
  minute: number;
  assistedBy?: {
    playerId: string;
    playerName: string;
  };
  type: "open-play" | "penalty" | "free-kick" | "own-goal" | "header";
}

export interface Card {
  playerId: string;
  playerName: string;
  minute: number;
  type: "yellow" | "red";
  reason: string;
}

export interface Substitution {
  playerOutId: string;
  playerOutName: string;
  playerInId: string;
  playerInName: string;
  minute: number;
  reason?: string;
}

export interface Match {
  id: string;
  date: Date;
  location: string;
  competition: string;
  homeTeam: boolean;
  opponent: Opponent;
  status: "scheduled" | "in-progress" | "completed" | "postponed" | "cancelled";
  score?: {
    team: number;
    opponent: number;
  };
  teamFormation?: string;
  teamLineup?: string[]; // Array of player IDs
  opponentLineup?: string[]; // Array of player names
  teamStats?: MatchStats;
  opponentStats?: MatchStats;
  goals?: Goal[];
  cards?: Card[];
  substitutions?: Substitution[];
  tacticalNotes?: string;
  preMatchStrategy?: string;
  postMatchAnalysis?: string;
}
