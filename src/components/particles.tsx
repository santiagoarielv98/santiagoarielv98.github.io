"use client";

import { commonOptions } from "@/globals/particles";
import { type ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React from "react";

export const LoadParticles = () => {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const backgroundOptions: ISourceOptions = React.useMemo(
    () => ({
      ...commonOptions,
      particles: {
        ...commonOptions.particles,
        number: {
          density: {
            enable: true,
          },
          value: 40,
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    }),
    [],
  );

  const frontOptions: ISourceOptions = React.useMemo(
    () => ({
      ...commonOptions,
      particles: {
        ...commonOptions.particles,
        number: {
          density: {
            enable: true,
          },
          value: 5,
        },

        size: {
          value: { min: 3, max: 5 },
        },
      },
    }),
    [],
  );

  if (init) {
    return (
      <div>
        <Particles id="tsparticles-background" options={backgroundOptions} />
        <div className="relative z-10" style={{ zIndex: 20 }}>
          <Particles id="tsparticles-front" options={frontOptions} />
        </div>
      </div>
    );
  }

  return <></>;
};
