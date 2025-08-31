import React, { useState } from 'react';
import PolyzenIndustrialLogo from './PolyzenIndustrialLogo';

const PolyzenLogoDemo = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handlePhaseComplete = (phase, phaseName) => {
    console.log(`Phase ${phase} completed: ${phaseName}`);
    setCurrentPhase(phase);
  };

  const handleAnimationComplete = () => {
    console.log('Animation sequence complete!');
    setAnimationComplete(true);
  };

  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ 
        marginBottom: '40px', 
        color: '#1e293b',
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        Polyzen Industrial Animated Logo
      </h1>
      
      <div style={{ 
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <PolyzenIndustrialLogo
          width={450}
          height={120}
          autoPlay={true}
          onPhaseComplete={handlePhaseComplete}
          onComplete={handleAnimationComplete}
          showParticles={true}
          interactiveHover={true}
        />
      </div>

      <div style={{ 
        textAlign: 'center',
        color: '#374151',
        fontSize: '14px'
      }}>
        <p><strong>Current Phase:</strong> {currentPhase}/5</p>
        <p><strong>Status:</strong> {animationComplete ? 'Complete' : 'Animating...'}</p>
        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Manufacturing Process Story: Industrial Startup → Material Processing → Precision Manufacturing → Brand Reveal → Premium Finish
        </p>
      </div>

      {/* Dark theme example */}
      <div style={{ 
        backgroundColor: '#1e293b',
        padding: '40px',
        borderRadius: '12px',
        marginTop: '40px'
      }}>
        <h3 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>
          Dark Theme Variant
        </h3>
        <PolyzenIndustrialLogo
          width={400}
          height={100}
          autoPlay={true}
          theme="dark"
          showParticles={true}
        />
      </div>
    </div>
  );
};

export default PolyzenLogoDemo;