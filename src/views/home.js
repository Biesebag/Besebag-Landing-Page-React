import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Besebag Landing Page</title>
        <meta property="og:title" content="Besebag Landing Page" />
      </Helmet>
      <div className="home-about-me">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading">About Me</h1>
            <span className="home-text Section-Text">
              <span className="Section-Text home-text01">
                My name is Brandon Esebag.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                I am a currently studying Electrical Engineering at
                the California State Polytechnic University, Pomona. I am
                expected to graduate with a Bachelor&apos;s in Engineering in
                May of 2025.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>My current GPA is 3.63 (excluding transfer credits).</span>
            </span>
            <div className="home-cta-btn-container"></div>
          </div>
          <img alt="image" src="/self-image-1500w.jpg" className="home-image" />
        </div>
      </div>
      <div className="home-skills-and-experience">
        <div className="home-max-content-width-container">
          <div className="home-heading-container">
            <h1 className="Section-Heading home-text06">Technical Skills</h1>
          </div>
          <div className="home-content-container">
            <div className="home-circuit-analysis">
              <h2 className="Card-Heading home-text07">Circuit Analysis</h2>
              <div className="home-container01">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text08 Card-Text">
                  DC Circuit Analysis.
                </span>
              </div>
              <div className="home-container02">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text09 Card-Text">
                  Transient Analysis of RCL Circuits in the Time Domain.
                </span>
              </div>
              <div className="home-container03">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text10 Card-Text">
                  Phaser Analysis of AC Circuits.
                </span>
              </div>
              <div className="home-container04">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text11 Card-Text">
                  Microelectronic Circuit Analysis. 
                </span>
              </div>
              <div className="home-container05">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text12">
                  <span>
                    Amplifier Analysis in the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>s-Domain.</span>
                </span>
              </div>
            </div>
            <div className="home-signal-processing">
              <h2 className="Card-Heading home-text16">Signal Processing</h2>
              <div className="home-container06">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text17 Card-Text">
                  Frequency Domain Analysis of 1D and 2D signals.
                </span>
              </div>
              <div className="home-container07">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text18 Card-Text">
                  Discretization of signals.
                </span>
              </div>
              <div className="home-container08">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text19 Card-Text">
                  Frequency Domain Analysis of 1D and 2D signals.
                </span>
              </div>
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text20 Card-Text">
                  Audio and Image Processing using Frequency Do
                </span>
              </div>
              <div className="home-container10">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text21">
                  Audio and Image Processing using Kernel Convolutions.
                </span>
              </div>
            </div>
            <div className="home-logic-design-and-code">
              <h2 className="Card-Heading home-text22">
                Logic Design and Code
              </h2>
              <div className="home-container11">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text23 Card-Text">
                  Knowledge of Boolean Algebra and Symbolic Logic.
                </span>
              </div>
              <div className="home-container12">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text24 Card-Text">
                  Digital Logic Simplification and Design.
                </span>
              </div>
              <div className="home-container13">
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text25 Card-Text">
                  Digital Logic Analysis Troubleshooting.
                </span>
              </div>
              <div className="home-container14">
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text26 Card-Text">
                  Experience Programming with C++, C#, HTML, CSS, MATLAB, and
                  Verilog. 
                </span>
              </div>
            </div>
            <div className="home-software-tools">
              <h2 className="Card-Heading home-software-tools1">
                Software Tools
              </h2>
              <div className="home-container15">
                <svg viewBox="0 0 1024 1024" className="home-icon28">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text27 Card-Text">
                  MATLAB and Simulink
                </span>
              </div>
              <div className="home-container16">
                <svg viewBox="0 0 1024 1024" className="home-icon30">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text28 Card-Text">
                  PSpice and LTspice
                </span>
              </div>
              <div className="home-container17">
                <svg viewBox="0 0 1024 1024" className="home-icon32">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text29 Card-Text">Altium Designer</span>
              </div>
              <div className="home-container18">
                <svg viewBox="0 0 1024 1024" className="home-icon34">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text30 Card-Text">
                  LaTeX via Overleaf
                </span>
              </div>
              <div className="home-container19">
                <svg viewBox="0 0 1024 1024" className="home-icon36">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text31 Card-Text">
                  GitHub and Vercel (eg this website)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
