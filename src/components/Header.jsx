// components/Header.jsx
"use client"
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/navigation/Logo'
import { Navigation } from '@/components/navigation/Navigation';
import { MobileMenu } from '@/components/navigation/MobileMenu';

function Header({isFixed}) {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 100 || isFixed);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuVisible(false);
        document.body.style.overflow = 'visible';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  const headerClass = pathname.includes('/projects') || pathname === '/contact'
    ? 'header-style-two'
    : 'header-style-one';

  const isActive = (route) => {
    if (route === '/') return pathname === '/' ? 'current' : '';
     
    return new RegExp(`^${route}`).test(pathname) ? 'current' : '';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
    document.body.style.overflow = !isMobileMenuVisible ? 'hidden' : 'visible';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuVisible(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <header 
      className={`main-header ${isHeaderFixed || isFixed ? 'fixed-header' : ''} `}
      data-testid="main-header"
    >
      <div className="header-upper">
        <div className="outer-container">
          <div className="inner-container clearfix">
            <div className="pull-left logo-box">
              <Logo variant={headerClass === 'header-style-two' ? 'dark' : 'default'} />
            </div>

            <div className="nav-outer pull-left clearfix">
              <button 
                className="mobile-nav-toggler" 
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                data-testid="mobile-menu-toggle"
              >
                <span className="icon ti-menu" />
              </button>

              <Navigation isActive={isActive} />
            </div>
          </div>
        </div>
      </div>

      <MobileMenu 
        isVisible={isMobileMenuVisible}
        onClose={closeMobileMenu}
        isActive={isActive}
      />
    </header>
  );
}

export default Header;