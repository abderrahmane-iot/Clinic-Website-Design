import { Link } from "react-router";
import {
  Award, BookOpen, Heart, Shield, CheckCircle,
  Microscope, Baby, Users, Stethoscope, Star, CalendarDays
} from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { CTABanner } from "../components/CTABanner";

const DOCTOR_IMG = "https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";

const focusAreas = [
  { icon: Baby, label: "متابعة الحمل الطبيعي", color: "#5C2D5C", bg: "#F0E8EE" },
  { icon: Shield, label: "الحمل عالي الخطورة", color: "#5C8F89", bg: "#EDF5F4" },
  { icon: Microscope, label: "الموجات فوق الصوتية", color: "#E8A0B4", bg: "#FDF0F5" },
  { icon: Heart, label: "رعاية ما بعد الولادة", color: "#5C2D5C", bg: "#F0E8EE" },
  { icon: Users, label: "تنظيم الأسرة", color: "#5C8F89", bg: "#EDF5F4" },
  { icon: Stethoscope, label: "الاستشارة النسائية", color: "#E8A0B4", bg: "#FDF0F5" },
];

const clinicStandards = [
  {
    icon: Shield,
    title: "معايير النظافة والتعقيم",
    desc: "تلتزم العيادة بأعلى معايير التعقيم وإجراءات مكافحة العدوى لضمان سلامتكِ في كل زيارة.",
  },
  {
    icon: Heart,
    title: "احترام الخصوصية",
    desc: "نضمن لكِ بيئة خاصة وسرية تامة في جميع مراحل الفحص والعلاج.",
  },
  {
    icon: CalendarDays,
    title: "الالتزام بالمواعيد",
    desc: "نحترم وقتكِ ونلتزم بالمواعيد المحددة مع إشعار مسبق عند أي تغيير.",
  },
  {
    icon: BookOpen,
    title: "شفافية المعلومات",
    desc: "نشرح لكِ كل خطوة بوضوح — التشخيص، خيارات العلاج، والمسار العلاجي المقترح.",
  },
];

export function About() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 px-4 md:pt-40 md:pb-20"
        style={{ background: "linear-gradient(135deg, #3D1E3C 0%, #5C2D5C 100%)" }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, #E8A0B4 0%, transparent 50%), radial-gradient(circle at 70% 80%, #A8CEC9 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
                style={{ background: "rgba(232,160,180,0.2)", color: "#E8A0B4", fontWeight: 700 }}
              >
                نبذة عن الدكتورة
              </span>
              <h1
                className="text-white mb-2"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.25 }}
              >
                د. بن الزين منصورة
              </h1>
              <p className="text-[#E8A0B4] mb-5 text-lg" style={{ fontWeight: 600 }}>
                أخصائية أمراض النساء والتوليد
              </p>
              <p className="text-white/75 leading-relaxed mb-8 max-w-lg">
                طبيبة متخصصة تجمع بين الخبرة الطبية العلمية والاهتمام الصادق بصحة المرأة. تؤمن بأن الرعاية الجيدة تبدأ بالاستماع الجيد.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 bg-white text-[#5C2D5C] px-6 py-3 rounded-full hover:bg-[#FDF0F5] transition-colors text-sm"
                  style={{ fontWeight: 700 }}
                >
                  <CalendarDays size={16} /> احجزي موعدك
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "rgba(232,160,180,0.2)",
                    transform: "translate(10px, 10px)",
                    borderRadius: "1.5rem",
                  }}
                />
                <img
                  src={DOCTOR_IMG}
                  alt="د. بن الزين منصورة"
                  className="relative z-10 rounded-3xl object-cover shadow-2xl"
                  style={{ width: 380, height: 460, objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 40 720 0 0 20L0 40Z" fill="#FDF8F5" />
          </svg>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 md:py-20 px-4 bg-[#FDF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                eyebrow="المؤهلات والخبرة"
                title="مسيرة طبية متميزة"
                subtitle="مزيج من التكوين الأكاديمي الرصين والخبرة الميدانية الواسعة."
              />
              <ul className="space-y-4">
                {[
                  {
                    icon: BookOpen,
                    label: "التكوين الأكاديمي",
                    value: "شهادة تخصص في أمراض النساء والتوليد",
                    color: "#5C2D5C",
                  },
                  {
                    icon: Award,
                    label: "سنوات الخبرة",
                    value: "أكثر من 10 سنوات في الممارسة السريرية المتخصصة",
                    color: "#5C8F89",
                  },
                  {
                    icon: Stethoscope,
                    label: "مجال التخصص",
                    value: "أمراض النساء، التوليد، الحمل عالي الخطورة",
                    color: "#E8A0B4",
                  },
                  {
                    icon: Star,
                    label: "المقاربة العلاجية",
                    value: "طب مبني على الأدلة مع الأخذ بعين الاعتبار الجانب الإنساني",
                    color: "#5C2D5C",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-[#5C2D5C]/08">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}15` }}
                    >
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-[#7A6080] text-xs mb-0.5" style={{ fontWeight: 600 }}>{item.label}</div>
                      <div className="text-[#2A1A2E] text-sm leading-snug" style={{ fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical Philosophy */}
            <div>
              <SectionHeader
                eyebrow="الفلسفة الطبية"
                title="نهجنا في الرعاية"
                subtitle="نؤمن بأن الطب الجيد يجمع بين العلم والإنسانية."
              />
              <div className="space-y-4">
                {[
                  {
                    title: "الاستماع أولاً",
                    desc: "نخصص وقتاً كافياً للاستماع لمخاوفكِ وأسئلتكِ قبل أي تشخيص أو توصية.",
                    color: "#5C2D5C",
                  },
                  {
                    title: "الطب المبني على الأدلة",
                    desc: "نتبع أحدث البروتوكولات العلمية المعتمدة مع مراعاة الخصوصية الفردية لكل حالة.",
                    color: "#5C8F89",
                  },
                  {
                    title: "الشفافية والوضوح",
                    desc: "نشرح التشخيص والخيارات العلاجية بلغة واضحة ومفهومة، ونُشرككِ في اتخاذ القرار.",
                    color: "#E8A0B4",
                  },
                  {
                    title: "الاستمرارية في المتابعة",
                    desc: "ليست الزيارة نهاية العلاقة — نتابع معكِ خطوة بخطوة طوال مرحلة العلاج أو الحمل.",
                    color: "#5C2D5C",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#5C2D5C]/08 hover:shadow-sm transition-shadow">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ background: item.color }}
                    />
                    <div>
                      <h4 className="text-[#2A1A2E] mb-1 text-sm" style={{ fontWeight: 700 }}>
                        {item.title}
                      </h4>
                      <p className="text-[#7A6080] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section
        className="py-16 md:py-20 px-4"
        style={{ background: "linear-gradient(135deg, #5C2D5C 0%, #3D1E3C 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="مجالات التخصص"
            title="مجالات الاهتمام والتخصص"
            subtitle="تُقدم الدكتورة منصورة رعاية متخصصة في هذه المجالات الطبية الدقيقة."
            center
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {focusAreas.map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(232,160,180,0.15)" }}
                >
                  <area.icon size={22} style={{ color: "#E8A0B4" }} />
                </div>
                <span className="text-white text-sm" style={{ fontWeight: 600 }}>{area.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Standards */}
      <section className="py-16 md:py-20 px-4 bg-[#FDF8F5]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="معايير العيادة"
            title="بيئة طبية آمنة ومحترمة"
            subtitle="نلتزم بأعلى معايير الجودة في كل جانب من جوانب عملنا."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinicStandards.map((standard, i) => (
              <div key={i} className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-[#5C2D5C]/08 hover:shadow-md transition-shadow">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "#F0E8EE" }}
                >
                  <standard.icon size={22} style={{ color: "#5C2D5C" }} />
                </div>
                <div>
                  <h3 className="text-[#2A1A2E] mb-2 text-base" style={{ fontWeight: 700 }}>
                    {standard.title}
                  </h3>
                  <p className="text-[#7A6080] text-sm leading-relaxed">{standard.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#2A1A2E] mb-3" style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800 }}>
            هل تودين حجز موعد مع الدكتورة؟
          </h2>
          <p className="text-[#7A6080] mb-7 text-sm leading-relaxed">
            لا تترددي في التواصل معنا. سنجيب على أسئلتكِ ونحدد لكِ الموعد الأنسب.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-[#5C2D5C] text-white px-7 py-3.5 rounded-full hover:bg-[#3D1E3C] transition-colors shadow-md text-sm"
              style={{ fontWeight: 700 }}
            >
              <CalendarDays size={16} /> احجزي موعدك
            </Link>
            <Link
              to="/services"
              className="flex items-center gap-2 border-2 border-[#5C2D5C] text-[#5C2D5C] px-7 py-3.5 rounded-full hover:bg-[#5C2D5C] hover:text-white transition-all text-sm"
              style={{ fontWeight: 700 }}
            >
              <CheckCircle size={16} /> اكتشفي خدماتنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
