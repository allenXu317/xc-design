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
import { jsx as _jsx } from "react/jsx-runtime";
export var Progress = function (props) {
    var percent = props.percent, _a = props.strokeHeight, strokeHeight = _a === void 0 ? 15 : _a, _b = props.showText, showText = _b === void 0 ? true : _b, _c = props.theme, theme = _c === void 0 ? 'primary' : _c, styles = props.styles;
    return (_jsx("div", { className: "viking-progress-bar", children: _jsx("div", { className: "viking-progress-bar-outer", style: __assign({ height: "".concat(strokeHeight, "px") }, styles), children: _jsx("div", { className: "viking-progress-bar-inner color-".concat(theme), style: { width: "".concat(percent, "%") }, children: showText && _jsx("span", { className: "inner-text", children: "".concat(percent, "%") }) }) }) }));
};
