import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='fixed top-0 left-0 right-0 z-50 background  '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex-shrink-0 transition-all duration-300 ease-in-out'>
                        <div className='logo'></div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none'
                    >
                        <svg
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            {isOpen ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            )}
                        </svg>
                    </button>

                    {/* Desktop navigation */}
                    <nav className='hidden md:flex space-x-8'>
                        {['Home', 'About', 'Services', 'Contact', 'Blog'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className='relative group px-3 py-2 text-sm font-semibold text-black hover:text-gray-900 transition-colors duration-300'
                            >
                                <span>{item}</span>
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full'></span>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile navigation */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                    <div className='px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg rounded-b-lg shadow-lg'>
                        {['Home', 'About', 'Services', 'Contact', 'Blog'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className='block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200'
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header