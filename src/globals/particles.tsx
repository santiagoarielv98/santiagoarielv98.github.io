import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

export const commonOptions: ISourceOptions = {
  preset: "snow",
  fpsLimit: 120,
  interactivity: {
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#7b1fa2",
    },
    move: {
      direction: MoveDirection.bottomRight,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: true,
      speed: 2,
      straight: false,
    },
    opacity: {
      value: 0.75,
    },
    shape: {
      type: "circle",
    },
    shadow: {
      blur: 5,
      color: {
        value: "#7b1fa2",
      },
      enable: true,
    },
    detectRetina: true,
  },
};
