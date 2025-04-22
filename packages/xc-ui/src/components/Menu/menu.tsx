import React from 'react';
import classNames from 'classnames';
import { MenuProps, IMenuContext, MenuContext, MenuItemProps } from './constants';
import { useState } from 'react';

export const Menu: React.FC<MenuProps> = ({
  mode = 'vertical',
  ...restProps
}) => {
  const {
    defaultIndex,
    disabled,
    className,
    style,
    children,
    onSelect,
  } = restProps;

  // 内部状态
  const [currentActive, setActive] = useState(defaultIndex);

  const classes = classNames('xc-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });

  const handleOnSelect = (index: string) => {
     setActive(index);
    if (onSelect && !disabled) {
      onSelect(index);
    }
  };

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleOnSelect,
  };

  const renderChildren = () => {
    const reactChildren = React.Children.toArray(children as React.ReactNode);
    console.log('---reactChildren1---', reactChildren);
    return reactChildren.map((child, index) => {
      if(React.isValidElement(child)) {
        const childElement = child as React.FunctionComponentElement<MenuItemProps>;
        const displayName = (childElement.type as any).displayName;
        if(displayName === 'MenuItem' || displayName === 'SubMenu') {
          return React.cloneElement(childElement, {
            index: index.toString(),
          });
        } else {
          console.error('Warning: Menu has a child which is not a MenuItem component');
        }
      }
    });
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};
