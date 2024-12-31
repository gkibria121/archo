"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 100);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuVisible(false);
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
    return pathname.includes(route) ? 'current' : '';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
    if (!isMobileMenuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuVisible(false);
    document.body.style.overflow = 'visible';
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`main-header ${isHeaderFixed ? 'fixed-header' : ''} ${headerClass}`}>
      <div className="header-upper">
        <div className="outer-container">
          <div className="inner-container clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
                <Link href="/">
                  <img 
                    src={headerClass === 'header-style-two' ? "/images/logo-2.png" : "/images/logo.png"} 
                    alt="Logo" 
                    title="Logo" 
                  />
                </Link>
              </div>
            </div>

            <div className="nav-outer pull-left clearfix">
              <div 
                className="mobile-nav-toggler" 
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <span className="icon ti-menu" />
              </div>

              <nav className="main-menu navbar-expand-md">
                <ul className="navigation clearfix">
                  {menuItems.map(item => (
                    <li key={item.path} className={isActive(item.path)}>
                      <Link href={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuVisible && (
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={closeMobileMenu} />
          <div className="close-btn" onClick={closeMobileMenu}>
            <span className="icon lnr lnr-cross" />
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <Link href="/" onClick={closeMobileMenu}>
                <img src="/images/logo-2.png" alt="Logo" title="Logo" />
              </Link>
            </div>
            <ul className="menu-outer">
              {menuItems.map(item => (
                <li key={item.path} className={isActive(item.path)}>
                  <Link href={item.path} onClick={closeMobileMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;