// src/components/NavLink.jsx
import { NavLink as BaseNavLink } from 'react-router-dom';

export default function NavLink({ to, children }) {
  return (
    <BaseNavLink
      to={to}
      className={({ isActive }) =>
        `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
          isActive
            ? 'border-indigo-500 text-gray-900'
            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
        }`
      }
    >
      {children}
    </BaseNavLink>
  );
}