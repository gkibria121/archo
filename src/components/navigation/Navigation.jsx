// components/navigation/Navigation.jsx
import Link from 'next/link';
import { menuItems } from './MenuItems';

export function Navigation({ isActive, onClick }) {
  return (
    <nav className="main-menu navbar-expand-md" data-testid="main-navigation">
      <ul className="navigation clearfix">
        {menuItems.map(item => (
          <li key={item.path} className={isActive(item.path)} data-testid={`nav-item-${item.label.toLowerCase()}`}>
            <Link href={item.path} onClick={onClick}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}