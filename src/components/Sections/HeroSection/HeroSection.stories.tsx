import { Meta, StoryObj } from "@storybook/react";
import HeroSection from ".";

const meta: Meta<typeof HeroSection> = {
  title: "Components/HeroSection",
  component: HeroSection,
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  render: () => <HeroSection />,
};
