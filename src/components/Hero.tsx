import Image from "next/image";

export default function Hero(){
    return(
        <>
        <div className="pointer-events-none absolute inset-0 custom-homepage-gradient" style={{opacity: '0.3'}} />
      <div className="relative mt-12"><div className="pointer-events-none absolute inset-0 custom-homepage-gradient" style={{opacity: '0.25'}} /><div className="relative w-full max-w-6xl shadow-indigo-800/10 rounded-2xl border overflow-hidden border-indigo-500/40"><div className="relative z-10 mx-5 w-full h-full"><div className="absolute w-10 h-px bg-indigo-500" style={{opacity: '6.82672e-06', transform: 'translateX(1132.02px) scaleX(0.0100871) translateZ(0px)'}} /><div className="absolute w-10 h-px bg-indigo-500" style={{opacity: 0, transform: 'translateX(761.341px) scaleX(0.18896) translateZ(0px)'}} /><div className="absolute w-10 h-px bg-indigo-500" style={{opacity: '0.161312', transform: 'translateX(216.98px) scaleX(0.370984) translateZ(0px)'}} /><div className="absolute w-10 h-px bg-indigo-500" style={{opacity: '0.841853', transform: 'translateX(120.92px) scaleX(0.841853) translateZ(0px)'}} /><div className="absolute right-5 h-10 w-px bg-indigo-500" style={{opacity: '6.82672e-06', transform: 'translateY(210.108px) scaleY(0.0100871) translateZ(0px)'}} /><div className="absolute right-5 h-10 w-px bg-indigo-500" style={{opacity: '0.161312', transform: 'translateY(598.951px) scaleY(0.370984) translateZ(0px)'}} /></div><div><span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%'}}><span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%'}}>
        <img style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0}} alt="" aria-hidden="true" src="https://www.wordful.ai/_next/image?url=%2Fapppreview.jpg&w=3840&q=75" />
        </span>
      {/* <img alt=""  src="/_next/image?url=%2Fapppreview.jpg&w=3840&q=75" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} /> */}
      </span></div></div></div>
  
        </>
    )
}