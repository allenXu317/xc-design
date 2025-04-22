import React from 'react';
import { Input } from '../Input/input';
import Icon from '../Icon/Icon';
import { hooks } from '../../../../xc-utility';

// 选项的类型
interface OptionItemProps {
  value: string;
}

export type OptionType<T = {}> = T & OptionItemProps;

// AutoComplete 组件的属性
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

export const AutoComplete: React.FC<AutoCompleteProps> = (
  props: AutoCompleteProps,
) => {
  const { fetchSuggestions, onSelect, renderOption, loading = false } = props;

  const [autoCompleteValue, setAutoCompleteValue] = React.useState<string>('');
  const [suggestions, setSuggestions] = React.useState<OptionType[]>([]);
  const [shouldFetch, setShouldFetch] = React.useState(true);

  const componentRef = React.useRef<HTMLElement>(null!);

  const { useDebounce, useClickOutside } = hooks;
  const debounceValue = useDebounce(autoCompleteValue, 500);

  useClickOutside(componentRef, () => {
    setSuggestions([]);
  });

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setAutoCompleteValue(value);
    setShouldFetch(true);
    // if (value) {
    //   const results = await fetchSuggestions(value);
    //   setSuggestions(results);
    // } else {
    //   setSuggestions([]);
    // }
  };

  React.useEffect(() => {
    if (shouldFetch) {
      if (debounceValue) {
        const results = fetchSuggestions(debounceValue);
        if (results instanceof Promise) {
          setSuggestions([]);
          results.then((data) => {
            setSuggestions(data);
          });
        } else {
          setSuggestions(results);
        }
      } else {
        setSuggestions([]);
      }
    }
  }, [debounceValue]);

  const handleSelect = (item: OptionType) => {
    console.log('---handleSelect---', item);
    setAutoCompleteValue(item.value);
    setSuggestions([]);
    onSelect && onSelect(item);
    setShouldFetch(false);
  };

  const innerRenderOption = (item: OptionType) => {
    return renderOption ? renderOption(item) : <div>{item.value}</div>;
  };

  return (
    <div ref={componentRef}>
      <Input value={autoCompleteValue} onChange={handleInputChange} />
      <ul>
        {loading && <Icon icon="spinner" spin />}
        {suggestions.map((item, index) => {
          return (
            <li onClick={() => handleSelect(item)} key={index}>
              {innerRenderOption(item)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AutoComplete;
