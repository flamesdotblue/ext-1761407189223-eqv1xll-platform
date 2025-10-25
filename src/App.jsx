import HeroCover from './components/HeroCover';
import ProblemImpact from './components/ProblemImpact';
import FeaturesGrid from './components/FeaturesGrid';
import StakeholdersCTA from './components/StakeholdersCTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <HeroCover />
      <main className="relative z-10">
        <ProblemImpact />
        <FeaturesGrid />
        <StakeholdersCTA />
      </main>
      <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-white/60">
        Built for small and marginal farmers • Data: NABARD 2022 • Demo UI
      </footer>
    </div>
  );
}

export default App;
