"use client";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useEffect, useState } from "react";

const Navbar = () => {
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setShadow(true);
            } else {
                setShadow(false);
            }

            Events.scrollEvent.register('begin', (to: any, element: any) => {
                //console.log('begin', to, element);
              });
          
              // Registering the 'end' event and logging it to the console when triggered.
              Events.scrollEvent.register('end', (to: any, element: any) => {
                // console.log('end', to, element);
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
    }, []);
    
    return (
        <nav className={`p-4 sticky top-0 bg-white z-20 transition-shadow duration-300 ${shadow ? 'shadow-lg' : ''}`}>
            <div className="max-w-7xl mx-auto">
                <div className="sm:hidden relative">
                    <input type="checkbox" id="menu-toggle" className="absolute opacity-0 peer"/>
                    <label htmlFor="menu-toggle" className="block md:hidden cursor-pointer text-white relative z-20">
                        <span className="block relative w-6 h-0.5 bg-black transition duration-300 transform origin-center"></span>
                        <span className="block relative w-6 h-0.5 bg-black transition duration-300 transform mt-1.5 origin-center"></span>
                        <span className="block relative w-6 h-0.5 bg-black transition duration-300 transform mt-1.5 origin-center"></span>
                    </label>
                    <div className="absolute top-full left-0 right-0 bg-gray-800 flex flex-col items-center space-y-2 mt-2 p-4 transition-transform transform peer-checked:scale-100 scale-0">
                        <Link to="about" smooth={true} duration={500} className="text-nav block cursor-pointer">
                            About
                        </Link>
                        <Link to="teaching" smooth={true} duration={500} className="text-nav block cursor-pointer">
                            Teaching
                        </Link>
                        <Link to="research" smooth={true} duration={500} className="text-nav block cursor-pointer">
                            Research
                        </Link>
                        {/* <Link href="/contact" className="text-nav block">
                            CV
                        </Link> */}
                    </div>
                </div>
                <div className="hidden sm:flex sm:items-center sm:space-x-4">
                    
                    <Link to="about" smooth={true} duration={500} className="text-nav block sm:inline-block cursor-pointer">
                        About
                    </Link>
                    <Link to="teaching" smooth={true} duration={500}  className="text-nav block sm:inline-block cursor-pointer">
                        Teaching
                    </Link>
                    <Link to="research" smooth={true} duration={500}  className="text-nav block sm:inline-block cursor-pointer">
                        Research
                    </Link>
                    {/* <Link href="/contact" className="text-nav sm:inline-block">
                            CV
                    </Link> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
