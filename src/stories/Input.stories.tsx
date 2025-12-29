import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input/Input";

const meta = {
  title: 'Input/InputField',
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "number"],
      description: "Input type",
    },
    clearable: {
      control: "boolean",
      description: "Should the cross be shown for purification?",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    clearable: true,
  },
};

export const TextInput: Story = {
  args: {
    type: "text",
    clearable: true,
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
    clearable: true,
  },
};
