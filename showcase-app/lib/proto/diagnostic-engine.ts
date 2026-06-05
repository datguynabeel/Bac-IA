import { DIAGNOSTIC_ITEMS, DiagnosticItem } from "./diagnostic-data";

export const THEME_ORDER = ["Limites", "Dérivation", "Log/Exp", "Suites", "Complexes"] as const;
export type DiagnosticTheme = typeof THEME_ORDER[number];

const THEME_SLUG_MAP: Record<DiagnosticTheme, string> = {
  "Limites": "limites-continuite",
  "Dérivation": "derivation",
  "Log/Exp": "log-exp",
  "Suites": "suites",
  "Complexes": "complexes"
};

/**
 * Select the diagnostic question for a given theme that is closest to the target difficulty.
 * If there is a tie, select the one with the lower difficulty.
 */
export function selectNextItem(theme: DiagnosticTheme, targetDifficulty: number): DiagnosticItem {
  const items = DIAGNOSTIC_ITEMS.filter((item) => item.theme === theme);
  if (items.length === 0) {
    throw new Error(`No items found for theme: ${theme}`);
  }

  // Find item with closest difficulty
  let bestItem = items[0];
  let minDiff = Math.abs(bestItem.difficulty - targetDifficulty);

  for (let i = 1; i < items.length; i++) {
    const item = items[i];
    const diff = Math.abs(item.difficulty - targetDifficulty);
    if (diff < minDiff) {
      minDiff = diff;
      bestItem = item;
    } else if (diff === minDiff) {
      // Tie-breaker: choose lower difficulty
      if (item.difficulty < bestItem.difficulty) {
        bestItem = item;
      }
    }
  }

  return bestItem;
}

/**
 * Compute the next target difficulty based on correctness.
 */
export function getNewTarget(correct: boolean, currentTarget: number): number {
  if (correct) {
    return Math.min(3, currentTarget + 1);
  } else {
    return Math.max(1, currentTarget - 1);
  }
}

/**
 * Calculate the mastery score (0-100) based on correctness and question difficulty.
 */
export function calculateMastery(correct: boolean, difficulty: number): number {
  if (correct) {
    if (difficulty === 3) return 90;
    if (difficulty === 2) return 72;
    return 58; // difficulty === 1
  } else {
    if (difficulty === 3) return 48;
    if (difficulty === 2) return 38;
    return 22; // difficulty === 1
  }
}

/**
 * Generate recommended chapter slugs based on mastery scores.
 * Recommends themes with mastery < 60 (sorted ascending, max 3).
 * If all themes are >= 60, recommends the 2 lowest themes (sorted ascending).
 */
export function getRecommendations(mastery: Record<DiagnosticTheme, number>): string[] {
  // Convert mastery to list of { theme, score, slug }
  const items = THEME_ORDER.map((theme) => ({
    theme,
    score: mastery[theme] ?? 0,
    slug: THEME_SLUG_MAP[theme]
  }));

  // Filter for scores < 60
  const weakItems = items.filter((item) => item.score < 60);

  if (weakItems.length > 0) {
    // Sort ascending (lowest score first)
    weakItems.sort((a, b) => a.score - b.score);
    // Return slugs, max 3
    return weakItems.slice(0, 3).map((item) => item.slug);
  } else {
    // All >= 60, sort all items ascending and return the 2 lowest
    const sortedAll = [...items].sort((a, b) => a.score - b.score);
    return sortedAll.slice(0, 2).map((item) => item.slug);
  }
}
