// components/navigation/MobileMenu.jsx
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function MobileMenu({ isVisible, onClose, isActive }) {
  if (!isVisible) return null;

  return (
    <div className="mobile-menu" data-testid="mobile-menu">
      <div className="menu-backdrop" onClick={onClose} data-testid="menu-backdrop" />
      <div className="close-btn" onClick={onClose} data-testid="close-button">
        <span className="icon lnr lnr-cross" />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <Logo variant="dark" onClick={onClose} />
        </div>
        <Navigation isActive={isActive} onClick={onClose} />
      </nav>
    </div>
  );
}