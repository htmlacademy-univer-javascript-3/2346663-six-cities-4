import { render, screen } from '@testing-library/react';
import CitiesLogo from './cities-logo';
import { withHistory } from './mock-component';


describe('Component: Logo', () => {
  it('should render correct', () => {
    const logoContainerTestId = 'logo-container';

    render(withHistory(<CitiesLogo/>));
    const logoContainer = screen.getByTestId(logoContainerTestId);

    expect(logoContainer).toBeInTheDocument();
  });
});
