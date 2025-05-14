export interface CurrencyData {
  code: string;
  name: string;
  rate: number;
  timestamp: string;
  status: "up" | "down" | "neutral";
}

export interface ExchangeRates {
  USD: CurrencyData;
  EUR: CurrencyData;
  BTC: CurrencyData;
}
