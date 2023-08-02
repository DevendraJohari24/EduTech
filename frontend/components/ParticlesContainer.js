import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";




const ParticlesContainer = () => {

  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fullScreen: {
        enable: true
      },
      background: {
        color: {
          value: ""
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse'
          },
          onHover: {
            enable: true,
            mode: 'connect',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 90
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          }
        }
      },
      style:{
        // position: "absolute",
      },
      particles: {
        color: {
          value: '#ff4057',
          // value: [
          //   '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
          //   '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
          //   '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
          //   '#FF5722'
          // ]
        },
        links: {
          color: '#131424',
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          // outModes: {
          //   default: 'bounce',
          // },
          out_mode: 'bounce',
          random: false,
          speed: 1,
          straight: false,
          attract: {
            enable: true
          }
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          // type: ['star', 'polygon', 'circle', 'triangle'],
          type: 'circle'
        },
        size: {
          value: {min: 1, max: 5},
          anim: {
            enable: true,
            speed: 10,
            size_min: 0.1,
            sync: true
          }
        },
        
      },
      detectRetina: true,
    }}
    />
  );
};

export default ParticlesContainer;
