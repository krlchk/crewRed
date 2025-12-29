import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Sidebar } from "../components/SidebarMenu/Sidebar";
import type { IMenuItem } from "../components/SidebarMenu/types";

const meta = {
  title: 'Navigation/SidebarMenu',
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

const simpleItems: IMenuItem[] = [
  { label: "Home" },
  { label: "About" },
  { label: "Contact" },
];

const nestedItems: IMenuItem[] = [
  { label: "Dashboard" },
  {
    label: "Settings (Click me)",
    children: [{ label: "Profile" }, { label: "Security" }],
  },
  {
    label: "More Nested",
    children: [
      {
        label: "Level 2 Group",
        children: [{ label: "Deep Item 1" }, { label: "Deep Item 2" }],
      },
    ],
  },
];

const SidebarWrapper = ({ items }: { items: IMenuItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setIsOpen(true)}>Open sidebar</button>

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} items={items} />
    </div>
  );
};

export const Simple: StoryObj<typeof Sidebar> = {
  render: () => <SidebarWrapper items={simpleItems} />,
};

export const WithSubmenus: StoryObj<typeof Sidebar> = {
  render: () => <SidebarWrapper items={nestedItems} />,
};
