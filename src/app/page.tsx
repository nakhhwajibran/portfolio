'use client';
import HeroSection from './components/HeroSection';
import Summary from './components/Summary';
import Education from './components/Education';
import Project from './components/Project';
import WorkExperience from './components/WorkExperience';
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-all">
        <Summary />
        <Skills/>
        <Education />
        <Project />
        <WorkExperience />
        <ContactForm />
      </main>
      <Footer/>
    </>
  );
}
