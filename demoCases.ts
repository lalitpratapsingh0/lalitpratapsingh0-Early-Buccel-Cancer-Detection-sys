import { DemoCase } from '../types';

// High quality SVG Data URLs depicting oral cavity demo cases
const lowRiskSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="%23d9777f"/><path d="M 50,50 Q 300,100 550,50 Q 580,300 550,550 Q 300,500 50,550 Q 20,300 50,50 Z" fill="%23e88a93" opacity="0.8"/><circle cx="300" cy="300" r="180" fill="%23f4a3ab" opacity="0.9"/><path d="M 200,280 Q 300,320 400,280 Q 380,360 200,280 Z" fill="%23d66b75"/><g opacity="0.3"><ellipse cx="250" cy="220" rx="30" ry="15" fill="%23ffffff"/><ellipse cx="360" cy="240" rx="25" ry="12" fill="%23ffffff"/></g><text x="300" y="540" font-family="Arial" font-size="22" font-weight="bold" fill="%23ffffff" text-anchor="middle">DEMO CASE 1: Normal Mucosa</text></svg>`;

const highRiskSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="%23b94a55"/><path d="M 40,40 Q 300,80 560,40 Q 580,300 560,560 Q 300,520 40,560 Q 20,300 40,40 Z" fill="%23c45560"/><circle cx="300" cy="300" r="220" fill="%23cf636e"/><path d="M 220,180 C 290,140 400,190 380,290 C 410,380 310,430 240,390 C 170,350 160,240 220,180 Z" fill="%23881337" stroke="%23ffe4e6" stroke-width="4" stroke-dasharray="6,4"/><path d="M 250,220 C 310,190 350,230 330,280 C 360,330 280,360 250,320 Z" fill="%23ffffff" opacity="0.85"/><circle cx="280" cy="260" r="25" fill="%23991b1b"/><path d="M 230,240 Q 210,210 180,220 M 340,300 Q 380,320 410,310 M 260,350 Q 250,390 230,420" stroke="%237f1d1d" stroke-width="5" fill="none"/><text x="300" y="540" font-family="Arial" font-size="22" font-weight="bold" fill="%23ffffff" text-anchor="middle">DEMO CASE 2: Suspicious Patch</text></svg>`;

const poorQualitySvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="%2318181b"/><circle cx="300" cy="300" r="250" fill="%2327272a" opacity="0.5"/><path d="M 100,100 L 500,500" stroke="%233f3f46" stroke-width="40" opacity="0.3" filter="blur(10px)"/><text x="300" y="280" font-family="Arial" font-size="26" font-weight="bold" fill="%2371717a" text-anchor="middle">BLURRY / TOO DARK</text><text x="300" y="320" font-family="Arial" font-size="18" fill="%2352525b" text-anchor="middle">Out of focus camera feed demo</text><text x="300" y="540" font-family="Arial" font-size="22" font-weight="bold" fill="%23a1a1aa" text-anchor="middle">DEMO CASE 3: Insufficient Quality</text></svg>`;

export const DEMO_CASES: DemoCase[] = [
  {
    id: 'demo-low-risk',
    title: 'Demo Case 1: Healthy Buccal Mucosa',
    subtitle: 'Homogeneous pink tissue, smooth texture, sharp boundaries',
    riskLevel: 'LOW_RISK_NO_SUSPICIOUS_PATTERN',
    riskScore: 12,
    badge: 'Low Risk',
    badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    imageSrc: lowRiskSvg,
    description: 'Demonstrates a clear, evenly illuminated mucosa image showing uniform pink pigmentation without irregular keratosic patches or suspicious erythroplakic changes.'
  },
  {
    id: 'demo-high-risk',
    title: 'Demo Case 2: Suspicious Mixed Lesion',
    subtitle: 'Irregular erythro-leukoplakic pattern, asymmetry & altered texture',
    riskLevel: 'HIGH_RISK_SUSPICIOUS',
    riskScore: 84,
    badge: 'High-Risk / Suspicious',
    badgeClass: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    imageSrc: highRiskSvg,
    description: 'Demonstrates a non-homogeneous buccal lesion with raised white plaques adjacent to erythematous tissue, asymmetrical borders, and high texture irregularity requiring clinical evaluation.'
  },
  {
    id: 'demo-poor-quality',
    title: 'Demo Case 3: Poor Quality Sample',
    subtitle: 'Underexposed lighting and camera motion blur',
    riskLevel: 'UNABLE_TO_ANALYZE',
    riskScore: 0,
    badge: 'Unable to Analyze',
    badgeClass: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    imageSrc: poorQualitySvg,
    description: 'Demonstrates quality validation rejection due to extreme low lighting (luminance < 35%) and camera motion blur exceeding acceptable focus thresholds.'
  }
];
