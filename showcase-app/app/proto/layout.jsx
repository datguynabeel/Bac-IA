// ============================================================================
// SIRAJ — Proto Layout (fond sombre #0F1419)
// ----------------------------------------------------------------------------
// Layout isolé pour toutes les routes /proto/*
// Conforme §14.6.5 : isolation logique via routes /proto/*
// ============================================================================

export const metadata = {
  title: "SIRAJ — Prototype Tuteur IA",
  description:
    "Prototype démo SIRAJ — Tuteur IA personnalisé pour le Bac marocain. Maths 2 Bac SM.",
};

export default function ProtoLayout({ children }) {
  return (
    <div
      style={{ backgroundColor: "#0F1419", minHeight: "100vh" }}
      className="text-[#F5EDE0]"
    >
      {children}
    </div>
  );
}
