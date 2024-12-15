"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
function Header() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [dropdowns, setDropdowns] = useState({});
  const [headerTheme, setHeaderTheme] = useState('default'); // 'default' or 'light'
  const pathname = usePathname();
  useEffect(() => {
    // Handle scroll for fixed header
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    // Update the header theme based on the pathname
 
    if (pathname === '/projects' || pathname ==="/contact") {
      setHeaderTheme('light');
     
    } else {
      setHeaderTheme('default');
    }
  }, [pathname]);
  const toggleDropdown = (index) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuVisible(false);
  };

  return (
    <header
    className={`main-header ${isHeaderFixed ? 'fixed-header' : ''} ${
      headerTheme === 'light' ? 'header-style-two' : 'header-style-one'
    }`}
  >
      {/* Header Upper */}
      <div className="header-upper">
        <div className="outer-container">
          <div className="inner-container clearfix">
            {/* Logo */}
            <div className="pull-left logo-box">
              <div className="logo">
                <Link href="index">
                  <img src="images/logo.png" alt="Logo" title="Logo" />
                </Link>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="nav-outer pull-left clearfix">
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <span className="icon ti-menu" />
              </div>

              <nav className="main-menu navbar-expand-md">
                <ul className="navigation clearfix">
                  <li className="current">
                    <Link href="">Home</Link>
                  </li>
                  <li>
                    <Link href="about">About</Link>
                  </li>
                  <li  >
                    <Link href="projects"  >
                      Projects
                    </Link>   
                  </li>
                  
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Outer Box */}
           
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuVisible ? 'visible' : ''}`}
      >
        <div className="menu-backdrop" onClick={closeMobileMenu}></div>
        <div className="close-btn" onClick={closeMobileMenu}>
          <span className="icon lnr lnr-cross" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="index">
              <img src="images/logo-2.png" alt="Logo" title="Logo" />
            </Link>
          </div>
          <ul className="menu-outer">
            <li>
              <Link href="index">Home</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="projects">Projects</Link>
            </li>
            <li>
              <Link href="blog">Blog</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
