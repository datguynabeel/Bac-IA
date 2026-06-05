import { OnboardingProvider } from "./onboarding-context";
import { ReactNode } from "react";

export const metadata = {
  title: "SIRAJ — Prototype Tuteur IA",
  description:
    "Prototype démo SIRAJ — Tuteur IA personnalisé pour le Bac marocain. Maths 2 Bac SM.",
};

export default function ProtoLayout({ children }: { children: ReactNode }) {
  return (
    <OnboardingProvider>
      <div
        style={{ backgroundColor: "#0F1419", minHeight: "100vh" }}
        className="text-[#F5EDE0]"
      >
        {children}
      </div>
    </OnboardingProvider>
  );
}
