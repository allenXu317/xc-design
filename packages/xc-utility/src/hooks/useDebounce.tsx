import { useEffect, useState } from 'react';
// 防抖
export const useDebounce = (value: any, delay = 300) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debounceValue;
}