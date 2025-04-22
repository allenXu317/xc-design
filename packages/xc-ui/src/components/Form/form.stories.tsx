import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import { Form } from './form';
import { FormItem } from './formItem';
import { Input } from '../Input/input';
import { Button } from '../Button/button';
import { CustomRule } from './useStore';

import React from 'react';

type FormArgs = React.ComponentProps<typeof Form>;

const formMeta: Meta<FormArgs> = {
  title: 'Form',
  component: Form,
};

export default formMeta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    name: 'viking-form',
  },
  render: (args) => {
    const [{ name }, setProps] = useArgs();

    const onSubmit = action('on-submit');

    const confirmRules : CustomRule[] = [
      {
        required: true,
        message: '请再次输入密码',
      },
      ({ getFieldValue }) => ({
        asyncValidator(rule, value) {
          console.log('---原密码---', getFieldValue('password'));
          console.log('---重复密码---', value);
          if (value !== getFieldValue('password')) {
            return Promise.reject('两次密码不一致');
          } else {
            return Promise.resolve();
          }
        },
      }),
    ]

    return (
      <Form name={name} onSubmit={onSubmit} initialValues={{ username: 'viking', checkbox: true }}>
        <FormItem name="username" label="用户名" required rules={[{
          type: 'email',
          required: true,
        }]}>
          <Input type="text" />
        </FormItem>
        <FormItem name="password" label="密码" required>
          <Input type="password" />
        </FormItem>
        <FormItem name="repeatPassword" label="重复密码" required rules={confirmRules}>
          <Input type="password" />
        </FormItem>
        <FormItem name="no-label" required>
          <Input placeholder="no-label" />
        </FormItem>
        <FormItem
          name="checkbox"
          required
          valuePropName="checked"
          trigger="onChange"
          getValueFromEvent={(e) => e.target.checked}
        >
          <input type="checkbox" /> 点击代表你同意
        </FormItem>
        {/* <FormItem> */}
        <Button>提交</Button>
        {/* </FormItem> */}
      </Form>
    );
  },
};
