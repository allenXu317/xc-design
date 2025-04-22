declare enum ButtonSize {
    Large = "lg",
    Small = "sm"
}
declare enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link"
}
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
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export { ButtonSize, ButtonType };
