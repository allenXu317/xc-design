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

// 定义context属性接口
// 接受useStore返回的数据
// 通过typeof获取useStore的类型
// 通过ReturnType获取useStore返回的类型
// 将返回的类型定义赋值给FormContextType
export type FormContextType = Pick<
  ReturnType<typeof useStore>,
  'dispatch' | 'fields' | 'validateField'
> &
  Pick<FormProps, 'initialValues'>;
export const FormContext = React.createContext<FormContextType>(
  {} as FormContextType,
);

export const Form: React.FC<FormProps> = (props: FormProps) => {
  const { name = 'viking-form', children, onSubmit, initialValues } = props;

  // 拿到具体的数据
  const { form, fields, dispatch, validateField } = useStore();

  const passedContext: FormContextType = {
    dispatch,
    fields,
    initialValues,
    validateField,
  };

  // console.log('form', form);
  // console.log('fields', fields);
  // console.log('dispatch', dispatch);

  return (
    <form name={name} onSubmit={onSubmit} className="viking-form">
      <FormContext.Provider value={passedContext}>
        {children}
      </FormContext.Provider>
    </form>
  );
};
