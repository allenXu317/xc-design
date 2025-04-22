import { FC } from 'react';
import { Menu } from './menu';
import { MenuItem } from './menuItem';
import { SubMenu } from './submenu';
import { MenuProps, IMenuContext, MenuContext, MenuItemProps, SubMenuProps } from './constants'; 

// export { Menu, MenuItem, SubMenu };


export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
}

const TransMenu = Menu as IMenuComponent;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;