// 定义button的一些属性:
// 先用枚举定义button的某些属性的可选值：
enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

// 定义button的接口：
export interface BaseButtonProps {
  /** Is this the principal call to action on the page? */
  className?: string;
  disabled?: boolean;
  size?: 'lg' | 'sm';
  btnType?: 'primary' | 'default' | 'danger' | 'link';
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

// 导出button的属性：
export { ButtonSize, ButtonType };
