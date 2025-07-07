import { render } from '@testing-library/react';
import Button from '../Button/Button';
import { describe, it, expect } from '@jest/globals';

describe('Button component', () => {
  it('renders with primary variant by default', () => {
    const { container } = render(<Button>Click</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('button--primary');
  });

  it('renders with secondary variant', () => {
    const { container } = render(<Button variant="secondary">Click</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('button--secondary');
  });
});
