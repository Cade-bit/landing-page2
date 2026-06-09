import React from 'react';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import MobileNavMenu from './MobileNavMenu';

export default function Nav() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }
  return (
    <>
         <nav className="bg-white px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex items-center justify-between relative shadow-lg/30">
                <div className="flex items-center gap-20">
                    <NavLogo />
                    <NavLinks />
                </div>

                <MobileNavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />

                <button className="hidden md:flex items-center gap-2.5 bg-linear-to-r from-[#fce38a] to-[#f9a826] text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border-0">
                    Get started now
                    <span className="size-7 rounded-full bg-white flex items-center justify-center">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#3f3f47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                </button>

                
            </nav>
    </>
    );
}