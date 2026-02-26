import { Link } from "react-router";
import {
  Shield, Heart, Clock, Star, Phone, MapPin,
  CalendarDays, MessageCircle, Award, Baby,
  Stethoscope, Microscope, Users, CheckCircle,
  ChevronLeft
} from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTABanner } from "../components/CTABanner";

const DOCTOR_IMG = "https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const CLINIC_IMG = "https://images.unsplash.com/photo-1735013531564-a419dc5f31ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const PREGNANT_IMG = "https://images.unsplash.com/photo-1543270216-7c25819fe5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";

const services = [
  {
    icon: Baby,
    title: "متابعة الحمل",
    desc: "رعاية دورية شاملة من الأسابيع الأولى حتى الوضع",
    to: "/pregnancy-care",
    color: "#5C2D5C",
    bg: "#FDF0F5",
  },
  {
    icon: Heart,
    title: "الحمل عالي الخطورة",
    desc: "متابعة متخصصة للحالات التي تحتاج عناية فائقة",
    to: "/pregnancy-care",
    color: "#E8A0B4",
    bg: "#FDF0F5",
  },
  {
    icon: Stethoscope,
    title: "تخطيط الولادة",
    desc: "استشارة شاملة لتحديد الخيار الأنسب لوضعكِ",
    to: "/obstetrics",
    color: "#5C8F89",
    bg: "#EDF5F4",
  },
  {
    icon: Microscope,
    title: "الموجات فوق الصوتية",
    desc: "فحص بالإيكوغرافيا لمتابعة نمو الجنين",
    to: "/services",
    color: "#5C2D5C",
    bg: "#F0E8EE",
  },
  {
    icon: Users,
    title: "رعاية ما بعد الولادة",
    desc: "متابعة الأم والمولود في المرحلة النفاسية",
    to: "/obstetrics",
    color: "#E8A0B4",
    bg: "#FDF0F5",
  },
  {
    icon: Shield,
    title: "الاستشارة النسائية",
    desc: "تشخيص وعلاج أمراض النساء بسرية تامة",
    to: "/services",
    color: "#5C8F89",
    bg: "#EDF5F4",
  },
  {
    icon: CalendarDays,
    title: "تنظيم الأسرة",
    desc: "استشارة وتخطيط الأسرة وفق احتياجاتكِ",
    to: "/services",
    color: "#5C2D5C",
    bg: "#F0E8EE",
  },
  {
    icon: Award,
    title: "الفحص الدوري",
    desc: "فحوصات الصحة الإنجابية والوقاية المنتظمة",
    to: "/services",
    color: "#E8A0B4",
    bg: "#FDF0F5",
  },
];

const trustPillars = [
  {
    icon: Shield,
    title: "خصوصية تامة",
    desc: "بيئة آمنة ومحترمة تضمن لكِ السرية الكاملة في كل زيارة.",
  },
  {
    icon: Award,
    title: "مهارة طبية موثوقة",
    desc: "خبرة سنوات في تخصص أمراض النساء والتوليد مع متابعة دائمة للتطورات العلمية.",
  },
  {
    icon: Heart,
    title: "متابعة دائمة",
    desc: "نهتم بكِ قبل وأثناء وبعد الزيارة — لأنكِ لستِ مجرد ملف طبي.",
  },
  {
    icon: Stethoscope,
    title: "تجهيزات حديثة",
    desc: "أجهزة طبية متطورة لتشخيص دقيق وآمن في بيئة نظيفة ومعقّمة.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "اختاري الخدمة",
    desc: "حددي الخدمة التي تحتاجينها من متابعة الحمل أو الاستشارة أو غيرها.",
  },
  {
    step: "02",
    title: "احجزي موعدك",
    desc: "تواصلي معنا عبر الهاتف أو واتساب أو نموذج الحجز الإلكتروني.",
  },
  {
    step: "03",
    title: "الزيارة والمتابعة",
    desc: "استقبال حار، فحص شامل، وخطة رعاية واضحة مع متابعة منتظمة.",
  },
];

const testimonials = [
  {
    initials: "أ.م",
    name: "أمينة م.",
    text: "تابعتُ حملي الأول كاملاً في هذه العيادة. الدكتورة منصورة متميزة في تفسير كل شيء بهدوء ووضوح، وأنا أشعر بالطمأنينة في كل زيارة.",
    stars: 5,
  },
  {
    initials: "ن.ب",
    name: "نادية ب.",
    text: "عيادة راقية ونظيفة، والطاقم طيب. الدكتورة محترمة جداً وتأخذ وقتها في الشرح. أنصح بها كل أم جديدة.",
    stars: 5,
  },
  {
    initials: "ر.ح",
    name: "رحمة ح.",
    text: "كنت أخشى زيارات الطبيب، لكن الأجواء الهادئة والخاصة في العيادة جعلتني أرتاح تماماً. شكراً دكتورة منصورة.",
    stars: 5,
  },
];

const faqs = [
  {
    question: "كيف يمكنني حجز موعد في العيادة؟",
    answer:
      "يمكنكِ حجز موعد عبر الاتصال الهاتفي، مراسلتنا على واتساب، أو ملء نموذج الحجز الإلكتروني على صفحة التواصل. نسعى للرد خلال ساعات قليلة.",
  },
  {
    question: "ماذا أحضر في الزيارة الأولى لمتابعة الحمل؟",
    answer:
      "يُنصح بإحضار بطاقة التعريف الوطنية، نتائج الفحوصات السابقة إن وُجدت، وأي ملف طبي متعلق بالحمل. لا تقلقي إن كانت زيارتكِ الأولى بدون أوراق.",
  },
  {
    question: "هل العيادة متخصصة في الحمل عالي الخطورة؟",
    answer:
      "نعم، تقدم الدكتورة منصورة متابعة متخصصة للحمل عالي الخطورة. يُحدد نوع المتابعة اللازمة بعد التقييم الأولي لكل حالة على حدة.",
  },
  {
    question: "هل يمكنني الاتصال في حالات الطوارئ؟",
    answer:
      "نعم، توجد بيانات الاتصال على صفحة التواصل. في حالات الطوارئ الحادة يُنصح بالتوجه لأقرب مستعجلات طبية. الدكتورة تُرشدكِ دائماً للخطوة المناسبة.",
  },
  {
    question: "هل الكشف يشمل الموجات فوق الصوتية؟",
    answer:
      "يشمل الكشف الأولي تقييماً شاملاً. قد يُجرى الفحص بالإيكوغرافيا خلال نفس الجلسة حسب المرحلة والحالة، أو يُحدد موعد منفصل له.",
  },
  {
    question: "هل يُمكن الحضور بدون موعد مسبق؟",
    answer:
      "نفضل الحجز المسبق لضمان عدم الانتظار وتخصيص الوقت الكافي لكِ. في الحالات الطارئة، تواصلي معنا مباشرة وسنحاول استيعابكِ في أقرب وقت.",
  },
];

export function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center pt-20"
        style={{
          background: "linear-gradient(135deg, #3D1E3C 0%, #5C2D5C 50%, #7A3D79 100%)",
        }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${CLINIC_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#3D1E3C]/60" />

        {/* Decorative circles */}
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: "#E8A0B4" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5"
          style={{ background: "#A8CEC9" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
            {/* Text Content */}
            <div>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                  style={{ background: "rgba(255,255,255,0.12)", color: "#E8A0B4", fontWeight: 600 }}
                >
                  <MapPin size={11} /> الجزائر
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                  style={{ background: "rgba(255,255,255,0.12)", color: "#A8CEC9", fontWeight: 600 }}
                >
                  <Clock size={11} /> أحد – خميس: 9:00–18:00
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                  style={{ background: "rgba(232,160,180,0.15)", color: "#E8A0B4", fontWeight: 600 }}
                >
                  <Shield size={11} /> رعاية سرية وخاصة
                </span>
              </div>

              <h1
                className="text-white mb-4"
                style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.25 }}
              >
                د. بن الزين منصورة
              </h1>
              <p
                className="mb-6"
                style={{ color: "#E8A0B4", fontWeight: 700, fontSize: "clamp(1rem, 2.5vw, 1.3rem)" }}
              >
                أخصائية أمراض النساء والتوليد
              </p>
              <p
                className="text-white/80 mb-8 leading-relaxed max-w-lg"
                style={{ fontSize: "1rem" }}
              >
                رعاية طبية متكاملة لصحة المرأة في كل مراحل حياتها — من الحمل والمتابعة حتى الولادة وما بعدها، في بيئة آمنة ومحترمة.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-white text-[#5C2D5C] px-7 py-4 rounded-full hover:bg-[#FDF0F5] transition-all shadow-lg hover:shadow-xl"
                  style={{ fontWeight: 700 }}
                >
                  <CalendarDays size={18} />
                  احجزي موعدك الآن
                </Link>
                <a
                  href="https://wa.me/213XXXXXXXXX?text=السلام عليكم، أرغب في حجز موعد"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-4 rounded-full hover:bg-[#20b859] transition-all shadow-lg"
                  style={{ fontWeight: 700 }}
                >
                  <MessageCircle size={18} />
                  تواصلي عبر واتساب
                </a>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6">
                {[
                  { value: "+10", label: "سنوات خبرة" },
                  { value: "+500", label: "مريضة سعيدة" },
                  { value: "100%", label: "سرية تامة" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-white" style={{ fontSize: "1.5rem", fontWeight: 800 }}>{stat.value}</div>
                    <div className="text-white/60 text-xs" style={{ fontWeight: 500 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor Image */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, #E8A0B4/30, #A8CEC9/20)",
                    transform: "translate(12px, 12px)",
                    borderRadius: "1.5rem",
                  }}
                />
                <img
                  src={DOCTOR_IMG}
                  alt="د. بن الزين منصورة - أخصائية أمراض النساء والتوليد"
                  className="relative z-10 rounded-3xl object-cover shadow-2xl"
                  style={{ width: 420, height: 520, objectFit: "cover" }}
                  loading="eager"
                />
                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "#FDF0F5" }}
                    >
                      <Award size={18} style={{ color: "#5C2D5C" }} />
                    </div>
                    <div>
                      <div className="text-[#5C2D5C] text-xs" style={{ fontWeight: 700 }}>أخصائية معتمدة</div>
                      <div className="text-[#7A6080] text-xs">نساء وتوليد</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 40L0 60Z" fill="#FDF8F5" />
          </svg>
        </div>
      </section>

      {/* AUTHORITY SNAPSHOT */}
      <section className="py-14 px-4 bg-[#FDF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, value: "أخصائية", sub: "أمراض النساء والتوليد", color: "#5C2D5C", bg: "#F0E8EE" },
              { icon: Shield, value: "ممارسة", sub: "طبية مرخصة ومعتمدة", color: "#5C8F89", bg: "#EDF5F4" },
              { icon: Heart, value: "رعاية شاملة", sub: "من الحمل حتى ما بعد الولادة", color: "#E8A0B4", bg: "#FDF0F5" },
              { icon: Clock, value: "استجابة سريعة", sub: "نرد في أقل من 24 ساعة", color: "#5C2D5C", bg: "#F0E8EE" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white shadow-sm border border-[#5C2D5C]/06 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
                  style={{ background: item.bg }}
                >
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <div className="text-[#2A1A2E] text-sm mb-0.5" style={{ fontWeight: 700 }}>{item.value}</div>
                <div className="text-[#7A6080] text-xs leading-snug">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-20 px-4 bg-[#FDF8F5]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="خدماتنا"
            title="رعاية متكاملة في كل مرحلة"
            subtitle="نقدم طيفاً واسعاً من الخدمات الطبية المتخصصة في صحة المرأة، مصممة لتناسب كل مرحلة من مراحل حياتكِ."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.to}
                className="group block p-6 bg-white rounded-2xl border border-[#5C2D5C]/08 hover:shadow-lg hover:border-[#5C2D5C]/20 transition-all"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: service.bg }}
                >
                  <service.icon size={20} style={{ color: service.color }} />
                </div>
                <h3 className="text-[#2A1A2E] mb-2 text-sm" style={{ fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p className="text-[#7A6080] text-xs leading-relaxed mb-3">{service.desc}</p>
                <span
                  className="inline-flex items-center gap-1 text-xs group-hover:gap-2 transition-all"
                  style={{ color: "#5C2D5C", fontWeight: 600 }}
                >
                  اعرفي أكثر <ChevronLeft size={13} />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-[#5C2D5C] text-[#5C2D5C] px-7 py-3 rounded-full hover:bg-[#5C2D5C] hover:text-white transition-all text-sm"
              style={{ fontWeight: 700 }}
            >
              عرض جميع الخدمات <ChevronLeft size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST PILLARS */}
      <section
        className="py-16 md:py-20 px-4"
        style={{ background: "linear-gradient(135deg, #5C2D5C 0%, #3D1E3C 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="لماذا نختارنا"
            title="ثقتكِ أمانة في أيدي أمينة"
            subtitle="نبني علاقتنا معكِ على أساس الشفافية والاحترام وجودة الرعاية الطبية."
            center
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl text-center"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(232,160,180,0.15)" }}
                >
                  <pillar.icon size={26} style={{ color: "#E8A0B4" }} />
                </div>
                <h3 className="text-white mb-2 text-sm" style={{ fontWeight: 700 }}>
                  {pillar.title}
                </h3>
                <p className="text-white/65 text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARE PATH */}
      <section className="py-16 md:py-20 px-4 bg-[#FDF8F5]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="رحلتكِ معنا"
            title="ثلاث خطوات بسيطة نحو رعاية أفضل"
            subtitle="نسعى دائماً لجعل تجربتكِ سهلة وخالية من التعقيد."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 right-[calc(33%+2rem)] left-[calc(33%+2rem)] h-px bg-gradient-to-l from-[#5C2D5C]/20 to-[#5C2D5C]/20" />
            {processSteps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md"
                  style={{ background: "linear-gradient(135deg, #5C2D5C, #7A3D79)" }}
                >
                  <span className="text-white" style={{ fontSize: "1.2rem", fontWeight: 800 }}>{step.step}</span>
                </div>
                <h3 className="text-[#2A1A2E] mb-2 text-base" style={{ fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p className="text-[#7A6080] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#5C2D5C] text-white px-7 py-3.5 rounded-full hover:bg-[#3D1E3C] transition-colors shadow-md text-sm"
              style={{ fontWeight: 700 }}
            >
              <CalendarDays size={16} /> ابدئي رحلتكِ الآن
            </Link>
          </div>
        </div>
      </section>

      {/* DOCTOR PROFILE HIGHLIGHT */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  background: "linear-gradient(135deg, #E8A0B4, #A8CEC9)",
                  transform: "translate(8px, 8px)",
                  borderRadius: "1.5rem",
                }}
              />
              <img
                src={PREGNANT_IMG}
                alt="رعاية الحمل - عيادة د. بن الزين منصورة"
                className="relative z-10 w-full rounded-3xl object-cover shadow-xl"
                style={{ maxHeight: 480, objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
                style={{ background: "#F0E8EE", color: "#5C2D5C", fontWeight: 700 }}
              >
                نبذة عن الدكتورة
              </span>
              <h2 className="text-[#2A1A2E] mb-2" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800 }}>
                د. بن الزين منصورة
              </h2>
              <p className="text-[#7A6080] mb-5 text-sm" style={{ fontWeight: 600 }}>
                أخصائية أمراض النساء والتوليد
              </p>
              <p className="text-[#7A6080] leading-relaxed mb-6 text-sm">
                تجمع الدكتورة منصورة بين الكفاءة الطبية العالية والتعامل الإنساني الراقي. تؤمن بأن كل مريضة تستحق وقتاً كافياً للاستماع والشرح، وتُدار العيادة وفق بروتوكولات طبية صارمة تضمن السلامة والخصوصية.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "خبرة طبية موسعة في أمراض النساء والتوليد",
                  "متابعة دورية ومنتظمة لكل مريضة",
                  "رعاية الحمل الطبيعي وعالي الخطورة",
                  "فحص بالموجات فوق الصوتية",
                  "إرشاد ما بعد الولادة وتنظيم الأسرة",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#2A1A2E]">
                    <CheckCircle size={16} className="text-[#5C8F89] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-[#5C2D5C] text-[#5C2D5C] px-6 py-3 rounded-full hover:bg-[#5C2D5C] hover:text-white transition-all text-sm"
                style={{ fontWeight: 700 }}
              >
                تعرفي أكثر على الدكتورة <ChevronLeft size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 px-4" style={{ background: "#F5EBE8" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="آراء المريضات"
            title="قلن عن تجربتهن معنا"
            subtitle="نفخر بثقة مريضاتنا ونعمل يومياً على الارتقاء بمستوى خدمتنا."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#5C2D5C]/06">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={14} className="fill-[#E8A0B4] text-[#E8A0B4]" />
                  ))}
                </div>
                <p className="text-[#2A1A2E] text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs"
                    style={{ background: "#5C2D5C", fontWeight: 700 }}
                  >
                    {t.initials}
                  </div>
                  <span className="text-[#2A1A2E] text-sm" style={{ fontWeight: 600 }}>{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-[#FDF8F5]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="أسئلة شائعة"
            title="إجابات على أكثر أسئلتكِ شيوعاً"
            subtitle="لديكِ سؤال آخر؟ تواصلي معنا مباشرة وسنجيبكِ بكل سرور."
            center
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="موقعنا"
            title="كيف تصلين إلينا"
            subtitle="عيادتنا في موقع مركزي يسهل الوصول إليه بالسيارة أو وسائل النقل العام."
            center
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "العنوان", value: "عنوان العيادة، المدينة، الجزائر", color: "#5C2D5C" },
                { icon: Phone, label: "الهاتف", value: "+213 XX XX XX XX", color: "#5C8F89" },
                { icon: Clock, label: "ساعات العمل", value: "أحد – خميس: 9:00–18:00 | السبت: 9:00–13:00", color: "#E8A0B4" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-[#FDF8F5] rounded-2xl border border-[#5C2D5C]/08">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-[#7A6080] text-xs mb-0.5" style={{ fontWeight: 600 }}>{item.label}</div>
                    <div className="text-[#2A1A2E] text-sm" style={{ fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#5C2D5C] text-white px-5 py-3 rounded-full hover:bg-[#3D1E3C] transition-colors w-full text-sm"
                style={{ fontWeight: 700 }}
              >
                <MapPin size={16} /> احصلي على الاتجاهات
              </a>
            </div>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden bg-[#F0E8EE] flex items-center justify-center min-h-64 shadow-md border border-[#5C2D5C]/10">
              <div className="text-center p-8">
                <MapPin size={32} className="mx-auto mb-3 text-[#5C2D5C]" />
                <p className="text-[#5C2D5C] text-sm" style={{ fontWeight: 600 }}>
                  تضمين خريطة Google Maps
                </p>
                <p className="text-[#7A6080] text-xs mt-1">
                  يُوضع هنا كود تضمين الخريطة التفاعلية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner />
    </div>
  );
}
