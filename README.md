# BuccalCare AI — Early Buccal Cancer Screening System

[![Academic Prototype](https://img.shields.io/badge/Project-Academic%20College%20Prototype-teal.svg)](https://github.com)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20TypeScript%20%7C%20Tailwind-blue.svg)](https://vitejs.dev)
[![AI Mode](https://img.shields.io/badge/AI_MODE-demo-emerald.svg)](#demo-ai-mode)

**BuccalCare AI** is an AI-assisted web application created as a final-year college engineering project. It demonstrates how computer vision algorithms can analyze photographs of the oral/buccal mucosa to screen for early visual risk patterns (such as erythroplakia and leukoplakia) and encourage timely clinical evaluation.

---

> [!IMPORTANT]
> ### ⚠️ MEDICAL SAFETY & CLINICAL DISCLAIMER
> This project is an **academic prototype intended strictly for educational research and presentation purposes**. It has not been clinically validated and **MUST NOT be used to diagnose, rule out, or treat cancer**.
>
> The system does **NOT** provide medical diagnoses (it will never state "You have cancer" or "You do not have cancer"). Results are categorized as risk screenings:
> - **High-Risk / Suspicious — Professional Evaluation Recommended**
> - **Low-Risk / No Suspicious Pattern Detected**
> - **Unable to Analyze — Please Upload a Clearer Image**
>
> *Always consult a qualified dentist, oral surgeon, or physician for clinical evaluation.*

---

## 🌟 Key Features

- 📸 **Dual Input Workflow**:
  - **Upload Image**: Drag-and-drop support for JPG, JPEG, PNG, and WEBP.
  - **Live Camera**: Direct browser camera access (`getUserMedia`) with live preview and snapshot capture.
- 🔍 **Automated Image Quality Pre-Check**:
  - Evaluates brightness/luminance, contrast, motion blur (Laplacian variance), and resolution.
  - Returns clear, actionable suggestions if image quality is insufficient.
- 🔬 **Deterministic Computer Vision Pipeline (`AI_MODE=demo`)**:
  - Modular AI inference layer running in the frontend canvas without requiring external paid API keys.
  - Extracts 4 clinical visual metrics: **Erythroplakia (Redness)**, **Leukoplakia (Keratosis)**, **Texture Irregularity**, and **Border Asymmetry**.
- 🗺️ **Interactive Visual Overlay**:
  - Toggle between **Original Photograph**, **AI Bounding Box Overlay**, and **Attention Heatmap Grid**.
  - Labeled with `"AI Visualization — Demonstration Only"`.
- 🩺 **Doctor Demo & Prescription Generator**:
  - Demonstrates how doctors review screening reports.
  - Fictional profile: **Dr. Ananya Sharma (BDS, MDS — Oral Medicine & Radiology)**.
  - Printable / PDF Exportable document labeled `"DEMO / SAMPLE — NOT A VALID MEDICAL PRESCRIPTION"`.
- 📊 **Analytics Dashboard**:
  - Interactive charts powered by **Recharts** (Risk distribution pie chart, monthly trend bar chart, feature radar chart, latency benchmark).
- 💾 **Local Screening History**:
  - Browser `localStorage` history table with search, result viewing, and deletion capabilities.
- ⚡ **1-Click Presentation Presets**:
  - Pre-loaded sample demo cases (Low-Risk, High-Risk Suspicious, Poor Quality Image) for instant college presentation without needing external test files!

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5, TypeScript 5
- **Styling**: Tailwind CSS 3, Glassmorphism design system, Custom animations
- **Icons**: Lucide React
- **Data Visualization**: Recharts
- **Computer Vision**: HTML5 Canvas Image API

---

## 🚀 Quick Start & Installation

Follow these simple steps to clone, install, and run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/buccal-care-ai.git

# 2. Navigate to project directory
cd buccal-care-ai

# 3. Install dependencies
npm install

# 4. Start the Vite development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory (or copy `.env.example`):

```env
VITE_AI_MODE=demo
VITE_APP_TITLE=BuccalCare AI - Early Buccal Cancer Screening System
```

---

## 🤖 Replacing Demo Inference with a Real Machine Learning Model

The AI inference layer is modularly separated in `src/services/imageAnalysisEngine.ts`. To integrate a trained TensorFlow.js, ONNX, PyTorch, or REST API model later:

1. Open `src/services/imageAnalysisEngine.ts`.
2. Replace `analyzeBuccalImage(imageSrc)` with your model's prediction pipeline:

```typescript
export async function analyzeBuccalImage(imageSrc: string): Promise<ScreeningResult> {
  // Load TensorFlow.js / ONNX model
  // const model = await tf.loadLayersModel('/models/buccal_cnn/model.json');
  // const tensor = preprocessImage(imageSrc);
  // const predictions = model.predict(tensor);
  
  // Return formatted ScreeningResult
}
```

The entire frontend UI (Results page, Heatmap visualizer, History, Doctor Demo) will seamlessly render your real model's output without any code changes!

---

## 📹 Camera Permissions

The live camera capture feature uses the WebRTC `navigator.mediaDevices.getUserMedia` API.
- Ensure you grant camera permissions when prompted by your browser.
- Works securely over `localhost` or HTTPS deployed domains.

---

## 🌐 Deployment

### Deploying to Vercel or Netlify

```bash
# Build the production bundle
npm run build
```

Upload the generated `dist/` folder to Vercel, Netlify, or GitHub Pages.

---

## 📜 License & Academic Credit

Created as an academic college project prototype to demonstrate computer vision applications in digital oral healthcare.

*BuccalCare AI © 2026. For Academic Research and Educational Demonstration Only.*
