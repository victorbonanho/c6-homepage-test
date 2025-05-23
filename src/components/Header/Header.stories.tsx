// src/components/Header.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Header from ".";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};
