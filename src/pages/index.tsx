import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/Sections/HeroSection";
import { Box } from "@mui/material";
import FeatureSection from "../components/Sections/FeatureSection";
import CotationSection from "../components/Sections/CotationSection";
import { CurrencyData } from "../types/currency";

interface HomePageProps {
  currencyRates: {
    USD: CurrencyData;
    EUR: CurrencyData;
    BTC: CurrencyData;
  };
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const res = await fetch(
      "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"
    );
    if (!res.ok) {
      throw new Error("Falha ao buscar dados da API externa");
    }
    const data = await res.json();

    const getStatus = (varBid: string): "up" | "down" | "neutral" => {
      const value = parseFloat(varBid);
      if (isNaN(value)) return "neutral";
      if (value > 0) return "up";
      if (value < 0) return "down";
      return "neutral";
    };

    const usdBrl = data.USDBRL;
    const eurBrl = data.EURBRL;
    const btcBrl = data.BTCBRL;

    return {
      props: {
        currencyRates: {
          USD: {
            code: usdBrl.code,
            name: usdBrl.name,
            rate: parseFloat(usdBrl.bid),
            timestamp: usdBrl.create_date,
            status: getStatus(usdBrl.varBid),
          },
          EUR: {
            code: eurBrl.code,
            name: eurBrl.name,
            rate: parseFloat(eurBrl.bid),
            timestamp: eurBrl.create_date,
            status: getStatus(eurBrl.varBid),
          },
          BTC: {
            code: btcBrl.code,
            name: btcBrl.name,
            rate: parseFloat(btcBrl.bid),
            timestamp: btcBrl.create_date,
            status: getStatus(btcBrl.varBid),
          },
        },
      },
      revalidate: 180, // Revalida a cada 3 minutos
    };
  } catch (error) {
    console.error("Erro ao obter dados de câmbio:", error);
    return {
      props: {
        currencyRates: {
          USD: {
            code: "USD",
            name: "Dólar Americano",
            rate: 0,
            timestamp: "",
            status: "neutral",
          },
          EUR: {
            code: "EUR",
            name: "Euro",
            rate: 0,
            timestamp: "",
            status: "neutral",
          },
          BTC: {
            code: "BTC",
            name: "Bitcoin",
            rate: 0,
            timestamp: "",
            status: "neutral",
          },
        },
      },
    };
  }
};

export default function Home({ currencyRates }: HomePageProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Head>
        <title>Real Timce Currencies - Moedas Globais em Tempo Real</title>
        <meta name="description" content="Moedas Globais em Tempo Real" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Box component="main">
        <Box id="hero-section" component="section">
          <HeroSection />
        </Box>
        <Box id="features-section" component="section">
          <FeatureSection />
        </Box>
        <Box id="cotation-section" component="section">
          <CotationSection currencyRates={currencyRates} />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
