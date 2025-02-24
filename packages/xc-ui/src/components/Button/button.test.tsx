import { render } from '@testing-library/react';
import { Button } from './button';
import '@testing-library/jest-dom';
import { ButtonSize, ButtonType } from './constants';

test('our first react test case', () => {
  const wrapper = render(<Button>Nice</Button>);
  const element = wrapper.queryByText('Nice');
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
});

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
  });

  it('should render the correct component based on different props', () => {
    const wrapper = render(
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} className="klass">
        Nice
      </Button>
    );
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
  });
});
