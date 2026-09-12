import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface DisclaimerBannerProps {
  variant?: 'warning' | 'info' | 'compact';
  className?: string;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ variant = 'warning', className = '' }) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-medium ${className}`}>
        <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
        <span>Educational Prototype — Not a substitute for professional medical diagnosis.</span>
      </div>
    );
  }

  return (
    <div className={`p-4 rounded-xl border ${
      variant === 'warning'
        ? 'bg-amber-500/10 dark:bg-amber-950/40 border-amber-500/30 text-amber-900 dark:text-amber-200'
        : 'bg-teal-500/10 dark:bg-teal-950/40 border-teal-500/30 text-teal-900 dark:text-teal-200'
    } ${className}`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg shrink-0 ${variant === 'warning' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-400' : 'bg-teal-500/20 text-teal-700 dark:text-teal-400'}`}>
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div className="space-y-1 text-sm">
          <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            IMPORTANT MEDICAL SAFETY NOTICE
          </h4>
          <p className="leading-relaxed opacity-90 text-xs sm:text-sm">
            This AI screening result is for <strong>educational and academic research demonstration purposes only</strong> and is not a clinical medical diagnosis. Never ignore or delay seeking professional medical advice. Please consult a qualified dentist, oral surgeon, or doctor for clinical evaluation.
          </p>
        </div>
      </div>
    </div>
  );
};
