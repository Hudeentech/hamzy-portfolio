import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Nav.css';

const Nav = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/#services' }, // Hash link handling might need adjustment if using Router exclusively
        { label: 'Works', path: '/Project' },
        { label: 'About', path: '/About' }, 
    ];

    // Simple icons
    const SunIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
    );

    const MoonIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
    );

    const MenuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    );

    const CloseIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    );

    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    {/* Logo */}
                    <div className="nav-logo" onClick={() => window.location.href = '/'}>
                        DANESI<span>.</span>
                    </div>

                    {/* Desktop Links */}
                    <ul className="nav-links">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-link-item">
                                <NavLink 
                                    to={item.path} 
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Actions */}
                    <div className="nav-actions">
                        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                        </button>
                        
                        <a href="#contact" className="btn btn-primary nav-cta">
                            Let's Talk
                        </a>

                        <button className="mobile-menu-btn" onClick={() => setIsMobileOpen(true)}>
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div className={`mobile-backdrop ${isMobileOpen ? 'open' : ''}`} onClick={() => setIsMobileOpen(false)}></div>
            <div className={`mobile-sidebar ${isMobileOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <button className="close-btn" onClick={() => setIsMobileOpen(false)}>
                        <CloseIcon />
                    </button>
                </div>
                <ul className="mobile-nav-list">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <NavLink 
                                to={item.path} 
                                onClick={() => setIsMobileOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <a 
                            href="#contact" 
                            className="btn btn-primary nav-cta-mobile" 
                            style={{marginTop: '1rem', width: 'fit-content', padding: '0.6rem 1.5rem', whiteSpace: 'nowrap', fontSize: '0.9rem'}} 
                            onClick={() => setIsMobileOpen(false)}
                        >
                            Let's Talk
                        </a>
                    </li>

                </ul>
            </div>
        </>
    );
};

export default Nav;
