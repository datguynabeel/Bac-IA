# RÈGLES CULTURELLES ET GÉOPOLITIQUES PERMANENTES — BAC IA

## 1. SOUVERAINETÉ TERRITORIALE DU MAROC (RÈGLE ABSOLUE)

Cette règle est **non-négociable** et s'applique à toute représentation cartographique, iconique ou symbolique du Maroc dans le produit.

### 1.1 Représentation Cartographique
- Toute carte du Maroc doit représenter le territoire dans son **intégralité**, incluant les **provinces du Sud**.
- La frontière sud descend jusqu'à la frontière avec la Mauritanie (niveau de La Güera / Lagouira).
- **INTERDICTION** de toute ligne pointillée ou séparation entre le Nord et le Sud.
- **INTERDICTION** de toute mention "Sahara occidental" ou "territoire disputé".
- Villes obligatoires dans les provinces du Sud (si l'échelle le permet) : Laâyoune, Dakhla, Smara, Boujdour, Guelmim, Tan-Tan.

### 1.2 Références Visuelles
- Les drapeaux, icônes pays et emojis doivent correspondre au drapeau officiel du Royaume du Maroc.
- Les illustrations d'onboarding ou visuels marketing doivent respecter l'intégrité territoriale.

## 2. LANGUES ET TYPOGRAPHIE

### 2.1 Mappage des Polices
- **Français et Darija (caractères latins)** : Utiliser exclusivement `Inter` (corps) ou `Manrope` (titres).
- **Arabe et Darija (caractères arabes)** : Utiliser exclusivement `IBM Plex Sans Arabic`.
- **Mathématiques** : Utiliser exclusivement `KaTeX` pour le rendu des formules.

### 2.2 Règles de Composition
- Ne jamais mélanger une police conçue pour l'arabe avec du texte latin (et vice-versa).
- Le rendu des formules ne doit jamais être en monospace brut.

## 3. VOCABULAIRE ET TERMINOLOGIE OFFICIELLE

### 3.1 Structure Scolaire (Bac Marocain)
- **Niveaux** : Tronc Commun, 1ère Bac, 2ème Bac.
- **Filières** : SM (Sciences Maths), PC (Physique-Chimie), SVT, SE (Sciences Éco), Lettres, SH (Sciences Humaines).
- **Examens** : "Bac National" pour l'examen de fin d'année.

### 3.2 Terminologie Produit
- Utiliser **"Chapitres"** (pas Modules ni Units).
- Utiliser **"Exercices"** (pas Quiz ni Drills).
- Utiliser **"Progression"** (pas Analytics ni Stats).
- Utiliser **"Tuteur"** ou **"IA Tuteur"** (pas Assistant ni AI Coach).

## 4. IDENTITÉ ET AVATARS

- **Avatars par défaut** : Toujours des composants "initiales" (2 lettres, `bg-primary-container`, texte blanc).
- **Noms d'exemple** : Utiliser des prénoms marocains courants (Yasmine, Mehdi, Rachid, Salma, Imane, Othmane, Soukaina, Amine).
- **Localisation** : Prix en **DH** (Dirhams), références aux lycées marocains (Mohammed V, Moulay Youssef, etc.).

## 5. PROCESSUS DE VALIDATION DARIJA

### 5.1 Principe

Toute phrase en darija (caractères latins ou arabes) destinée à apparaître dans l'UI produit doit être **validée par un locuteur natif** avant intégration. Cela s'applique à :
- Taglines marketing
- Microcopy (boutons, tooltips, empty states)
- Phrases d'exemple dans les onboardings
- Messages de notifications

### 5.2 Exceptions

- Les phrases générées dynamiquement par le tuteur IA en réponse à un élève (Coach Tips en temps réel) ne passent pas par la validation humaine. Le LLM produit, on assume le risque pédagogique.
- Les phrases statiques affichées dans l'UI **doivent** passer par la validation.

### 5.3 Règle d'or

En cas de doute, préférer le français. Une phrase darija bancale est plus dommageable qu'une phrase française neutre. Le darija est un atout de différenciation, pas une obligation esthétique.
