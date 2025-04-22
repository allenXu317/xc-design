import React from 'react';
import classNames from 'classnames';
import { FormContextType, FormContext } from './form';
import { RuleItem } from 'async-validator';
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
  /**错误信息 */
}

export const FormItem: React.FC<FormItemProps> = (props: FormItemProps) => {
  const {
    label,
    children,
    required,
    name,
    valuePropName = 'value',
    trigger = 'onChange',
    getValueFromEvent = (e) => e.target.value,
    rules = [],
    validateTrigger = 'onBlur',
  } = props;

  // 使用context
  const { dispatch, fields, initialValues, validateField } =
    React.useContext<FormContextType>(FormContext);
  // 在store中注册item
  React.useEffect(() => {
    const value = initialValues && initialValues[name];
    dispatch({
      type: 'addField',
      name,
      label,
      value,
      rules: rules || [],
      isValid: true,
      errors: [],
    });
  }, []);

  // 获取从context中传递过来的fields字段：
  const fieldsState = fields[name];
  const value = fieldsState && fieldsState.value;

  // 对表单项的错误进行处理
  const error = fieldsState && fieldsState.errors;
  const isRequired =
    fieldsState &&
    fieldsState.rules &&
    fieldsState.rules.some(
      (rule) => typeof rule !== 'function' && rule.required,
    );
  const hasError = error && error.length > 0;
  const labelClass = classNames({
    'viking-form-item-required': isRequired,
  });
  const itemClass = classNames('viking-form-item-control', {
    'viking-form-item-has-error': hasError,
  });

  const onValueUpdate = (e: any) => {
    const value = getValueFromEvent(e);
    dispatch({ type: 'updateValue', name, value });
  };
  const onValidate = async () => {
    await validateField(name);
  };
  // 利用React.cloneElement将controlProps传递给children
  // 1.手动创建一个属性列表
  const controlProps: Record<string, any> = {};
  controlProps[valuePropName] = value;
  controlProps[trigger] = onValueUpdate;
  if (rules) {
    console.log('rules', rules);
    controlProps[validateTrigger] = onValidate;
  }
  // 2. 构建新的children
  const newChildren = React.Children.map(children, (child, index) => {
    if (index === 0 && React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...controlProps,
      });
    }
    return child;
  });
  console.log('newChildren', newChildren);
  // 检查newChildren的长度是否为0
  if (React.Children.count(newChildren) === 0) {
    console.error('FormItem组件必须包含一个子元素');
  }

  const rowClasses = classNames('viking-row', {
    'viking-row-no-label': !label,
  });

  return (
    <div className={rowClasses}>
      {label && (
        <div className="viking-form-item-label">
          <label className={labelClass} title={label}>
            {label}
          </label>
        </div>
      )}
      <div className="viking-form-item">
        <div className={itemClass}>{newChildren}</div>
        {hasError && (
          <div className="viking-form-item-explain" title={error[0].message}>
            {error[0].message}
          </div>
        )}
      </div>
    </div>
  );
};
