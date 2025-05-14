import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        bgcolor: "black",
        color: "white",
        py: 4,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            width: "90%",
            gap: "20px",
          }}
        >
          <Box sx={{ mb: { xs: 2, md: 0 } }}>
            <Typography variant="h6">REAL TIME CURRENCIES</Typography>
            <Typography variant="body2">
              Transformando ideias em realidade
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Links Rápidos
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <MuiLink
                component={Link}
                href="#"
                color="inherit"
                underline="hover"
              >
                Início
              </MuiLink>
              <MuiLink
                component={Link}
                href="#features-section"
                color="inherit"
                underline="hover"
              >
                Como Funciona
              </MuiLink>
              <MuiLink
                component={Link}
                href="#cotation-section"
                color="inherit"
                underline="hover"
              >
                Cotações
              </MuiLink>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2">victbonanho@gmail.com</Typography>
            <Typography variant="body2">(11) 97561-6661</Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Real Time Currencies. Todos os direitos
            reservados.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
