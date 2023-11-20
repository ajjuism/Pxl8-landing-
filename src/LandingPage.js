import React from 'react';
import './LandingPage.css'; // Importing the CSS file

const LandingPage = () => {

const redirectToUrl = (url) => {
    return () => {
        window.open(url, '_blank'); // Opens in a new tab
    };
      };
  return (
    <div className="landing-container">
    <div className="svg-wrapper">
      <svg className='border' width="1400" height="300" viewBox="0 0 1400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* List all rectangles here, adding a unique class to each */}
        <rect className="interactive-rect" x="1200" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="1300" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="1200" y="100" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="1100" y="100" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="1200" y="200" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="1100" y="200" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="1300" y="100" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="800" y="200" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="900" y="200" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="800" y="100" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="800" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="500" y="100" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="400" y="200" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="600" y="200" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="400" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="600" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" y="200" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" y="100" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="100" y="100" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="100" width="100" height="100" fill="black"/>
        <rect className="interactive-rect" x="200" y="100" width="100" height="100" fill="black"/>
        <rect className="interactive-rect"  x="200" width="100" height="100" fill="black"/>
      </svg>
      </div>
      <div className="button-container">
        <div className="button-outline">
        <button 
          className="landing-button" 
          onClick={redirectToUrl('https://www.npmjs.com/package/react-tilt')}>
          Projects
        </button>
        </div>
        <div className="button-outline">
        <button 
          className="landing-button" 
          onClick={redirectToUrl('https://www.npmjs.com/package/react-tilt')}>
          Projects
        </button>
        </div>
        <div className="button-outline">
        <button 
          className="landing-button" 
          onClick={redirectToUrl('https://www.npmjs.com/package/react-tilt')}>
          Projects
        </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
