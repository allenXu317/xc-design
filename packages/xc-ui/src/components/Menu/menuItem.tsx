import { useContext } from 'react';
import { MenuItemProps, MenuContext } from './constants';
import classNames from 'classnames';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  // console.log('---MenuItem---', props);
  const context = useContext(MenuContext);

  console.log('---MenuItem context---', context);

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  });
  const handleClick = () => {
    console.log('---handleClick---', index);
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={() => handleClick()}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';
export default MenuItem;
