import { Meta, StoryObj } from "@storybook/react";
import FeatureSection from ".";

const meta: Meta<typeof FeatureSection> = {
  title: "Components/FeatureSection",
  component: FeatureSection,
};

export default meta;

type Story = StoryObj<typeof FeatureSection>;

export const Default: Story = {
  render: () => <FeatureSection />,
};
