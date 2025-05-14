import { Box, Typography, Button } from "@mui/material";
import { handleScrollTo } from "../../../utils/scrollUtils";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(/images/global_market.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background:
            "linear-gradient(rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.87))",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
          width: "100%",
          maxWidth: "90%",
          px: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2.5rem", md: "3rem" },
            mb: 3,
            width: "100%",
          }}
        >
          Moedas Globais em Tempo Real
        </Typography>

        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 4,
            fontSize: { xs: "1.1rem", md: "1.5rem" },
            width: "100%",
            maxWidth: "600px",
          }}
        >
          Acompanhe as principais moedas do mundo e fique por dentro da economia
          mundial
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: 500,
            fontStyle: "normal",
          }}
          onClick={() => handleScrollTo("cotation-section")}
        >
          Ver Cotações
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
