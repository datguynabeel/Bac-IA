"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ChapitrePlaceholder({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className="min-h-screen bg-[#0F1419] text-[#F5EDE0] flex flex-col items-center justify-center px-5">
      <Link 
        href="/proto/chapitres" 
        className="absolute top-6 left-6 p-2 rounded-full bg-[rgba(245,237,224,0.1)] transition-colors hover:bg-[rgba(245,237,224,0.2)]"
      >
        <ChevronLeft size={24} color="#F5EDE0" />
      </Link>
      
      <div 
        className="w-20 h-20 mb-6 rounded-2xl flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(232, 184, 96, 0.2) 0%, rgba(232, 184, 96, 0.05) 100%)",
          border: "1px solid rgba(232, 184, 96, 0.2)"
        }}
      >
        <span style={{ fontSize: "32px" }}>🚧</span>
      </div>

      <h1 
        className="text-2xl text-center mb-4"
        style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, color: "#E8B860" }}
      >
        Chapitre : {slug}
      </h1>
      
      <p 
        className="text-center max-w-sm mb-12"
        style={{ fontFamily: "var(--font-sans)", color: "rgba(245, 237, 224, 0.7)" }}
      >
        Ce chapitre n'est pas encore disponible dans le prototype interactif actuel. Seul le chapitre "Limites & Continuité" est entièrement cliquable.
      </p>
    </div>
  );
}
