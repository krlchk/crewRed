export interface IMenuItem {
  label: string;
  children?: IMenuItem[];
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: IMenuItem[];
}