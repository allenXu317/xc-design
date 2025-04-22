import React from 'react';
import useStore from './useStore';
export var FormContext = React.createContext({});
export var Form = function (props) {
    var _a = props.name, name = _a === void 0 ? 'viking-form' : _a, children = props.children, onSubmit = props.onSubmit, initialValues = props.initialValues;
    // 拿到具体的数据
    var _b = useStore(), form = _b.form, fields = _b.fields, dispatch = _b.dispatch, validateField = _b.validateField;
    var passedContext = {
        dispatch: dispatch,
        fields: fields,
        initialValues: initialValues,
        validateField: validateField,
    };
    // console.log('form', form);
    // console.log('fields', fields);
    // console.log('dispatch', dispatch);
    return (React.createElement("form", { name: name, onSubmit: onSubmit, className: "viking-form" },
        React.createElement(FormContext.Provider, { value: passedContext }, children)));
};
