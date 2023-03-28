export const theme = {
  palette: {
    primary: {
      main: "#ffd600",
      contrastText: "#8b0000",
    },
    secondary: {
      main: "#e55",
    },
    background: {
      main: "#c5e1a5",
      paper: "#fff8e1",
      light: '#e8f0d9'
    },
    error: {
      main: "#dc3545",
    },
    warning: {
      main: "#ffc107",
    },
    info: {
      main: "#17a2b8",
    },
    success: {
      main: "#28a745",
    },
    text: {
      primary: "#213547",
      secondary: "#666",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    lineHeight: 1.5,
  },
};

export const globalStyles = `
    :root {
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;
  
      color-scheme: light dark;
      color: rgba(255, 255, 255, 0.87);
      background-color: #242424;
  
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }
    
    html {
        touch-action: pan-y;
    }
  
    body {
        margin: 0;
        place-items: center;
        overflow-x: hidden;
    }
  
    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.primary.contrastText};
      cursor: pointer;
      transition: border-color 0.25s;
    }
  
    button:hover {
      border-color: ${({ theme }) => theme.palette.primary.dark};
    }
  
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  
    @media (prefers-color-scheme: light) {
      :root {
        color: #213547;
        background-color: #ffffff;
      }
      a:hover {
        color: ${({ theme }) => theme.palette.primary.light};
      }
      button {
        background-color: ${({ theme }) => theme.palette.primary.light};
        color: ${({ theme }) => theme.palette.primary.contrastText};
      }
    }
  `;
