import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar(){

    const [mode, setMode] = useState<boolean|null>(null);
useEffect(()=>{
    window.history.scrollRestoration = "manual";
    const darkMode = window && localStorage.getItem("darkMode") === "dark" ? true : false;  
    setMode(darkMode)
}, [])

const switchMode = () => {
    setMode((mode)=> !mode )
    document.body?.removeAttribute("class")
    document.body?.classList.add(mode? "dark" : "light")
    //${isDark ? "dark" : "light"}
}


    return(
        <>
        <div className="fixed w-full z-50 shadow-sm"><nav className="border-b border-gray-900 bg-black/30"><div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 backdrop-blur-md"><div className="relative flex justify-between w-full h-full"><div className="relative flex-shrink-0 flex items-center"><Link className="cursor-pointer" href="/"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562 391" width="1em" height="1em" className="text-4xl text-white"><path d="M434 1.8c0 .7 56.5 121.7 58.6 125.5.9 1.5 7.1-9.7 34.7-61.6C545.8 30.8 561 2 561 1.6c0-.3-28.6-.6-63.5-.6s-63.5.4-63.5.8zM255.8 3.5c-22.4.6-41 1.4-41.4 1.7-.3.4 20.1 49.2 45.4 108.5 25.4 59.2 46 107.9 45.8 108.1-.2.2-31.8-17.8-70.1-40l-69.6-40.3L135.3 74c-16.9-37.1-30.8-67.7-31-67.9C103.8 5.4 2 3.7 1.4 4.3c-.3.3 35.3 86.5 79.3 191.6L160.5 387h51.8c30 0 51.7-.4 51.7-.9s-13.1-32.5-29-71.1c-16-38.7-28.8-70.5-28.5-70.9.4-.3 23.1-5.1 50.5-10.6l49.9-10.1 33.6 78.8c25.5 59.7 34.1 78.8 35.3 78.8 10.9-.3 103.4-4.9 103.7-5.2.3-.3-35.2-84.4-78.8-187.1L321.5 2l-12.5.2c-6.9.1-30.8.6-53.2 1.3z"></path></svg></Link></div><div className="flex items-center lg:hidden"><button className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"><span className="sr-only">Open main menu</span><svg fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="block h-6 w-6 text-white" aria-hidden="true"><g data-name="ARROW 48"><path d="M488 63.38H24a24 24 0 0 0 0 48h464a24 24 0 1 0 0-48zM488 400.62H24a24 24 0 0 0 0 48h464a24 24 0 0 0 0-48zM488 232H24a24 24 0 0 0 0 48h464a24 24 0 0 0 0-48z"></path></g></svg></button></div><div className="hidden absolute pointer-events-none inset-0 lg:block"><div className="h-full w-2/3 mx-auto lg:flex space-x-12 items-center justify-center pointer-events-auto text-gray-300 text-sm"><button type="button" className="hover:text-white transition flex gap-2 items-center h-full"><span style={{transform: "none"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></span></button><a className="hover:text-white transition flex items-center h-full" href="/contact">Contact</a></div></div><div className="relative hidden md:flex items-center group"><button disabled={true} className="text-gray-100 bg-gray-100/10 py-2.5 px-4 rounded-md md:mr-6 text-sm cursor-not-allowed">Sign In</button><p className="transition opacity-0 group-hover:opacity-100 absolute -left-12 text-gray-300 text-xs">soon</p></div></div></div>

<label className="swap swap-rotate">
  <input type="checkbox" onChange={switchMode}/>
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
</label>
        </nav>

        <div className="relative z-40 top-full left-0 right-0 h-12 border-b border-gray-900 backdrop-blur-md bg-black/30" style={{transformOrigin: "50% top 0px;", transform: "none"}}><ul className="flex h-full justify-center gap-8 text-gray-400 text-sm items-center" style={{opacity: 1}}><li><a className="hover:text-white transition" href="/features/autocomplete">Autocomplete</a></li><li><Link className="hover:text-white transition" href="/features/paraphrase">Paraphrase</Link></li></ul></div>
        </div>
{/* 
        <div className="fixed overflow-hidden mt-20 inset-0 z-50 bg-black/25 backdrop-blur-md p-6 font-medium" style={{transform: 'translateX(0%) translateZ(0px)'}}><ul className="text-gray-400 text-2xl space-y-6"><li style={{opacity: 1, transform: 'translateX(0%) translateZ(0px)'}}>Solution <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" className="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg><ul className="text-xl ml-3 mt-4 space-y-4 font-normal"><li style={{opacity: 1, transform: 'translateX(0%) translateZ(0px)'}}><a href="/features/autocomplete">Autocomplete</a></li><li style={{opacity: 1, transform: 'translateX(0%) translateZ(0px)'}}><a href="/features/paraphrase">Paraphrase</a></li></ul></li><li style={{opacity: 1, transform: 'translateX(0%) translateZ(0px)'}}><a href="/contact">Contact</a></li></ul></div> */}
        </>
    )
}