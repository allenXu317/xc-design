import { useEffect, useState } from 'react';
// 防抖
export var useDebounce = function (value, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = useState(value), debounceValue = _a[0], setDebounceValue = _a[1];
    useEffect(function () {
        var handler = setTimeout(function () {
            setDebounceValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debounceValue;
};
