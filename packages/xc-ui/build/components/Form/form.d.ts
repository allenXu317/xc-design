import React from 'react';
import useStore from './useStore';
export interface FormProps {
    /**form原生的name属性 */
    name?: string;
    /**children属性 */
    children?: React.ReactNode;
    /**默认值 */
    initialValues?: Record<string, any>;
    /**提交事件 */
    onSubmit?: (e: React.FormEvent) => void;
}
export type FormContextType = Pick<ReturnType<typeof useStore>, 'dispatch' | 'fields' | 'validateField'> & Pick<FormProps, 'initialValues'>;
export declare const FormContext: any;
export declare const Form: React.FC<FormProps>;
