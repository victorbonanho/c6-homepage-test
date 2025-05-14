import { Box, Typography, Grid, useTheme } from "@mui/material";
import {
  Equalizer,
  Public,
  TrendingUp,
  AccessTime,
  ShowChart,
  Notifications,
} from "@mui/icons-material";

const FeatureSection = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <Equalizer fontSize="large" color="primary" />,
      title: "Dados Precisos",
      description: "Informações atualizadas das moedas mundiais",
    },
    {
      icon: <Public fontSize="large" color="primary" />,
      title: "Cobertura Global",
      description: "Principais moedas dos países e instituições",
    },
    {
      icon: <TrendingUp fontSize="large" color="primary" />,
      title: "Performance Histórica",
      description: "Evolução das moedas em todo o período",
    },
    {
      icon: <AccessTime fontSize="large" color="primary" />,
      title: "Tempo Real",
      description: "Atualizações constantes durante o horário de mercado",
    },
    {
      icon: <ShowChart fontSize="large" color="primary" />,
      title: "Visualização Clara",
      description: "Gráficos intuitivos para análise rápida",
    },
    {
      icon: <Notifications fontSize="large" color="primary" />,
      title: "Alertas Personalizados",
      description: "Configure notificações para variações importantes",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: 6,
          color: theme.palette.text.primary,
        }}
      >
        Funcionalidades da Plataforma
      </Typography>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                p: 3,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                  transform: "translateY(-4px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  maxWidth: "300px",
                  mx: "auto",
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureSection;
