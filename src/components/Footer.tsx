import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Builds", href: "#builds" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 bg-[#07070D] border-t border-white/5 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 md:gap-20">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="font-heading text-2xl font-black flex items-center gap-1 group">
              <span className="text-indigo transition-transform group-hover:scale-110 duration-500">AI</span>
              <span className="text-white group-hover:opacity-80 transition-opacity">Workz360</span>
            </Link>
            <p className="text-muted text-xs font-mono tracking-widest uppercase opacity-60">
              The AI Team You Don't Have to Hire.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
             {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-white transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo transition-all duration-300 group-hover:w-full"></span>
                </Link>
             ))}
          </div>

          {/* Copyright/LLC */}
          <div className="flex flex-col items-center md:items-end gap-2">
             <span className="text-[11px] font-mono text-muted uppercase tracking-[0.2em] mb-1">
                © {new Date().getFullYear()} AIWorkz360 | ITWorkz360 LLC
             </span>
             <div className="flex items-center gap-4 text-[10px] text-muted italic opacity-50 uppercase tracking-widest">
                <span>Secure</span>
                <span>•</span>
                <span>Compliant</span>
                <span>•</span>
                <span>Built US/PH</span>
             </div>
          </div>
        </div>
      </div>

      {/* Subtle Glow Ornament */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo/5 rounded-full blur-[80px] pointer-events-none"></div>
    </footer>
  );
}
