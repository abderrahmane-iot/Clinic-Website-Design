import { Link } from "react-router";
import { CalendarDays, MessageCircle } from "lucide-react";

export function MobileCTABar() {
  return (
    <div className="md:hidden fixed bottom-0 right-0 left-0 z-50 bg-white border-t border-[#5C2D5C]/10 shadow-[0_-4px_20px_rgba(92,45,92,0.12)] safe-area-pb">
      <div className="flex items-stretch h-16">
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-[#5C2D5C] text-white hover:bg-[#3D1E3C] transition-colors"
          style={{ fontWeight: 700 }}
        >
          <CalendarDays size={18} />
          <span className="text-sm">احجزي موعد</span>
        </Link>
        <a
          href="https://wa.me/213XXXXXXXXX?text=السلام عليكم، أرغب في حجز موعد"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20b859] transition-colors"
          style={{ fontWeight: 700 }}
        >
          <MessageCircle size={18} />
          <span className="text-sm">واتساب</span>
        </a>
      </div>
    </div>
  );
}
