import React from 'react';
import { Activity, ShieldCheck, HeartPulse, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-950/90 text-slate-600 dark:text-slate-400 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Col 1: Brand & Academic Statement */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400">
              <Activity className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white font-display">BuccalCare AI</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Final-Year College Engineering Project demonstrating AI-assisted computer vision techniques for early screening of suspicious oral/buccal lesions.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-teal-700 dark:text-teal-400 font-mono">
            <GraduationCap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>Academic Research Prototype</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono">System Modules</h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home & Overview</Link></li>
            <li><Link to="/screening" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">AI Screening Engine</Link></li>
            <li><Link to="/results" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Screening Dashboard</Link></li>
            <li><Link to="/doctor-demo" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Doctor Demo & Prescription</Link></li>
            <li><Link to="/dashboard" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">System Analytics</Link></li>
            <li><Link to="/history" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Screening Logs</Link></li>
          </ul>
        </div>

        {/* Col 3: Research & Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
            <span className="px-2 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">React 18</span>
            <span className="px-2 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">Vite</span>
            <span className="px-2 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">TypeScript</span>
            <span className="px-2 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">Tailwind CSS</span>
            <span className="px-2 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-teal-700 dark:text-teal-400">Canvas Vision API</span>
          </div>
        </div>

        {/* Col 4: Mandatory Disclaimer Notice */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider font-mono flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            Clinical Safety Notice
          </h4>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-rose-500/40 pl-3">
            This AI result is for educational screening purposes only and is not a medical diagnosis. Please consult a qualified dentist/oral surgeon/doctor for clinical evaluation.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>© 2026 BuccalCare AI. College Project Prototype. All Rights Reserved.</p>
        <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">AI_MODE = demo (Client-Side Inference)</p>
      </div>
    </footer>
  );
};
