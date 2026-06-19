import { useEffect, useState } from "react";
import { Link } from "wouter";
import { assetPath } from "@/lib/assets";

const logoPath = assetPath("favicon.png");

const navLinks = [
  { label: "Product", id: "product" },
  { label: "Solutions", id: "solutions" },
  { label: "Enterprise", id: "enterprise" },
  { label: "Resources", id: "resources" },
  { label: "Company", id: "company" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 64;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled || open
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80"
            : "bg-white"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <Link href="https://deepsochai-six.vercel.app/" className="flex items-center gap-2.5 cursor-pointer shrink-0">
            <img src={logoPath} alt="DeepSoch AI" className="w-7 h-7 rounded-lg object-contain bg-black" />
            <span className="text-[15px] font-semibold tracking-tight text-[#1D1D1F]">DeepSoch AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-[13px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Link href="/contact" className="text-[13px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors px-4 py-2">
              Log In
            </Link>
            <Link href="/contact" className="text-[13px] font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg">
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setOpen((value) => !value)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-gray-100 transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-[#1D1D1F] rounded-full transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#1D1D1F] rounded-full transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#1D1D1F] rounded-full transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-200 overflow-hidden border-t border-gray-100 ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="text-[15px] font-medium text-[#1D1D1F] py-3 border-b border-gray-100 last:border-0 hover:text-blue-600 transition-colors text-left bg-transparent border-0 w-full"
                style={{ borderBottom: "1px solid #f3f4f6" }}
              >
                {label}
              </button>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Link href="/contact" onClick={() => setOpen(false)} className="text-[15px] font-medium text-[#1D1D1F] text-center py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Log In
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="text-[15px] font-medium text-white text-center py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/10 md:hidden" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
