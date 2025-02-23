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
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

// 导出button的属性：
export type { ButtonProps };
export { ButtonSize, ButtonType };
