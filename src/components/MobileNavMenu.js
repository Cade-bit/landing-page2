

export default function MobileNavMenu({ menuOpen, toggleMenu }) {
    return (
        <>
        <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1">
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
                        <a href="#about" className="px-4 py-2.5 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50">About</a>
                        <a href="#company" className="px-4 py-2.5 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50">Company</a>
                        <a href="#pricing" className="px-4 py-2.5 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50">Pricing</a>
                        <a href="#blogs" className="px-4 py-2.5 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50">Blogs</a>
                        <button className="flex items-center justify-center gap-2.5 bg-linear-to-r from-[#fce38a] to-[#f9a826] text-zinc-50 text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer border-0 mt-3 w-fit">
                            Get started now
                            <span className="size-7 rounded-full bg-white flex items-center justify-center">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#3f3f47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                        </button>
                    </div>
                )}
        </> 
    );
}