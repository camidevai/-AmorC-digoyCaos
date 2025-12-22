import { useEffect } from 'react';
import Hero from './components/Hero';
import StoryCarousel from './components/StoryCarousel';
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

        {/* Section 2: Story Carousel */}
        <StoryCarousel />

        {/* Section 3: AI Explanation */}
        <AIExplanation />

        {/* Section 4: Prompt Workshop */}
        <PromptWorkshop />

        {/* Section 5: InformatiK-AI */}
        <InformatikAI />

        {/* Section 6: AI Hallucination */}
        <AIHallucination />

        {/* Section 7: Resources */}
        <Resources />

        {/* Section 8: Final CTA */}
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
