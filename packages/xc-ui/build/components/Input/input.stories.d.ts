import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import React from "react";
type inputArgs = React.ComponentProps<typeof Input>;
declare const inputMeta: Meta<inputArgs>;
export default inputMeta;
type Story = StoryObj<typeof Input>;
export declare const Default: Story;
