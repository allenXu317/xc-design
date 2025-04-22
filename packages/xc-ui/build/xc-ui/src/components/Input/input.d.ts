import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** input 的类型 */
    type?: 'text' | 'password' | 'number';
    /** 是否禁用 Input */
    disabled?: boolean;
    /** 设置 input 大小，支持 lg 或者是 sm */
    size?: 'lg' | 'sm';
    /** 添加前缀 用于配置一些固定组合 */
    prepend?: string | React.ReactElement;
    /** 添加后缀 用于配置一些固定组合 */
    append?: string | React.ReactElement;
    /** input 的默认值 */
    defaultValue?: string;
    /** input 的值 */
    value?: string;
    /** input 的 placeholder */
    placeholder?: string;
    /** 是否显示前缀图标 */
    icon?: ReactNode;
    /** 是否显示后缀图标 */
    iconAppend?: ReactNode;
    /** input 的宽度 */
    width?: string;
    /** input 的高度 */
    height?: string | number;
    /** input 的最大长度 */
    maxLength?: number;
    /** input 的最小长度 */
    minLength?: number;
    /** input 的 name */
    name?: string;
    /** input 的 id */
    id?: string;
    /** input 的 class */
    className?: string;
    /** input 的 style */
    style?: CSSProperties;
    /** input 的 onChange 事件 */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** input 的 onFocus 事件 */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /** input 的 onBlur 事件 */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const Input: React.FC<InputProps>;
