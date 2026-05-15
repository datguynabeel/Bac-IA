// ============================================================================
// SIRAJ — Mock Data Séance "Limites & Continuité"
// ----------------------------------------------------------------------------
// Conforme §14.6.4 : données 100% scriptées, aucun appel API réel.
// Conforme §14.6.5 : fichier mock-data typé, remplaçable Supabase Phase 2.
// ============================================================================

export type MessageRole = "tuteur" | "eleve";
export type MessageType = "text" | "mcq";

export interface MCQChoice {
  label: string;
  text: string;
  isCorrect: boolean;
}

export interface MCQData {
  question: string;
  choices: MCQChoice[];
}

export interface SeanceMessage {
  id: string;
  role: MessageRole;
  type: MessageType;
  content: string;
  mcq?: MCQData;
  delayMs: number; // délai avant affichage (typing indicator)
}

export interface SeanceData {
  id: string;
  slug: string;
  chapitreTitle: string;
  seanceTitle: string;
  seanceNumber: number;
  totalSeances: number;
  elevePrenom: string;
  messages: SeanceMessage[];
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export const seanceLimitesMock: SeanceData = {
  id: "seance-001",
  slug: "limites-continuite",
  chapitreTitle: "Limites & Continuité",
  seanceTitle: "Formes indéterminées 0/0",
  seanceNumber: 1,
  totalSeances: 7,
  elevePrenom: "Yasmine",
  messages: [
    {
      id: "msg-1",
      role: "tuteur",
      type: "text",
      content:
        "Salam Yasmine ! Aujourd'hui on attaque les limites avec une forme indéterminée classique. Calcule :\n\n$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$\n\nQue se passe-t-il si tu remplaces directement x par 2 ?",
      delayMs: 600,
    },
    {
      id: "msg-2",
      role: "eleve",
      type: "text",
      content: "On obtient 0/0, c'est une forme indéterminée.",
      delayMs: 0,
    },
    {
      id: "msg-3",
      role: "tuteur",
      type: "text",
      content:
        "Exactement ! Forme indéterminée 0/0. La technique : factoriser le numérateur pour faire apparaître le facteur $(x-2)$ qu'on simplifiera.\n\nRappel-toi de l'identité remarquable :\n$$a^2 - b^2 = (a-b)(a+b)$$\n\nApplique-la à $x^2 - 4$.",
      delayMs: 600,
    },
    {
      id: "msg-4",
      role: "eleve",
      type: "text",
      content: "x² - 4 = (x-2)(x+2)",
      delayMs: 0,
    },
    {
      id: "msg-5",
      role: "tuteur",
      type: "text",
      content:
        "Parfait. Donc :\n$$\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2} = x+2$$\n\nQuand $x \\to 2$, la limite est donc :\n$$\\lim_{x \\to 2} (x+2) = 4$$\n\nMaintenant à toi : mini-exercice de validation.",
      delayMs: 600,
    },
    {
      id: "msg-6",
      role: "tuteur",
      type: "mcq",
      content: "Calcule $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$",
      mcq: {
        question: "Calcule $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$",
        choices: [
          { label: "A", text: "0", isCorrect: false },
          { label: "B", text: "3", isCorrect: false },
          { label: "C", text: "6", isCorrect: true },
          { label: "D", text: "Limite indéfinie", isCorrect: false },
        ],
      },
      delayMs: 600,
    },
  ],
  feedbackCorrect:
    "Bravo Yasmine ! Tu as appliqué la même technique : $x^2 - 9 = (x-3)(x+3)$, simplification, limite = $3+3 = 6$. Tu maîtrises cette technique. Séance suivante : limites en l'infini.",
  feedbackIncorrect:
    "Pas tout à fait. Rappelle-toi : $x^2 - 9 = (x-3)(x+3)$, donc après simplification on obtient $x+3$. Quand $x \\to 3$, la limite est $3+3 = 6$. Réessaie !",
};
