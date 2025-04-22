import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import React from 'react';
import { AutoComplete, AutoCompleteProps, OptionType } from './autocomplete';

type AutoCompleteArgs = React.ComponentProps<typeof AutoComplete> &
  AutoCompleteProps;

const autoCompleteMeta: Meta<AutoCompleteArgs> = {
  title: 'AutoComplete',
  component: AutoComplete,
};

export default autoCompleteMeta;

type Story = StoryObj<typeof AutoComplete>;

export const Default: Story = {
  args: {
    // fetchSuggestions: (str: string) => {
    //   return new Promise((resolve, rej) => {
    //     setTimeout(() => {
    //       resolve(
    //         [
    //           { value: 'xxcc', key: 1 },
    //           { value: 'qqwwee', key: 2 },
    //           { value: 'wweerr', key: 3 },
    //         ].filter((item) => item.value.includes(str)),
    //       );
    //     }, 1000);
    //   });
    // },
    onSelect: (item: OptionType) => {
      console.log(item);
    },
  },
  render: (args) => {
    const [{ onSelect }, setProps] = useArgs();
    const [loading, setLoading] = React.useState(false);
    const fetchSuggestions1 = (str: string) => {
      setLoading(true);
      return new Promise((resolve, rej) => {
        setTimeout(() => {
          setLoading(false);
          resolve(
            [
              { value: 'xxcc', key: 1 },
              { value: 'qqwwee', key: 2 },
              { value: 'wweerr', key: 3 },
            ].filter((item) => item.value.includes(str)),
          );
        }, 1000);
      });
    };
    return <AutoComplete fetchSuggestions={fetchSuggestions1} onSelect={onSelect} loading={loading} />;
  },
};
