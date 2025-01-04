import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ScrollToTopButton from '@/components/ScrollToTopButton';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(element) {
    // Simulate the button becoming visible
    this.callback([
      {
        isIntersecting: false,
        target: element,
      },
    ]);
  }

  unobserve() {}
  disconnect() {}
};

// Mock window.scrollTo
global.scrollTo = jest.fn();

describe('ScrollToTopButton', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<ScrollToTopButton />);
  });

  test('button is initially visible when target is not intersecting', () => {
    render(<ScrollToTopButton />);
    const button = screen.getByTestId('scroll-to-top');
    expect(button).toBeVisible();
  });

  test('scrolls to top when clicked', () => {
    render(<ScrollToTopButton />);
    const button = screen.getByTestId('scroll-to-top');
    
    fireEvent.click(button);
    
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
  });

  test('handles undefined IntersectionObserver gracefully', () => {
    // Mock console.warn to prevent it from showing in test output
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    
    // Temporarily remove IntersectionObserver
    const originalIntersectionObserver = global.IntersectionObserver;
    delete global.IntersectionObserver;
    
    render(<ScrollToTopButton />);
    
    expect(consoleSpy).toHaveBeenCalledWith(
      'IntersectionObserver is not supported in this environment.'
    );
    
    // Restore IntersectionObserver and console.warn
    global.IntersectionObserver = originalIntersectionObserver;
    consoleSpy.mockRestore();
  });
});