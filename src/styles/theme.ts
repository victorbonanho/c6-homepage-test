// src/styles/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark", // Modo escuro ativado
    primary: {
      main: "#ffffff", // Branco como cor primária
      contrastText: "#000000", // Texto preto sobre elementos brancos
    },
    secondary: {
      main: "#9e9e9e", // Cinza médio
      contrastText: "#ffffff",
    },
    background: {
      default: "#121212", // Fundo escuro profundo
      paper: "#1e1e1e", // Superfícies de componentes
    },
    text: {
      primary: "#ffffff", // Texto branco
      secondary: "#bdbdbd", // Texto cinza claro
      disabled: "#616161", // Texto cinza escuro
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    divider: "#424242", // Divisores mais escuros
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
      letterSpacing: "-0.015em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
      letterSpacing: "-0.005em",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      color: "#e0e0e0", // Cinza claro para texto normal
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          minWidth: 120,
          padding: "8px 24px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#f5f5f5", // Cinza claro no hover
          },
        },
        outlined: {
          borderColor: "#616161", // Borda cinza
          "&:hover": {
            borderColor: "#9e9e9e",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e",
          borderBottom: "1px solid #424242", // Borda sutil
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e",
          border: "1px solid #424242", // Borda sutil
        },
      },
    },
  },
});

export default theme;
