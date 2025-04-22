import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

import React from "react";

type inputArgs = React.ComponentProps<typeof Input>;

const inputMeta: Meta<inputArgs> = {
  title: "Input",
  component: Input,
};

export default inputMeta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "placeholder",
    prepend: "prepend",
    append: "append",
  },
}