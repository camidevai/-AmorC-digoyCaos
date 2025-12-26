import { useEffect } from 'react';
import Hero from './components/Hero';
import StoryCarouselCami from './components/StoryCarouselCami';
import StoryBridge from './components/StoryBridge';
import StoryCarouselDaniel from './components/StoryCarouselDaniel';
import AIExplanation from './components/AIExplanation';
import PromptWorkshop from './components/PromptWorkshop';
import InformatikAI from './components/InformatikAI';
import AIHallucination from './components/AIHallucination';
import Resources from './components/Resources';
import FinalCTA from './components/FinalCTA';
import FloatingHelp from './components/FloatingHelp';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      {/* Floating Help Button */}
      <FloatingHelp />

      {/* Main Content */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Historia de Cami */}
        <StoryCarouselCami />

        {/* Section 3: Capítulo Puente */}
        <StoryCarouselDaniel />

        {/* Section 4: Historia de Daniel */}
        <StoryBridge />
        {/* Section 5: AI Explanation */}
        <AIExplanation />

        {/* Section 6: Prompt Workshop */}
        <PromptWorkshop />

        {/* Section 7: InformatiK-AI */}
        <InformatikAI />

        {/* Section 8: AI Hallucination */}
        <AIHallucination />

        {/* Section 9: Resources */}
        <Resources />

        {/* Section 10: Final CTA */}
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
