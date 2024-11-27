import type { Config } from "tailwindcss";

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
      backgroundColor: {
        "box-bg": "#221f1f",
        'message-bg-success': '#d4edda',
        'message-bg-error': 'd4edda'
      },
      maxWidth: {
        "150px": "150px",
        'insert': '500px'
      },
      margin: {
        "footer-logo": "-2.5rem"
      },
      padding: {
        "copyright": '10px'
      },
      height: {
        "social-item": "30px"
      },
      width: {
        "social-item": "30px",
        "nav-header": "90%"
      },
      borderRadius: {
        "social-item": "50%",
        'button-insert': '4px'
      },
      textColor: {
        "main-color": "#2974f7",
      },
      colors: {
        'text-color': '#ffffff',
        'main-color': '#2974f7',
        'drop-color': '#aaaaaa',
        'select-color': '#aaaaaa',
        'message-color-success': '#155724',
        'message-border-success': '#c3e6cb',
        'message-color-error': '#721c24',
        'message-border-error': '#f5c6cb'
      },
      fontSize: {
        'main-size': '16px',
        'logo-footer': '25px'
      },
      borderColor: {
        "body-bg": "#181616",
        'insert-border': '#ffffff'
      },
      gap: {
        'insert': '50px'
      },
      borderWidth: {
        'insert': '1px'
      }
    },
  },
  plugins: [],
};
export default config;
