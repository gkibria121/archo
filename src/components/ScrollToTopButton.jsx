'use client';
import React, { useRef, useEffect, useState } from 'react';

function ScrollToTopButton() {
  const target = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!target.current) {
      console.error('Target element is not available.');
      return;
    }

    // Ensure IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('IntersectionObserver is not supported in this environment.');
      return;
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setIsVisible(!entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    observer.observe(target.current);

    // Cleanup on unmount
    return () => {
      if (target.current) observer.unobserve(target.current);
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={target}
      style={{
        position: 'absolute',
        top: '50vh',
        left: '0px',
      }}
    >
      <div
        className="scroll-to-top scroll-to-target"
        style={{ display: isVisible ? 'block' : 'none' }}
        onClick={scrollToTop}
      >
        <span className="fa fa-arrow-circle-up" />
      </div>
    </div>
  );
}

export default ScrollToTopButton;
