export type ChapterStatus = "completed" | "in_progress" | "next_unlocked" | "unlocked_far" | "locked";
export interface Chapter {
  id: number;
  slug: string;
  title: string;
  status: ChapterStatus;
  totalSeances: number;
  completedSeances: number;
  estimatedDurationMin: number;
  prerequisiteChapterTitle: string | null;
}

export const chaptersData: Chapter[] = [
  { id: 1, slug: "limites-continuite", title: "Limites & Continuité", status: "in_progress", totalSeances: 7, completedSeances: 0, estimatedDurationMin: 165, prerequisiteChapterTitle: null },
  { id: 2, slug: "derivation", title: "Dérivation", status: "next_unlocked", totalSeances: 6, completedSeances: 0, estimatedDurationMin: 140, prerequisiteChapterTitle: null },
  { id: 3, slug: "primitives-integrales", title: "Primitives & Intégrales", status: "unlocked_far", totalSeances: 7, completedSeances: 0, estimatedDurationMin: 150, prerequisiteChapterTitle: null },
  { id: 4, slug: "log-exp", title: "Logarithmes & Exponentielles", status: "locked", totalSeances: 8, completedSeances: 0, estimatedDurationMin: 180, prerequisiteChapterTitle: "Primitives & Intégrales" },
  { id: 5, slug: "suites", title: "Suites numériques", status: "locked", totalSeances: 6, completedSeances: 0, estimatedDurationMin: 135, prerequisiteChapterTitle: "Logarithmes & Exponentielles" },
  { id: 6, slug: "complexes", title: "Nombres complexes", status: "locked", totalSeances: 7, completedSeances: 0, estimatedDurationMin: 160, prerequisiteChapterTitle: "Suites numériques" },
  { id: 7, slug: "geometrie-espace", title: "Géométrie dans l'espace", status: "locked", totalSeances: 6, completedSeances: 0, estimatedDurationMin: 140, prerequisiteChapterTitle: "Nombres complexes" },
  { id: 8, slug: "probabilites", title: "Probabilités", status: "locked", totalSeances: 5, completedSeances: 0, estimatedDurationMin: 110, prerequisiteChapterTitle: "Géométrie dans l'espace" },
  { id: 9, slug: "arithmetique", title: "Arithmétique", status: "locked", totalSeances: 5, completedSeances: 0, estimatedDurationMin: 115, prerequisiteChapterTitle: "Probabilités" },
  { id: 10, slug: "structures-algebriques", title: "Structures algébriques", status: "locked", totalSeances: 4, completedSeances: 0, estimatedDurationMin: 95, prerequisiteChapterTitle: "Arithmétique" },
  { id: 11, slug: "approfondissement-fonctions", title: "Approfondissement Fonctions", status: "locked", totalSeances: 5, completedSeances: 0, estimatedDurationMin: 120, prerequisiteChapterTitle: "Structures algébriques" },
  { id: 12, slug: "revisions-bac", title: "Révisions Bac National", status: "locked", totalSeances: 8, completedSeances: 0, estimatedDurationMin: 200, prerequisiteChapterTitle: "Approfondissement Fonctions" }
];

// ---------------------------------------------------------------------------
// Séance data model — §14.2.9.g payoff métacognitif
// ---------------------------------------------------------------------------

export interface SeancePayoff {
  reflectiveQuestion: string;   // 1 question, voix tuteur, tutoiement
  options: string[];            // 3 reformulations de la méthode
  correctIndex: number;         // la meilleure généralisation
  affirmation: string;          // 1-2 phrases max, JAMAIS une liste, confirme la métacognition
}

export interface Seance {
  id: string;
  chapterSlug: string;          // "limites-continuite"
  number: number;               // 1
  title: string;                // "Formes indéterminées 0/0"
  conceptKey: string;           // "forme-indeterminee-0-0"
  payoff: SeancePayoff;
}

export const seancesData: Seance[] = [
  {
    id: "s1-limites",
    chapterSlug: "limites-continuite",
    number: 1,
    title: "Formes indéterminées 0/0",
    conceptKey: "forme-indeterminee-0-0",
    payoff: {
      reflectiveQuestion:
        "Avant de filer — en une phrase : quand tu tombes sur une forme 0/0 avec un polynôme, quelle est la première chose à tenter ?",
      options: [
        "Factoriser, puis simplifier le facteur qui s'annule",
        "Remplacer directement x par la valeur",
        "Conclure tout de suite que la limite n'existe pas",
      ],
      correctIndex: 0,
      affirmation:
        "Exactement. Tu repères le 0/0, tu factorises pour faire disparaître ce qui s'annule, et là tu peux conclure. Garde ce réflexe, c'est lui qui débloque presque toutes les formes indéterminées.",
    },
  },
];
