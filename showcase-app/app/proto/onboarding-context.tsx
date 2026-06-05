"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type OnboardingResult = {
  prenom: string;
  langue: 'fr' | 'darija' | 'ar' | 'mix';
  mastery: Record<string, number>;
  recommendedChapterSlugs: string[];
};

interface OnboardingContextType {
  result: OnboardingResult | null;
  setResult: (result: OnboardingResult | null) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [result, setResult] = useState<OnboardingResult | null>(null);

  return (
    <OnboardingContext.Provider value={{ result, setResult }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}
