import React from 'react';
import { Hero } from '../components/Hero';
import { LearningStages } from '../components/LearningStages';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServiceAreas } from '../components/ServiceAreas';
import { Subjects } from '../components/Subjects';
import { Boards } from '../components/Boards';
import { TeachingModes } from '../components/TeachingModes';
import { Process } from '../components/Process';
import { TutorQualifications } from '../components/TutorQualifications';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { BottomCTA } from '../components/BottomCTA';

export function HomePage({ onNavigate }: { onNavigate: (route: string) => void }) {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <LearningStages onNavigate={onNavigate} />
      <WhyChooseUs />
      <ServiceAreas />
      <Subjects onNavigate={onNavigate} />
      <Boards onNavigate={onNavigate} />
      <TeachingModes onNavigate={onNavigate} />
      <Process onNavigate={onNavigate} />
      <TutorQualifications onNavigate={onNavigate} />
      <Testimonials />
      <FAQ />
      <BottomCTA onNavigate={onNavigate} />
    </main>
  );
}

export const mt = HomePage;
