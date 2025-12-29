import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../components/Toast/Toast";

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    message: {
      control: "text",
      description: "Input message for toast",
    },
    duration: {
      control: "number",
      description: "Input duration value for toast",
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "Success",
    duration: 5000,
  },
};

export const FastDissapear: Story = {
  args: {
    message: "Fast",
    duration: 2000,
  },
};

export const LongText: Story = {
  args: {
    message:
      "LONGLONGLONGLOLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONGLONG",
    duration: 8000,
  },
};
