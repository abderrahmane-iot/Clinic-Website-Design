import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "الرئيسية", to: "/" },
  { label: "عن الدكتورة", to: "/about" },
  { label: "الخدمات", to: "/services" },
  { label: "متابعة الحمل", to: "/pregnancy-care" },
  { label: "التوليد", to: "/obstetrics" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#5C2D5C]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <Link to="/" className="flex flex-col items-end gap-0">
            <span
              className="text-[#5C2D5C] tracking-wide"
              style={{ fontSize: "1.1rem", fontWeight: 800, lineHeight: 1.2 }}
            >
              عيادة د. بن الزين منصورة
            </span>
            <span
              className="text-[#7A6080]"
              style={{ fontSize: "0.72rem", fontWeight: 500 }}
            >
              أخصائية أمراض النساء والتوليد
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors text-sm ${
                    isActive
                      ? "text-[#5C2D5C] bg-[#F5D5E0]/50"
                      : scrolled
                      ? "text-[#2A1A2E] hover:text-[#5C2D5C] hover:bg-[#F5D5E0]/30"
                      : "text-[#2A1A2E] hover:text-[#5C2D5C] hover:bg-white/30"
                  }`
                }
                style={{ fontWeight: 600 }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+213XXXXXXXXX"
              className="flex items-center gap-2 text-[#5C2D5C] hover:text-[#3D1E3C] transition-colors text-sm"
              style={{ fontWeight: 600 }}
            >
              <Phone size={15} />
              <span>اتصلي بنا</span>
            </a>
            <Link
              to="/contact"
              className="bg-[#5C2D5C] text-white px-5 py-2.5 rounded-full text-sm hover:bg-[#3D1E3C] transition-colors shadow-sm"
              style={{ fontWeight: 600 }}
            >
              احجزي موعدك
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[#5C2D5C] hover:bg-[#F5D5E0]/40 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="القائمة"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#5C2D5C]/10 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm transition-colors ${
                    isActive
                      ? "text-[#5C2D5C] bg-[#F5D5E0]/50"
                      : "text-[#2A1A2E] hover:text-[#5C2D5C] hover:bg-[#F5D5E0]/30"
                  }`
                }
                style={{ fontWeight: 600 }}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3 pb-2 flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-[#5C2D5C] text-white px-5 py-3 rounded-full text-center text-sm hover:bg-[#3D1E3C] transition-colors"
                style={{ fontWeight: 600 }}
              >
                احجزي موعدك
              </Link>
              <a
                href="https://wa.me/213XXXXXXXXX"
                className="bg-[#25D366] text-white px-5 py-3 rounded-full text-center text-sm hover:bg-[#20b859] transition-colors flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <span>تواصلي عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
