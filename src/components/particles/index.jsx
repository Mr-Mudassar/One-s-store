import useStore from "../../hooks/useStore";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

// const ParticlesComponent = (props) => {
const ParticlesComponent = React.memo((props) => {
  const [init, setInit] = useState(false);
  const appMode = useStore((state) => state.appMode);
  const [linksColor, setLinksColor] = useState("#FF2C2C");
  const appThemeColor = useStore((state) => state.appThemeColor);

  useEffect(() => {
    const colorMapping = {
      redish: "#FF2C2C",
      bluish: "#2C9DFF",
      yellowish: "#FFD32C",
      orangish: "#FFA52C",
      greenish: "#2CFF5A",
      violetish: "#8A2CFF",
    };

    if (colorMapping[appThemeColor]) {
      setLinksColor(colorMapping[appThemeColor]);
    }
  }, [appThemeColor]);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options =
    //    useMemo(
    //     () => (
    {
      background: {},
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: appMode === "dark" ? "#FFFFFF" : "#454545",
        },
        links: {
          color: linksColor,
          distance: 150,
          enable: true,
          opacity: 0.9,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };
  // ),
  //     []
  //   );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
});

export default ParticlesComponent;