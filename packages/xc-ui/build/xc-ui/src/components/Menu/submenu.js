import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import classNames from "classnames";
import { MenuContext } from "./constants";
export var SubMenu = function (props) {
    var index = props.index, title = props.title, className = props.className, style = props.style, children = props.children, disabled = props.disabled;
    var _a = React.useState(false), menuOpen = _a[0], setOpen = _a[1];
    var context = React.useContext(MenuContext);
    var classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-disabled': disabled,
    });
    var renderChildren = function () {
        var reactChildren = React.Children.toArray(children);
        return reactChildren.map(function (child, index) {
            var childElement = child;
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: "submenu-item-".concat(index),
                    // onSelect: handleClick,
                });
            }
            else {
                console.error('Warning: SubMenu has a child which is not a MenuItem component');
            }
        });
    };
    return (_jsxs("li", { className: classes, style: style, children: [_jsx("div", { className: "submenu-title", children: title }), _jsx("ul", { className: "submenu-list", children: renderChildren() })] }));
};
SubMenu.displayName = 'SubMenu';
