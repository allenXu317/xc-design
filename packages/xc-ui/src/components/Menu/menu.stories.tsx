import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Menu } from './menu';
import { MenuItem } from './menuItem';
import { SubMenu } from './submenu';
import mdx from './menu.mdx';

const menuMeta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
  subcomponents: {
    MenuItem,
    SubMenu,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px', backgroundColor :'red' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export default menuMeta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    defaultIndex: '0',
    onSelect: () => {},
  },
  render: (args) => {
    const [props, setProps] = useArgs();
    return (
      <Menu {...props}>
        <MenuItem index="0">menu 1</MenuItem>
        <MenuItem index="1">menu 2</MenuItem>
        <MenuItem index="2">menu 3</MenuItem>
        <SubMenu title="sub menu">
          <MenuItem index="3">sub menu 1</MenuItem>
          <MenuItem index="4">sub menu 2</MenuItem>
        </SubMenu>
      </Menu>
    );
  },
};
