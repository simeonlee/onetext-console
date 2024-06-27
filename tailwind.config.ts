import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, config, theme }) {
      const sides = {
        t: "Top",
        r: "Right",
        b: "Bottom",
        l: "Left",
      };

      const createHighResBorderClass = (abbr: any, side: any) => {
        const className = `.ot-border${abbr ? `-${abbr}` : ""}`;
        const borderSide = side ? side : "";

        return {
          [className]: {
            [`border${borderSide}Width`]: "1px",
            borderColor: "#E9F1FF",
            borderStyle: "solid",
            [`@media (min-resolution: 192dpi), (min-resolution: 2dppx)`]: {
              [`border${borderSide}Width`]: "0.5px",
              borderColor: "#D4E4FF",
            },
          },
        };
      };

      const componentStyles = {};

      // Create high resolution border class for all sides
      Object.assign(componentStyles, createHighResBorderClass(null, null));

      // Create high resolution border classes for individual sides
      for (const [abbr, side] of Object.entries(sides)) {
        Object.assign(componentStyles, createHighResBorderClass(abbr, side));
      }

      addComponents(componentStyles);
    }),
  ],
};
export default config;
