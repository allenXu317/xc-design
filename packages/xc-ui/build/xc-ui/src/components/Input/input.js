var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import classNames from 'classnames';
export var Input = function (_a) {
    var _b;
    var _c = _a.placeholder, placeholder = _c === void 0 ? '请输入' : _c, _d = _a.type, type = _d === void 0 ? 'text' : _d, props = __rest(_a, ["placeholder", "type"]);
    // 取出各种属性
    var onChange = props.onChange, size = props.size, disabled = props.disabled, prepend = props.prepend, append = props.append, style = props.style, icon = props.icon, iconAppend = props.iconAppend, width = props.width, value = props.value;
    var classnames = classNames('viking-input-wrapper', (_b = {},
        // 根据属性判断是否要添加特定的 className
        _b["input-size-".concat(size)] = size,
        _b['is-disabled'] = disabled,
        _b['input-group'] = prepend || append,
        _b['input-group-append'] = !!append,
        _b['input-group-prepend'] = !!prepend,
        _b));
    var handleInputChange = function (e) {
        // 处理 onChange 事件
        onChange && onChange(e);
    };
    // 根据属性计算不同的 className
    return (
    // 根据属性判断是否要添加特定的节点
    React.createElement("div", { className: classnames, style: style },
        prepend && React.createElement("div", { className: "viking-input-group-prepend" }, prepend),
        icon && React.createElement("div", { className: "icon-wrapper" }, icon),
        React.createElement("input", { className: 'viking-input-inner', style: { width: width }, placeholder: placeholder, onChange: handleInputChange, type: type, value: value, onBlur: props.onBlur }),
        iconAppend && React.createElement("div", { className: "icon-wrapper" }, iconAppend),
        append && React.createElement("div", { className: "viking-input-group-append" }, append)));
};
