export interface Session {
  id: string;
  numero: number;
  titre: string;
  duree: string;
  exercices: number;
  statut: "disponible" | "verrouille";
  difficulte: "Découverte" | "Application" | "Approfondissement";
}

export const mockSessions: Session[] = [
  {
    "id": "limites-continuite",
    "numero": 1,
    "titre": "Notion de limite en un point",
    "duree": "45 min",
    "exercices": 8,
    "statut": "disponible",
    "difficulte": "Découverte"
  },
  {
    "id": "limites-infini",
    "numero": 2,
    "titre": "Limites à l'infini et asymptotes",
    "duree": "50 min",
    "exercices": 10,
    "statut": "verrouille",
    "difficulte": "Découverte"
  },
  {
    "id": "operations-limites",
    "numero": 3,
    "titre": "Opérations sur les limites",
    "duree": "45 min",
    "exercices": 12,
    "statut": "verrouille",
    "difficulte": "Application"
  },
  {
    "id": "formes-indeterminees",
    "numero": 4,
    "titre": "Formes indéterminées",
    "duree": "55 min",
    "exercices": 14,
    "statut": "verrouille",
    "difficulte": "Application"
  },
  {
    "id": "continuite-point",
    "numero": 5,
    "titre": "Continuité en un point",
    "duree": "40 min",
    "exercices": 9,
    "statut": "verrouille",
    "difficulte": "Application"
  },
  {
    "id": "continuite-intervalle",
    "numero": 6,
    "titre": "Continuité sur un intervalle",
    "duree": "45 min",
    "exercices": 10,
    "statut": "verrouille",
    "difficulte": "Approfondissement"
  },
  {
    "id": "tvi-applications",
    "numero": 7,
    "titre": "Théorème des valeurs intermédiaires",
    "duree": "50 min",
    "exercices": 11,
    "statut": "verrouille",
    "difficulte": "Approfondissement"
  }
];
