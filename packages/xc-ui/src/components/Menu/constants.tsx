import { createContext } from 'react';

type MenuMode = 'horizontal' | 'vertical';
type MenuSelectCallback = (selectedIndex: number | string) => void;

interface MenuProps {
  disabled ?: boolean;
  mode ?: MenuMode;
  defaultIndex ?: number;
  className ?: string;
  style ?: React.CSSProperties;
  onSelect ?: MenuSelectCallback;
  defaultOpenSubMenus ?: string[];
  children?: React.ReactNode;
}

interface MenuItemProps {
  index?: number | string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onSelect?: MenuSelectCallback;
}

interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
}

// 全局context接口
interface IMenuContext {
  index: number;
  onSelect?: MenuSelectCallback;
}

const MenuContext = createContext<IMenuContext>({ index: 0 });

export type { MenuProps, MenuItemProps, SubMenuProps, IMenuContext };
export { MenuContext };