import { Meta, StoryObj } from "@storybook/react";
import { CurrencyData } from "../../../types/currency";
import CotationSection from ".";

const meta: Meta<typeof CotationSection> = {
  title: "Components/CotationSection",
  component: CotationSection,
};

export default meta;

type Story = StoryObj<typeof CotationSection>;

const mockCurrencyRates: {
  USD: CurrencyData;
  EUR: CurrencyData;
  BTC: CurrencyData;
} = {
  USD: {
    name: "Dólar Americano",
    code: "USD",
    rate: 5.12,
    status: "up",
    timestamp: Date.now().toString(),
  },
  EUR: {
    name: "Euro",
    code: "EUR",
    rate: 5.45,
    status: "down",
    timestamp: Date.now().toString(),
  },
  BTC: {
    name: "Bitcoin",
    code: "BTC",
    rate: 250000.0,
    status: "neutral",
    timestamp: Date.now().toString(),
  },
};

export const Default: Story = {
  args: {
    currencyRates: mockCurrencyRates,
  },
};
