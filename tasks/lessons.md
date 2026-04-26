# Bac IA — Mémoire d'apprentissage (lessons.md)

> Ce fichier capture les corrections récurrentes faites au cours du projet.
> Il est partagé entre Claude Desktop (stratégie) et Antigravity (exécution).
> Format : `[YYYY-MM-DD] [Source] [Catégorie] — Description en une phrase.`
>
> Sources possibles : `Claude Desktop` | `Antigravity` | `Fondateur`
> Catégories possibles : `Code` | `Design` | `Stratégie` | `Culturel`
>
> Référence canonique : section 14.2.5 du document maître `Bac_IA_Projet_Complet_v1.3.md`.

---

## Leçons actives

### Avril 2026

- [2026-04-26] [Claude Desktop] [Stratégie] — Toujours préfixer les livrables Claude Desktop → Antigravity du header `🎯 POUR ANTIGRAVITY` avec modèle recommandé et justification (cf. section 14.2.3).
- [2026-04-26] [Claude Desktop] [Stratégie] — Ne jamais générer 300+ lignes de code en Opus 4.7 Desktop ; livrer le prompt à exécuter dans Antigravity (cf. section 14.2.3, méta-instruction 8).
- [2026-04-26] [Claude Desktop] [Stratégie] — Privilégier les patches ciblés (AVANT/APRÈS) à la régénération du document maître (cf. méta-instruction 9).
- [2026-04-26] [Fondateur] [Culturel] — Toujours afficher la carte du Maroc avec frontières incluant le Sahara, sans pointillé, sans démarcation ambiguë (cf. section 2.5).
- [2026-04-26] [Fondateur] [Design] — Vocabulaire produit officiel : « Chapitres », « Exercices », « Séance ». Jamais de jargon LMS américain (« Modules », « Lessons », « Courses ») (cf. section 2.5).
- [2026-04-26] [Fondateur] [Design] — Typographies validées : Inter ou Manrope (latin), IBM Plex Sans Arabic (arabe), KaTeX (math). Pas d'autre famille sans validation (cf. section 2.5).
- [2026-04-26] [Antigravity] [Code] — Pour toute génération React via Stitch (skill `react:components`), bascule sur Claude 4.6 Opus thinking. Non négociable (cf. section 14.2.4).
- [2026-04-26] [Fondateur] [Stratégie] — Une conversation Claude Desktop = un sujet cohérent. Fermer dès 15+ échanges ou changement de sujet pour économiser tokens (coût input quasi-quadratique du re-traitement historique).
- [2026-04-26] [Claude Desktop] [Stratégie] — Garde-fou session activé : Claude évalue silencieusement chaque message et propose fermeture via bloc `🔄 GARDE-FOU SESSION` quand pertinent (cf. section 14.2.6, méta-instruction 11).
- [2026-04-26 18:35 GMT+1] [Fondateur] [Stratégie] — Pricing : ne JAMAIS partir du ressenti du fondateur. Le pricing se décide depuis le marché documenté (section 1.3.2), pas depuis le rapport personnel à l'argent. Si l'intuition dit "trop cher", la vraie question est "est-ce que mon produit délivre cette valeur ?". Règle SaaS : il est 10× plus facile de baisser un prix que de le monter — donc lancer haut par défaut.
- [2026-04-26 18:35 GMT+1] [Fondateur] [Stratégie] — Triggers de gouvernance : éviter les définitions trop étroites. Quand on définit un trigger de report d'achat outil ou de décision, lister les 3-4 dimensions de valeur potentielle, pas seulement la dimension qui a saturé en premier dans la conversation. Le bon trigger est multidimensionnel.
- [2026-04-26 18:40 GMT+1] [Claude Desktop] [Stratégie] — Garde-fou session : Claude doit l'émettre activement toutes les 5-7 réponses ET en fin de session systématiquement, sans attendre saturation contextuelle perçue. C'est un rituel de discipline, pas un mécanisme d'urgence (révision section 14.2.6).
- [2026-04-26 18:55 GMT+1] [Fondateur] [Stratégie] — Tooling de questions interactives (boutons à choix) interfère avec l'évaluation autonome du garde-fou session par Claude. Préférer le format texte avec questions numérotées (1/2/3 ou A/B/C) auquel le fondateur répond en clair. Hypothèse à valider sur les prochaines sessions.

---

## Archive

(Vide pour l'instant. Les leçons obsolètes ou fusionnées seront déplacées ici lors de la revue mensuelle.)
