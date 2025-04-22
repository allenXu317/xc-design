var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from 'react';
import classNames from 'classnames';
import { FormContext } from './form';
export var FormItem = function (props) {
    var label = props.label, children = props.children, required = props.required, name = props.name, _a = props.valuePropName, valuePropName = _a === void 0 ? 'value' : _a, _b = props.trigger, trigger = _b === void 0 ? 'onChange' : _b, _c = props.getValueFromEvent, getValueFromEvent = _c === void 0 ? function (e) { return e.target.value; } : _c, _d = props.rules, rules = _d === void 0 ? [] : _d, _e = props.validateTrigger, validateTrigger = _e === void 0 ? 'onBlur' : _e;
    // 使用context
    var _f = React.useContext(FormContext), dispatch = _f.dispatch, fields = _f.fields, initialValues = _f.initialValues, validateField = _f.validateField;
    // 在store中注册item
    React.useEffect(function () {
        var value = initialValues && initialValues[name];
        dispatch({
            type: 'addField',
            name: name,
            label: label,
            value: value,
            rules: rules || [],
            isValid: true,
            errors: [],
        });
    }, []);
    // 获取从context中传递过来的fields字段：
    var fieldsState = fields[name];
    var value = fieldsState && fieldsState.value;
    // 对表单项的错误进行处理
    var error = fieldsState && fieldsState.errors;
    var isRequired = fieldsState &&
        fieldsState.rules &&
        fieldsState.rules.some(function (rule) { return typeof rule !== 'function' && rule.required; });
    var hasError = error && error.length > 0;
    var labelClass = classNames({
        'viking-form-item-required': isRequired,
    });
    var itemClass = classNames('viking-form-item-control', {
        'viking-form-item-has-error': hasError,
    });
    var onValueUpdate = function (e) {
        var value = getValueFromEvent(e);
        dispatch({ type: 'updateValue', name: name, value: value });
    };
    var onValidate = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, validateField(name)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    // 利用React.cloneElement将controlProps传递给children
    // 1.手动创建一个属性列表
    var controlProps = {};
    controlProps[valuePropName] = value;
    controlProps[trigger] = onValueUpdate;
    if (rules) {
        console.log('rules', rules);
        controlProps[validateTrigger] = onValidate;
    }
    // 2. 构建新的children
    var newChildren = React.Children.map(children, function (child, index) {
        if (index === 0 && React.isValidElement(child)) {
            return React.cloneElement(child, __assign({}, controlProps));
        }
        return child;
    });
    console.log('newChildren', newChildren);
    // 检查newChildren的长度是否为0
    if (React.Children.count(newChildren) === 0) {
        console.error('FormItem组件必须包含一个子元素');
    }
    var rowClasses = classNames('viking-row', {
        'viking-row-no-label': !label,
    });
    return (React.createElement("div", { className: rowClasses },
        label && (React.createElement("div", { className: "viking-form-item-label" },
            React.createElement("label", { className: labelClass, title: label }, label))),
        React.createElement("div", { className: "viking-form-item" },
            React.createElement("div", { className: itemClass }, newChildren),
            hasError && (React.createElement("div", { className: "viking-form-item-explain", title: error[0].message }, error[0].message)))));
};
