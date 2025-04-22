import React from 'react';
interface OptionItemProps {
    value: string;
}
export type OptionType<T = {}> = T & OptionItemProps;
interface AutoCompleteProps {
    /**搜索数据的回调 */
    fetchSuggestions: (str: string) => OptionType[] | Promise<OptionType[]>;
    /**点击选中后的回调 */
    onSelect: (item: OptionType) => void;
    /**自定义渲染下拉项 */
    renderOption?: (item: OptionType) => React.ReactElement;
    /** 加载状态 */
    loading?: boolean;
}
export type { AutoCompleteProps };
export declare const AutoComplete: React.FC<AutoCompleteProps>;
export default AutoComplete;
