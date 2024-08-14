"use client";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useEffect, useState } from "react";

const Navbar = () => {
    const [shadow, setShadow] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setShadow(true);
            } else {
                setShadow(false);
            }

            Events.scrollEvent.register('begin', (to: any, element: any) => {
                // setMenuOpen(false);
              });
          
              // Registering the 'end' event and logging it to the console when triggered.
              Events.scrollEvent.register('end', (to: any, element: any) => {
                //console.log('end', to, element);
              });
          
              // Updating scrollSpy when the component mounts.
              scrollSpy.update();
          
              // Returning a cleanup function to remove the registered events when the component unmounts.
              return () => {
                Events.scrollEvent.remove('begin');
                Events.scrollEvent.remove('end');
              };
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, [menuOpen]);
    
    const handleToggleMenu = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };
    
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };



    return (
        <nav className={`sticky top-0 max-w-7xl mx-auto bg-white z-20 transition-shadow duration-300 ${shadow ? 'shadow-lg' : ''}`}>
            <div className="max-w-7xl mx-auto">
                <div className="sm:hidden relative px-16 py-4 ">
                    <button onClick={handleToggleMenu} className="md:hidden text-white relative w-8 h-8">
                        <span
                            className={`block absolute w-8 h-0.5 bg-black transform transition duration-300 ease-in-out ${
                            menuOpen ? 'rotate-45 top-3.5' : 'top-2'
                            }`}
                        ></span>
                        <span
                            className={`block absolute w-8 h-0.5 bg-black transition-opacity duration-300 ease-in-out ${
                            menuOpen ? 'opacity-0' : 'opacity-100 top-4'
                            }`}
                        ></span>
                        <span
                            className={`block absolute w-8 h-0.5 bg-black transform transition duration-300 ease-in-out ${
                            menuOpen ? '-rotate-45 top-3.5' : 'top-6'
                            }`}
                        ></span>
                    </button>
                    <div onClick={handleToggleMenu} className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 top-full bg-tiffany h-screen w-screen flex-col space-y-2 md:hidden transition-opacity duration-1000 opacity-100 z-10 px-16 py-4 `}>
                        <Link to="about" smooth={true} duration={500} className="text-nav-menu">
                            <button onClick={handleToggleMenu}>About</button>
                        </Link>
                        <Link to="teaching" smooth={true} duration={500} className="text-nav-menu">
                            <button onClick={handleToggleMenu}>Teaching</button>
                        </Link>
                        <Link to="research" smooth={true} duration={500} className="text-nav-menu">
                            <button onClick={handleToggleMenu}>Research</button>
                        </Link>
                        <a href="/data/Vu_cv.pdf" className="text-nav-menu" target="_blank">
                            <button onClick={handleToggleMenu}>CV</button>

                        </a>
                    </div>
                </div>
                <div className="hidden sm:flex sm:items-center sm:space-x-4 px-16 py-4 ">
                    
                    <Link to="about" smooth={true} duration={500} className="text-nav">
                        About
                    </Link>
                    <Link to="teaching" smooth={true} duration={500}  className="text-nav">
                        Teaching
                    </Link>
                    <Link to="research" smooth={true} duration={500}  className="text-nav">
                        Research
                    </Link>
                    <a href="/data/Vu_cv.pdf" className="text-nav" target="_blank">
                            CV
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
