import HelloWorld from 'pages/SampleApp/components/HelloWorld';
import { render } from '@testing-library/react';
import React from 'react';


describe('Hello World', () => {
  it('should render without crashing', () => {
    expect(render(<HelloWorld />)).toBeDefined();
  });
  it('should handle empty status', () => {
    const { getByText } = render(<HelloWorld />);
    expect(getByText('Welcome To React-Gold')).toBeDefined();
  });
  it('should display status if available', () => {
    const { getByText } = render(<HelloWorld status={200} />);
    expect(getByText('API Status: 200')).toBeDefined();
  });
});
