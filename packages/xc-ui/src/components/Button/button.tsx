import React from 'react';
import { ButtonType, BaseButtonProps } from './constants';
import classNames from 'classnames';

/**
 * 这是一个button组件啊1
 */
export const Button = ({
  /**接受组件的样式 */
  className,
  btnType = 'default',
  disabled = false,
  size = 'sm',
  children,
  href,
  ...restProps
}: BaseButtonProps) => {
  // 为class增加组件自定义的公共前缀:
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });

  // link类型的button，使用a标签，其他类型使用button标签:
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};
