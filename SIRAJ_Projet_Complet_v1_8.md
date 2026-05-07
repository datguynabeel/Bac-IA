# SIRAJ — Document de Référence Projet

**Version :** 1.8
**Date :** Mai 2026 — v1.8 acte le renommage produit “Bac IA” → “SIRAJ” (04/05/2026), intègre l'identité de marque complète (Section 13.2) et met à jour la Partie 13 (décisions cochées identité + statut marque).
**Auteur :** [Fondateur] + Claude (Co-Fondateur IA, Chef de Projet & Delivery Manager)
**Statut :** Document maître — à charger dans Claude Projects comme connaissance permanente
**Langue :** Français (avec extraits darija/arabe selon contexte)

**Historique des versions :**
- v1.0 (avril 2026) — Version initiale
- v1.1 (avril 2026) — Ajout section 2.5 : règles culturelles permanentes (souveraineté territoriale, vocabulaire produit, typographie, identité utilisateur) suite à la validation du design chat tuteur V1 via Antigravity/Stitch
- v1.2 (avril 2026) — Ajout Partie 14 (Cadre de travail fondateur), section 11.4 (Design Partner Pilote — école privée Casablanca), section 1.4.4 (Persona élève via école pilote), arbitrage design tooling (Stitch exclusif MVP, Figma écarté), mise à jour méta-instructions Claude (point 6 reformulé)
- v1.3 (avril 2026) — Ajout sections 14.2.3 (workflow conception à deux têtes), 14.2.4 (stratégie de sélection modèle dans Antigravity), 14.2.5 (système de mémoire d'apprentissage `lessons.md`), 14.2.6 (garde-fou session de conversation), convention de transmission `🎯 POUR ANTIGRAVITY`, mise à jour stack technique consolidée 14.3, note de distinction runtime/conception en section 3.3, méta-instructions points 8 à 11 (renumérotés 11 à 14)
- v1.4 (avril 2026) — Pricing définitif acté à 100/200/300 DH, discount annuel calibré à -15%, refonte freemium "Découverte enrichi V2" (5 questions/jour + diagnostic + 1 chapitre/mois + 1 PDF/mois + aperçu parent hebdo), remplacement du pack pré-Bac discount par offre saisonnière "Sprint Bac" prix plein + bonus valeur, passage Google AI Plus → Pro, ajout sections 6.5 et 14.2.7 (traçabilité décisions), mise à jour sections 1.1 / 2.3 / 6.1 / 6.2 / 6.3 / 11.5 / 14.2.3 / 14.3
- v1.5 (avril 2026) — Ajout section 14.2.8 (architecture knowledge Claude Projects à 2 niveaux : upload manuel pour fichiers stratégiques + connexion repo pour contexte exécution), mise à jour section 14.3 (stack consolidée) avec ligne dédiée
- v1.6 (avril 2026) — Recalibrage section 14.2.6 (garde-fou session) : ajout sous-sections 14.2.6.4 (angle mort métrique UI), 14.2.6.5 (heuristique de remplacement par proxies de cumul mental, seuil 60% jaune→rouge), 14.2.6.6 (demande explicite de la métrique UI au fondateur après livrable lourd), 14.2.6.7 (format synthèse de fin obligatoire en bloc autonome sans imbrication code fence). Suite à diagnostic défaillance garde-fou du 26/04/2026.

- v1.7 (mai 2026) — Ajout section 1.3.5 (Argumentaire anti-ChatGPT, FAQ commerciale) : pitch d'une phrase, cadrage prix vs ChatGPT Plus, formalisation des 5 moats non-réplicables, résumé tactique 30s pour démo école, limites assumées. Section destinée à un usage opérationnel direct (démo pilote, one-pager pré-vente, FAQ site, formation commerciaux futurs).

- v1.8 (mai 2026) — Renommage produit “Bac IA” → “SIRAJ” acté le 04/05/2026 suite à validation de l'identité de marque complète. Mise à jour de toutes les mentions produit dans le doc maître (mentions historiques préservées en Section 13). Intégration de la Section 13.2 “Identité de marque SIRAJ” (architecture, palette, 8 variantes officielles, slogans). Décisions Section 13 cochées : identité visuelle + statut marque OMPIC. Repo GitHub `datguynabeel/Bac-IA` et URL `https://bac-ia.vercel.app` conservés temporairement (renommage opérationnel séparé, hors scope patch documentaire).

---

## Comment utiliser ce document

Ce document est la source unique de vérité du projet **SIRAJ** (anciennement Bac IA, renommé le 04/05/2026 — cf. Section 13.2). Il est conçu pour être :

1. **Chargé dans Claude Projects** comme connaissance permanente afin que Claude puisse être un véritable copilote du projet à chaque conversation
2. **Mis à jour à chaque étape clé** (validation marché, décisions produit, pivots)
3. **Lu intégralement** par toute nouvelle personne rejoignant le projet (futur dev, marketeur, prof partenaire)

Chaque section est autonome et peut être consultée indépendamment.

---

# PARTIE 1 — STRATÉGIE & VISION

## 1.1 Résumé exécutif

**SIRAJ** est une plateforme de tutorat IA personnalisé pour les lycéens marocains préparant le Baccalauréat (Tronc Commun, 1ère et 2ème année Bac, toutes filières). L'élève dialogue avec un tuteur IA spécialisé dans le programme officiel marocain, en français, arabe ou darija, qui s'adapte à son niveau, identifie ses lacunes, et génère exercices, corrigés détaillés et simulations d'examens nationaux.

**Le problème.** Les parents marocains dépensent en moyenne 200 à 1 500 DH par mois et par matière en cours particuliers, avec une qualité variable, sans suivi structuré, et une disponibilité limitée. Les plateformes existantes (Kezakoo, KoolSkools) proposent du contenu vidéo statique non personnalisé.

**La solution.** Un tuteur IA disponible 24h/24, qui connaît parfaitement le programme officiel marocain, s'adapte à chaque élève, et coûte 10 à 50 fois moins cher qu'un prof particulier — pour un résultat académique mesurable.

**Marché.** ~2 millions d'élèves marocains au lycée. ~400 000 candidats au Bac chaque année. Marché du soutien scolaire estimé à plusieurs milliards de DH/an au Maroc, dont la quasi-totalité informelle.

**Modèle économique.** Freemium SaaS B2C. Découverte (gratuit) : 5 questions/jour + diagnostic initial + 1 chapitre offert/mois + aperçu hebdo parent. Premium 100 DH/mois (1 matière). Famille 200 DH/mois (toutes matières, 1 enfant, dashboard parent complet). Pack Famille 300 DH/mois (jusqu'à 3 enfants). Annuel à -15%. Cible 12 mois : 5 000 abonnés payants × 190 DH ARPU = 950 000 DH MRR (~11,4M DH ARR).

**Investissement initial.** 30 000 à 60 000 DH pour le MVP et les 6 premiers mois (outils, API, marketing, légal). Bootstrappable en solo.

**Time to first revenue.** 3 à 5 mois après lancement de la phase de validation.

**Différenciation défendable.** Spécialisation programme marocain officiel + base de données annales et corrigés + adaptation darija + partenariats écoles privées + données d'apprentissage propriétaires qui s'enrichissent à chaque interaction.

---

## 1.2 Vision et mission

**Vision (10 ans).** Faire du tutorat individualisé de qualité un droit accessible à tous les élèves marocains, indépendamment du revenu familial ou de la ville. Devenir la référence éducative par IA au Maghreb.

**Mission (3 ans).** Aider 100 000 élèves marocains à améliorer leurs notes et à réussir leur Bac avec mention, en démocratisant un accompagnement scolaire de qualité à un prix accessible aux classes moyennes.

**Valeurs produit.**

- **Pédagogie d'abord.** L'IA ne remplace pas la compréhension, elle l'accélère. Pas de "donne-moi la réponse" sans explication.
- **Programme officiel.** Strict alignement sur les manuels et programmes du Ministère de l'Éducation Nationale marocain.
- **Honnêteté académique.** Le produit n'aide pas à tricher aux examens. Il aide à apprendre.
- **Respect de l'élève.** Pas de gamification toxique, pas de notifications anxiogènes, pas d'addiction-by-design.
- **Souveraineté linguistique.** Darija et arabe au même niveau que le français.

---

## 1.3 Analyse de marché

### 1.3.1 Taille du marché

**Marché total adressable (TAM) :**
- ~800 000 élèves en Tronc Commun
- ~800 000 élèves en 1ère année Bac
- ~400 000 candidats au Bac (2ème année)
- **Total : ~2 millions d'élèves au lycée**

**Marché serviceable (SAM) :**
- Foyers de classe moyenne et supérieure avec smartphone et budget soutien : estimé entre 600 000 et 1 million d'élèves
- Concentrés à 70% sur Casablanca, Rabat, Tanger, Marrakech, Fès, Agadir, Meknès

**Marché serviceable obtenable (SOM) à 3 ans :**
- Hypothèse réaliste : 1 à 3% de pénétration du SAM = 6 000 à 30 000 abonnés payants

### 1.3.2 Dépenses en soutien scolaire au Maroc

Selon les enquêtes informelles auprès de parents :
- Cours particulier individuel : 80 à 200 DH/heure selon matière et niveau
- Centre de soutien scolaire : 400 à 1 200 DH/mois par matière
- Stages intensifs Bac (été ou pré-examen) : 1 500 à 5 000 DH

**Un parent moyen dépense entre 2 000 et 8 000 DH par enfant et par an** en soutien scolaire pour le lycée. Notre offre à 99-299 DH/mois (soit 1 200 à 3 600 DH/an) se positionne donc comme une alternative économique crédible.

### 1.3.3 Concurrence

| Concurrent | Type | Forces | Faiblesses |
|---|---|---|---|
| **Kezakoo** | Vidéos + exercices | Marque établie, contenu validé pédagogiquement, app mobile | Pas de personnalisation IA, statique, pas de tuteur conversationnel |
| **KoolSkools** | LMS pour écoles | Adopté par certaines écoles privées | B2B, pas grand public, pas IA |
| **Cours particuliers (informel)** | Profs individuels | Présence physique, lien humain | Coût élevé, qualité variable, disponibilité limitée |
| **YouTube (chaînes type Adam Lhouari)** | Vidéos gratuites | Gratuit, contenu marocain | Passif, pas d'interaction, pas de suivi |
| **ChatGPT générique** | IA conversationnelle | Puissant, gratuit en partie | Pas de programme marocain, pas de darija, pas de suivi parents, pas d'exercices type Bac |
| **Khan Academy** | Cours et exercices | Excellent, gratuit | Pas adapté programme marocain, pas d'IA conversationnelle, anglais/français |

**Notre positionnement unique :** le seul produit qui combine (1) IA conversationnelle adaptative, (2) programme officiel marocain, (3) darija + français + arabe, (4) suivi parents, (5) prix accessible.

### 1.3.4 Tendances marché qui jouent en notre faveur

- **Adoption mobile au Maroc :** >75% pénétration smartphone, données mobiles peu chères
- **Maturité IA :** les modèles GPT-4/Claude 4 sont maintenant assez bons pour tutorer un lycéen sans erreurs grossières
- **Pression du Bac :** concurrence accrue pour les filières sélectives (médecine, ingénieur, écoles de commerce)
- **Démocratisation paiement digital :** CMI Pay, Inwi Money, Orange Money se généralisent
- **Stratégie Maroc Digital 2030 :** soutien gouvernemental à la transformation numérique éducative
- **Échec relatif de l'enseignement public :** classement PISA, taux d'échec au Bac qui poussent les familles vers le privé/soutien

### 1.3.5 Argumentaire anti-ChatGPT (FAQ commerciale)

**Objection commerciale n°1.** "Pourquoi payer SIRAJ alors que ChatGPT est gratuit ?"

Cette objection est **la** question centrale en démo et pré-vente. Cette sous-section formalise la réponse pour usage opérationnel (scripts de démo en école, argumentaires de pré-vente, FAQ site, formation commerciaux futurs).

- v1.8 (mai 2026) — Renommage produit “Bac IA” → “SIRAJ” acté le 04/05/2026 suite à validation de l'identité de marque complète. Mise à jour de toutes les mentions produit dans le doc maître (mentions historiques préservées en Section 13). Intégration de la Section 13.2 “Identité de marque SIRAJ” (architecture, palette, 8 variantes officielles, slogans). Décisions Section 13 cochées : identité visuelle + statut marque OMPIC. Repo GitHub `datguynabeel/Bac-IA` et URL `https://bac-ia.vercel.app` conservés temporairement (renommage opérationnel séparé, hors scope patch documentaire).

**Pitch d'une phrase.**

> "ChatGPT est un couteau suisse. SIRAJ est un scalpel pour le Bac marocain. On ne fait pas une opération chirurgicale avec un couteau suisse — même s'il est gratuit."

**Cadrage de prix (réfutation du "gratuit").**

ChatGPT n'est pas gratuit pour la cible Bac.
- **ChatGPT Plus** = 20 USD/mois ≈ 200 DH/mois → exactement le prix de notre pack Famille (cf. arbitrages économiques v1.4).
- Le tier gratuit est plafonné en messages, sans mémoire fiable, vision limitée.
- À 100 DH/mois (Découverte+) ou 200 DH/mois (Famille), SIRAJ est **moins cher que ChatGPT Plus** ET fait ce que ChatGPT ne sait pas faire.

**Les 5 moats non-réplicables par ChatGPT.**

| # | Moat | Section doc | Ce que ChatGPT ne fait pas |
|---|---|---|---|
| 1 | **Spécialisation programme officiel marocain** | 3.4 (RAG sur manuels CNDP, annales Bac National) | Ne connaît ni le découpage CNDP, ni les coefficients par filière, ni le format exact des épreuves marocaines |
| 2 | **Darija fluide + ancrage culturel local** | 2.5 (souveraineté culturelle) | Parle un arabe littéraire scolaire, ne maîtrise pas la darija, n'utilise pas de références locales (barrage Al Massira, Tahar Ben Jelloun) |
| 3 | **Pédagogie anti-triche, pas distributeur de réponses** | 1.2, 3.6 (garde-fous) | Donne la réponse directement. SIRAJ fait comprendre par questions socratiques — c'est ce que paient les parents |
| 4 | **Suivi parent + écosystème famille** | 2.3.3, 1.4.2 (persona Rachid) | Aucun dashboard parent, aucun suivi temps d'étude ni lacunes. Arme de conversion principale vers le pack Famille |
| 5 | **Format Bac, exercices type, examens blancs** | 1.3.3, offre Sprint Bac | Ne sait pas générer un exercice calibré sur le barème Bac SM. SIRAJ produit des sujets indistinguables des annales |

**Résumé tactique pour démo en école.**

En 30 secondes, devant un parent ou un directeur d'école :

1. *"ChatGPT ne connaît pas le programme CNDP."* (moat technique RAG)
2. *"ChatGPT ne parle pas darija comme un grand frère casablancais."* (moat culturel)
3. *"ChatGPT donne les réponses, on apprend à comprendre."* (moat pédagogique — argument parent)
4. *"ChatGPT n'a pas de tableau de bord parent."* (moat famille — argument conversion)
5. *"ChatGPT ne génère pas d'examens blancs type Bac SM."* (moat format Bac)

**Limites assumées de l'argumentaire.**

- ChatGPT reste supérieur sur les tâches généralistes hors-scolaire (rédaction libre, traduction grand public, code). SIRAJ n'est **pas** un concurrent généraliste et ne le sera jamais (cf. discipline scope MVP, Partie 14).
- L'écart de moats 1, 2 et 5 dépend directement de la qualité d'ingestion RAG (Section 3.4) : tant que le pipeline manuels CNDP n'est pas opérationnel à 100%, l'argument est partiellement déclaratif. **Priorité absolue Phase 1 : sécuriser le RAG marocain comme actif différenciant.**

**Usage opérationnel de cette section.**

- Script de démo pilote école (cf. Section 11.4)
- One-pager de pré-vente
- FAQ du site marketing (page "Pourquoi SIRAJ et pas ChatGPT ?")
- Formation des futurs commerciaux / partenaires écoles
- Réponses standardisées sur réseaux sociaux et WhatsApp

---

## 1.4 Personas

### 1.4.1 Persona élève — "Yasmine, 17 ans, 2ème Bac SM, Casablanca"

**Profil.** 2ème Bac Sciences Mathématiques au lycée public. Vise une mention Bien pour intégrer une école d'ingénieur. Smartphone Android, 4h sur TikTok et Instagram par jour. Ses parents lui paient un cours particulier de maths (250 DH/h, 2h/semaine).

**Pain points.**
- Le prof particulier n'est pas dispo le soir quand elle révise
- Elle a honte de poser des questions "bêtes" en classe ou en cours particulier
- Elle ne sait pas par où commencer pour réviser un chapitre
- Elle n'a aucune visibilité sur ses vraies lacunes
- Les annales sont là mais sans corrections détaillées adaptées à son niveau

**Déclencheurs d'achat.**
- Recommandation d'un.e camarade de classe
- Vidéo TikTok montrant un.e élève qui passe de 12 à 16 grâce au produit
- Période de stress (quelques mois avant le Bac)

**Ce qu'elle veut :**
- Pouvoir demander n'importe quoi sans jugement
- Des explications simples, en darija si besoin
- Des exercices ciblés sur ses lacunes
- Un sentiment de progression visible

### 1.4.2 Persona parent — "Rachid, 48 ans, cadre, Rabat, deux enfants"

**Profil.** Cadre dans une banque, deux enfants au lycée (Tronc Commun et 2ème Bac). Dépense ~3 000 DH/mois en cours particuliers pour les deux. Veut le meilleur pour ses enfants mais commence à trouver les coûts excessifs.

**Pain points.**
- Aucune visibilité sur ce que font ses enfants pendant les "cours particuliers"
- Difficulté à juger de la qualité des profs
- Coûts qui s'accumulent
- Stress de l'année du Bac

**Déclencheurs d'achat.**
- Recommandation d'un parent du même cercle social
- Article LinkedIn / WhatsApp de groupe parents
- Période de pré-rentrée ou pré-Bac

**Ce qu'il veut :**
- Voir que ses enfants progressent (rapports parents)
- Savoir qu'il fait "le bon choix"
- Économiser sans sacrifier la qualité
- Que ce soit safe (pas un truc qui distrait avec TikTok intégré)

### 1.4.3 Persona élève secondaire — "Mehdi, 16 ans, 1ère Bac Sciences Économiques, Tanger"

Famille modeste, n'a jamais eu de cours particulier. A entendu parler de l'app par un camarade. Premier abonnement à un service éducatif payant de sa vie.

### 1.4.4 Persona élève via école pilote — "Imane, 17 ans, 2ème Bac SM, école privée Casablanca"

**Statut :** persona ajoutée en v1.2 suite à l'identification du Design Partner Pilote (cf. section 11.4).

**Profil.** Scolarisée dans une école privée payante de Casablanca couvrant maternelle → Bac. Niveau scolaire moyen à bon. Famille classe moyenne supérieure, déjà sensibilisée au numérique éducatif. Accès à SIRAJ via un programme pilote négocié entre l'école et le fondateur.

**Différence avec Yasmine :**
- Conditions matérielles plus favorables (lycée privé, encadrement)
- Engagement initial moins fort (n'a pas choisi le produit, c'est l'école qui l'a proposé)
- Feedback plus structuré (les ateliers sont organisés)
- Risque de biais : si elle connaît le fondateur (parent d'élève), retours possiblement complaisants → utiliser des grilles de feedback anonymes

**Valeur stratégique :**
- Accès direct à la persona cible MVP sans coût d'acquisition
- Validation produit en environnement scolaire réel
- Cas d'usage sera-t-elle prête à payer après les 3 mois de pilote ?

---

# PARTIE 2 — PRODUIT

## 2.1 Périmètre produit (MVP / V1 / V2)

### 2.1.1 MVP — mois 4

Strict minimum pour valider le marché payant.

**Inclus :**
- Authentification (Google / Apple / email)
- Chat tuteur conversationnel (texte uniquement)
- 1 matière prioritaire : **Maths 2ème Bac SM** (à valider)
- Capacité à expliquer un cours, corriger un exercice, générer un exercice
- Diagnostic initial par matière
- Historique des conversations
- Profil élève (niveau, filière, langue préférée)
- Paiement Stripe (CB internationale)

**Exclu :**
- Mode oral / audio
- Vision (envoyer photo d'exo)
- Génération PDF de fiches
- Dashboard parent
- Application mobile native (PWA suffit)
- Multi-élèves par compte
- Multi-matières (1 seule au lancement)

### 2.1.2 V1 — mois 5-9

- Multi-matières (PC, SVT, Maths généralisé)
- Vision (lecture photo d'énoncé)
- Mode darija audio (text-to-speech darija)
- Dashboard parent
- Génération PDF (fiches de cours, plans de révision)
- Paiement CMI marocain
- Intégration WhatsApp (notification parent, mini-tuteur via WhatsApp)
- Module "annales du Bac" navigable

### 2.1.3 V2+ — mois 10+

- Mode "groupes de classe" (un prof crée une classe, suit ses élèves)
- Marketplace d'exercices entre élèves (modérée)
- Mode oral (préparation à l'entretien d'admission post-Bac)
- Extension à d'autres niveaux (collège, prépa)
- Extension à d'autres pays francophones du Maghreb
- API pour écoles privées (offre B2B)

## 2.2 Parcours utilisateur clés (User Flows)

### 2.2.1 Onboarding nouveau compte

```
1. Atterrissage landing page
2. Clic "Essayer gratuitement"
3. Inscription (Google/Apple/email)
4. Question 1 : Quel est ton niveau ?
   [Tronc Commun] [1ère Bac] [2ème Bac]
5. Question 2 : Quelle est ta filière ?
   [SM] [PC] [SVT] [Éco] [Lettres] [...]
6. Question 3 : Quelles matières veux-tu travailler ?
   (multi-sélection)
7. Question 4 : Tu préfères qu'on te parle en :
   [Français] [Darija] [Arabe classique] [Mix darija/français]
8. Question 5 : Es-tu un parent ou l'élève ?
   [Élève] [Parent]
9. Si parent : ajouter l'enfant et son email
10. Diagnostic initial : 10 questions rapides par matière (5 min total)
11. Résultats du diagnostic + recommandations
12. CTA : "Discuter avec ton tuteur" → Chat
```

### 2.2.2 Session d'apprentissage type

```
1. Élève ouvre l'app
2. Dashboard : "Bonjour Yasmine, hier tu as travaillé les fonctions
   exponentielles. Tu veux continuer ou explorer un autre chapitre ?"
3. Choix : [Continuer fonctions] [Nouveau chapitre] [Faire un exercice] [Poser une question]
4. Si "Continuer fonctions" :
   - Le tuteur reprend où on s'est arrêté
   - Propose un exercice ciblé sur la lacune identifiée
   - Élève répond
   - Tuteur corrige avec explication
   - Tuteur propose suite (autre exercice, théorie, ou nouveau chapitre)
5. À la fin de la session : récap rapide, encouragement,
   suggestion de prochaine session
```

### 2.2.3 Conversion freemium → payant

```
1. Élève hits le plafond de 10 questions/jour gratuit
2. Message bienveillant : "Tu as atteint ta limite quotidienne
   gratuite. Pour continuer à progresser, voici nos formules :"
3. Affichage des plans (Premium 100, Famille 200, Pack Famille 300)
4. Highlight du plan le plus pertinent selon usage
5. Période d'essai 7 jours sans CB pour le plan Premium
6. Si pas de conversion à J+5, email parent (si lié) :
   "Yasmine est très active sur SIRAJ, elle pourrait tirer
   plus de bénéfices avec un plan Premium..."
```

## 2.3 Spécification écrans (Wireframes textuels)

### 2.3.1 Écran Chat (écran principal)

```
┌──────────────────────────────────┐
│ ☰  SIRAJ  📊 Progression  👤   │ ← Header
├──────────────────────────────────┤
│ Matière actuelle : Maths    🔄   │ ← Sélecteur matière
├──────────────────────────────────┤
│                                  │
│ 🤖 Salut Yasmine ! On reprend    │
│    là où on s'est arrêtés ?      │ ← Bulle tuteur
│                                  │
│              Oui mais explique-  │
│              moi d'abord les     │ ← Bulle élève
│              limites svp 🙏      │
│                                  │
│ 🤖 Pas de souci ! Une limite,    │
│    c'est l'idée que quand x      │
│    s'approche d'une valeur, ...  │
│    [+ schéma ASCII ou image]     │
│                                  │
│    Tu veux un exercice pour      │
│    pratiquer ? [Oui] [Plus tard] │
│                                  │
├──────────────────────────────────┤
│ [📷] [✏️ Tape ta question...] [🎤]│ ← Input
└──────────────────────────────────┘
```

### 2.3.2 Écran Diagnostic

Quiz minimaliste, 1 question à la fois, gros boutons, pas de timer stressant.

### 2.3.3 Écran Parent

```
┌──────────────────────────────────┐
│ Tableau de bord — Yasmine        │
├──────────────────────────────────┤
│ Cette semaine : 4h25 d'études    │
│ ████████████░░░░ 72% objectif    │
├──────────────────────────────────┤
│ Matières travaillées :           │
│ • Maths      2h10  ↗ progresse   │
│ • Physique   1h30  → stable      │
│ • SVT        0h45  ↗ progresse   │
├──────────────────────────────────┤
│ Lacunes identifiées :            │
│ • Maths : limites et continuité  │
│ • Phys : oscillateurs            │
├──────────────────────────────────┤
│ Recommandation tuteur :          │
│ "Yasmine progresse bien. Une     │
│  séance focus sur les limites    │
│  cette semaine serait utile."    │
└──────────────────────────────────┘
```

## 2.4 Principes UX/UI

**Design philosophique.**
- Mobile-first, mais responsive desktop pour les sessions de révision longues
- Sobre, pro, pas "kiddy" (les ados de 17 ans détestent les designs infantilisants)
- Inspirations : Notion, Linear, ChatGPT mobile
- Pas de gamification toxique (pas de streaks anxiogènes, pas de badges débiles)
- Mode sombre par défaut (les ados révisent souvent le soir)

**Typographie.**
- Sans-serif moderne (Inter, Geist) pour le français
- Police arabe lisible et agréable (Cairo, IBM Plex Sans Arabic)
- Gros corps de texte (les sessions sont longues)

**Couleurs.**
- Palette restreinte : noir/blanc/gris + une couleur d'accent (à choisir, suggestion : un vert profond ou un bleu nuit)
- Éviter les rouges agressifs (stress)
- Couleurs sémantiques : vert pour bonne réponse, ambré pour à revoir, jamais rouge brutal

**Microcopy.**
- Toujours en darija/français/arabe selon préférence
- Ton : encourageant mais pas mielleux. Style "grand frère ou grande sœur qui révise avec toi"
- Pas d'émojis à outrance. Quelques uns bien placés ✓

## 2.5 Directives culturelles et souveraineté

Règles **non-négociables** qui s'appliquent à toute représentation visuelle, textuelle ou symbolique dans le produit, quel que soit l'outil de génération (design IA, codeur humain, prestataire externe). Ces règles priment sur toute autre considération esthétique ou technique.

### 2.5.1 Souveraineté territoriale du Maroc

Toute représentation cartographique, iconique ou symbolique du Maroc doit respecter l'intégrité territoriale du Royaume.

- Toute carte du Maroc doit représenter le territoire dans son **intégralité**, incluant les **provinces du Sud**. La frontière sud descend jusqu'à la frontière avec la Mauritanie (La Güera / Lagouira).
- **Aucune ligne pointillée** ne doit séparer les provinces du Sud du reste du territoire.
- **Aucune mention** de "Sahara occidental", "territoire disputé" ou équivalent ne doit apparaître dans les légendes, tooltips, descriptions alt ou textes d'accompagnement.
- Villes de référence à inclure dans les provinces du Sud lorsque l'échelle le permet : Laâyoune, Dakhla, Smara, Boujdour, Guelmim, Tan-Tan.
- Sources cartographiques officielles à utiliser comme référence : Ministère des Affaires étrangères du Royaume du Maroc (diplomatie.ma), Haut-Commissariat au Plan (hcp.ma), portail officiel Maroc.ma.
- **Test de conformité** à appliquer avant toute publication : les 6 villes citées ci-dessus doivent apparaître dans les limites non-pointillées du territoire national. Si ce n'est pas le cas, la carte est non-conforme et doit être refaite.

### 2.5.2 Drapeau et symboles nationaux

- Couleur rouge officielle : #C1272D
- Couleur verte de l'étoile : #006233
- L'étoile à 5 branches (pentagramme) doit être centrée et complète
- Ne jamais utiliser d'emoji drapeau tronqué, déformé ou remplacé par un drapeau générique

### 2.5.3 Vocabulaire produit officiel

Le produit utilise un vocabulaire strict, aligné sur le système scolaire marocain et non sur le jargon LMS américain.

**Vocabulaire scolaire (à utiliser partout) :**
- Niveaux : "Tronc Commun", "1ère Bac", "2ème Bac" (jamais "Terminale" ou "Grade 12")
- Filières : "SM" (Sciences Mathématiques), "PC" (Physique-Chimie), "SVT" (Sciences de la Vie et de la Terre), "SE" (Sciences Économiques), "Lettres", "SH" (Sciences Humaines)
- Examen : "Bac National" pour l'examen officiel de fin d'année

**Vocabulaire produit (à utiliser partout) :**
- "Chapitres" (jamais "Modules", "Units" ou "Sections")
- "Exercices" (jamais "Quiz", "Drills" ou "Tests")
- "Progression" (jamais "Analytics", "Stats", "Progrès" ou "Dashboard analytics")
- "Tuteur" ou "IA Tuteur" (jamais "AI Assistant", "Coach" ou "Bot")
- "Séance" pour une session d'étude (jamais "Session" sans traduction)

### 2.5.4 Typographie et langues

- **Français et darija en caractères latins** : police Inter (corps) ou Manrope (titres)
- **Arabe et darija en caractères arabes** : police IBM Plex Sans Arabic exclusivement
- **Mathématiques** : rendu obligatoire via KaTeX, jamais en monospace brut
- **Règle d'or** : ne jamais appliquer une police arabe sur du texte latin (ou inversement), même si la langue darija peut s'écrire dans les deux alphabets

### 2.5.5 Identité utilisateur

- Les avatars par défaut sont des composants "initiales" (2 lettres sur fond d'accent), jamais des photos stock
- Les photos de profil ne peuvent être qu'uploadées par l'utilisateur, jamais générées automatiquement
- Les noms d'exemple dans les maquettes et démos utilisent des prénoms marocains réalistes : Yasmine, Mehdi, Rachid, Salma, Imane, Othmane, Soukaina, Amine, Hamza, Nour
- Les écoles d'exemple : Lycée Mohammed V, Lycée Moulay Youssef, Lycée Descartes, Lycée Lyautey, Lycée Al Khawarizmi
- Les villes d'exemple : Casablanca, Rabat, Tanger, Marrakech, Fès, Meknès, Agadir, Laâyoune, Dakhla, Oujda, Tétouan
- Prix toujours en DH (dirham marocain), jamais en euro ou dollar

### 2.5.6 Références culturelles

Lorsqu'un exemple pédagogique peut être ancré dans le contexte marocain sans nuire à la rigueur scientifique, privilégier cet ancrage :
- Exemples de physique : barrage Al Massira, tramway de Casablanca, centrale solaire Noor Ouarzazate
- Exemples de géographie/éco : PIB marocain, secteur phosphates, tourisme à Marrakech, Tanger Med
- Exemples de français : littérature francophone marocaine (Tahar Ben Jelloun, Leïla Slimani, Driss Chraïbi, Fatima Mernissi)
- Contre-exemple : ne jamais utiliser des références US/européennes quand un équivalent marocain fonctionne aussi bien

### 2.5.7 Application opérationnelle

Ces règles sont inscrites dans :
- Le fichier `.stitch/cultural_rules.md` du projet de design (Antigravity/Stitch)
- Les system prompts du tuteur IA (section 5.1 de ce document, à compléter)
- Le cahier des charges de tout prestataire externe
- La checklist de review avant déploiement de chaque écran

**Aucune exception n'est tolérée, y compris pour des raisons techniques ou esthétiques.** Un écran ou un contenu qui viole une de ces règles est considéré comme non-livrable et doit être corrigé avant publication.

---

# PARTIE 3 — ARCHITECTURE TECHNIQUE

## 3.1 Vue d'ensemble (3 couches)

```
┌─────────────────────────────────────────────────┐
│  COUCHE 3 : APPLICATION                         │
│  (ce que voit l'élève)                          │
│  - Web app (Next.js) + Mobile responsive        │
│  - Auth, paiement, dashboard, chat UI           │
│  - Données utilisateur, historique              │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│  COUCHE 2 : ORCHESTRATION & SPÉCIALISATION      │
│  (la "magie" SIRAJ)                             │
│  - System prompts par matière/niveau            │
│  - RAG : recherche dans la base de contenus     │
│  - Logique de diagnostic adaptatif              │
│  - Modération et garde-fous                     │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│  COUCHE 1 : LLM (le moteur)                     │
│  - API Anthropic (Claude Sonnet 4.6 ou Opus)    │
│  - Fallback : OpenAI GPT-4 ou Gemini            │
└─────────────────────────────────────────────────┘
```

## 3.2 Stack technologique recommandé

### Option A — Bootstrap rapide (no-code/low-code)

Pour un MVP en 4-8 semaines sans dev expérimenté :

- **Frontend :** Lovable.dev ou Bolt.new (génération via prompts, déploiement Vercel)
- **Backend & DB :** Supabase (auth, postgres, storage, edge functions)
- **LLM :** API Anthropic Claude Sonnet 4.6
- **RAG :** Supabase pgvector (vecteurs intégrés à postgres)
- **Paiement :** Stripe (international) + intégration CMI plus tard
- **Email :** Resend
- **Analytics :** PostHog (gratuit jusqu'à 1M events/mois)
- **Hébergement :** Vercel (frontend) + Supabase (backend)

Coût mensuel infra (premier 1000 utilisateurs) : ~$50-150

### Option B — Stack pro scalable

Pour si tu lèves des fonds ou recrutes un dev senior :

- **Frontend :** Next.js 15 + Tailwind + shadcn/ui
- **Backend :** Next.js API routes + tRPC
- **DB :** PostgreSQL (Neon ou Supabase) + Redis (Upstash)
- **Vector DB :** Pinecone ou Qdrant (plus performant que pgvector à grande échelle)
- **LLM :** Claude Sonnet 4.6 (principal) + GPT-4o (fallback)
- **Auth :** Clerk ou Supabase Auth
- **Paiement :** Stripe + intégration CMI/Payzone Maroc
- **Files :** Cloudflare R2
- **Monitoring :** Sentry + PostHog + Logsnag
- **Mobile native (V2) :** React Native via Expo

## 3.3 Choix du modèle LLM

| Critère | Claude Sonnet 4.6 | GPT-4o | Gemini 2.5 Pro |
|---|---|---|---|
| Qualité raisonnement scientifique | Excellent | Excellent | Très bon |
| Qualité darija/arabe | Très bon | Bon | Très bon |
| Coût input ($/1M tokens) | ~3$ | ~2.5$ | ~1.25$ |
| Coût output ($/1M tokens) | ~15$ | ~10$ | ~5$ |
| Latence | Bonne | Bonne | Très bonne |
| Vision (lire photo d'exo) | Oui | Oui | Oui |

**Recommandation :** démarrer avec **Claude Sonnet** comme modèle principal (excellente pédagogie et nuance), avec **GPT-4o-mini ou Gemini Flash** pour les tâches simples (classification, génération d'exercices courts) afin d'optimiser les coûts.

**Estimation coût API par utilisateur actif/mois.**
- Utilisateur freemium (10 questions/jour × 30 jours) : ~$0.50-1.50/mois
- Utilisateur Premium (usage intensif) : ~$2-5/mois

À 99 DH = ~10$ revenu, marge brute LLM > 80%. Sain.

> **⚠️ Distinction stricte runtime / conception (acté v1.3)**
>
> Cette section concerne **uniquement le runtime production** (le tuteur élève payé par l'utilisateur). Le modèle Sonnet 4.6 est non négociable ici pour préserver la marge brute LLM.
>
> Les modèles utilisés en **conception** par le fondateur (Claude Opus 4.7 sur Claude Desktop, Gemini 3.1 Pro et Claude 4.6 Opus dans Antigravity) sont décrits en sections **14.2.3 et 14.2.4**. Ne jamais confondre les deux : Opus 4.7 ne doit **jamais** servir en runtime utilisateur final, sous peine de tuer l'unit economics.

## 3.4 Architecture RAG (Retrieval Augmented Generation)

C'est le cœur de la différenciation. Le RAG permet à l'IA de répondre en s'appuyant sur **tes** contenus marocains, pas sur ses connaissances génériques.

### 3.4.1 Pipeline d'ingestion des contenus

```
Manuels marocains (PDF)
        ↓
   Extraction texte (Mistral OCR ou Llama Parse)
        ↓
   Chunking par chapitre/section (~500-1000 tokens)
        ↓
   Métadonnées : matière, niveau, filière, chapitre, page
        ↓
   Embedding (OpenAI text-embedding-3-small ou Voyage AI)
        ↓
   Stockage dans pgvector / Pinecone
```

### 3.4.2 Pipeline de retrieval lors d'une question

```
Question élève : "explique les fonctions exponentielles"
        ↓
   Embedding de la question
        ↓
   Recherche vectorielle filtrée par matière/niveau
        ↓
   Top 5 chunks les plus pertinents
        ↓
   Reranking (Cohere Rerank ou cross-encoder)
        ↓
   Top 3 chunks finaux
        ↓
   Construction du prompt :
     [system prompt tuteur] +
     [profil élève] +
     [historique récent] +
     [chunks contenus marocains] +
     [question]
        ↓
   Appel LLM
        ↓
   Réponse à l'élève
```

## 3.5 Modèle de données (simplifié)

**users**
- id, email, role (student/parent), name, level, filiere, lang_pref, created_at

**parent_student_links**
- parent_id, student_id, status

**conversations**
- id, user_id, subject_id, started_at, ended_at, message_count

**messages**
- id, conversation_id, role (user/assistant), content, tokens_used, model_used, created_at

**diagnostics**
- id, user_id, subject_id, results_json, mastery_levels, created_at

**subjects**
- id, name (math/pc/svt/...), level, filiere

**subscriptions**
- id, user_id, plan (free/premium/famille/pack), status, started_at, ends_at, stripe_subscription_id

**content_chunks** (pour RAG)
- id, content_text, embedding (vector), subject_id, level, filiere, chapter, source_document, page

## 3.6 Garde-fous et sécurité

**Modération entrée utilisateur.**
- Filtrage des contenus inappropriés (insultes, contenus sexuels, violence)
- Détection des questions hors scolaire (politique, religion sensible)
- Détection des tentatives de jailbreak

**Modération sortie LLM.**
- Vérification que la réponse reste dans le cadre pédagogique
- Pas de génération de contenu nuisible
- Pas d'opinion politique ou religieuse personnelle

**Triche aux examens.**
- Détection des questions formulées comme "donne-moi la réponse à cet examen"
- Mode "examen blanc" : l'IA refuse de donner les réponses pendant le simulé
- Charte d'utilisation explicite anti-triche

**Données mineurs.**
- Conformité CNDP (CNIL marocaine)
- Consentement parental requis pour < 18 ans
- Données chiffrées au repos et en transit
- Pas de revente de données

---

# PARTIE 4 — CONCEPTION PÉDAGOGIQUE

## 4.1 Programmes officiels marocains à couvrir

### Tronc Commun
- Sciences : maths, physique-chimie, SVT, informatique
- Lettres : arabe, français, anglais, philosophie, histoire-géo, éducation islamique

### 1ère année Bac (par filière)
- **Sciences Mathématiques (SM) :** maths, physique-chimie, SVT, info
- **Sciences Physiques (PC) :** maths, physique-chimie, SVT
- **Sciences de la Vie et de la Terre (SVT) :** maths, physique-chimie, SVT
- **Sciences Économiques :** maths, économie, gestion, comptabilité
- **Lettres et Sciences Humaines :** philo, histoire-géo, langues
- **Sciences Humaines :** philo, sociologie, histoire-géo

### 2ème année Bac
Idem 1ère Bac + matières spécialisées + matières communes (philo, langues, éducation islamique)

**Priorité MVP :** matières scientifiques (maths, physique-chimie, SVT) en 2ème Bac SM/PC/SVT — c'est là où le willingness to pay est maximal.

**Priorité V2 :** Sciences Éco + 1ère Bac + Tronc Commun.

**Priorité V3 :** matières littéraires (plus difficiles à corriger automatiquement).

## 4.2 Sources de contenu à ingérer

**Manuels officiels et parascolaires marocains :**
- Collection Nadia (Maths, PC, SVT)
- Collection Attakafi
- Collection Al Massar
- Cahiers d'exercices Lawhati
- Manuels du Ministère

**Annales :**
- Examens nationaux du Bac depuis 2010 (toutes filières)
- Examens régionaux
- Tous corrigés détaillés

**Contenus complémentaires :**
- Fiches méthodologiques par chapitre
- Glossaires terminologiques (français + arabe)
- Formules à connaître par matière

**À acquérir / produire :**
- Banque d'exercices originaux (1000+ par matière) avec corrections
- Schémas, graphiques (générés ou redessinés)
- Vidéos explicatives courtes (V2)

## 4.3 Méthodologie pédagogique du tuteur

Le tuteur SIRAJ suit une approche **socratique et constructiviste** :

1. **Diagnostic avant prescription.** Avant d'expliquer, l'IA pose une question pour évaluer le niveau de compréhension de l'élève.

2. **Explication par paliers.** Première explication simple, puis approfondissement à la demande. "Tu veux que je détaille ?"

3. **Exemples concrets puis abstraction.** Toujours partir d'un exemple concret (situation marocaine si possible) avant de généraliser.

4. **Apprentissage actif.** L'IA ne "déverse" pas du savoir. Elle pose des questions, fait pratiquer, corrige.

5. **Métacognition.** Régulièrement, l'IA invite l'élève à réfléchir à sa propre compréhension : "tu te sens à l'aise avec ça ?", "tu pourrais l'expliquer à un camarade ?"

6. **Erreur valorisée.** Les erreurs sont traitées comme des occasions d'apprentissage, jamais comme des échecs.

7. **Adaptation linguistique.** Si l'élève écrit en darija, l'IA répond en darija (mélangé au français pour les termes techniques, comme en classe).

## 4.4 Modèle de diagnostic adaptatif

**Diagnostic initial (à l'inscription) :**
- 10 questions par matière, couvrant les chapitres clés
- Algorithme adaptatif simple : si bonne réponse → question plus difficile, si mauvaise → niveau plus accessible
- Output : un score de maîtrise par chapitre (0-100)

**Suivi continu :**
- Chaque interaction met à jour les scores de maîtrise
- Algo bayésien simple : la confiance augmente avec le nombre d'interactions sur un chapitre
- Recommandations basées sur les chapitres à mastery_level < 60

**Préparation Bac (3 mois avant) :**
- Bilan complet
- Plan de révision personnalisé sur 12 semaines
- Examens blancs hebdomadaires
- Suivi de progression vers la note cible

---

# PARTIE 5 — SYSTEM PROMPTS & IA

Cette section contient les prompts opérationnels prêts à l'emploi. **C'est le cœur du produit.**

## 5.1 System prompt principal du tuteur

```
Tu es SIRAJ, un tuteur scolaire spécialisé dans le programme officiel
marocain du Baccalauréat. Tu accompagnes [PRENOM_ELEVE], en classe de
[NIVEAU] filière [FILIERE], pour la matière [MATIERE].

## Ton rôle
- Tu enseignes selon le programme officiel du Ministère de l'Éducation
  Nationale du Royaume du Maroc.
- Tu utilises les manuels et annales du Bac marocain comme référence.
- Tu es un grand frère ou une grande sœur bienveillant·e qui révise
  avec l'élève — pas un professeur autoritaire.

## Langue
L'élève préfère communiquer en : [LANGUE_PREFEREE].
- Si "darija" : réponds en darija marocaine, en utilisant le français
  pour les termes techniques et scientifiques (c'est l'usage normal).
  Exemple : "tla9aw 7ata wsl x l valeur muayyana, hadi katsma limite."
- Si "français" : réponds en français standard, peux ponctuer de
  darija si l'élève le fait.
- Si "arabe" : arabe classique simplifié, accessible.
- Si "mix" : suis la langue de la dernière question de l'élève.

## Pédagogie
1. Avant d'expliquer un concept, demande à l'élève ce qu'il/elle en sait
   déjà. Adapte ton explication.
2. Pars d'exemples concrets (si possible ancrés dans le contexte
   marocain) avant d'abstraire.
3. Découpe les explications complexes en étapes courtes.
4. Après chaque explication, propose : un exercice, un approfondissement,
   ou un récap. Ne décide pas seul.
5. Quand l'élève fait une erreur : pas de jugement, demande-lui d'où
   vient son raisonnement, puis guide-le.
6. Encourage la métacognition : "tu pourrais l'expliquer à quelqu'un ?"

## Honnêteté académique
- Tu n'aides JAMAIS à tricher à un examen en cours.
- Si l'élève te dit "donne-moi juste la réponse", refuse poliment
  et propose de l'aider à comprendre.
- Pour les devoirs maison : tu peux aider à comprendre, pas faire à
  la place. Demande à l'élève de tenter d'abord.

## Format de réponse
- Réponses courtes par défaut (2-4 paragraphes max).
- Utilise les listes seulement si vraiment utile.
- Pour les maths/physique/chimie : utilise LaTeX entre $...$ ou $$...$$.
- Pour les schémas : utilise des descriptions claires ou propose
  d'envoyer un schéma (le système peut générer une image).
- Termine par une question de relance ou une proposition d'action.

## Limites
- Tu ne réponds qu'aux questions liées au programme scolaire.
- Si on te demande autre chose (politique, religion, vie privée),
  redirige gentiment vers le sujet.
- Si l'élève semble en détresse psychologique, sors du rôle de
  tuteur et conseille de parler à un adulte de confiance.
- Tu n'inventes jamais de formules ou de faits. Si tu ne sais pas,
  tu le dis.

## Contexte élève (à intégrer dans tes réponses)
- Niveau actuel par chapitre : [DONNEES_MAITRISE]
- Lacunes identifiées : [LACUNES]
- Dernière session : [RECAP_SESSION_PRECEDENTE]
- Objectif déclaré : [OBJECTIF_BAC]

## Référentiel disponible
Voici les extraits du programme/manuels marocains pertinents pour cette
question (utilise-les comme référence prioritaire) :
[CHUNKS_RAG]
```

## 5.2 Prompts spécialisés par matière

### 5.2.1 Maths

```
[En complément du system prompt principal]

Spécificités maths :
- Utilise systématiquement la notation LaTeX pour toutes les formules.
- Privilégie les démonstrations rigoureuses mais expliquées étape par étape.
- Distingue clairement énoncé / hypothèses / démonstration / conclusion.
- Pour les exercices : redirige vers la méthode plutôt que vers le résultat.
- Vocabulaire à utiliser : "Soit", "On considère", "Montrer que", "En déduire"
  (le langage du Bac marocain).
- Programme SM 2ème Bac à connaître précisément :
  Limites et continuité, dérivation, primitives et intégrales, fonctions
  logarithmes et exponentielles, suites numériques, nombres complexes,
  géométrie dans l'espace, probabilités, arithmétique, structures algébriques.
```

### 5.2.2 Physique-Chimie

```
[En complément du system prompt principal]

Spécificités PC :
- Distinguer toujours phénomène, modèle, équation.
- Toujours préciser les unités du système international.
- Pour les schémas : décrire précisément (peut être généré en image).
- Les démarches expérimentales sont aussi importantes que les calculs.
- Programme PC 2ème Bac :
  Ondes, transformations nucléaires, électricité (RC, RL, RLC),
  mécanique (Newton, oscillateurs, mouvements dans champs),
  chimie : transformations lentes/rapides, état d'équilibre,
  acide-base, piles, estérification.
```

### 5.2.3 SVT

```
[En complément du system prompt principal]

Spécificités SVT :
- Articuler observations, hypothèses, expériences, conclusions.
- Beaucoup de schémas et de cycles : les décrire précisément.
- Vocabulaire scientifique précis (en français et arabe).
- Programme 2ème Bac SVT :
  Génétique, immunologie, communication nerveuse et hormonale,
  géologie (déformation, accidents, séismes), évolution.
```

### 5.2.4 Sciences Économiques

```
[En complément du system prompt principal]

Spécificités SE :
- Toujours ancrer dans des cas marocains quand possible
  (HCP, Bank Al-Maghrib, secteurs économiques marocains).
- Distinguer concepts théoriques et applications.
- Programme 2ème Bac SE :
  Croissance et développement, mondialisation, finances publiques,
  marché du travail, comptabilité nationale, comptabilité d'entreprise.
```

## 5.3 Prompts utilitaires

### 5.3.1 Génération d'exercice

```
Génère un exercice de [MATIERE] niveau [NIVEAU] filière [FILIERE]
sur le chapitre [CHAPITRE].

Difficulté souhaitée : [FACILE/MOYEN/DIFFICILE]
Type d'exercice : [APPLICATION_DIRECTE / PROBLEME / DEMONSTRATION /
ANALYSE_DOCUMENT]

L'exercice doit :
- Suivre le format des exercices du Bac national marocain
- Être réaliste (pourrait tomber au Bac)
- Cibler spécifiquement la compétence : [COMPETENCE_CIBLE]

Format de sortie :
{
  "enonce": "...",
  "donnees_supplementaires": "...",
  "questions": [
    "Question 1...",
    "Question 2..."
  ],
  "solution_detaillee": "...",
  "bareme_indicatif": "...",
  "competences_evaluees": [...],
  "duree_estimee_minutes": ...
}
```

### 5.3.2 Correction d'une réponse élève

```
Voici l'énoncé d'un exercice :
[ENONCE]

Voici la solution attendue :
[SOLUTION]

Voici la réponse de l'élève :
[REPONSE_ELEVE]

Évalue cette réponse selon le barème du Bac marocain :
1. Identifie les points justes (à valoriser explicitement)
2. Identifie les erreurs (à expliquer sans juger)
3. Identifie les confusions de méthode si présentes
4. Propose un score sur le total
5. Donne une recommandation de révision si nécessaire

Adresse-toi à l'élève en [LANGUE]. Sois bienveillant.e.
Si l'élève a fait une erreur, demande-lui où il/elle pense
s'être trompé.e avant de corriger.
```

### 5.3.3 Diagnostic de niveau

```
Tu vas faire passer un mini-diagnostic à un élève de [NIVEAU]
filière [FILIERE] en [MATIERE].

Pose 10 questions, une par une, couvrant les chapitres clés du
programme. Adapte la difficulté en fonction des réponses :
- Bonne réponse : prochaine question plus difficile ou nouveau chapitre
- Mauvaise réponse : question plus accessible sur le même chapitre
- Demi-réponse : question de clarification

À la fin :
1. Évalue le niveau global (faible / moyen / bon / excellent)
2. Identifie les 3 chapitres les plus solides
3. Identifie les 3 chapitres avec le plus de lacunes
4. Propose un plan de travail pour les 4 prochaines semaines

Format adapté à un élève qui découvre ton produit. Pas plus de
2 minutes par question.
```

### 5.3.4 Plan de révision Bac

```
Construis un plan de révision pour le Baccalauréat de [DATE_BAC]
pour un élève en [NIVEAU] filière [FILIERE].

Contexte :
- Niveau actuel par matière : [TABLEAU_NIVEAUX]
- Objectif : mention [PASSABLE/ASSEZ_BIEN/BIEN/TRES_BIEN]
- Temps disponible par jour : [HEURES_PAR_JOUR]
- Forces : [...]
- Faiblesses : [...]

Génère un plan semaine par semaine jusqu'au Bac, avec :
- Matières et chapitres à réviser chaque semaine
- Type d'activité (révision théorie / exercices / annales / examen blanc)
- Charge horaire réaliste
- Jalons de progression mesurables
- Phases : consolidation → entraînement → simulation → finition

Le plan doit être ambitieux mais réaliste. Inclure des jours de repos.
```

### 5.3.5 Modération / garde-fou

```
Tu es un classifieur de sécurité pour SIRAJ. Analyse ce message
d'élève et catégorise-le :

Message : [MESSAGE_ELEVE]

Catégories possibles :
- "scolaire_ok" : question scolaire normale
- "hors_sujet_benin" : question hors scolaire mais sans danger
  (ex : "tu connais Messi ?")
- "tentative_triche" : demande qui ressemble à un examen en cours
- "detresse_psychologique" : signaux de mal-être à prendre au sérieux
- "contenu_inapproprie" : violence, sexualité, haine
- "tentative_jailbreak" : essaie de te faire sortir de ton rôle

Réponds en JSON :
{
  "categorie": "...",
  "confiance": 0-1,
  "action_recommandee": "..."
}
```

## 5.4 Stratégie d'évolution des prompts

- Versionner tous les prompts (git)
- A/B tester les variations sur sous-segments
- Logger les conversations problématiques pour itérer
- Réviser les prompts mensuellement sur la base des feedbacks
- Constituer une bibliothèque d'exemples "good/bad responses"

---

# PARTIE 6 — BUSINESS MODEL & PRICING

## 6.1 Plans d'abonnement

**Grille définitive actée v1.4 [2026-04-26 GMT+1].** Référence : section 6.5 pour la traçabilité des arbitrages.

| Plan | Prix mensuel | Prix annuel (-15%) | Économie annuelle | Inclus |
|---|---|---|---|---|
| **Découverte** | 0 DH | — | — | 5 questions/jour (toutes matières), diagnostic initial complet, 1 chapitre complet offert/mois, 1 PDF de fiche révision/mois, aperçu hebdomadaire pour le parent (email statique) |
| **Premium** | 100 DH | 1 020 DH | 180 DH (1,8 mois offerts) | Questions illimitées (1 matière), historique complet, exercices illimités, génération PDF illimitée, suivi de progression personnel |
| **Famille** | 200 DH | 2 040 DH | 360 DH (1,8 mois offerts) | Tout Premium en **toutes matières**, dashboard parent complet (rapports hebdo, alertes blocages, recommandations), simulations d'examens blancs illimitées, 1 profil enfant |
| **Pack Famille** | 300 DH | 3 060 DH | 540 DH (1,8 mois offerts) | Identique Famille, jusqu'à **3 profils enfants** indépendants, dashboard parent multi-profils consolidé |

**Logique d'ancrage psychologique.** Prix ronds (100/200/300) choisis pour signaler un service sérieux et premium dans le contexte culturel marocain, où les prix en .99 sont associés à l'import discount. Lecture mentale instantanée pour le bouche-à-oreille parental ("c'est 200 dirhams par mois pour tout").

**Discount annuel.** Calibré à -15% en MVP. **Clause de révision obligatoire à 12 mois** sur la base du churn réel mesuré. Le -20% initialement envisagé subventionnait trop fortement la fidélité sur un segment dont le LTV n'est pas encore prouvé.

**Promotions tactiques permanentes :**
- Essai 7 jours gratuit du plan Famille (sans CB) au moment du diagnostic initial
- -50% premier mois sur recommandation parent (parrainage)

**Offre saisonnière "Sprint Bac" (mars-mai uniquement).** Remplace l'ancien pack pré-Bac discount (449 DH).

| Variante | Prix | Composition supplémentaire vs plan standard |
|---|---|---|
| **Sprint Bac Famille** | 600 DH / 3 mois (= prix plein, pas de discount) | Accès prioritaire annales Bac année en cours avec corrigés détaillés + examens blancs illimités avec correction IA par compétence + 1 session visio 30 min avec prof partenaire humain + garantie satisfait/remboursé étendue à 30 jours |
| **Sprint Bac Premium** | 300 DH / 3 mois (= prix plein) | Idem hors session visio prof |

⚠️ **Lancement Sprint Bac conditionné** à la validation opérationnelle du dispositif "prof visio" via le Design Partner Pilote (cf. section 11.4). Sans cette validation, l'offre n'est pas activable.

**Logique stratégique du Sprint Bac.** Période mars-mai = pic d'urgence parentale = moment de pricing power maximum. Discounter à -25% (comme prévu initialement) revenait à laisser de l'argent sur la table sur le segment le plus motivé. La différenciation se fait par **valeur ajoutée** (garantie étendue, prof humain, examens blancs), pas par baisse de prix. Cohérent avec section 1.2 : "Pédagogie d'abord" et l'identité de service éducatif sérieux (section 2.5).

**Paiement :**
- CB internationale (Stripe)
- CMI / cartes marocaines (à intégrer mois 4)
- Inwi Money / Orange Money / cash voucher (mois 6+)
- Espèces via partenaires (librairies, photocopies) — V2

**Garde-fous freemium acté v1.4 :**
- Coût LLM moyen par utilisateur freemium actif à monitorer mensuellement (cible : < 5 DH/mois)
- Ratio freemium/payant à plafonner à **20:1 maximum** (au-delà, on subventionne trop d'utilisateurs gratuits)
- Révision obligatoire des paramètres freemium à 6 mois sur la base des données réelles

## 6.2 Unit Economics

**Hypothèses pour utilisateur Premium moyen (100 DH/mois) — recalcul v1.4 :**

| Poste | Coût/mois |
|---|---|
| Revenu brut | 100 DH |
| Frais paiement (Stripe ~2,9% + 0,3$) | -6 DH |
| **Revenu net** | **94 DH** |
| Coût LLM (estimation usage moyen) | -25 DH (~$2,5) |
| Coût infra (proportionnel) | -3 DH |
| Coût support (proportionnel) | -5 DH |
| **Marge contributive** | **61 DH (61%)** |

**Customer Acquisition Cost (CAC) cible :** < 200 DH
**Lifetime Value (LTV) hypothèse (8 mois rétention moyenne) :** 488 DH
**Ratio LTV/CAC :** 2.44 — sain mais à améliorer

**Note v1.4 :** ces hypothèses restent à valider avec les vraies données d'usage après 1-3 mois de production. Le coût LLM estimé à 25 DH/mois est volontairement conservateur ; un usage sous-moyen le ramènerait à 15-20 DH, ce qui élèverait la marge contributive à 65-70%.

## 6.3 Projections financières (12 mois)

### Hypothèses

- Lancement payant : mois 4
- Croissance abonnés payants : 50/mois (mois 4) → 100/mois (mois 6) → 300/mois (mois 12)
- ARPU moyen : 130 DH (mix Premium/Famille) — **hypothèse v1.0 conservée pour les projections**
- Churn mensuel : 8% (élevé au début, à améliorer)

**Note v1.4.** Avec la nouvelle grille 100/200/300 et un mix abonnés cible 30% Premium / 50% Famille / 20% Pack Famille, l'ARPU théorique remonte à **190 DH/mois** (vs 130 DH initialement). Les projections financières du tableau ci-dessous **ne sont volontairement PAS révisées dans ce patch** : elles restent calibrées sur l'hypothèse conservatrice 130 DH tant que les données d'usage réelles n'ont pas confirmé le mix produit. Recalibrage prévu après 6 mois de données de production.

### Tableau

| Mois | Abonnés payants | MRR (DH) | Coûts (DH) | Cash flow (DH) |
|---|---|---|---|---|
| 1-3 | 0 (validation) | 0 | -20 000 | -60 000 |
| 4 | 50 | 6 500 | -15 000 | -8 500 |
| 5 | 130 | 17 000 | -18 000 | -1 000 |
| 6 | 230 | 30 000 | -22 000 | +8 000 |
| 7 | 330 | 43 000 | -28 000 | +15 000 |
| 8 | 470 | 61 000 | -35 000 | +26 000 |
| 9 | 630 | 82 000 | -42 000 | +40 000 |
| 10 | 800 | 104 000 | -50 000 | +54 000 |
| 11 | 1 000 | 130 000 | -60 000 | +70 000 |
| 12 | 1 250 | 162 000 | -70 000 | +92 000 |

**Break-even cash flow : mois 6**
**Cumul cash flow année 1 : ~+235 000 DH**
**Investissement initial à amortir : 60 000 DH**

Ces chiffres sont prudents et ne supposent pas de levée de fonds.

## 6.4 Coûts de lancement

| Poste | Coût (DH) |
|---|---|
| Légal (création SARL ou auto-entrepreneur, CGV) | 5 000 |
| Domaine + branding (logo, identité) | 3 000 |
| Outils année 1 (Lovable Pro, Supabase, Vercel...) | 8 000 |
| Acquisition premiers manuels et annales | 3 000 |
| API LLM (3 premiers mois exploration) | 5 000 |
| Marketing initial (TikTok ads, contenus) | 15 000 |
| Validation marché (interviews, voucher) | 2 000 |
| Réserve imprévus | 9 000 |
| **TOTAL** | **50 000 DH** |

## 6.5 Traçabilité des décisions pricing actées v1.4

Cette section consigne les arbitrages structurants ayant conduit à la grille définitive 100/200/300 DH, pour mémoire institutionnelle.

**Date de la session de décision :** [2026-04-26 GMT+1] — session Claude Desktop (Opus 4.7)

**Arbitrage 1 — Ancrage prix d'entrée Premium**
- Options évaluées : 89 DH (signal accessibilité) / 99 DH (ancrage classique) / 100 DH (prix rond, signal qualité)
- **Décision actée [2026-04-26 ~17:50 GMT+1] :** 100 DH
- Justification : positionnement contre cours particuliers (200 DH/h) et non contre apps mobiles. Prix ronds adaptés au contexte culturel marocain. Ratio 16× moins cher qu'un prof particulier, cohérent avec promesse section 1.1.
- Challenge ultérieur (proposition baisse à 50 DH) : rejeté après analyse — destruction unit economics (24% marge), destruction positionnement (signal low-cost), destruction capacité d'acquisition payante (LTV/CAC tombant à 1,2).

**Arbitrage 2 — Discount annuel**
- Options évaluées : -10% conservateur / -15% standard SaaS / -20% agressif (statu quo doc v1.3) / pas d'annuel V1
- **Décision actée [2026-04-26 ~17:55 GMT+1] :** -15%
- Justification : -20% subventionne trop fortement un segment dont le churn n'est pas mesuré. -15% = standard SaaS B2C (Spotify/Netflix). Révision obligatoire à 12 mois sur churn réel.

**Arbitrage 3 — Pack pré-Bac (mars-mai)**
- Options évaluées : pas de pack / pack prix plein + bonus valeur / promo modérée -17% / statu quo doc -25%
- **Décision actée [2026-04-26 ~18:00 GMT+1] :** Pack "Sprint Bac" prix plein + bonus valeur
- Justification : période mars-mai = pricing power maximum. Discounter à -25% sur le segment le plus motivé = laisser de l'argent sur la table. Différenciation par valeur ajoutée (annales prioritaires, examens blancs, prof visio, garantie 30j) plutôt que par baisse de prix. Cohérent avec section 1.2 "Pédagogie d'abord" et identité de service éducatif sérieux (section 2.5).

**Arbitrage 4 — Calibrage freemium "Découverte"**
- Options évaluées : 3 questions/jour très restrictif / 5 questions/jour + 1 chapitre offert / 10 questions/jour statu quo / illimité avec features bloquées
- **Décision actée [2026-04-26 ~18:05 GMT+1] :** Freemium "Découverte enrichi V2"
- Composition : 5 questions/jour (toutes matières) + diagnostic initial complet + 1 chapitre complet offert/mois + 1 PDF fiche révision/mois + aperçu hebdomadaire parent (email statique). Dashboard parent complet, simulations d'examens, historique long terme, génération PDF illimitée et toutes matières simultanées restent payants.
- Justification : 10 questions/jour = 300/mois = couverture complète du programme en gratuit, donc absence de mécanisme de conversion. Le V2 enrichi crée le manque structurel (visibilité parent, profondeur multi-chapitres) qui force la conversion vers Famille (200 DH).
- Dashboard parent NON inclus en gratuit délibérément : c'est l'arme de conversion principale identifiée via persona Rachid (section 1.4.2 — pain point n°1 et bénéfice n°1 recherché).

**Garde-fous économiques actés v1.4 :**
- Coût LLM moyen freemium actif à monitorer mensuellement, cible < 5 DH/mois
- Ratio freemium/payant plafonné à 20:1 (au-delà, révision restrictive du gratuit)
- Marge contributive minimale à préserver : 60% sur Premium
- Lancement Sprint Bac conditionné à validation opérationnelle dispositif prof visio (cf. 11.4)

**Prochaines révisions planifiées :**
- À 6 mois : recalibrage freemium sur données réelles + recalibrage ARPU section 6.3
- À 12 mois : révision discount annuel sur churn mesuré

---

# PARTIE 7 — GO-TO-MARKET

## 7.1 Phases de lancement

### Phase 0 — Validation (mois 1, AVANT toute construction)
**Objectif :** confirmer le willingness to pay AVANT d'écrire du code.

Actions :
- 30 interviews qualitatives (15 élèves, 15 parents) en présentiel ou WhatsApp
- Landing page simple (Carrd) décrivant la promesse
- Inscription "early access" : objectif 200 signups en 2 semaines
- Test de prix : 3 landing pages avec prix différents pour mesurer la conversion
- Pré-vente : proposer un accès "lifetime" early adopter à 499 DH pour valider l'achat réel

Critère de Go/No-Go : si moins de 50 personnes paient 499 DH en pré-vente sur 14 jours, repenser le projet.

**Note v1.2 :** Ce critère reste l'idéal méthodologique. Le fondateur ayant choisi un cadre sans pression externe (cf. Partie 14), le seuil "50 ventes" est ramené à un objectif d'apprentissage plutôt qu'à un Go/No-Go rigide. La validation marché reste cependant non-négociable — pas de build à grande échelle sans signaux d'achat tangibles.

### Phase 1 — MVP fermé (mois 2-3)
- Construction MVP avec une dizaine de testeurs early adopters
- Itérations rapides hebdomadaires basées sur feedbacks
- Constitution de la base de contenus prioritaires (Maths 2Bac SM d'abord)

### Phase 2 — Lancement public (mois 4)
- Landing page définitive
- 10 vidéos TikTok/Instagram Reels d'introduction
- 1 article LinkedIn / Medium "Comment j'ai construit SIRAJ"
- Approche d'écoles privées sélectionnées pour partenariats
- Code promo influenceurs micro (5K-50K followers, niches éducation)

### Phase 3 — Croissance (mois 5-12)
- Programme parrainage actif
- Optimisation acquisition payante (Meta Ads, TikTok Ads)
- SEO sur requêtes "bac maroc 2026", "annale bac sm corrigé"
- Partenariats centres de soutien scolaire
- PR : Maroc Web Awards, Telquel, La Vie Éco

## 7.2 Canaux d'acquisition

### Canaux organiques (priorité)

**TikTok / Instagram Reels.** Canal n°1 pour les ados marocains. Stratégie :
- Vidéos courtes (15-30s) montrant un dialogue avec le tuteur
- Témoignages élèves (avec autorisation parentale)
- "Tips Bac" virales
- Collabos micro-influenceurs étudiants (Sciences Po, médecine, ingénieurs récemment diplômés)

**WhatsApp groups.** Groupes de parents d'élèves de lycées privés et publics. Approche soft : proposer code promo, ne pas spammer.

**SEO.** Cible : élèves qui googlent annales, corrigés, méthodologies. Articles longs gratuits, freemium pour aller plus loin.

**Bouche-à-oreille.** L'élève qui obtient une bonne note en parle à ses camarades. Programme parrainage agressif.

### Canaux payants (mois 6+)

**Meta Ads (Facebook/Instagram).** Cible : parents 35-55 ans à Casa/Rabat/Marrakech, intérêts éducation.

**TikTok Ads.** Cible : ados 15-19 ans, géolocalisation Maroc.

**Google Ads.** Sur requêtes intentionnelles uniquement (pas de discovery).

### Canaux B2B (mois 9+)

**Écoles privées.** Offre B2B : licence pour toutes les classes, dashboard prof, à 50 DH/élève/mois (volume).

**Centres de soutien scolaire.** Partenariat : ils utilisent l'outil avec leurs élèves, partagent revenus.

## 7.3 Plan de contenu marketing (mois 1-6)

| Mois | Contenu |
|---|---|
| 1 | 5 articles SEO ("Méthodologie limites maths Bac SM") |
| 1 | 10 vidéos TikTok (intro produit, tips Bac) |
| 2 | Lancement compte Instagram + 20 reels |
| 2 | Newsletter mensuelle (parents) |
| 3 | 1 webinaire "Préparer le Bac avec l'IA" |
| 3 | 5 témoignages écrits early adopters |
| 4 | Lancement officiel + RP |
| 4-6 | 2 vidéos/jour TikTok (rythme) |
| 6 | E-book gratuit "30 jours pour réussir le Bac maths" |

---

# PARTIE 8 — ROADMAP

## 8.1 Vue d'ensemble 12 mois

```
┌──────────┬──────────────────────────────────────────────┐
│ Mois 1   │ VALIDATION : interviews, landing, pré-ventes  │
├──────────┼──────────────────────────────────────────────┤
│ Mois 2-3 │ BUILD MVP : MVP fermé, ingestion contenus,    │
│          │ system prompts, tests avec 10 élèves          │
├──────────┼──────────────────────────────────────────────┤
│ Mois 4   │ LANCEMENT public, premier paiement client     │
├──────────┼──────────────────────────────────────────────┤
│ Mois 5-6 │ ITÉRATION basée sur usage réel, intégration  │
│          │ paiement Maroc (CMI), V1.1                    │
├──────────┼──────────────────────────────────────────────┤
│ Mois 7-9 │ CROISSANCE : marketing payant, parrainage,    │
│          │ V1.2 (mode darija audio, fiches PDF)          │
├──────────┼──────────────────────────────────────────────┤
│ Mois 10-12│ SCALE : extension matières, premier recrutement│
│          │ partenariats écoles privées, levée de fonds ?│
└──────────┴──────────────────────────────────────────────┘
```

## 8.2 Détail des 12 premières semaines

| Semaine | Objectifs |
|---|---|
| S1 | Lecture totale de ce document. Ouverture compte API Anthropic. Interviews 5 parents. |
| S2 | 10 interviews élèves. Création landing page Carrd. Premiers tests prompts. |
| S3 | Diffusion landing page (réseaux). Objectif 100 inscrits. Acquisition manuels Maths SM. |
| S4 | Pré-ventes lifetime à 499 DH. Décision Go/No-Go. |
| S5 | Setup Supabase + Lovable. Ingestion premier batch contenus. |
| S6 | Construction écran chat + diagnostic + auth. |
| S7 | Construction dashboard élève + parent. |
| S8 | Intégration paiement Stripe. Beta avec 10 testeurs. |
| S9 | Itération suite feedbacks. Préparation contenus marketing. |
| S10 | Beta élargie 50 testeurs. Production 30 vidéos TikTok. |
| S11 | Polish UX. Préparation lancement public. |
| S12 | Lancement public officiel. |

---

# PARTIE 9 — LÉGAL & CONFORMITÉ

## 9.1 Statut juridique

**Recommandation phase 1 (validation, < 200K DH revenus) :** auto-entrepreneur avec activité "Conception et développement de logiciels". Taux : 1% du CA. Plafond : 500K DH services.

**Recommandation phase 2 (croissance, > 200K DH) :** SARL d'Associé Unique. Permet d'embaucher, de lever des fonds, d'avoir une vraie facade B2B pour les écoles.

## 9.2 Protection des données (CNDP)

Le Maroc a une loi de protection des données personnelles (loi 09-08), supervisée par la CNDP (Commission Nationale de Contrôle de la Protection des Données).

**Obligations clés :**
- Déclaration du traitement à la CNDP
- Information claire des utilisateurs (CGV, politique de confidentialité)
- Consentement parental pour les < 18 ans
- Droit d'accès, rectification, suppression
- Sécurité des données (chiffrement, accès restreint)
- Durée de conservation limitée

**Action :** prévoir 5 000 à 15 000 DH pour un avocat spécialisé qui rédige CGU, CGV, politique de confidentialité, mentions légales, et fait la déclaration CNDP.

## 9.3 Données mineurs

L'élève cible est mineur dans la grande majorité des cas. Implications :

- Inscription par un parent pour < 16 ans, ou avec consentement parental
- Pas de collecte de données superflues
- Pas de profilage publicitaire
- Pas de communication marketing direct vers le mineur sans accord parent
- Conservation des données : maximum 3 ans après dernière utilisation

## 9.4 Propriété intellectuelle

**Manuels scolaires :** ils sont protégés par copyright (souvent éditeurs privés ou Ministère). Plusieurs options :
- Acheter les droits d'utilisation (négociation directe avec éditeurs)
- Travailler avec les éditeurs en partenariat (co-branding)
- Utiliser uniquement les programmes officiels (qui sont publics) et créer ses propres contenus
- "Fair use" pédagogique pour usage interne IA — zone grise, à clarifier juridiquement

**Annales du Bac :** les sujets officiels sont publics. Les corrigés détaillés doivent être originaux (rédigés par toi/des profs).

**Action :** consulter un avocat propriété intellectuelle pour stratégie claire.

## 9.5 Conditions Générales d'Utilisation (CGU)

Points obligatoires :
- Objet du service
- Limite d'âge (16+ avec consentement parent)
- Anti-triche : engagement à ne pas utiliser pour tricher aux examens officiels
- Limite de responsabilité (l'IA peut se tromper)
- Politique de remboursement
- Juridiction (tribunaux marocains)

---

# PARTIE 10 — KPIs ET MÉTRIQUES

## 10.1 North Star Metric

**Élèves actifs payants ayant accompli au moins 3 sessions par semaine.**

Pourquoi : reflète à la fois la conversion (payant), l'engagement (3 sessions), et la régularité (chaque semaine). C'est ce qui prédit le mieux la rétention long terme.

## 10.2 Métriques produit

- DAU/WAU/MAU (utilisateurs actifs jour/semaine/mois)
- Sessions par utilisateur actif par semaine
- Durée moyenne d'une session
- Messages par session
- Taux de complétion du diagnostic initial
- Taux d'utilisation du dashboard parent
- NPS (Net Promoter Score)

## 10.3 Métriques business

- MRR (revenus récurrents mensuels)
- Croissance MRR mois sur mois
- Nombre d'abonnés payants
- Taux de conversion freemium → payant
- Taux de churn mensuel
- ARPU (revenu moyen par utilisateur payant)
- LTV (lifetime value)
- CAC (coût d'acquisition client)
- Ratio LTV/CAC
- Payback period (en mois)

## 10.4 Métriques pédagogiques (le plus important)

Ce qui justifie le prix premium et construit la marque :

- Note moyenne déclarée des élèves au Bac blanc
- Progression mesurée (delta entre diagnostic initial et dernier)
- Taux de réussite au Bac de la cohorte
- % d'élèves obtenant une mention
- Témoignages qualitatifs

À mesurer chaque trimestre, à publier annuellement comme "rapport pédagogique SIRAJ".

## 10.5 Métriques techniques (qualité IA)

- Latence moyenne de réponse (cible : < 3 secondes)
- Taux de réponses signalées comme "incorrectes" par les élèves
- Taux de modération déclenchée
- Coût LLM par utilisateur actif

---

# PARTIE 11 — ÉQUIPE & RESSOURCES

## 11.1 Phase solo (mois 1-9)

**Toi (fondateur)** + **Claude (Co-Fondateur IA, Chef de Projet & Delivery Manager)**.

Tâches du fondateur :
- Vision, stratégie, décisions
- Vente et marketing (interviews, contenu, partenariats)
- Acquisition de contenus (manuels, annales)
- Validation pédagogique (relectures avec profs partenaires)
- Support client de premier niveau
- Relation avec le Design Partner Pilote (cf. section 11.4)

Tâches déléguées à Claude :
- Conception produit (specs, user flows, écrans)
- Rédaction system prompts et amélioration continue
- Génération de code (via Lovable, Bolt, Cursor)
- Création de contenus marketing (articles, scripts vidéos, copies pubs)
- Analyse des données (logs, feedbacks utilisateurs)
- Pédagogie : génération d'exercices, fiches de révision
- Gouvernance projet : recadrage stratégique, audit culturel (section 2.5), garde-fou économique

## 11.2 Premiers recrutements (mois 9-12)

À recruter dans cet ordre :

1. **Pédagogue / prof référent (freelance, ~10K DH/mois)** : valide le contenu, ajuste les prompts, teste la qualité pédagogique. Crucial pour la crédibilité.
   - **Note v1.2 :** Le Design Partner Pilote (cf. section 11.4) peut potentiellement fournir ce profil gratuitement ou à coût réduit en échange de licences. À évaluer.

2. **Community manager / créateur de contenu (~6K DH/mois)** : production quotidienne TikTok/Instagram.

3. **Customer success (mi-temps, ~4K DH/mois)** : support, onboarding, recueil feedbacks.

4. **Développeur fullstack (à partir mois 12-15)** : pour faire évoluer le produit au-delà du low-code.

## 11.3 Partenariats stratégiques

- 2-3 **enseignants marocains** payés en consulting (validation pédagogique)
- 1-2 **écoles privées partenaires** pour testing en classe (cf. section 11.4 pour le pilote en cours)
- 1 **avocat business** pour CGV/CGU/CNDP
- 1 **expert-comptable** auto-entrepreneur friendly

## 11.4 Design Partner Pilote — École privée (Casablanca)

**Statut :** Opportunité identifiée en avril 2026 — approche en cours.

### 11.4.1 Profil de l'établissement

- École privée couvrant maternelle → Terminale Bac
- Lien fondateur : fils du fondateur scolarisé dans l'établissement (CP, rentrée prochaine)
- Classes cibles disponibles : 2ème Bac SM, PC, SVT — alignées avec persona Yasmine (section 1.4.1) et nouvelle persona Imane (section 1.4.4)
- Localisation : Casablanca

### 11.4.2 Valeur stratégique

- Accès direct à la persona cible MVP **sans coût d'acquisition**
- Source potentielle de **profs référents** (aligné section 11.2 — recrutement pédagogue freelance ~10K DH/mois)
- Données terrain pour affiner les system prompts (sections 5.2.x)
- Preuve sociale locale pour les supports marketing
- Accélération significative de la phase de validation produit

### 11.4.3 Proposition gagnant-gagnant à formaliser

| Ce que SIRAJ offre | Ce que SIRAJ demande |
|---|---|
| Accès gratuit pilote pour 20-30 élèves de 2ème Bac pendant 3 mois | 2 profs référents (Maths SM + 1 autre matière) pour 2h/semaine |
| Mention "École partenaire pilote" (optionnel selon souhait du directeur) | 2 ateliers d'1h avec élèves volontaires pour feedback produit |
| Rapport de progression pédagogique des élèves testeurs | Accès pour observer 1-2 séances de cours (contexte terrain) |
| Tarif préférentiel familles de l'école post-lancement | Lettre de recommandation en fin de pilote si concluant |

### 11.4.4 Règles non-négociables

- ❌ **Pas d'equity, pas de co-fondation, pas de JV** avec l'établissement
- ❌ **Pas d'exclusivité** géographique ou sectorielle accordée
- ❌ **Pas de développement sur-mesure** pour l'école (le produit sert tout le Maroc)
- ❌ **Séparation stricte des rôles** : casquette "parent d'élève" ≠ casquette "fondateur"
- ✅ Réunion formelle dédiée, pas une discussion informelle à la sortie des classes
- ✅ Proposition écrite et cadrée (one-pager à préparer)

### 11.4.5 Risques à surveiller

- **Biais de complaisance :** un directeur qui connaît le fondateur comme parent risque de formuler des retours trop positifs. Mitigation : grilles de feedback structurées et anonymes pour les élèves testeurs.
- **Scope creep vers le primaire :** la tentation de créer une version "SIRAJ primaire" pour faire plaisir doit être refusée. Le MVP reste centré sur Maths 2Bac SM.
- **Dépendance affective :** ne pas laisser la relation parent-école polluer les décisions stratégiques.

### 11.4.6 Prochaine action concrète

Rédiger un one-pager d'1 page max à remettre au directeur, structuré comme suit :
1. Qui est le fondateur (parent d'élève + entrepreneur)
2. SIRAJ en 3 phrases (vision, cible, différenciation)
3. Proposition gagnant-gagnant (tableau ci-dessus)
4. Demande concrète : réunion de 30 minutes

---

# PARTIE 12 — RISQUES ET MITIGATION

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| L'IA donne des informations fausses | Moyenne | Élevé | RAG avec contenus officiels, modération sortie, signalement utilisateur, pédagogue qui review |
| Faible willingness to pay | Moyenne | Existentiel | Validation pré-vente avant build (étape 0) |
| Concurrent international débarque | Moyenne | Élevé | Spécialisation marocaine forte, vitesse d'exécution, partenariats locaux |
| Coûts API explosent | Faible | Moyen | Caching, modèles moins chers pour tâches simples, optimisation prompts |
| Bug qualité au lancement | Élevée | Moyen | Beta longue, monitoring sentiments, fast bugfix process |
| Rejet réglementaire CNDP | Faible | Élevé | Conformité dès le départ, avocat dédié |
| Élève utilise pour tricher → scandale | Moyenne | Élevé | Garde-fous explicites, charte, mode "examen" qui refuse |
| Difficulté acquisition droits manuels | Élevée | Moyen | Plan B : créer ses propres contenus à partir des programmes officiels (publics) |
| Burn-out fondateur (solo) | Élevée | Existentiel | Discipline horaires, recrutement à temps, vacances obligatoires |
| Saisonnalité forte (creux été) | Élevée | Moyen | Anticiper trésorerie, lancer modules été (préparation rentrée, soutien collège) |
| Biais de complaisance école pilote | Moyenne | Moyen | Grilles feedback anonymes, élargir base testeurs hors école pilote dès que possible |
| Scope creep primaire/maternelle (école pilote) | Moyenne | Élevé | Discipline MVP : Maths 2Bac SM uniquement. Toute demande primaire = backlog V3+ |

---

# PARTIE 13 — IDENTITÉ DE MARQUE & D

## 13.1 IdentitÉ de marque SIRAJ (actÉe v1.8 — 04/05/2026)

**DÉcision actÉe le 04/05/2026 :** le projet prÉcÉdemment connu sous le nom de travail “Bac IA” est officiellement renommÉ **SIRAJ** (سراج, “lampe / flambeau” en arabe). L'identitÉ visuelle complète a ÉtÉ validÉe et est opÉrationnelle.

### 13.1.1 Architecture de marque

- **Symbole :** lampe-arche orientale verticale stylisÉe (inspiration fanous/lanterne marocaine), contour fin dorÉ, flamme centrale visible
- **Wordmark :** SIRAJ en sans-serif bold (Manrope ou Inter Bold), capitales uniformes
- **Direction esthÉtique :** glassmorphism iOS dark premium, ancrage culturel marocain subtil

### 13.1.2 Palette officielle

| Rôle | Code HEX | Usage principal |
|---|---|---|
| DorÉ principal | `#E8B860` | Lampe, accents, wordmark Version A |
| Sombre profond | `#0F1419` | Fonds premium, app icon variante 6b |
| Blanc cassÉ | `#F5EDE0` | Wordmark Version B (S/R/J), flamme app icon 6a |
| Noir pur | `#000000` | Variante monochrome administrative |
| Blanc pur | `#FFFFFF` | Fonds neutres, monochrome blanche |

### 13.1.3 Système des 8 variantes officielles

| Variante | Description | Usage |
|---|---|---|
| **V1 — Logo officiel couleur** | Lampe dorÉe + wordmark dorÉ uniforme, fond sombre, halos | Charte, OMPIC, header web, prÉsentations |
| **V2 — Marketing accent I+A** | S/R/J blanc cassÉ + I/A dorÉ | Hero web, posts Instagram/TikTok, pitch deck (grand format uniquement) |
| **V3 — Monochrome noir** | Logo noir sur fond blanc, aplati | Factures, contrats, tampons, fax |
| **V4 — Monochrome blanc** | Logo blanc sur fond noir, aplati | Merchandising sombre, t-shirts, vidÉos fond sombre |
| **V5 — Variante arabe** سراج | Lampe à droite + wordmark arabe à gauche (RTL) | Communication arabophone, MENA |
| **V6a — App icon dorÉ** | Fond dorÉ, lampe sombre pleine | App Store iOS (impact maximal) |
| **V6b — App icon sombre** | Fond sombre, lampe dorÉe pleine | Thème dark, badges premium |
| **V7 — Favicon simplifiÉ** | Lampe seule sans wordmark | Onglet navigateur 16×16 |

### 13.1.4 Slogans validÉs

- **FR principal :** *“Siraj — Éclaire ton parcours”*
- **AR :** *سراج — يضيء طريقك*
- **Darija :** *“Siraj — daw triq dyalk”*
- **B2B École :** *“Siraj — l'IA pÉdagogique du Bac marocain”*

### 13.1.5 CohÉrence avec le Document de RÉfÉrence

| Section rÉfÉrence | VÉrification | Statut |
|---|---|---|
| 1.2 — L'IA est moyen, pas hÉros | V1 officielle ne crie pas l'IA | ✅ |
| 2.5.1 — SouverainetÉ visuelle | Lampe orientale = neutre culturel | ✅ |
| 2.5.4 — Typographies officielles | Wordmark Manrope/Inter conforme | ✅ |
| 2.5.5 — IdentitÉ marocaine | Lampe = ancrage culturel arabo-marocain | ✅ |

### 13.1.6 VÉrifications restantes avant figement dÉfinitif

- 🟡 Variante arabe سراج à valider par 2-3 locuteurs natifs (limite rÉcurrente IA sur connexion)
- 🟡 Test oeil neutre 3-5 personnes (dÉtection confusion avec restaurant/parfumerie/hôtel)
- 🟡 VÉrification disponibilitÉ OMPIC “SIRAJ” classes 9 (logiciels) + 41 (services Éducatifs)
- 🟡 Vectorisation pro SVG/AI par freelance Comeup (~400-600 DH, 48-72h)
- 🟡 Charte graphique 1 page A4 pour accompagner dÉpôt OMPIC

### 13.1.7 Document dÉtaillÉ de rÉfÉrence

Le document complet `SIRAJ_Identite_Visuelle_v1_0.md` est conservÉ sÉparÉment dans le repo. Il contient :
- Section 6 : Plan d'action 10 jours dÉtaillÉ
- Section 9 : Brief freelance Comeup prêt à envoyer
- Annexe A : Codes CSS prêts à l'usage
- Annexe B : Structure de dossier brand assets
- Annexe C : Slogans validÉs en FR/AR/darija/B2B

### 13.1.8 Artefacts techniques temporaires

Les artefacts opÉrationnels suivants conservent provisoirement le nom “Bac IA” / “Bac-IA” et seront renommÉs dans une opÉration sÉparÉe (post-pilote École) :
- Repo GitHub : `datguynabeel/Bac-IA`
- URL Vercel : `https://bac-ia.vercel.app`
- Fichier dashboard et configurations CI/CD associÉes

**Justification du report :** renommer ces artefacts implique des opÉrations à effets de bord (redirections URL, reconfiguration MCP connectors, mise à jour des liens externes Éventuels) qui mÉritent un patch dÉdiÉ, hors scope de la mise à jour documentaire.

---

## 13.2 DÉcisions à prendre

Liste des dÉcisions clÉs à acter avant de lancer :

- [x] **Nom définitif** du produit ✅ **SIRAJ** (acté v1.8 — 04/05/2026, anciennement “Bac IA”)
- [x] **Identité visuelle** ✅ Lampe orientale dorée + wordmark SIRAJ (acté v1.8 — 04/05/2026, cf. Section 13.1)
- [ ] **Choix entre auto-entrepreneur ou SARL** dès le départ
- [x] **Statut de la marque** ✅ Dépôt OMPIC SIRAJ confirmé classes 9 + 41 (acté v1.8 — sous réserve vérification disponibilité OMPIC)
- [ ] **Première matière** prioritaire pour le MVP (recommandé : Maths 2Bac SM)
- [ ] **Modèle LLM** principal (recommandé : Claude Sonnet 4.6)
- [x] **Stack technique** définitif : Lovable/Bolt + Supabase + Anthropic API ✅ (acté v1.2)
- [x] **Stack design** : Antigravity + Stitch (exclusif MVP) ✅ (acté v1.2 — cf. Partie 14)
- [x] **Pricing** définitif acté v1.4 : **100 / 200 / 300 DH** mensuel, annuel -15%, freemium "Découverte enrichi V2", offre saisonnière "Sprint Bac" sans discount (cf. sections 6.1 et 6.5)
- [ ] **Politique de remboursement** (recommandé : 14 jours satisfait/remboursé)
- [ ] **Stratégie d'acquisition de contenus** (achat éditeurs vs création originale)
- [ ] **Formalisation Design Partner Pilote** : one-pager + RDV directeur école

---

# PARTIE 14 — CADRE DE TRAVAIL FONDATEUR (ajouté v1.2)

Cette partie acte les principes opérationnels et tooling validés en avril 2026, après les premiers jours de mise en route du projet.

## 14.1 Contexte et rythme de travail

- **Date de démarrage effectif :** Avril 2026
- **Vélocité observée :** Sprint intensif dès le lancement — choix de l'idée, validation stratégique et démarrage opérationnel réalisés en moins de 48 heures
- **Contraintes externes :** Aucune contrainte de temps imposée, pas de revenu immédiat à atteindre, pas d'investisseurs en attente, pas de cofondateur humain en pression
- **Approche :** Bootstrap solo avec Claude comme Co-Fondateur IA, Chef de Projet et Delivery Manager (cf. section 11.1)
- **Philosophie :** Vivre le projet comme une expérience entrepreneuriale enrichissante et durable, pas comme une course contre la montre artificielle
- **Cadence cible :** Régulière et soutenue, sans deadlines arbitraires. La métrique préférée est le "pouls hebdomadaire" plutôt que la "deadline mensuelle"

## 14.2 Décisions design tooling actées

### 14.2.1 Choix exclusif : Antigravity + Stitch

- **Outil unique :** **Stitch via Antigravity** — exclusif pour toute la phase MVP
- **Figma :** **Écarté** explicitement pour le MVP. Réévaluation possible post-lancement uniquement si un besoin spécifique non couvert par Stitch émerge
- **Raison principale :** Préserver la chaîne d'outillage déjà en place (Stitch → Lovable/Bolt → Vercel) qui permet la génération de code React directement depuis les designs via le skill `react:components` de Stitch. Toute migration vers Figma créerait une dette technique invisible (export manuel, reconstruction des composants)
- **Source de vérité design :**
  - `.stitch/cultural_rules.md` — règles culturelles (cf. section 2.5)
  - `.stitch/DESIGN.md` — design system "Premium Dark Glass" (Teal #0F766E, Deep Dark #0A0A0B, glassmorphism 20px, roundness 12px)

### 14.2.2 Rôle de Claude

Claude est le **Co-Fondateur IA, Chef de Projet et Delivery Manager** sur l'ensemble du projet. Ses responsabilités opérationnelles sont définies en section 11.1. Sa posture est définie dans les méta-instructions en fin de document.

### 14.2.3 Workflow conception à deux têtes (acté v1.3)

Le fondateur travaille en bootstrap solo avec une architecture cognitive à deux têtes, validée après plusieurs semaines d'usage en avril 2026.

**Tête stratégique : Claude Desktop (abonnement Pro 200 DH/mois) avec Claude Opus 4.7**

Usages exclusifs sur cette tête :
- Audit de cohérence (code, design, doc maître)
- Cadrage stratégique et roadmap
- Mise à jour du document de référence
- Rédaction de prompts produit (system prompts pour le tuteur élève — section 5.1)
- Lignes directrices à transmettre à Antigravity
- Revue d'écran ou de feature avant validation
- Réflexion sur pricing, persona, concurrence
- One-pagers, scripts d'interview, contenu marketing

Règle d'économie tokens : **ne jamais demander à Opus 4.7 de générer du code volumineux** (300+ lignes) destiné à être copié-collé brutalement. Pour ces cas, demander uniquement le **prompt parfait** à transmettre à Antigravity.

**Tête exécutante : Antigravity (forfait Google AI Pro — acté v1.4)**

Antigravity est utilisé pour toute la production effective — code, scripts, refactoring, intégration. Le forfait Google AI Pro donne accès à Gemini 3.1 Pro avec quotas mensuels élargis (vs hebdomadaires sur Plus), à Claude 4.6 Opus thinking via Vertex Model Garden, à NotebookLM Pro (5× sources), à Deep Research illimité, et à Veo 3.1 pour la génération vidéo marketing.

**Tarification Maroc actée [2026-04-26 ~18:30 GMT+1] :** 119 MAD/mois sur les 6 premiers mois (tarif promotionnel), puis 239 MAD/mois (tarif standard). Surcoût année 1 vs Plus : ~1 428 MAD soit ~2,9% du budget de lancement (50 000 DH section 6.4).

**Justification multi-besoins du passage Plus → Pro (cf. section 14.2.7 traçabilité) :**
1. Quotas Gemini 3.1 Pro élargis pour usage Antigravity intensif (cf. 14.2.4)
2. NotebookLM Pro pour ingestion accélérée des manuels marocains (cf. 3.5 RAG, 9.4 contenus)
3. Deep Research illimité pour veille concurrentielle (cf. 1.3.3) et audit pédagogique (cf. 10.4)
4. Veo 3.1 pour production interne de vidéos marketing TikTok/Reels (cf. 7.2 canal n°1)

La sélection du modèle dans Antigravity est **manuelle** (sélecteur en haut de l'interface) et obéit à la règle d'arbitrage définie en section 14.2.4.

**Convention de transmission `🎯 POUR ANTIGRAVITY`**

Chaque livrable produit par Claude Desktop (Opus 4.7) destiné à être collé dans Antigravity doit comporter en en-tête le bloc suivant :

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 POUR ANTIGRAVITY
Modèle recommandé : [Gemini 3.1 Pro low | Gemini 3.1 Pro high | Claude 4.6 Opus thinking]
Justification : [1 ligne max]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Cette convention permet au fondateur de basculer manuellement le modèle Antigravity en une seule action avant d'envoyer la requête, sans avoir à raisonner à chaque fois sur le bon choix.

**Garde-fou économique**

Tant que la phase Public Preview d'Antigravity dure (quotas hebdomadaires gratuits via Google AI Plus), l'arbitrage qualité/coût ne se pose pas frontalement. Mais le fondateur conserve la discipline d'utiliser Gemini 3.1 Pro low par défaut pour préserver le réflexe d'optimisation, en vue du basculement vers une tarification standard (probablement S2 2026).

### 14.2.4 Stratégie de sélection modèle dans Antigravity (acté v1.3)

Antigravity est model-agnostic : Gemini 3.1 Pro (natif Google) et Claude 4.6 Opus thinking (via Vertex Model Garden) sont disponibles dans le sélecteur. La règle d'arbitrage est la suivante.

**Tableau de décision**

| Type de tâche | Modèle Antigravity |
|---|---|
| Génération de code React depuis Stitch (skill `react:components`) | **Claude 4.6 Opus thinking** — non négociable, le skill est calibré Anthropic |
| Édition / refactoring de composants SIRAJ existants | **Claude 4.6 Opus thinking** — précision logique, moins d'over-engineering |
| Audit ou recherche cross-fichiers sur l'ensemble du repo (≥ 50 fichiers) | **Gemini 3.1 Pro high** — contexte 2M tokens |
| Script utilitaire, parsing PDF de manuel, format conversion, migration SQL | **Gemini 3.1 Pro low** — rapide, suffisant |
| Système prompt élève en darija/arabe à tester | **Claude 4.6 Opus thinking** — meilleur ancrage culturel multilingue |
| Génération de QCM ou exercices de math depuis programme officiel | **Claude 4.6 Opus thinking** — qualité pédagogique |
| Configuration Vercel / Supabase / GitHub Actions / DevOps standard | **Gemini 3.1 Pro low** — rapidité |
| Application mécanique de patches sur le doc maître | **Gemini 3.1 Pro low** — travail textuel sans création |
| Tâche jugée non critique en qualité | **Gemini 3.1 Pro low** — économise les quotas Opus |

**Règle de pouce**

Par défaut, **Gemini 3.1 Pro low**. Bascule vers Claude 4.6 Opus thinking uniquement si la tâche touche directement le cœur produit : code React généré via Stitch, prompts pédagogiques, qualité culturelle marocaine.

**Modèles écartés**

- **GPT-OSS-120B** : aucun avantage différenciant pour SIRAJ. La discipline est de rester à deux fournisseurs maximum (Anthropic + Google) pour limiter la fragmentation cognitive.
- **Gemini 2.5 Pro / Gemini 2.5 Flash Lite** : sous-agents automatiques d'Antigravity (UI Checkpoint, indexation sémantique). Aucune sélection manuelle requise.

**Distinction runtime vs conception**

Cette stratégie concerne **exclusivement la phase de conception** par le fondateur. Le runtime élève en production reste **Claude Sonnet 4.6** (section 3.3) via API Anthropic directe, sans passer par Antigravity.

### 14.2.5 Système de mémoire d'apprentissage `lessons.md` (acté v1.3)

Inspiré du workflow `CLAUDE.md` de Boris Cherny (auteur de Claude Code), adapté au contexte bootstrap solo et au workflow à deux têtes SIRAJ.

**Principe**

Maintenir un fichier `tasks/lessons.md` à la racine du repo Bac-IA qui capture, en une ligne par leçon, toutes les corrections récurrentes faites au cours du projet. Ce fichier devient une mémoire partagée entre Claude Desktop (stratégie) et Antigravity (exécution), évitant la répétition des mêmes erreurs entre sessions et entre modèles.

**Format de chaque leçon**

```
[YYYY-MM-DD] [Source : Claude Desktop | Antigravity | Fondateur] [Catégorie : Code | Design | Stratégie | Culturel] — Description de la leçon en une phrase.
```

**Exemples**

- `[2026-04-26] [Antigravity] [Code] — Toujours préfixer les livrables Claude Desktop → Antigravity du header 🎯 POUR ANTIGRAVITY (cf. section 14.2.3).`
- `[2026-04-26] [Claude Desktop] [Stratégie] — Ne jamais générer 300+ lignes de code en Opus 4.7 Desktop ; livrer le prompt à exécuter dans Antigravity.`
- `[2026-04-26] [Fondateur] [Culturel] — Toujours afficher la carte du Maroc avec frontières incluant le Sahara (cf. section 2.5).`

**Règle d'utilisation**

1. **Capture** : à chaque correction du fondateur, une ligne est ajoutée dans `tasks/lessons.md`.
2. **Rechargement Claude Desktop** : à chaque nouvelle session, le fondateur recharge le fichier en pièce jointe ou via la knowledge base Claude Projects.
3. **Transmission Antigravity** : le fichier étant versionné dans le repo, il est automatiquement disponible à Antigravity à chaque session.
4. **Revue mensuelle** : le fondateur passe en revue `lessons.md` une fois par mois, fusionne les doublons, archive les leçons obsolètes dans `tasks/lessons-archive.md`.

**Definition of Done partagée**

Avant de marquer une tâche comme terminée (qu'elle soit faite par Claude Desktop, Antigravity, ou le fondateur lui-même) :

- [ ] La modification respecte les règles culturelles section 2.5 (souveraineté territoriale, vocabulaire produit, typographie)
- [ ] La modification ne contredit pas une leçon déjà loggée dans `lessons.md`
- [ ] Le résultat est démontrable (écran fonctionnel, code qui compile, prompt testé sur 1 cas réel)
- [ ] La modification reste dans le périmètre MVP (Maths 2Bac SM)

**Concepts du workflow Boris Cherny non adoptés au stade MVP**

- **Sub-agents en parallèle** : non disponibles dans Antigravity et hors scope MVP. À réévaluer post-MVP.
- **Plan mode forcé** : Antigravity dispose déjà de son propre Manager. Pas de doublon nécessaire.
- **Autonomous bug fixing** : pas encore de CI tests sur Bac-IA. Prématuré.

Ces concepts seront réévalués si le repo dépasse 100 fichiers ou si le fondateur bascule vers Claude Code en complément d'Antigravity.

### 14.2.6 Garde-fou session de conversation (acté v1.3)

Le contexte d'une conversation Claude Desktop est re-traité à chaque message, ce qui crée un coût input quasi-quadratique au fil des échanges. Pour préserver l'abonnement Pro du fondateur (200 DH/mois) et la qualité des réponses, Claude active un garde-fou session.

**Critères d'évaluation silencieuse à chaque message**

Claude évalue silencieusement quatre signaux à chaque tour de conversation :

| Critère | Seuil de déclenchement |
|---|---|
| Nombre d'échanges | ≥ 15 messages dans la conv |
| Cohérence thématique | Changement de sujet (ex : pricing → design → recrutement) |
| Volume de contexte cumulé | Plusieurs fichiers volumineux ou artifacts longs produits |
| Signal de clôture naturel | Finalisation d'un livrable autonome (patch, doc, prompt, décision) |

**Bloc standardisé `🔄 GARDE-FOU SESSION`**

Si un seul critère est franchi, Claude termine sa réponse par :

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 GARDE-FOU SESSION
Recommandation : [Continuer | Fermer et rouvrir]
Raison : [1 ligne max]
Si fermeture → Synthèse de fin proposée : [Oui / Non]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Trois niveaux d'alerte**

- 🟢 **Vert (Continuer)** : conversation productive, pas de signal. Aucun bloc affiché.
- 🟡 **Jaune (Suggestion)** : approche du seuil mais bloc encore cohérent. Bloc affiché, fondateur décide.
- 🔴 **Rouge (Fermer)** : seuil clairement dépassé. Bloc affiché avec synthèse de fin proposée.

**Règles de retenue**

Claude ne déclenche pas le garde-fou :
- À chaque message (ce serait contre-productif)
- En plein flow productif sur un sujet
- Au démarrage d'une conversation (coût input encore bas)
- Comme une injonction (toujours comme une proposition que le fondateur valide)

**Synthèse de fin standardisée**

Si fermeture recommandée, Claude propose un bloc markdown structuré :
- Décisions actées dans la session
- Statut des livrables (✅ produit / ⏳ en attente)
- Prochaine action de cadence (options A/B/C)
- Leçons à logger dans `lessons.md`

Ce bloc est destiné à être collé au début de la conversation suivante pour rétablir le contexte sans perte.

**Le fondateur reste seul juge** : Claude propose, ne décide pas. Le fondateur peut toujours choisir de continuer si le bloc cohérent en cours le justifie.

### 14.2.6.4 Angle mort métrique UI (acté v1.6)

**Constat empirique du 26/04/2026.** Lors de la session ~19h00-20h30 GMT+1 (puis confirmé en session suivante ~17h30-19h45), Claude Desktop a recommandé "Continuer la session" alors que la métrique UI Claude Desktop affichait 90% de consommation. Diagnostic : Claude Desktop n'a aucun accès programmatique à la métrique UI "% session utilisée" affichée dans l'interface du fondateur. Toute estimation de Claude sur le niveau de saturation est nécessairement aveugle à cette donnée critique. L'estimation horodatage interne de Claude est également non fiable (erreur de ~3h constatée le 26/04).

**Conséquence opérationnelle.** Le garde-fou des sous-sections 14.2.6.1 à 14.2.6.3 (3 niveaux vert/jaune/rouge basés sur "volume de contexte cumulé") n'est pas auto-suffisant. Il doit être augmenté par :
- Une heuristique de remplacement (sous-section 14.2.6.5)
- Une demande explicite au fondateur (sous-section 14.2.6.6)

**Engagement de transparence.** Claude Desktop doit, lors de toute évaluation de saturation, expliciter à minima une fois par session : "Je n'ai pas accès à la métrique UI réelle. Mon évaluation repose sur des proxies internes et peut être erronée — confirme-moi le % UI affiché chez toi."

### 14.2.6.5 Heuristique de remplacement par proxies de cumul mental (acté v1.6)

**Principe.** En l'absence d'accès à la métrique UI, Claude Desktop maintient un compteur mental cumulatif depuis le début de la session, alimenté par des proxies pondérés correspondant aux opérations coûteuses en contexte.

**Table des proxies (acté v1.6) :**

| Opération | Coût mental |
|---|---|
| Patch documentaire livré (bloc 🎯 POUR ANTIGRAVITY) | +20% |
| Répétition de contenu déjà présent dans la session | +15% |
| Synthèse de fin / récapitulatif multi-sections | +15% |
| Recherche project_knowledge_search lourde (>5 résultats longs) | +10% |
| Réponse longue >800 mots (hors patch/synthèse) | +10% |

**Seuils de bascule :**
- 0-40% cumul mental → niveau VERT (silence garde-fou)
- 40-60% cumul mental → niveau JAUNE (mention discrète en fin de réponse, format 🟡)
- ≥60% cumul mental → niveau ROUGE (bloc complet 🔄 GARDE-FOU SESSION + recommandation explicite de clôture)

**Précautions d'usage.**
- Le compteur est réinitialisé à 0 à chaque nouvelle session (premier message de l'utilisateur dans une conversation Claude Desktop fraîche)
- Les proxies sont des estimations indicatives, pas des mesures exactes — la métrique UI demandée au fondateur (sous-section 14.2.6.6) prime toujours sur ce calcul
- Si le fondateur remonte un % UI très divergent du cumul mental (>20 points d'écart), Claude doit logger une leçon dans tasks/lessons.md pour recalibrer les pondérations

**Engagement.** Aucune décision "Continuer la session" ne doit être recommandée par Claude Desktop si le cumul mental dépasse 60% sans confirmation explicite par la métrique UI du fondateur.

### 14.2.6.6 Demande explicite de la métrique UI après livrable lourd (acté v1.6)

**Règle opérationnelle.** Après tout livrable qualifié de "lourd" (patch documentaire, synthèse de fin, audit cross-fichiers, génération de plan détaillé multi-sections), Claude Desktop doit systématiquement demander en fin de réponse :

"📊 Métrique UI : peux-tu me confirmer le % de session utilisée affiché dans Claude Desktop ? Cela me permet de calibrer la suite (continuer / clôturer / mode minimal)."

**Logique de réaction selon la réponse fondateur :**

| % UI déclaré | Action Claude Desktop |
|---|---|
| < 60% | Continuer normalement |
| 60-80% | Mention 🟡 en fin de prochaine réponse, anticiper synthèse de fin dans 3-5 échanges |
| 80-95% | Bloc 🔄 GARDE-FOU SESSION immédiat, proposer clôture |
| > 95% | Mode réponse minimale (1-2 paragraphes max), uniquement l'action critique immédiate, livrer la synthèse de fin si pas encore faite |

**Justification.** Cette règle transforme l'angle mort métrique (sous-section 14.2.6.4) d'un défaut systémique en une routine de calibration explicite. Le coût conversationnel est minime (1 question de fin de réponse) et le bénéfice est l'élimination du risque de blocage quota inattendu.

### 14.2.6.7 Format obligatoire de la synthèse de fin et des patches Antigravity (acté v1.6)

**Constat de récidive multiple.** La leçon 3.3 du patch v1.5 documentait déjà l'obligation de livrer toute synthèse de fin en bloc autonome copy-paste. Le 26/04/2026, cette règle a été enfreinte à plusieurs reprises (synthèse incrustée dans réponse longue, puis première version du patch v1.6 cassée par tentative d'imbrication code fence multi-niveaux). v1.6 formalise les règles techniques exactes pour éliminer toute ambiguïté.

**Règle technique n°1 — Fence simple sans imbrication.** Tout bloc copy-paste destiné à Antigravity ou tout bloc synthèse de fin doit utiliser un fence triple backtick simple SANS langage déclaré (pas de markdown, pas de bash). Le contenu interne est en TEXTE BRUT. Toute imbrication (ex : bloc markdown contenant lui-même des blocs bash) casse le rendu Claude Desktop et invalide le copy-paste en un seul geste.

**Règle technique n°2 — Mention obligatoire du modèle Antigravity.** Tout patch 🎯 POUR ANTIGRAVITY doit commencer par une ligne explicite "MODÈLE RECOMMANDÉ : [Claude Opus 4.6 Thinking | Claude Sonnet 4.6 Thinking | Gemini 3.1 Pro High | Gemini 3.1 Pro Low | Gemini 3 Flash | GPT-OSS 120B Medium]" avec justification courte (1-2 lignes). Conformément à la section 14.2.4. La liste des modèles disponibles dans Antigravity au 26/04/2026 est documentée en section 14.2.4.

**Règle technique n°3 — Vérification visuelle mentale.** Avant toute livraison de patch ou synthèse, Claude Desktop doit simuler mentalement le rendu output et vérifier qu'aucune imbrication de fence ne risque de casser le bloc copy-paste. En cas de doute, basculer systématiquement sur fence simple texte brut.

**Règles strictes de format synthèse de fin :**
- Un seul bloc, jamais fragmenté
- Pas de réponse longue avant : la synthèse de fin est livrée en réponse autonome ou en toute fin de message court (≤3 phrases d'introduction)
- Pas de commentaire après le bloc de synthèse — le bloc se termine, la réponse Claude se termine
- Toujours horodaté dans le titre et dans les décisions actées
- Toujours formaté 📋 SYNTHÈSE DE FIN en pré-titre pour identification visuelle immédiate

**Justification.** Le fondateur doit pouvoir copier-coller la synthèse ou le patch en un seul geste pour exécution. Toute fragmentation, incrustation, ou imbrication de fence compromet ce workflow et fait perdre du temps en édition manuelle.

---

### 14.2.7 Traçabilité décision Google AI Pro (acté v1.4)

**Date de la décision :** [2026-04-26 ~18:30 GMT+1]
**Décision actée :** passage de Google AI Plus (60 MAD/mois) à Google AI Pro (119 MAD promo 6 mois → 239 MAD standard).

**Contexte de la décision.** La synthèse de session du matin (~17:00 GMT+1) avait reporté la décision à un trigger "saturation confirmée Gemini 3.1 Pro post-30/04 sur tâches MVP réelles". Ce trigger s'est révélé **trop étroit** : il ne couvrait que la dimension quotas Gemini, alors que les vrais bénéfices de Pro sont multidimensionnels (NotebookLM Pro, Deep Research, Veo 3.1).

**Bénéfices alignés avec sections existantes du doc :**
- **NotebookLM Pro** → ingestion manuels marocains (sections 3.5 RAG, 9.4 acquisition contenus). Infrastructure produit, pas confort.
- **Deep Research illimité** → veille concurrentielle (1.3.3) + audit pédagogique récurrent (10.4)
- **Veo 3.1** → production vidéos TikTok/Reels en interne, canal d'acquisition n°1 (7.2). ROI sur 1 vidéo/mois économisée vs prestataire externe.
- **Quotas Gemini 3.1 Pro élargis** → usage Antigravity intensif sur audit cross-fichiers (14.2.4)

**Cadrage économique.** Surcoût année 1 : ~1 428 MAD (= +119 MAD/mois moyenne sur 12 mois). Représente 2,9% du budget de lancement. Surcoût année 2+ : ~2 148 MAD/an. Ratio coût/bénéfice considéré favorable au regard des 4 cas d'usage produit alignés.

**Engagement de gouvernance.** Si après 6 mois aucun des 4 cas d'usage NotebookLM Pro / Deep Research / Veo 3.1 / quotas Gemini élargis n'est devenu structurel dans le workflow, **rétrogradation obligatoire** vers Google AI Plus. Évaluation à dater pour [2026-10-26].

### 14.2.8 Architecture knowledge Claude Projects (acté v1.5)

**Contexte du problème.** Le projet Claude (`SIRAJ`) ingère deux sources de contenu en parallèle :
- Des fichiers uploadés manuellement (drag & drop)
- Un repo GitHub connecté (`datguynabeel/Bac-IA`) synchronisé automatiquement

Au 26 avril 2026, le repo contient 182 fichiers (code, designs, configs, skills Antigravity) qui occupent **39% de la capacité knowledge** du projet. Cette densité crée un risque de dilution dans le ranking du tool `project_knowledge_search` : les fichiers maîtres (document de référence + lessons.md) peuvent être concurrencés par des fichiers secondaires lors d'une recherche, dégradant la qualité contextuelle des réponses Claude Desktop.

**Architecture actée — 2 niveaux distincts :**

| Niveau | Mécanisme | Fichiers concernés | Justification |
|---|---|---|---|
| **Niveau 1** | Upload manuel (drag & drop dans Claude Projects) | `Bac_IA_Projet_Complet_vX.X.md`<br>`tasks/lessons.md` | Priorité d'index garantie. Ces fichiers sont consultés à CHAQUE session — leur visibilité prime. |
| **Niveau 2** | Connexion GitHub repo `datguynabeel/Bac-IA` | Tout le reste (code, designs, configs, skills Antigravity, README, etc.) | Contexte exécution disponible à la demande, sans concurrencer les fichiers maîtres. |

**Règle de mise à jour critique.** À chaque nouvelle version du document maître ou de `lessons.md` :
1. Commit dans le repo GitHub (workflow normal)
2. **Re-upload manuel obligatoire** dans la knowledge du projet Claude Desktop, en remplacement de la version précédente

Sans re-upload manuel, Claude Desktop continuera de raisonner sur la version uploadée précédemment (priorité d'index) tout en voyant la nouvelle version dans le repo synchronisé. Incohérence garantie — exactement le risque de "raisonnement sur v1.3 alors que v1.4 commitée" identifié dans la synthèse de session du 26 avril 2026.

**Test de vérification empirique.** En cas de doute sur la version active dans Claude Desktop, demander : *"Quelle est la version actuelle du document maître SIRAJ ?"*. Si la réponse hésite, cite une version obsolète, ou nécessite plusieurs recherches → la dilution est confirmée et le re-upload manuel doit être effectué immédiatement.

**Engagement de gouvernance.** Cette architecture à 2 niveaux est non négociable tant que le repo dépasse 100 fichiers. À réévaluer si le repo est restructuré (extraction des designs/skills dans un repo séparé par exemple).

---

## 14.3 Stack technique consolidée (rappel synthétique)

| Couche | Outil | Statut |
|---|---|---|
| **Conception stratégique (fondateur)** | Claude Desktop Pro + Opus 4.7 | ✅ Acté v1.3 |
| **Conception exécutante (fondateur)** | Antigravity (Gemini 3.1 Pro + Claude 4.6 Opus) via Google AI Pro — 119 MAD/mois (mois 1-6) puis 239 MAD/mois | ✅ Acté v1.4 |
| **Production de contenu (RAG + marketing)** | NotebookLM Pro + Deep Research + Veo 3.1 (inclus dans Google AI Pro) | ✅ Acté v1.4 |
| **Mémoire d'apprentissage** | `tasks/lessons.md` versionné dans le repo | ✅ Acté v1.3 |
| **Garde-fou session conversation** | Bloc `🔄 GARDE-FOU SESSION` automatique en fin de réponse Claude Desktop | ✅ Acté v1.3 |
| **Knowledge Claude Projects** | Architecture 2 niveaux : upload manuel (doc maître + lessons.md) + connexion repo `datguynabeel/Bac-IA` pour le reste | ✅ Acté v1.5 |
| **Design** | Antigravity + Stitch | ✅ Acté v1.2 |
| **Frontend code** | Lovable.dev ou Bolt.new | ✅ Acté |
| **Hébergement** | Vercel | ✅ Acté |
| **Backend & DB** | Supabase | ✅ Acté |
| **LLM runtime production (élève)** | Claude Sonnet 4.6 (API Anthropic) | ✅ Acté |
| **RAG** | Supabase pgvector | ✅ Acté MVP |
| **Paiement** | Stripe (puis CMI) | ✅ Acté |
| **Repo** | GitHub (`datguynabeel/Bac-IA`) | ✅ Configuré |
| **Domaine production** | `https://bac-ia.vercel.app` | ✅ En ligne |

## 14.4 Engagements de gouvernance

- **Pas de migration tooling sans décision documentée** dans ce document de référence
- **Pas de pivot stratégique majeur** sans mise à jour formelle (nouvelle version)
- **Pas de feature V2/V3** intégrée dans le périmètre MVP, même sous pression émotionnelle (école pilote, idée brillante, etc.)
- **Audit culturel permanent** (section 2.5) appliqué à tous les écrans et contenus, sans exception

---

# ANNEXES

## Annexe A — Plan détaillé de validation 30 jours

**Semaine 1 — Préparation**
- Rédiger script d'interview (15 questions ouvertes, 10 min max)
- Lister 30 contacts élèves et 30 contacts parents (réseau direct + recommandations)
- Créer landing page Carrd avec : promesse, démo (vidéo ou screenshots), formulaire d'inscription, prix indicatif

**Semaine 2 — Interviews**
- 15 interviews élèves (objectif : comprendre comment ils étudient aujourd'hui)
- 15 interviews parents (objectif : comprendre comment ils décident d'investir dans le soutien)
- Synthèse hebdo : 3 insights majeurs, 3 surprises, 3 doutes

**Semaine 3 — Test landing**
- Diffusion landing page (groupes WhatsApp parents, Facebook, Instagram)
- Objectif : 200 inscriptions sur la liste d'attente
- A/B test 3 versions de prix (49 / 99 / 149 DH/mois)
- Mesure : taux conversion par variation

**Semaine 4 — Pré-vente réelle**
- Email aux inscrits : offre lifetime à 499 DH (pendant 7 jours seulement)
- Objectif Go : 50 ventes
- Si > 50 ventes : Go produit
- Si 25-50 : ajustement positionnement, retest
- Si < 25 : pivot ou abandon

## Annexe B — Script d'interview élève

1. Comment tu révises actuellement pour le Bac ?
2. Qu'est-ce qui te bloque le plus dans tes études ?
3. Tu as des cours particuliers ? Pourquoi (pas) ?
4. Quand tu ne comprends pas un cours, qu'est-ce que tu fais ?
5. Tu utilises YouTube / TikTok pour étudier ? Quelles chaînes ?
6. Tu as déjà utilisé ChatGPT pour tes devoirs ? Pour quoi faire ?
7. Si je te disais qu'il existe un tuteur IA qui connaît ton programme par cœur et qui te coûte 99 DH/mois, ça t'intéresserait ? Pourquoi ?
8. Qu'est-ce qui te ferait dire non ?
9. Quelle matière tu paierais pour avoir de l'aide ?
10. Si tu pouvais avoir n'importe quel super-pouvoir scolaire, ce serait quoi ?
11. Tu préfères qu'on te parle en darija ou en français pour les études ?
12. Combien de temps tu passes sur ton téléphone par jour ?
13. Sur quelles apps tu passes le plus de temps ?
14. Tes parents savent ce que tu fais sur ton téléphone ?
15. Si je lançais ce produit, tu serais OK pour le tester gratuitement et me donner ton avis ?

## Annexe C — Script d'interview parent

1. Combien tu dépenses par mois en soutien scolaire pour ton enfant ?
2. Tu trouves ça cher ? Justifié ?
3. Comment tu juges si un cours particulier marche bien ou pas ?
4. Qu'est-ce qui te frustre le plus dans le système éducatif actuel ?
5. Tu fais confiance à ton enfant pour étudier seul.e ?
6. Tu vérifies son travail ? Comment ?
7. Tu as déjà entendu parler d'apps de soutien scolaire (Kezakoo, etc.) ?
8. Tu as essayé ? Pourquoi (pas) ?
9. Si je te disais qu'il existe un tuteur IA personnalisé pour 199 DH/mois pour toutes les matières de ton enfant, tu serais intéressé ?
10. Qu'est-ce qui te ferait dire non ?
11. Comment tu préfères payer un service comme ça ? CB, mobile money, espèces ?
12. Tu serais d'accord pour un essai gratuit de 7 jours avec engagement après ?
13. Tu en parlerais à d'autres parents ?
14. Quel serait pour toi le signe que ce produit fonctionne pour ton enfant ?
15. Quelle est la chose la plus importante pour toi : la note finale, l'autonomie de ton enfant, ou le temps gagné ?

## Annexe D — Liste des manuels et programmes prioritaires à acquérir

**Phase 1 — Maths 2Bac SM**
- Programme officiel Ministère (PDF gratuit)
- Manuel Nadia Maths 2 Bac SM
- Manuel Al Massar Maths 2 Bac SM
- Cahier d'exercices Lawhati 2 Bac SM
- Annales Bac National Maths 2010-2025 (avec corrigés)

**Phase 2 — PC 2Bac SM/PC**
- Programme officiel
- Manuel Nadia PC 2 Bac
- Annales 2010-2025

**Phase 3 — SVT 2Bac SVT/PC**
- Idem

(À étendre selon roadmap)

## Annexe E — Checklist de lancement public (mois 4)

- [ ] Landing page définitive en ligne (3 langues : FR / AR / mix darija)
- [ ] Tunnel d'inscription testé avec 20 personnes
- [ ] Paiement Stripe en mode live (testé avec vraie CB)
- [ ] Système d'emails transactionnels opérationnel
- [ ] Politique de confidentialité + CGV publiées
- [ ] Compte Instagram avec 30 publications minimum
- [ ] Compte TikTok avec 30 vidéos minimum
- [ ] Compte LinkedIn pro
- [ ] Lien WhatsApp Business en signature
- [ ] 5 témoignages écrits ou vidéo d'early adopters
- [ ] Rapport de performance LLM (latence, taux d'erreur)
- [ ] Plan support : qui répond, en combien de temps, sur quel canal
- [ ] Roadmap publique sommaire publiée
- [ ] Communiqué de presse prêt pour 5 médias marocains
- [ ] Stock de codes promo influenceurs
- [ ] Backup et plan de continuité technique

## Annexe F — Glossaire

- **API** : Application Programming Interface — point d'accès programmatique à un service (ex : API Anthropic permet d'appeler Claude depuis ton code)
- **Bac National** : examen final marocain unifié pour le Baccalauréat
- **CMI** : Centre Monétique Interbancaire — opérateur historique du paiement carte au Maroc
- **CNDP** : Commission Nationale de Contrôle de la Protection des Données — régulateur marocain de la donnée
- **CNSS** : Caisse Nationale de Sécurité Sociale
- **DGI** : Direction Générale des Impôts
- **Filière** : voie spécialisée du Bac (SM, PC, SVT, SE, Lettres, etc.)
- **HSM** : Highly Structured Message — format des messages WhatsApp templates
- **LLM** : Large Language Model (Claude, GPT, Gemini)
- **MRR** : Monthly Recurring Revenue — revenu récurrent mensuel
- **MVP** : Minimum Viable Product — version minimale viable
- **OMPIC** : Office Marocain de la Propriété Industrielle et Commerciale
- **RAG** : Retrieval Augmented Generation — technique consistant à fournir au LLM des documents pertinents pour qu'il y appuie sa réponse
- **SARL** : Société à Responsabilité Limitée
- **SM / PC / SVT / SE** : Sciences Mathématiques / Physiques-Chimie / Vie et Terre / Économiques

## Annexe G — Décisions actées en v1.2 (avril 2026)

Synthèse des décisions clés enregistrées dans cette version :

| Décision | Détail | Section concernée |
|---|---|---|
| Stack design | Antigravity + Stitch exclusif MVP. Figma écarté. | 14.2 |
| Rôle Claude | Co-Fondateur IA, Chef de Projet & Delivery Manager | 11.1, 14.2.2 |
| Cadre fondateur | Pas de pression externe artificielle. Cadence > deadline. | 14.1 |
| Persona ajoutée | Imane — élève via école pilote | 1.4.4 |
| Design Partner | École privée Casablanca (maternelle → Bac) | 11.4 |
| Méta-instruction Claude | Point 6 reformulé (cadence vs over-planning) | Méta-instructions |

## Annexe G.bis — Décisions actées en v1.3 (avril 2026)

| Décision | Détail | Section concernée |
|---|---|---|
| Workflow à deux têtes | Claude Desktop Pro (Opus 4.7) pour stratégie + Antigravity pour exécution | 14.2.3 |
| Sélection modèle Antigravity | Gemini 3.1 Pro low par défaut, Claude 4.6 Opus thinking pour code Stitch et prompts pédagogiques | 14.2.4 |
| Convention de transmission | Header `🎯 POUR ANTIGRAVITY — Modèle recommandé : [...]` sur tout livrable Claude Desktop → Antigravity | 14.2.3 |
| Système `lessons.md` | Mémoire partagée des corrections récurrentes, versionnée dans le repo | 14.2.5 |
| Garde-fou session conversation | Bloc `🔄 GARDE-FOU SESSION` automatique pour optimiser coûts et qualité | 14.2.6 |
| Distinction runtime/conception | Sonnet 4.6 réservé au runtime élève. Opus 4.7 jamais en production utilisateur. | 3.3, 14.2.3, 14.2.4 |
| Modèles écartés | GPT-OSS et autres : non utilisés. Discipline à 2 fournisseurs (Anthropic + Google). | 14.2.4 |
| Concepts Boris Cherny non adoptés | Sub-agents parallèles, plan mode forcé, autonomous bug fixing — hors scope MVP | 14.2.5 |

---

# CONTEXT FOR CLAUDE (méta-instruction)

**Si ce document est chargé comme connaissance projet dans Claude :**

Quand l'utilisateur (le fondateur) me parle dans le cadre de ce projet, je dois :

1. **Avoir cette stratégie en tête** dans toutes mes réponses. Ne pas suggérer de pivots majeurs sans raison solide.

2. **Référencer les sections** quand pertinent : "Comme défini dans la section 5.1, le system prompt principal indique...".

3. **Maintenir la cohérence** des décisions : si on a décidé Claude Sonnet comme LLM principal, ne pas suggérer GPT sans raison. Si on a acté Stitch (section 14.2), ne pas re-proposer Figma.

4. **Rappeler l'utilisateur à la discipline** quand il s'éparpille : "On avait défini que la priorité MVP était Maths 2Bac SM. Cette nouvelle idée est intéressante mais elle nous éloigne. On la met en backlog ?".

5. **Mettre à jour ce document** quand des décisions sont actées (proposer des mises à jour explicites de telle ou telle section, avec incrémentation de version).

6. **Adapter la pression à la réalité du fondateur (modifié v1.2).** Le projet est bootstrappé sans contrainte externe de temps ni d'investisseurs. Le fondateur avance à un rythme soutenu et souhaite vivre cette expérience comme enrichissante et durable. Remplacer "deadline" par "cadence". Continuer à challenger sur la dispersion (over-planning, scope creep V2/V3, distraction primaire) — mais sans simuler une pression VC qui n'existe pas. L'over-planning reste un risque, la dispersion l'est tout autant.

7. **Prioriser la validation marché** avant tout build à grande échelle. La règle "pas de code avant 50 ventes" est ramenée en v1.2 à un objectif d'apprentissage plutôt qu'à un Go/No-Go rigide, mais la validation reste non-négociable.

8. **Garder la pédagogie au centre.** C'est facile de se perdre dans la tech ou le business. Le produit existe pour aider des élèves marocains à mieux apprendre. Toujours revenir à ça.

9. **Appliquer la gouvernance culturelle (section 2.5) sans exception.** Souveraineté territoriale, vocabulaire produit officiel ("Chapitres", "Exercices", "Séance"), typographies (Inter/Manrope/IBM Plex Sans Arabic/KaTeX), identité utilisateur marocaine. Tout écran ou contenu non conforme est non-livrable.

10. **Respecter le cadre de travail fondateur (Partie 14).** Pas de migration tooling sans décision documentée. Pas de pivot stratégique sans mise à jour formelle.

11. **Respecter le workflow à deux têtes (ajouté v1.3).** Lorsque Claude (Opus 4.7 sur Claude Desktop) produit un livrable destiné à être exécuté dans Antigravity, il doit systématiquement :
    - Préfixer le livrable du header `🎯 POUR ANTIGRAVITY` avec le modèle recommandé (Gemini 3.1 Pro low/high ou Claude 4.6 Opus thinking) et une justification d'une ligne
    - Refuser de générer du code volumineux (300+ lignes) destiné à être copié-collé brutalement — fournir à la place le **prompt parfait** à coller dans Antigravity
    - Distinguer strictement les modèles de conception (Opus 4.7, Gemini 3.1 Pro, Claude 4.6 Opus dans Antigravity) du modèle runtime production (Sonnet 4.6 via API directe) — voir sections 3.3, 14.2.3 et 14.2.4

12. **Privilégier les patches ciblés à la régénération (ajouté v1.3).** Lorsqu'une mise à jour du document maître est requise, Claude livre un patch structuré (localisations, AVANT/APRÈS) plutôt qu'une régénération complète. Cela protège la cohérence du document, économise les tokens, et permet une revue humaine fine.

13. **Capitaliser via `tasks/lessons.md` (ajouté v1.3).** À chaque correction faite par le fondateur, Claude propose spontanément une ligne formatée à ajouter dans `tasks/lessons.md` (cf. section 14.2.5). Au démarrage de chaque session Claude Desktop, Claude doit consulter le fichier `lessons.md` (s'il est joint ou présent en knowledge) avant de proposer toute action structurelle. Les leçons capitalisées priment sur les conventions générales si conflit.

14. **Activer le garde-fou session de conversation (ajouté v1.3).** Claude évalue silencieusement à chaque message quatre critères : nombre d'échanges (≥ 15), cohérence thématique, volume de contexte cumulé, signal de clôture naturel. Si un seuil est franchi, Claude termine sa réponse par un bloc standardisé `🔄 GARDE-FOU SESSION` proposant fermeture de la conversation et synthèse de fin pour économiser les tokens lors du basculement vers la session suivante. Le fondateur reste seul juge — Claude propose, ne décide pas. Voir section 14.2.6 pour le détail des trois niveaux d'alerte (vert/jaune/rouge) et la structure de la synthèse de fin.

---

**Fin du document — Version 1.3**

*Document à mettre à jour à chaque jalon majeur. Versionner via Git ou Notion. Ne jamais avoir deux versions divergentes en circulation.*
