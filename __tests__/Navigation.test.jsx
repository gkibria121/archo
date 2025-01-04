// __tests__/Navigation.test.jsx
import { render, screen } from '@testing-library/react';
import { Navigation } from '@/components/navigation/Navigation';

describe('Navigation', () => {
  const mockIsActive = jest.fn();
  const mockOnClick = jest.fn();

  it('renders all menu items', () => {
    render(<Navigation isActive={mockIsActive} onClick={mockOnClick} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
  });

  it('applies active class to current route', () => {
    mockIsActive.mockImplementation(path => path === '/about' ? 'current' : '');
    render(<Navigation isActive={mockIsActive} onClick={mockOnClick} />);
    
    const aboutLink = screen.getByTestId('nav-item-about');
    expect(aboutLink).toHaveClass('current');
  });
});