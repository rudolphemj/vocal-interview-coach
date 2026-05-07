# Vocal Interview Coach - Guide de Démarrage

## 🚀 Installation rapide

### Prérequis
- Node.js 16+ installé
- npm ou yarn
- Un navigateur moderne (Chrome, Edge, Firefox, Safari)

### Étapes

```bash
# 1. Cloner le repository
git clone https://github.com/rudolphemj/vocal-interview-coach.git
cd vocal-interview-coach

# 2. Installer les dépendances
npm install

# 3. Démarrer l'application
npm start
```

L'application s'ouvrira automatiquement à `http://localhost:3000`

---

## 📋 Utilisation

### Étape 1: Importer l'offre d'emploi
- Uploadez un **PDF** ou copiez-collez le **texte** de l'offre
- L'IA générera automatiquement 5 questions pertinentes

### Étape 2: Présentation de l'entreprise (3 min)
- Écoutez la présentation pré-enregistrée
- Vous pouvez mettre en pause si besoin

### Étape 3: Votre présentation (3 min)
- Enregistrez votre présentation personnelle
- L'app reconnaît votre voix en français

### Étape 4: Questions & Réponses (5 min)
- L'app pose chaque question vocalement
- Répondez en parlant dans le microphone
- Naviguez entre les questions

### Étape 5: Synthèse
- Voir l'analyse complète de votre entretien
- Télécharger ou imprimer le rapport

---

## 🔧 Configuration

### Variables d'environnement (.env)

```env
# Optionnel - Pour une meilleure génération de questions
REACT_APP_HUGGINGFACE_API_KEY=votre_cle_api
```

**Obtenez une clé API gratuite:** https://huggingface.co/settings/tokens

---

## 🎤 Permissions navigateur

L'app nécessite:
- ✅ **Accès au microphone** - Pour l'enregistrement
- ✅ **Synthèse vocale** - Pour écouter les questions

Acceptez ces permissions quand le navigateur vous les demande.

---

## 🐛 Troubleshooting

### "La reconnaissance vocale n'est pas supportée"
- Utilisez **Chrome, Edge ou Safari**
- Firefox a un support limité

### "Erreur lors de la lecture du PDF"
- Vérifiez que le PDF n'est pas corrompu
- Essayez le copier-coller à la place

### Pas de son
- Vérifiez le volume du navigateur
- Autorisez l'accès aux haut-parleurs

### Reconnaissance vocale imprécise
- Parlez clairement
- Réduisez le bruit de fond
- Vérifiez que le microphone fonctionne

---

## 📦 Structure du projet

```
vocal-interview-coach/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── JobOfferUpload.tsx          # Upload de l'offre
│   │   ├── CompanyPresentation.tsx     # Présentation entreprise
│   │   ├── CandidatePresentation.tsx   # Présentation candidat
│   │   ├── InterviewQA.tsx             # Q&R
│   │   └── InterviewSynthesis.tsx      # Synthèse finale
│   ├── services/
│   │   ├── speechService.ts            # Synthèse + Reconnaissance vocale
│   │   ├── pdfService.ts               # Extraction PDF
│   │   └── huggingFaceService.ts       # Génération IA des questions
│   ├── App.tsx                         # Composant principal
│   ├── index.tsx                       # Point d'entrée React
│   └── index.css                       # Styles Tailwind
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## 🚀 Déploiement

### Sur Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Sur Netlify

```bash
npm run build
# Drag & drop le dossier /build
```

---

## 📚 Technologies utilisées

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Web Speech API** - Synthèse et reconnaissance vocale
- **PDF.js** - Extraction de texte PDF
- **Hugging Face** - IA pour générer les questions
- **Axios** - HTTP Client

---

## 📝 Notes importantes

### Confidentialité
- Toutes les données restent **locales** (sauf si vous utilisez Hugging Face)
- L'IA n'enregistre pas vos réponses
- Vous pouvez effacer vos données à tout moment

### Navigateurs supportés
- ✅ Chrome 90+
- ✅ Edge 90+
- ✅ Safari 14.1+
- ⚠️ Firefox (reconnaissance vocale limitée)
- ❌ IE (non supporté)

### Langues
- Actuellement: **Français uniquement**
- Les questions et synthèses sont en français
- La reconnaissance vocale est en français

---

## 🤝 Contribution

Les contributions sont les bienvenues! Créez une issue ou une PR.

---

## 📄 Licence

MIT

---

## 📞 Support

Pour toute question ou problème:
- Créez une issue sur GitHub
- Consultez la documentation

Bonne chance pour vos entretiens! 🍀
