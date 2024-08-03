"use client";
import Link from "next/link";
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
                        <span className="block relative w-6 h-0.5 bg-white transition duration-300 transform origin-center"></span>
                        <span className="block relative w-6 h-0.5 bg-white transition duration-300 transform mt-1.5 origin-center"></span>
                        <span className="block relative w-6 h-0.5 bg-white transition duration-300 transform mt-1.5 origin-center"></span>
                    </label>
                    <div className="absolute top-full left-0 right-0 bg-gray-800 flex flex-col items-center space-y-2 mt-2 p-4 transition-transform transform peer-checked:scale-100 scale-0">
                        <Link href="/about" className="text-nav block">
                            About
                        </Link>
                        <Link href="/services" className="text-nav block">
                            Teaching
                        </Link>
                        <Link href="/contact" className="text-nav block">
                            Research
                        </Link>
                        <Link href="/contact" className="text-nav block">
                            CV
                        </Link>
                    </div>
                </div>
                <div className="hidden sm:flex sm:items-center sm:space-x-4">
                    
                    <Link href="/about" className="text-nav block sm:inline-block">
                        About
                    </Link>
                    <Link href="/services" className="text-nav block sm:inline-block">
                        Teaching
                    </Link>
                    <Link href="/contact" className="text-nav block sm:inline-block">
                        Research
                    </Link>
                    <Link href="/contact" className="text-nav sm:inline-block">
                            CV
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
