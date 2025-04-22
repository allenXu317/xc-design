type MenuMode = 'horizontal' | 'vertical';
type MenuSelectCallback = (selectedIndex: string) => void;
interface MenuProps {
    disabled?: boolean;
    mode?: MenuMode;
    defaultIndex?: string;
    className?: string;
    style?: React.CSSProperties;
    onSelect?: MenuSelectCallback;
    defaultOpenSubMenus?: string[];
    children?: React.ReactNode;
}
interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onSelect?: MenuSelectCallback;
}
interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    disabled?: boolean;
}
interface IMenuContext {
    index: string;
    onSelect?: MenuSelectCallback;
}
declare const MenuContext: import("react").Context<IMenuContext>;
export type { MenuProps, MenuItemProps, SubMenuProps, IMenuContext };
export { MenuContext };
