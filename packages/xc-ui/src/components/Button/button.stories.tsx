import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { ButtonSize, ButtonType, ButtonProps } from "./constants";
import React from "react";

type buttonArgs = React.ComponentProps<typeof Button> & ButtonProps;

const buttonMeta: Meta<buttonArgs> = {
  title: "Button",
  component: Button,
  // args: {
  //   className: "",
  // },
};

export default buttonMeta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    disabled: false,
  },
}

export const Default: Story = {
  args: {
    children: "Default",
    btnType: ButtonType.Default,
    size: ButtonSize.Small,
    disabled: false,
  },
}

export const Danger: Story = {
  args: {
    children: "Danger",
    btnType: ButtonType.Danger,
    size: ButtonSize.Large,
    disabled: false,
  },
}

export const Link: Story = {
  args: {
    children: "Link",
    btnType: ButtonType.Link,
    size: ButtonSize.Large,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled",
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    disabled: true,
  },
}

export const LinkDisabled: Story = {
  args: {
    children: "LinkDisabled",
    btnType: ButtonType.Link,
    size: ButtonSize.Large,
    disabled: true,
  },
}

export const Large: Story = {
  args: {
    children: "Large",
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    disabled: false,
  },
}

export const Small: Story = {
  args: {
    children: "Small",
    btnType: ButtonType.Primary,
    size: ButtonSize.Small,
    disabled: false,
  },
}

export const LinkHref: Story = {
  args: {
    children: "LinkHref",
    btnType: ButtonType.Link,
    size: ButtonSize.Large,
    disabled: false,
    href: "123",
  },
}

export const LinkDisabledHref: Story = {
  args: {
    children: "LinkDisabledHref",
    btnType: ButtonType.Link,
    size: ButtonSize.Large,
    disabled: true,
    href: "123",
  },
}


