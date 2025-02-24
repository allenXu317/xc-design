import { render } from '@testing-library/react';
import { Button } from './button';

test('our first react test case', () => {
  const wrapper = render(<Button>Nice</Button>);
  const element = wrapper.queryByText('Nice');
  console.log(element);
  expect(element).toBeTruthy();
});
