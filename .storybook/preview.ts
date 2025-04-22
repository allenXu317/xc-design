import type { Preview } from '@storybook/react'
import "/packages/xc-ui/src/styles/index.scss"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  tags: ['autodocs']
};

export default preview;