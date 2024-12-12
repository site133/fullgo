import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

interface FullPageLayoutProps {
  children: React.ReactNode[];
  navigationTooltips?: string[];
  sectionsColor?: string[];
}

const FullPageLayout: React.FC<FullPageLayoutProps> = ({ 
  children, 
  navigationTooltips = [], 
  sectionsColor = [] 
}) => {
  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000}
      navigation={true}
      navigationTooltips={navigationTooltips}
      showActiveTooltip={true}
      sectionsColor={sectionsColor}
      scrollBar={false}
      verticalCentered={true}
      css3={true}
      afterLoad={(origin, destination, direction) => {
        console.log('Section chargée:', destination.index);
      }}
      onLeave={(origin, destination, direction) => {
        console.log('Quitte la section:', origin.index);
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {children.map((section, index) => (
              <div key={index} className="section">
                <div className="content">
                  {section}
                </div>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullPageLayout; 
