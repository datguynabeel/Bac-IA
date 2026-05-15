# INFRA_CONTEXT — Bac-IA

> **Fichier de référence infrastructure & tooling agent IA.**
> Source unique de vérité pour toute opération technique automatisée (Vercel, GitHub, MCP).
> ⚠️ Ne jamais versionner de tokens ou secrets ici.
> **Dernière mise à jour :** 2026-05-15 (patch ciblé URL production)
> **Version :** 1.1 (correction URL production siraj-three)

> ⚠️ **AVIS DE COHÉRENCE — 2026-05-15**
> Ce fichier a fait l'objet d'un patch minimal ciblé sur §1.1 et §1.2 pour corriger l'obsolescence de l'URL production. Les autres sections (Project ID, Build ID, Deployment ID, exemples CLI/API, variables d'environnement) **n'ont PAS été ré-auditées** lors de ce patch et peuvent contenir des références obsolètes au projet `bac-ia` initial. Un audit complet INFRA_CONTEXT v2.0 est cadré comme dette pour session 8 ou ultérieure, avec récupération des vrais IDs via Vercel MCP.

---

## 0. Vue d'ensemble & objectif

Ce document est le **briefing infra** lu par tout agent IA (Claude, Cursor, Copilot, etc.) au démarrage de session pour opérer sur le projet SIRAJ (anciennement Bac-IA — repo conservé `datguynabeel/Bac-IA` pour des raisons historiques, cf. doc maître §13.1.8). Il complète le `SIRAJ_Projet_Complet_vX.X.md` (qui couvre le **produit, la pédagogie et la stratégie**), en se concentrant exclusivement sur :

- **Vercel** — projet, déploiement, CLI/API
- **GitHub** — repo, intégration Vercel
- **GitHub MCP** — connecteur agent + garde-fous + workflow PR

**Hiérarchie des sources de vérité :**
1. `SIRAJ_Projet_Complet_vX.X.md` → produit, vocabulaire, gouvernance culturelle (Section 2.5)
2. `INFRA_CONTEXT.md` (ce fichier) → infra, tooling, conventions agent
3. `CONTRIBUTING.md` → conventions humaines de contribution
4. `SECURITY.md` → politique de sécurité

---

## 1. Vercel — Projet & Déploiement

### 1.1 Identifiants projet

| Clé | Valeur |
|---|---|
| **Project Name** | `siraj-three` (patch 15/05/2026 — anciennement `bac-ia`) |
| **Project ID** | ⚠️ À ré-auditer via Vercel MCP session 8 (Project ID `bac-ia` legacy obsolète) |
| **Build ID (dernier connu)** | ⚠️ À ré-auditer session 8 |
| **Deployment ID (dernier connu)** | ⚠️ À ré-auditer session 8 |
| **Team / Scope Slug** | `nabilbouhria-7135s-projects` (à confirmer session 8) |
| **Type de compte** | Hobby personnel (pas de Vercel Team payante) |
| **Framework détecté** | Next.js 16 (showcase-app, prototype non-jetable §14.6 doc maître) |

### 1.2 Domaines & URLs

| Environnement | URL |
|---|---|
| **Production (domaine principal SIRAJ)** | `https://siraj-three.vercel.app` ⭐ (patch 15/05/2026) |
| **Routes prototype actives** | `/proto/onboarding` (à venir), `/proto/chapitres`, `/proto/chapitre/[slug]`, `/proto/chapitres/limites-continuite`, `/proto/seance/[id]`, `/proto/seance/[id]/fin` (à venir) |
| **Domaine cible long terme** | `siraj.app` (EN PAUSE — réservation post-prototype, cf. doc maître §10.3) |
| **URL legacy** | `https://bac-ia.vercel.app` (potentiellement encore actif sur projet Vercel `bac-ia` distinct — statut à clarifier session 8) |
| **Pattern Preview deployments** | `https://siraj-three-<hash>-nabilbouhria-7135s-projects.vercel.app` |

### 1.3 Infrastructure & Build

| Clé | Valeur |
|---|---|
| **Région de build** | `iad1` — Washington D.C., USA (East) — à confirmer session 8 |
| **Machine de build** | 2 cores / 8 GB RAM |
| **Vercel CLI version** | `51.6.1` (potentiellement obsolète à ré-auditer) |
| **Type de déploiement** | `LAMBDAS` |
| **Durée de build** | ⚠️ Variable selon Next.js 16 — à mesurer session 8 |
| **Cache** | Activé automatiquement par Next.js 16 |

---

## 2. Vercel — Utilisateur & API/CLI

### 2.1 Utilisateur Vercel

| Clé | Valeur |
|---|---|
| **Username** | `nabilbouhria-7135` |
| **User ID** | `lYFCVHONnNzShPh9RRhtbWwG` |
| **Email** | `nabil.bouhria@gmail.com` |

### 2.2 Variables d'environnement CI

```bash
# À stocker dans GitHub Actions Secrets — JAMAIS dans le repo
VERCEL_TOKEN=<ton_token>          # Générer sur vercel.com/account/tokens
VERCEL_TEAM_ID=nabilbouhria-7135s-projects
VERCEL_PROJECT_ID=<à ré-auditer session 8 — siraj-three project ID>
VERCEL_ORG_ID=nabilbouhria-7135s-projects
```

### 2.3 Déploiement manuel via CLI

```bash
vercel --prod --scope nabilbouhria-7135s-projects
```

### 2.4 Appel REST API (exemple — IDs à actualiser session 8)

```bash
# ⚠️ Deployment ID obsolète, à ré-auditer
curl https://api.vercel.com/v13/deployments/<deployment_id_siraj-three> \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -G -d "teamId=nabilbouhria-7135s-projects"
```

### 2.5 GitHub Actions — déploiement auto

```yaml
- name: Deploy to Vercel
  run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }} --scope=nabilbouhria-7135s-projects
```

### 2.6 Fichier `.vercel/project.json` (à créer en local — IDs à actualiser session 8)

```json
{
  "orgId": "nabilbouhria-7135s-projects",
  "projectId": "<à ré-auditer session 8 — siraj-three project ID>"
}
```

---

## 3. GitHub — Repo & Intégration Vercel

### 3.1 Repo

| Clé | Valeur |
|---|---|
| **GitHub Login** | `datguynabeel` |
| **GitHub Org / Owner** | `datguynabeel` |
| **Repo** | `Bac-IA` (nom legacy conservé — cf. doc maître §13.1.8) |
| **Repo ID GitHub** | `1219064797` |
| **Visibilité** | Public |
| **Branche de production** | `main` |
| **URL repo** | `https://github.com/datguynabeel/Bac-IA` |

### 3.2 Intégration Vercel ↔ GitHub

- Connexion native Vercel ↔ GitHub active sur projet `siraj-three`
- Tout push sur `main` déclenche un déploiement production sur `https://siraj-three.vercel.app`
- Tout push sur autre branche déclenche un Preview deployment
- Pas de protection de branche `main` configurée actuellement → **point d'attention** (cf. §5.4)

---

## 4. GitHub MCP — Connecteur Agent IA

### 4.1 Vue d'ensemble

L'agent IA (Claude) accède au repo via le **connecteur MCP GitHub** (Model Context Protocol). Les outils sont **deferred** : ils nécessitent un `tool_search` préalable avant utilisation.

### 4.2 Outils MCP disponibles & scope

| Catégorie | Outils | Usage agent |
|---|---|---|
| **Lecture repo** | `get_file_contents`, `list_commits`, `search_code` | Inspection libre |
| **Issues** | `create_issue`, `get_issue`, `list_issues`, `update_issue`, `add_issue_comment`, `search_issues` | Création autorisée |
| **Pull Requests** | `create_pull_request`, `get_pull_request`, `list_pull_requests`, `get_pull_request_files`, `get_pull_request_comments`, `get_pull_request_reviews`, `get_pull_request_status`, `update_pull_request_branch` | Création autorisée |
| **Review** | `create_pull_request_review`, `merge_pull_request` | ⚠️ Validation humaine requise |
| **Écriture fichiers** | `create_or_update_file`, `push_files` | ⚠️ Voir §4.4 garde-fous |
| **Branches** | `create_branch` | Création libre (préfixe imposé, voir §4.5) |
| **Repo** | `create_repository`, `fork_repository` | ❌ Interdit sans validation explicite |
| **Recherche** | `search_repositories`, `search_users` | Lecture libre |

### 4.3 Conventions de commit agent

L'agent suit la convention **Conventional Commits** déjà en usage sur le repo (cf. historique : `feat(lot2):`, `fix:`, etc.) :

| Préfixe | Usage |
|---|---|
| `feat(<scope>):` | Nouvelle fonctionnalité (ex: `feat(lot2):`, `feat(diagnostic):`, `feat(proto):`) |
| `fix:` | Correction de bug |
| `docs:` | Documentation uniquement (ex: ce commit) |
| `chore:` | Maintenance, dépendances, config |
| `refactor:` | Refacto sans changement fonctionnel |
| `style:` | UI/CSS sans logique |
| `proto:` | Modifications spécifiques au prototype démo §14.6 |

**Règles supplémentaires pour commits agent :**
- Messages en **français** (cohérence avec l'historique humain)
- Préfixe `[agent]` **interdit** — un commit doit être indistinguable d'un commit humain en termes de qualité
- Référencer le scope projet quand pertinent : `feat(lot2)`, `fix(onboarding)`, `docs(infra)`, `proto:`
- ❌ **Aucun emoji** dans les messages de commit (déjà la convention humaine)

### 4.4 Garde-fous écriture (CRITIQUES)

L'agent doit **systématiquement respecter** les règles suivantes avant toute opération d'écriture :

#### 🔴 Interdictions absolues (sans validation humaine explicite dans le chat)

1. **Aucun push direct sur `main`** pour des modifications de **code applicatif** (HTML, JS, CSS, JSON de config produit, composants React du prototype). Passer obligatoirement par Antigravity local puis git push.
2. **Aucune modification** de fichiers sensibles : `vercel.json`, `manifest.json`, `sw.js`, `.github/workflows/*`, `LICENSE`, `SECURITY.md`.
3. **Aucune suppression** de fichier sans confirmation explicite.
4. **Aucun `force push`** (non exposé par le MCP, mais à mentionner).
5. **Aucune création de repo, fork, ou modification de visibilité.**
6. **Aucun merge de PR** sans validation humaine, même si tous les checks passent.
7. **Aucune écriture de fichier substantiel (>20 lignes OU logique métier OU données projet) via GitHub MCP** — passer obligatoirement par Antigravity local (cf. leçon 2026-05-08 lessons.md).

#### 🟡 Autorisations conditionnelles (push direct `main` toléré)

Les modifications suivantes peuvent être pushées directement sur `main` via GitHub MCP après validation explicite dans le chat :
- Documentation courte (`*.md` à la racine, hors `LICENSE`/`SECURITY.md`) — modification ciblée < 20 lignes
- Fichiers de contexte agent (`INFRA_CONTEXT.md`, futurs `AGENT_*.md`) — patches ciblés < 20 lignes
- Mises à jour ciblées du `SIRAJ_Projet_Complet_vX.X.md` (sous gouvernance Section 2.5 + §14.2.9.a) — patches < 100 lignes markdown

#### 🟢 Autorisations larges

- Lecture libre de tout le repo
- Création d'issues et de commentaires
- Création de branches feature (préfixe imposé, §4.5)
- Création de PR (sans merge)

### 4.5 Workflow PR/Review (modifications de code)

Pour toute modification de **code applicatif**, l'agent suit ce workflow strict :

```
1. create_branch          → branche `agent/<type>/<description-courte>`
                            Exemples : agent/feat/diagnostic-button
                                       agent/proto/onboarding-screen
2. push_files             → commits sur la branche feature
3. create_pull_request    → PR vers main avec :
                            - Titre suivant Conventional Commits
                            - Description structurée (voir template §4.6)
                            - Label `agent-generated` si possible
4. STOP                   → Attendre review humaine
5. (humain) review + merge ou demande modifs
```

❌ **L'agent ne fait JAMAIS `merge_pull_request` lui-même**, même si l'utilisateur dit "merge". La confirmation doit être explicite et formulée sans ambiguïté ("oui, merge la PR #X maintenant").

### 4.6 Template description de PR agent

```markdown
## Contexte
[Pourquoi cette modification — référence à la conversation/décision]

## Changements
- [Fichier modifié 1] : [résumé]
- [Fichier modifié 2] : [résumé]

## Conformité
- [ ] Vocabulaire produit respecté (Section 2.5 du doc maître)
- [ ] Pas de jargon LMS américain
- [ ] Typographies respectées (Inter/Manrope, IBM Plex Sans Arabic, KaTeX)
- [ ] Aucune atteinte à l'intégrité territoriale marocaine
- [ ] Si script tuteur : règle §14.2.9.g doc maître respectée (métacognition, pas de distributeur-réponses)

## Test
[Comment vérifier que ça marche — URL preview Vercel siraj-three, étapes manuelles, etc.]

## Généré par
Agent Claude — session du [date]
```

### 4.7 Logs & traçabilité

- Tous les commits agent sont signés par l'identité GitHub de l'utilisateur (`datguynabeel`) → **non distinguables** d'un commit humain dans `git log`
- L'historique de session Claude conserve le contexte de la décision
- Recommandation : **mentionner systématiquement dans le message de commit** quand une décision stratégique a motivé le changement (ex: `docs(infra): renomme vercel-context vers INFRA_CONTEXT - decision session 25/04`)

---

## 5. Notes & Recommandations

### 5.1 Sécurité

- ⚠️ Le `teamId` `nabilbouhria-7135s-projects` est utilisé dans **tous** les appels API Vercel
- 🔒 `VERCEL_TOKEN` → uniquement dans `GitHub Settings > Secrets and variables > Actions`
- 🔒 Aucun secret ne doit jamais apparaître dans ce fichier ni dans aucun fichier versionné

### 5.2 Performance & Latence

- 🌍 Région de build `iad1` (US East) — **envisager `cdg1` (Paris)** pour réduire la latence Maroc (~40-50% gain estimé) — à arbitrer post-prototype
- 📦 Cache de build activé auto via Next.js 16 (siraj-three)

### 5.3 Limites API Vercel actuelles

- 🚫 `list_projects`, `list_deployments`, `get_runtime_logs` nécessitent un **token personnel Full Access** (vercel.com/account/tokens) pour fonctionner via l'API
- Sur compte Hobby, certaines features Team payantes restent inaccessibles

### 5.4 Points d'attention gouvernance

- ❗ **Branche `main` non protégée** sur GitHub → tout collaborateur (et l'agent MCP avec ses tokens) peut pusher directement. À configurer : `Settings > Branches > Add branch protection rule` pour exiger PR + review avant merge.
- ❗ Pas de check CI obligatoire avant merge — à implémenter quand le projet aura un build/lint/test pipeline.
- ❗ **DETTE INFRA SESSION 8** : audit complet IDs Vercel siraj-three (Project ID, Build ID, Deployment ID, Team Slug confirmation) via Vercel MCP. Patch v1.1 actuel ne corrige que les URL et nom de projet visibles, pas les IDs internes.

---

## 6. Historique des révisions

| Version | Date | Auteur | Changements |
|---|---|---|---|
| 0.1 | 2026-04-25 | Agent Claude | Création initiale sous le nom `vercel-context.md` (non versionné) |
| 1.0 | 2026-04-25 | Agent Claude | Renommage `INFRA_CONTEXT.md` + ajout section 4 (GitHub MCP complète) + garde-fous + workflow PR |
| 1.1 | 2026-05-15 | Agent Claude | Patch ciblé URL production : `bac-ia.vercel.app` → `siraj-three.vercel.app`. Project Name `bac-ia` → `siraj-three`. Avis de cohérence ajouté en tête. Dette session 8 documentée (audit complet IDs internes). §4.4 mis à jour avec leçon 2026-05-08 (limites GitHub MCP écriture). §4.6 enrichi conformité §14.2.9.g doc maître. |
