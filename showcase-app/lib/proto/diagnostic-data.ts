export interface DiagnosticItem {
  id: string;
  theme: 'Limites' | 'Dérivation' | 'Log/Exp' | 'Suites' | 'Complexes';
  difficulty: 1 | 2 | 3;
  enonce: string;
  options: string[];
  correctIndex: number;
}

export const DIAGNOSTIC_ITEMS: DiagnosticItem[] = [
  // [Limites & Continuité]
  {
    id: "LIM-1",
    theme: "Limites",
    difficulty: 1,
    enonce: "\\lim_{x\\to 2} (3x - 1) = ?",
    options: ["6", "2", "5", "-1"],
    correctIndex: 2
  },
  {
    id: "LIM-2",
    theme: "Limites",
    difficulty: 3,
    enonce: "\\lim_{x\\to 2} \\frac{x^2 - 4}{x - 2} = ?",
    options: ["0", "4", "2", "+\\infty"],
    correctIndex: 1
  },
  // [Dérivation]
  {
    id: "DER-1",
    theme: "Dérivation",
    difficulty: 1,
    enonce: "f(x) = x^3, \\quad f'(x) = ?",
    options: ["2x^2", "3x^2", "x^2", "3x"],
    correctIndex: 1
  },
  {
    id: "DER-2",
    theme: "Dérivation",
    difficulty: 2,
    enonce: "f(x) = x\\ln(x) \\quad (x>0), \\quad f'(x) = ?",
    options: ["\\ln(x)", "1/x", "1", "\\ln(x) + 1"],
    correctIndex: 3
  },
  // [Logarithme / Exponentielle]
  {
    id: "LOG-1",
    theme: "Log/Exp",
    difficulty: 1,
    enonce: "\\ln(1) = ?",
    options: ["1", "0", "e", "\\text{non défini}"],
    correctIndex: 1
  },
  {
    id: "LOG-2",
    theme: "Log/Exp",
    difficulty: 2,
    enonce: "\\text{Résoudre } e^x = 1",
    options: ["x = 1", "x = e", "x = 0", "\\text{aucune solution}"],
    correctIndex: 2
  },
  // [Suites]
  {
    id: "SUI-1",
    theme: "Suites",
    difficulty: 1,
    enonce: "\\text{Suite arithmétique } u_0 = 2 \\text{ et raison } 3. \\quad u_2 = ?",
    options: ["5", "8", "11", "6"],
    correctIndex: 1
  },
  {
    id: "SUI-2",
    theme: "Suites",
    difficulty: 2,
    enonce: "\\text{Suite géométrique } v_0 = 1 \\text{ et raison } 1/2. \\quad \\lim_{n\\to+\\infty} v_n = ?",
    options: ["1/2", "1", "0", "+\\infty"],
    correctIndex: 2
  },
  // [Nombres complexes]
  {
    id: "CPX-1",
    theme: "Complexes",
    difficulty: 1,
    enonce: "\\text{Module de } z = 3 + 4i",
    options: ["7", "25", "5", "1"],
    correctIndex: 2
  },
  {
    id: "CPX-2",
    theme: "Complexes",
    difficulty: 2,
    enonce: "i^2 = ?",
    options: ["1", "i", "-1", "-i"],
    correctIndex: 2
  }
];
