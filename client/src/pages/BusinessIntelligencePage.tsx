import { ChevronLeft } from 'lucide-react';
import BusinessIntelligenceDashboard from '../components/BusinessIntelligenceDashboard';

interface BusinessIntelligencePageProps {
  onBack: () => void;
}

const BusinessIntelligencePage = ({ onBack }: BusinessIntelligencePageProps) => {
  return (
    <div className="min-h-screen">
      {/* Header com botão voltar */}
      <div className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
        </div>
      </div>

      {/* Dashboard Component */}
      <BusinessIntelligenceDashboard />
    </div>
  );
};

export default BusinessIntelligencePage;
