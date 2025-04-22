import React from 'react';
import { CustomRule } from './useStore';
export interface FormItemProps {
    /**label标签的文本 */
    label?: string;
    /**children */
    children: React.ReactNode;
    /**是否必选 */
    required?: boolean;
    /**字段名 */
    name: string;
    /**自定义字段value属性名 */
    valuePropName?: string;
    /**触发时机 */
    trigger?: string;
    /**自定义获取字段的value */
    getValueFromEvent?: (event: any) => any;
    /**校验规则 */
    rules?: CustomRule[];
    /**校验触发实际 */
    validateTrigger?: string;
}
export declare const FormItem: React.FC<FormItemProps>;
