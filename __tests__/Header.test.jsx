// __tests__/Header.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}));

describe('Header', () => {
  beforeEach(() => {
    usePathname.mockImplementation(() => '/');
    // Mock window methods
    global.innerWidth = 1024;
    global.scrollY = 0;
  });

  it('renders header with correct initial state', () => {
    render(<Header />);
    expect(screen.getByTestId('main-header')).toBeInTheDocument();
    expect(screen.getByTestId('logo-image')).toBeInTheDocument();
    expect(screen.getByTestId('main-navigation')).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />);
    const toggleButton = screen.getByTestId('mobile-menu-toggle');
    
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    
    fireEvent.click(screen.getByTestId('close-button'));
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });

  it('applies fixed header class on scroll', () => {
    render(<Header />);
    const header = screen.getByTestId('main-header');
    
    // Simulate scroll
    global.scrollY = 150;
    fireEvent.scroll(window);
    
    expect(header).toHaveClass('fixed-header');
  });

  it('highlights current navigation item', () => {
    usePathname.mockImplementation(() => '/about');
    render(<Header />);
    
    const aboutLink = screen.getByTestId('nav-item-about');
    expect(aboutLink).toHaveClass('current');
  });
});