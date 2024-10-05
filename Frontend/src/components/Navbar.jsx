import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// react-icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    // toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const handleLogout = () => {
        logout().then(() => {
            alert("Logged out successfully!");
            navigate('/'); // Redirect to homepage or any other page
        }).catch((error) => {
            console.error("Logout error:", error);
        });
    }

    // nav items here
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" }
    ]

    return (
        <header className='w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "bg-green-700 text-white" : "bg-transparent text-black"}`}>
                <div className='flex justify-between items-center text-base gap'>
                    {/* logo */}
                    <Link className='text-2xl font-bold flex-item-center gap-8' to="/">
                        <FaBlog className='inline-block' />
                        Books
                    </Link>

                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => 
                                <Link className='block text-base cursor-pointer hover:text-green-300' key={path} to={path}>
                                    {link}
                                </Link>
                            )
                        }
                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-green-300' /></button>
                        {user ? user.email : " "}
                        {user &&
                            <button className='text-white cursor-pointer hover:bg-red-800 bg-red-600 px-4 py-2 rounded-md' onClick={handleLogout}>
                                Logout
                            </button>
                        }
                    </div>

                    {/* menu for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5' /> : <FaBarsStaggered className='h-5 w-5' />
                            }
                        </button>
                    </div>
                </div>
                {/* nav-item for small devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 rounded-md ${isMenuOpen ? "block fixed top-8 right-8 left-8 bg-green-700 text-white" : "hidden"}`}>
                    {navItems.map(({ link, path }) => 
                        <Link key={path} to={path} className='block text-base uppercase cursor-pointer'>
                            {link}
                        </Link>
                    )}
                    {user &&
                        <button className='block text-base uppercase cursor-pointer text-white' onClick={handleLogout}>
                            Logout
                        </button>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
