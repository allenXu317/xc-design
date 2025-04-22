import React from 'react';
import Schema, { RuleItem, ValidateError } from 'async-validator';
import { each, mapValues } from 'lodash-es';

export type CustomRuleFunc = ({ getFieldValue }) => RuleItem;
export type CustomRule = RuleItem | CustomRuleFunc;

export interface FieldDetail {
  name: string;
  value: string;
  type: string;
  rules: CustomRule[];
  isValid: boolean;
  errors: ValidateError[];
}

export interface FieldState {
  [key: string]: FieldDetail;
}

export interface FormState {
  isValid: boolean;
  isSubmitting?: boolean;
  errors?: Record<string, ValidateError[]>;
}

export interface ValidateErrorType extends Error {
  errors: ValidateError[];
  fields: Record<string, ValidateError[]>;
}

export interface FieldAction {
  type: 'addField' | 'updateValue' | 'validateField';
  name: string;
  value: string;
}

function fieldsReducer(state: FieldState, action: any): FieldState {
  switch (action.type) {
    case 'addField':
      return {
        ...state,
        [action.name]: {
          name: action.name,
          value: action.value,
          type: 'text',
          rules: action.rules,
          isValid: action.isValid,
          errors: action.errors,
        },
      };
    case 'updateValue':
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          value: action.value,
        },
      };
    case 'validateField':
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          isValid: action.isValid,
          errors: action.errors,
        },
      };
    default:
      return state;
  }
}

function useStore() {
  const [form, setForm] = React.useState<FormState>({
    isValid: false,
    isSubmitting: false,
    errors: {},
  });
  const [fields, dispatch] = React.useReducer(fieldsReducer, {});
  const getFieldValue = (name: string) => fields[name] && fields[name].value;
  // 转换函数
  const transformRules = (rules: CustomRule[]) => {
    return rules.map((rule) => {
      if (typeof rule === 'function') {
        return rule({ getFieldValue });
      }
      return rule;
    });
  };
  const validateField = async (name: string) => {
    console.log('---name---', fields[name]);
    const { value, rules } = fields[name];
    console.log('---value---', value);
    console.log('---rules---', rules);
    const afterTransformRules = transformRules(rules);
    const decriptor = { [name]: afterTransformRules };
    const valueMap = { [name]: value };
    const validator = new Schema(decriptor);
    let isValid = true;
    let errors: ValidateError[] = [];
    try {
      await validator.validate(valueMap);
    } catch (e) {
      isValid = false;
      const err = e as any;
      console.log('e', err.errors);
      console.log('fields', err.fields);
      errors = err.errors;
    } finally {
      console.log('errors123', errors);
      dispatch({ type: 'validateField', name, isValid, errors });
    }
  };

  const validateForm = async () => {
    let isValid = true;
    let errors: Record<string, ValidateError[]> = {};

    const valueMap = mapValues(fields, (field) => field.value);
    const descriptor = mapValues(fields, (field) =>
      transformRules(field.rules),
    );
    const validator = new Schema(descriptor);
    setForm({ ...form, isSubmitting: true });
    try {
      await validator.validate(valueMap);
    } catch (e) {
      isValid = false;
      const err = e as ValidateErrorType;
      // errors = err.errors;
    } finally {
      setForm({ isValid, errors, isSubmitting: false });
    }
  };

  return {
    form,
    fields,
    dispatch,
    validateField,
  };
}

export default useStore;
