import { RuleItem, ValidateError } from 'async-validator';
export type CustomRuleFunc = ({ getFieldValue }: {
    getFieldValue: any;
}) => RuleItem;
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
declare function useStore(): {
    form: any;
    fields: any;
    dispatch: any;
    validateField: (name: string) => Promise<void>;
};
export default useStore;
