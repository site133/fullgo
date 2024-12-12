import React from 'react';
import FullPageLayout from '../components/FullPageLayout';

interface HomeProps {
  data: {
    sections: any[];
  };
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const navigationTooltips = ['Accueil', 'Services', 'À propos', 'Contact'];
  const sectionsColor = ['#f2f2f2', '#fff', '#f2f2f2', '#fff'];

  return (
    <FullPageLayout
      navigationTooltips={navigationTooltips}
      sectionsColor={sectionsColor}
    >
      {data.sections.map((section, index) => (
        <section key={index}>
          {/* Contenu de votre section */}
        </section>
      ))}
    </FullPageLayout>
  );
};

export default Home; 
