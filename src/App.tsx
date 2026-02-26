import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Overview from './components/sections/Overview';
import Cultivation from './components/sections/Cultivation';
import Artifacts from './components/sections/Artifacts';
import Characters from './components/sections/Characters';
import Geography from './components/sections/Geography';
import Timeline from './components/sections/Timeline';
import EpicMoments from './components/sections/EpicMoments';
import Philosophy from './components/sections/Philosophy';
import Footer from './components/sections/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollbar = document.getElementById('scroll-progress-bar');
      if (scrollbar) {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollbar.style.width = `${scrolled}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Console easter egg
    console.log(`
      修仙一途，逆天而行。
      资质平庸？无妨。
      韩某人，从不做没有把握的事。
      —— 欢迎来到凡人修仙传的世界
    `);
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Overview />
        <Cultivation />
        <Artifacts />
        <Characters />
        <Geography />
        <Timeline />
        <EpicMoments />
        <Philosophy />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
