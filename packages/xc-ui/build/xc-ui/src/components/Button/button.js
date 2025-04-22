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
import { jsx as _jsx } from "react/jsx-runtime";
import { ButtonType } from './constants';
import classNames from 'classnames';
/**
 * 这是一个button组件啊1
 */
export var Button = function (_a) {
    var _b;
    var 
    /**接受组件的样式 */
    className = _a.className, _c = _a.btnType, btnType = _c === void 0 ? 'default' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.size, size = _e === void 0 ? 'sm' : _e, children = _a.children, href = _a.href, restProps = __rest(_a, ["className", "btnType", "disabled", "size", "children", "href"]);
    // 为class增加组件自定义的公共前缀:
    var classes = classNames('btn', className, (_b = {},
        _b["btn-".concat(btnType)] = btnType,
        _b["btn-".concat(size)] = size,
        _b.disabled = btnType === ButtonType.Link && disabled,
        _b));
    // link类型的button，使用a标签，其他类型使用button标签:
    if (btnType === ButtonType.Link && href) {
        return (_jsx("a", __assign({ className: classes, href: href }, restProps, { children: children })));
    }
    return (_jsx("button", __assign({ className: classes, disabled: disabled }, restProps, { children: children })));
};
