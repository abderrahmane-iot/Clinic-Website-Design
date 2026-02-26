import { Link } from "react-router";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#3D1E3C] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-white mb-1" style={{ fontWeight: 800, fontSize: "1.1rem" }}>
                عيادة د. بن الزين منصورة
              </h3>
              <p className="text-[#E8A0B4] text-sm" style={{ fontWeight: 500 }}>
                أخصائية أمراض النساء والتوليد
              </p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              عناية متكاملة بصحة المرأة في بيئة آمنة وخاصة. نحرص على تقديم رعاية طبية على أعلى مستوى من الاحترافية والدفء الإنساني.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://wa.me/213XXXXXXXXX"
                className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm hover:bg-[#20b859] transition-colors"
                style={{ fontWeight: 600 }}
              >
                واتساب
              </a>
              <a
                href="tel:+213XXXXXXXXX"
                className="border border-[#E8A0B4]/40 text-[#E8A0B4] px-4 py-2 rounded-full text-sm hover:bg-[#E8A0B4]/10 transition-colors"
                style={{ fontWeight: 600 }}
              >
                اتصال مباشر
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#E8A0B4] mb-4 text-sm tracking-wider uppercase" style={{ fontWeight: 700 }}>
              روابط سريعة
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "الرئيسية", to: "/" },
                { label: "عن الدكتورة", to: "/about" },
                { label: "خدماتنا", to: "/services" },
                { label: "متابعة الحمل", to: "/pregnancy-care" },
                { label: "التوليد والولادة", to: "/obstetrics" },
                { label: "تواصلي معنا", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/70 hover:text-[#E8A0B4] transition-colors text-sm"
                    style={{ fontWeight: 500 }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-[#E8A0B4] mb-4 text-sm tracking-wider uppercase" style={{ fontWeight: 700 }}>
              خدماتنا
            </h4>
            <ul className="space-y-2.5">
              {[
                "متابعة الحمل الطبيعي",
                "متابعة الحمل عالي الخطورة",
                "الفحص بالموجات فوق الصوتية",
                "تخطيط الولادة",
                "رعاية ما بعد الولادة",
                "تنظيم الأسرة",
                "الاستشارة النسائية",
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-[#E8A0B4] transition-colors text-sm"
                    style={{ fontWeight: 500 }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#E8A0B4] mb-4 text-sm tracking-wider uppercase" style={{ fontWeight: 700 }}>
              معلومات الاتصال
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E8A0B4] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">
                  عنوان العيادة – المدينة، الجزائر
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#E8A0B4] shrink-0" />
                <a href="tel:+213XXXXXXXXX" className="text-white/70 hover:text-[#E8A0B4] text-sm transition-colors" dir="ltr">
                  +213 XX XX XX XX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#E8A0B4] shrink-0" />
                <a href="mailto:contact@clinique-bz.dz" className="text-white/70 hover:text-[#E8A0B4] text-sm transition-colors">
                  contact@clinique-bz.dz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#E8A0B4] mt-0.5 shrink-0" />
                <div className="text-white/70 text-sm">
                  <p>الأحد – الخميس: 9:00 – 18:00</p>
                  <p>السبت: 9:00 – 13:00</p>
                  <p className="text-[#E8A0B4]/70 text-xs mt-0.5">الجمعة: مغلق</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs text-center md:text-right">
              © {new Date().getFullYear()} عيادة د. بن الزين منصورة – جميع الحقوق محفوظة
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                إخلاء المسؤولية
              </Link>
            </div>
          </div>
          <p className="text-white/25 text-xs text-center mt-3">
            المحتوى الطبي على هذا الموقع للأغراض المعلوماتية فقط ولا يُغني عن الاستشارة الطبية المتخصصة.
          </p>
        </div>
      </div>
    </footer>
  );
}
