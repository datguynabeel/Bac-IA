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
  { id: 1, slug: "limites-continuite", title: "Limites & Continuité", status: "in_progress", totalSeances: 7, completedSeances: 3, estimatedDurationMin: 165, prerequisiteChapterTitle: null },
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
