import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { MenuContext } from './constants';
import classNames from 'classnames';
export var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var context = useContext(MenuContext);
    console.log('---MenuItem context---', context);
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index,
    });
    var handleClick = function () {
        console.log('---handleClick---', index);
        if (context.onSelect && !disabled && typeof index === 'string') {
            context.onSelect(index);
        }
    };
    return (_jsx("li", { className: classes, style: style, onClick: function () { return handleClick(); }, children: children }));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
