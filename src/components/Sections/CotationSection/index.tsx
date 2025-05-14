import React from "react";
import { Box, Typography, Paper, Stack, useTheme } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EuroIcon from "@mui/icons-material/Euro";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import { CurrencyData } from "../../../types/currency";
import { formatCurrency } from "../../../utils/formatCurrency";

interface CotationSectionProps {
  currencyRates: {
    USD: CurrencyData;
    EUR: CurrencyData;
    BTC: CurrencyData;
  };
}

const CotationSection: React.FC<CotationSectionProps> = ({ currencyRates }) => {
  const theme = useTheme();

  const getCurrencyIcon = (code: String) => {
    switch (code) {
      case "USD":
        return <AttachMoneyIcon sx={{ fontSize: 40 }} />;
      case "EUR":
        return <EuroIcon sx={{ fontSize: 40 }} />;
      default:
        return <CurrencyBitcoinIcon sx={{ fontSize: 40 }} />;
    }
  };

  const getStatusIcon = (status: "up" | "down" | "neutral") => {
    switch (status) {
      case "up":
        return (
          <KeyboardDoubleArrowUpIcon sx={{ fontSize: 60, color: "green" }} />
        );

      case "down":
        return (
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: 60, color: "red" }} />
        );
      default:
        return <LinearScaleIcon sx={{ fontSize: 60 }} />;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        p: 2,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: theme.palette.background.default,
        pt: 10,
        pb: 10,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Cotações Atuais
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={3}
        justifyContent="center"
        alignItems="center"
        width="90%"
      >
        {Object.entries(currencyRates).map(
          ([key, { name, rate, code, status }]) => (
            <Paper
              key={key}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: { xs: "100%", sm: "33%" },
                borderRadius: 2,
                boxShadow: 3,
                paddingY: 4,
              }}
            >
              <Box>
                {getCurrencyIcon(code)}
                <Typography variant="h6">{name}</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {formatCurrency(rate)}
                </Typography>
              </Box>
              {getStatusIcon(status)}
            </Paper>
          )
        )}
      </Stack>
    </Box>
  );
};

export default CotationSection;
