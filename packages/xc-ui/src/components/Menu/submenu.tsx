import React from "react";
import classNames from "classnames";
import { MenuItemProps, MenuContext, SubMenuProps } from "./constants";


export const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, style, children, disabled } = props;

  const [menuOpen, setOpen] = React.useState(false);

  const context = React.useContext(MenuContext);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-disabled': disabled,
  });

  const renderChildren = () => {
    const reactChildren = React.Children.toArray(children as React.ReactNode);
    return reactChildren.map((child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      if(childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `submenu-item-${index}`,
          // onSelect: handleClick,
        });
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem component');
      }
    });
  };
  
  return (
    <li className={classes} style={style} >
      <div className="submenu-title">{title}</div>
      <ul className="submenu-list">
        {renderChildren()}
      </ul>
    </li>
  );
}

SubMenu.displayName = 'SubMenu';