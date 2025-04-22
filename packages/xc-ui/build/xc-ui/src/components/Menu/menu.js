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
import React from 'react';
import classNames from 'classnames';
import { MenuContext } from './constants';
import { useState } from 'react';
export var Menu = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? 'vertical' : _b, restProps = __rest(_a, ["mode"]);
    var defaultIndex = restProps.defaultIndex, disabled = restProps.disabled, className = restProps.className, style = restProps.style, children = restProps.children, onSelect = restProps.onSelect;
    // 内部状态
    var _c = useState(defaultIndex), currentActive = _c[0], setActive = _c[1];
    var classes = classNames('xc-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    });
    var handleOnSelect = function (index) {
        setActive(index);
        if (onSelect && !disabled) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleOnSelect,
    };
    var renderChildren = function () {
        var reactChildren = React.Children.toArray(children);
        console.log('---reactChildren1---', reactChildren);
        return reactChildren.map(function (child, index) {
            if (React.isValidElement(child)) {
                var childElement = child;
                var displayName = childElement.type.displayName;
                if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                    return React.cloneElement(childElement, {
                        index: index.toString(),
                    });
                }
                else {
                    console.error('Warning: Menu has a child which is not a MenuItem component');
                }
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
