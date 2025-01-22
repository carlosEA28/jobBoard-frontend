import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
