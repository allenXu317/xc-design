import { FC } from 'react';
import { MenuProps, MenuItemProps, SubMenuProps } from './constants';
export type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
