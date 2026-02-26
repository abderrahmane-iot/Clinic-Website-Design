import { Link } from "react-router";
import { CalendarDays, MessageCircle } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "هل أنتِ مستعدة لبدء رحلتك معنا؟",
  subtitle = "احجزي موعدكِ اليوم واحصلي على رعاية متكاملة في بيئة آمنة وخاصة.",
}: CTABannerProps) {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-3xl px-6 py-12 md:py-16 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #5C2D5C 0%, #3D1E3C 60%, #5C2D5C 100%)",
          }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: "#E8A0B4", transform: "translate(30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
            style={{ background: "#A8CEC9", transform: "translate(-30%, 30%)" }}
          />

          <div className="relative z-10">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
              style={{
                background: "rgba(232,160,180,0.2)",
                color: "#E8A0B4",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              ابدئي الآن
            </span>
            <h2
              className="text-white mb-4"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800 }}
            >
              {title}
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-white text-[#5C2D5C] px-7 py-3.5 rounded-full hover:bg-[#FDF0F5] transition-colors shadow-lg"
                style={{ fontWeight: 700 }}
              >
                <CalendarDays size={18} />
                <span>احجزي موعدك</span>
              </Link>
              <a
                href="https://wa.me/213XXXXXXXXX?text=السلام عليكم، أرغب في حجز موعد"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-full hover:bg-[#20b859] transition-colors shadow-lg"
                style={{ fontWeight: 700 }}
              >
                <MessageCircle size={18} />
                <span>تواصلي عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
