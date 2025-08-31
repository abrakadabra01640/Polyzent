import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

const PolyzenIndustrialLogo = ({
  width = 450,
  height = 120,
  autoPlay = true,
  loop = false,
  onComplete,
  onPhaseComplete,
  className = '',
  theme = 'light',
  showParticles = true,
  interactiveHover = true
}) => {
  const logoRef = useRef(null);
  const svgRef = useRef(null);
  const timelineRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);

  // Animation element refs
  const machineryRef = useRef(null);
  const polymerFlowRef = useRef(null);
  const precisionElementsRef = useRef(null);
  const brandTextRef = useRef(null);
  const microAnimationsRef = useRef(null);

  useEffect(() => {
    if (logoRef.current && autoPlay) {
      initializeAnimation();
    }

    // Cleanup on unmount
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [autoPlay]);

  const initializeAnimation = () => {
    if (!svgRef.current) return;

    // Create master timeline
    timelineRef.current = gsap.timeline({
      paused: !autoPlay,
      repeat: loop ? -1 : 0,
      onComplete: () => {
        setIsAnimating(false);
        onComplete?.();
      },
      onStart: () => {
        setIsAnimating(true);
      }
    });

    // Set initial states for all elements
    gsap.set('.machinery-elements', { opacity: 0, scale: 0.8, transformOrigin: 'center' });
    gsap.set('.polymer-elements', { opacity: 0, x: -50 });
    gsap.set('.precision-elements', { opacity: 0, scale: 0.5, transformOrigin: 'center' });
    gsap.set('.brand-text', { opacity: 1 }); // Brand text container visible
    gsap.set('.micro-animations', { opacity: 0 });

    // Individual element initial states
    gsap.set('.power-indicator', { opacity: 0, scale: 0 });
    gsap.set('.heating-element', { opacity: 0, scaleY: 0 });
    gsap.set('.pressure-gauge', { rotation: -90, transformOrigin: 'center' });
    gsap.set('.belt-segment', { x: -20, opacity: 0 });

    // Brand text element initial states
    gsap.set('.company-name', { opacity: 0, y: 20, scale: 0.8 });
    gsap.set('.company-subtitle', { opacity: 0, y: 10 });
    gsap.set('.accent-line', { strokeDasharray: '150 150', strokeDashoffset: 150 });
    gsap.set('.left-gear', { opacity: 0, scale: 0.5, rotation: 0 });
    gsap.set('.right-gear', { opacity: 0, scale: 0.5, rotation: 0 });
    gsap.set('.industrial-badge', { opacity: 0, x: 20 });
    gsap.set('.quality-mark', { opacity: 0, scale: 0.5, rotation: 0 });

    // Phase 1: Industrial Startup (0-0.8s)
    buildPhase1IndustrialStartup();

    // Phase 2: Material Processing (0.8-1.6s)
    buildPhase2MaterialProcessing();

    // Phase 3: Precision Manufacturing (1.6-2.4s)
    buildPhase3PrecisionManufacturing();

    // Phase 4: Brand Reveal (2.4-3.2s)
    buildPhase4BrandReveal();

    // Phase 5: Premium Finish (3.2s+)
    buildPhase5PremiumFinish();

    // Start the animation if autoPlay is enabled
    if (autoPlay) {
      timelineRef.current.play();
    }

    console.log('Polyzen Industrial Logo initialized with complete animation timeline');
  };

  const buildPhase1IndustrialStartup = () => {
    const tl = timelineRef.current;

    // Phase 1 callback
    tl.call(() => {
      setCurrentPhase(1);
      onPhaseComplete?.(1, 'Industrial Startup');
    });

    // 1. Power up machinery with dramatic entrance
    tl.to('.machinery-elements', {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'back.out(1.7)',
      transformOrigin: 'center'
    }, 0);

    // 2. Power indicators light up in sequence
    tl.to('.power-indicator', {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: 'back.out(2)',
      stagger: 0.1,
      transformOrigin: 'center'
    }, 0.2);

    // 3. Heating elements activate with scale animation
    tl.to('.heating-element', {
      opacity: 1,
      scaleY: 1,
      duration: 0.4,
      ease: 'power2.out',
      stagger: 0.05,
      transformOrigin: 'bottom'
    }, 0.4);

    // 4. Pressure gauge spins to active position
    tl.to('.pressure-gauge', {
      rotation: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
      transformOrigin: 'center'
    }, 0.5);

    // 5. Conveyor belt segments appear
    tl.to('.belt-segment', {
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
      stagger: 0.05
    }, 0.6);

    // 6. System startup complete - add subtle pulsing to active elements
    tl.to('.power-indicator', {
      scale: 1.2,
      duration: 0.2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1,
      stagger: 0.1
    }, 0.7);

    // 7. Industrial startup sound effect simulation (visual pulse)
    tl.to('.extruder', {
      scale: 1.05,
      duration: 0.1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 3
    }, 0.75);
  };

  const buildPhase2MaterialProcessing = () => {
    const tl = timelineRef.current;

    // Phase 2 callback
    tl.call(() => {
      setCurrentPhase(2);
      onPhaseComplete?.(2, 'Material Processing');
    }, null, null, 0.8);

    // 1. Polymer flow elements fade in
    tl.to('.polymer-elements', {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, 0.8);

    // 2. Polymer pellets flow along the path
    tl.to('.pellet', {
      x: '+=50',
      duration: 0.6,
      ease: 'power2.inOut',
      stagger: 0.08,
      repeat: 1,
      yoyo: true
    }, 0.9);

    // 3. Heating coils activate with glow effect
    tl.to('.heating-coil', {
      stroke: '#ff6b35',
      strokeWidth: 4,
      duration: 0.3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 2
    }, 1.0);

    // 4. Steam effects appear
    tl.to('.steam', {
      opacity: 1,
      y: -10,
      duration: 0.4,
      ease: 'power2.out',
      stagger: 0.1
    }, 1.1);

    // 5. Main flow pipe pulses with material
    tl.to('.main-flow', {
      strokeWidth: 8,
      duration: 0.2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 3
    }, 1.2);

    // 6. Secondary flow shows heated material
    tl.to('.secondary-flow', {
      stroke: '#ff6b35',
      strokeWidth: 6,
      duration: 0.3,
      ease: 'power2.inOut'
    }, 1.3);

    // 7. Heating elements intensify
    tl.to('.heating-element', {
      fill: '#ff6b35',
      scaleY: 1.2,
      duration: 0.2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1,
      stagger: 0.05
    }, 1.4);

    // 8. Material transformation complete - steam dissipates
    tl.to('.steam', {
      opacity: 0.3,
      y: -20,
      duration: 0.3,
      ease: 'power2.out'
    }, 1.5);
  };

  const buildPhase3PrecisionManufacturing = () => {
    const tl = timelineRef.current;

    // Phase 3 callback
    tl.call(() => {
      setCurrentPhase(3);
      onPhaseComplete?.(3, 'Precision Manufacturing');
    }, null, null, 1.6);

    // 1. Precision elements snap into view
    tl.to('.precision-elements', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'back.out(1.7)',
      transformOrigin: 'center'
    }, 1.6);

    // 2. Crosshair targeting animation
    tl.to('.crosshair-outer', {
      rotation: 360,
      duration: 0.6,
      ease: 'power2.inOut',
      transformOrigin: 'center'
    }, 1.7);

    tl.to('.crosshair-inner', {
      rotation: -180,
      duration: 0.6,
      ease: 'power2.inOut',
      transformOrigin: 'center'
    }, 1.7);

    // 3. Crosshair lines pulse for precision
    tl.to('.crosshair-lines', {
      strokeWidth: 3,
      duration: 0.2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 2
    }, 1.8);

    // 4. Measurement tools activate
    tl.to('.measurement-tool', {
      scaleX: 1.2,
      duration: 0.2,
      ease: 'elastic.out(1, 0.5)',
      stagger: 0.1,
      transformOrigin: 'left'
    }, 1.9);

    // 5. Quality checks appear with satisfaction
    tl.to('.check-circle', {
      scale: 1.3,
      duration: 0.3,
      ease: 'back.out(2)',
      stagger: 0.1,
      transformOrigin: 'center'
    }, 2.0);

    tl.to('.checkmark', {
      strokeDasharray: '10 10',
      strokeDashoffset: 0,
      duration: 0.4,
      ease: 'power2.out',
      stagger: 0.1
    }, 2.1);

    // 6. LED indicators light up in sequence
    tl.to('.led-indicator', {
      fill: '#22c55e',
      scale: 1.2,
      duration: 0.2,
      ease: 'power2.out',
      stagger: 0.1,
      transformOrigin: 'center'
    }, 2.2);

    // 7. Digital display shows quality percentage
    tl.to('.quality-station rect:last-child', {
      fill: '#22c55e',
      duration: 0.3,
      ease: 'power2.out'
    }, 2.3);

    // 8. Final precision snap - everything locks into perfect position
    tl.to('.precision-elements', {
      scale: 1.05,
      duration: 0.1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1
    }, 2.35);
  };

  const buildPhase4BrandReveal = () => {
    const tl = timelineRef.current;

    // Phase 4 callback
    tl.call(() => {
      setCurrentPhase(4);
      onPhaseComplete?.(4, 'Brand Reveal');
    }, null, null, 2.4);

    // 1. Accent line draws in dramatically
    tl.fromTo('.accent-line',
      { strokeDasharray: '150 150', strokeDashoffset: 150 },
      {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, 2.4);

    // 2. Main company name emerges with authority
    tl.to('.company-name', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: 'back.out(1.2)',
      transformOrigin: 'center'
    }, 2.5);

    // 3. Company name gets dramatic emphasis
    tl.to('.company-name', {
      scale: 1.1,
      duration: 0.2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1
    }, 2.8);

    // 4. Subtitle appears with professional confidence
    tl.to('.company-subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, 2.9);

    // 5. Side gears rotate into position
    tl.to('.left-gear', {
      rotation: 180,
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.5)',
      transformOrigin: 'center'
    }, 2.95);

    tl.to('.right-gear', {
      rotation: -180,
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.5)',
      transformOrigin: 'center'
    }, 2.95);

    // 6. Industrial badge slides in
    tl.to('.industrial-badge', {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: 'back.out(1.7)'
    }, 3.0);

    // 7. Quality mark appears with certification authority
    tl.to('.quality-mark', {
      opacity: 1,
      scale: 1,
      rotation: 360,
      duration: 0.5,
      ease: 'back.out(1.5)',
      transformOrigin: 'center'
    }, 3.05);

    // 8. Final brand authority pulse
    tl.to('.brand-text', {
      scale: 1.02,
      duration: 0.15,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1
    }, 3.15);
  };

  const buildPhase5PremiumFinish = () => {
    const tl = timelineRef.current;

    // Phase 5 callback
    tl.call(() => {
      setCurrentPhase(5);
      onPhaseComplete?.(5, 'Premium Finish');
    }, null, null, 3.2);

    // Clean finish - no ongoing micro animations for professional appearance
    // Animation completes and holds final state
  };

  const playAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.play();
    }
  };

  const pauseAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.pause();
    }
  };

  const restartAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.restart();
    }
  };

  return (
    <div
      ref={logoRef}
      className={`polyzen-industrial-logo ${className} theme-${theme}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        maxWidth: '100%',
        position: 'relative'
      }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 450 86"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Polyzent Trading Inc animated industrial logo"
        style={{
          overflow: 'visible',
          background: 'transparent'
        }}
      >
        {/* Definitions for gradients and filters */}
        <defs>
          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="textShadow">
            <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#000000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Background elements */}
        <rect width="450" height="86" fill="transparent" />

        {/* Brand text group */}
        <g className="brand-text" ref={brandTextRef}>
          {/* Main company name - Poppins Bold */}
          <text
            x="270"
            y="40"
            textAnchor="middle"
            fill="url(#textGradient)"
            fontSize="60"
            fontWeight="700"
            fontFamily="Poppins, sans-serif"
            letterSpacing="px"
            className="company-name"
          >
            POLYZENT
          </text>

          {/* Clean subtitle */}
          <text
            x="220"
            y="65"
            textAnchor="middle"
            fill="#fbbf24"
            fontSize="14"
            fontWeight="500"
            fontFamily="Poppins, sans-serif"
            letterSpacing="px"
            className="company-subtitle"
          >
            TRADING INC
          </text>
        </g>

        {/* Enhanced industrial accent */}
        <g className="machinery-elements" ref={machineryRef}>
          {/* Industrial bar */}
          <rect x="50" y="80" width="350" height="4" fill="url(#orangeGradient)" rx="2" className="industrial-bar" />

          {/* Enhanced power indicators */}
          <circle cx="70" cy="82" r="4" fill="rgba(245,158,11,0.3)" className="power-indicator-glow" />
          <circle cx="70" cy="82" r="3" fill="#f59e0b" className="power-indicator" />
          <circle cx="70" cy="82" r="1.5" fill="#fbbf24" className="power-indicator-core" />

          <circle cx="380" cy="82" r="4" fill="rgba(34,197,94,0.3)" className="power-indicator-glow" />
          <circle cx="380" cy="82" r="3" fill="#22c55e" className="power-indicator" />
          <circle cx="380" cy="82" r="1.5" fill="#4ade80" className="power-indicator-core" />
        </g>

        {/* Enhanced flow elements */}
        <g className="polymer-elements" ref={polymerFlowRef}>
          {/* Flow line with gradient */}
          <line x1="80" y1="82" x2="370" y2="82" stroke="url(#yellowGradient)" strokeWidth="3" className="main-flow" />
          <line x1="80" y1="82" x2="370" y2="82" stroke="#fbbf24" strokeWidth="1" opacity="0.8" className="main-flow-highlight" />
        </g>

        {/* Enhanced precision elements */}
        <g className="precision-elements" ref={precisionElementsRef}>
          {/* Quality indicators with glow */}
          <circle cx="150" cy="82" r="3" fill="rgba(34,197,94,0.3)" className="quality-dot-glow" />
          <circle cx="150" cy="82" r="2" fill="#22c55e" className="quality-dot" />

          <circle cx="225" cy="82" r="3" fill="rgba(34,197,94,0.3)" className="quality-dot-glow" />
          <circle cx="225" cy="82" r="2" fill="#22c55e" className="quality-dot" />

          <circle cx="300" cy="82" r="3" fill="rgba(34,197,94,0.3)" className="quality-dot-glow" />
          <circle cx="300" cy="82" r="2" fill="#22c55e" className="quality-dot" />
        </g>

        {/* Micro animations group */}
        <g className="micro-animations" ref={microAnimationsRef}>
          {/* Reserved for subtle ongoing effects */}
        </g>
      </svg>


    </div>
  );
};

// PropTypes for better development experience
PolyzenIndustrialLogo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  onComplete: PropTypes.func,
  onPhaseComplete: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  showParticles: PropTypes.bool,
  interactiveHover: PropTypes.bool
};

export default PolyzenIndustrialLogo;