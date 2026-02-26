import { Link } from "react-router";
import {
  Baby, Heart, Stethoscope, Microscope, Users,
  Shield, CalendarDays, ChevronLeft, CheckCircle, MessageCircle
} from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTABanner } from "../components/CTABanner";

const serviceCategories = [
  {
    icon: Baby,
    title: "متابعة الحمل",
    desc: "متابعة دورية شاملة منذ الأسابيع الأولى وحتى الوضع. تشمل الفحوصات الدورية، الإيكوغرافيا، ومتابعة نمو الجنين.",
    highlights: ["استشارة أولى شاملة", "فحوصات دورية منتظمة", "موجات فوق الصوتية", "إرشاد غذائي"],
    to: "/pregnancy-care",
    color: "#5C2D5C",
    bg: "#F0E8EE",
    tag: "الأكثر طلباً",
  },
  {
    icon: Shield,
    title: "الحمل عالي الخطورة",
    desc: "رعاية متخصصة للحالات التي تستوجب متابعة مكثفة — كارتفاع ضغط الدم، السكري الحملي، أو الأحمال المتعددة.",
    highlights: ["تقييم دقيق للمخاطر", "بروتوكول متابعة مكثف", "تنسيق مع التخصصات الأخرى"],
    to: "/pregnancy-care",
    color: "#5C8F89",
    bg: "#EDF5F4",
  },
  {
    icon: Stethoscope,
    title: "التوليد وتخطيط الولادة",
    desc: "استشارة وتخطيط مسبق للولادة، مع توضيح الخيارات والإجابة على كافة التساؤلات بأسلوب علمي وهادئ.",
    highlights: ["استشارة ما قبل الولادة", "تخطيط مسار الولادة", "إعداد خطة الطوارئ"],
    to: "/obstetrics",
    color: "#E8A0B4",
    bg: "#FDF0F5",
  },
  {
    icon: Microscope,
    title: "الفحص بالموجات فوق الصوتية",
    desc: "إيكوغرافيا عالية الدقة لمتابعة نمو الجنين، تقييم وضعيته، ومشيمته، وكمية السائل الأمنيوسي.",
    highlights: ["إيكوغرافيا بالأسابيع المحددة", "قياس دقيق للنمو", "توضيح النتائج فورياً"],
    to: "/services",
    color: "#5C2D5C",
    bg: "#F0E8EE",
  },
  {
    icon: Heart,
    title: "رعاية ما بعد الولادة",
    desc: "متابعة الأم خلال مرحلة النفاس — صحة جرح الولادة، الرضاعة، الصحة النفسية، والتعافي العام.",
    highlights: ["فحص النفاس", "إرشاد الرضاعة الطبيعية", "دعم الصحة النفسية للأم"],
    to: "/obstetrics",
    color: "#5C8F89",
    bg: "#EDF5F4",
  },
  {
    icon: Users,
    title: "تنظيم الأسرة",
    desc: "استشارة شاملة حول وسائل تنظيم الأسرة المناسبة لوضعكِ الصحي وأهدافكِ الأسرية.",
    highlights: ["مناقشة الخيارات المتاحة", "تقييم الملاءمة الصحية", "متابعة دورية"],
    to: "/services",
    color: "#E8A0B4",
    bg: "#FDF0F5",
  },
  {
    icon: Stethoscope,
    title: "الاستشارة النسائية",
    desc: "تشخيص وعلاج أمراض النساء المختلفة في بيئة خاصة وآمنة تضمن لكِ الراحة النفسية.",
    highlights: ["فحص نسائي شامل", "تشخيص دقيق", "خطة علاجية واضحة"],
    to: "/services",
    color: "#5C2D5C",
    bg: "#F0E8EE",
  },
  {
    icon: CalendarDays,
    title: "الفحص الدوري الوقائي",
    desc: "فحوصات دورية للصحة الإنجابية — للوقاية والاكتشاف المبكر قبل تطور أي مشكلة.",
    highlights: ["فحص الأورام الليفية", "تقييم المبايض", "فحص عنق الرحم"],
    to: "/services",
    color: "#5C8F89",
    bg: "#EDF5F4",
  },
];

const servicesFaq = [
  {
    question: "كم مدة الموعد الواحد في العيادة؟",
    answer: "تتراوح مدة الاستشارة الأولى بين 30-45 دقيقة لتخصيص الوقت الكافي للتاريخ المرضي والفحص. الزيارات المتابعة أقصر عادةً.",
  },
  {
    question: "هل يشمل الكشف نتائج فورية للإيكوغرافيا؟",
    answer: "نعم، حين يُجرى الفحص بالموجات فوق الصوتية خلال الزيارة، تُشرح النتائج فورياً ويُمنح الملف الطبي الكامل.",
  },
  {
    question: "هل يمكن إجراء أكثر من خدمة في زيارة واحدة؟",
    answer: "يُحدد ذلك حسب الحالة ومدة الوقت المتاح. ننصح بذكر احتياجاتكِ كاملةً عند الحجز لتخصيص الوقت المناسب.",
  },
  {
    question: "هل توجد خدمات فحص متخصص للمرأة بعد الـ 40؟",
    answer: "بالتأكيد. يُنصح بالفحص الدوري المنتظم للمرأة في جميع الأعمار، وبشكل خاص بعد الأربعين لمتابعة الصحة الإنجابية.",
  },
  {
    question: "هل يمكنني طلب تقرير طبي من العيادة؟",
    answer: "نعم، يمكن إعداد تقرير طبي مفصل عند الطلب. يُرجى الإشارة إلى ذلك عند حجز الموعد.",
  },
];

export function Services() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 px-4 md:pt-40 md:pb-20 text-center"
        style={{ background: "linear-gradient(135deg, #3D1E3C 0%, #5C2D5C 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
            style={{ background: "rgba(232,160,180,0.2)", color: "#E8A0B4", fontWeight: 700 }}
          >
            خدماتنا الطبية
          </span>
          <h1
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.25 }}
          >
            رعاية شاملة في كل مرحلة
          </h1>
          <p className="text-white/75 leading-relaxed mb-8 max-w-xl mx-auto">
            نقدم طيفاً واسعاً من الخدمات الطبية المتخصصة في صحة المرأة — من الاستشارة الأولى وحتى ما بعد الولادة.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#5C2D5C] px-7 py-3.5 rounded-full hover:bg-[#FDF0F5] transition-colors text-sm"
            style={{ fontWeight: 700 }}
          >
            <CalendarDays size={16} /> احجزي موعدك
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 40 720 0 0 20L0 40Z" fill="#FDF8F5" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 px-4 bg-[#FDF8F5]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="جميع خدماتنا"
            title="ما الذي نقدمه لكِ"
            subtitle="كل خدمة مصممة لتلبية احتياجاتكِ الصحية الخاصة بأعلى مستوى من الاحترافية."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {serviceCategories.map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-[#5C2D5C]/08 hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                {service.tag && (
                  <span
                    className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs"
                    style={{ background: "#5C2D5C", color: "white", fontWeight: 700 }}
                  >
                    {service.tag}
                  </span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: service.bg }}
                  >
                    <service.icon size={22} style={{ color: service.color }} />
                  </div>
                  <div>
                    <h3 className="text-[#2A1A2E] mb-1 text-base" style={{ fontWeight: 700 }}>
                      {service.title}
                    </h3>
                    <p className="text-[#7A6080] text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {service.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#2A1A2E]">
                      <CheckCircle size={13} style={{ color: service.color, flexShrink: 0 }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.to}
                  className="inline-flex items-center gap-1 text-xs hover:gap-2 transition-all"
                  style={{ color: service.color, fontWeight: 700 }}
                >
                  اعرفي أكثر <ChevronLeft size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pathways */}
      <section
        className="py-16 md:py-20 px-4"
        style={{ background: "linear-gradient(135deg, #5C2D5C 0%, #3D1E3C 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="المسارات المميزة"
            title="مسارات الرعاية الأساسية"
            center
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-8 rounded-3xl border border-white/15"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "rgba(232,160,180,0.2)" }}
              >
                <Baby size={26} style={{ color: "#E8A0B4" }} />
              </div>
              <h3 className="text-white mb-3 text-xl" style={{ fontWeight: 800 }}>مسار متابعة الحمل</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                من التأكيد على الحمل حتى الولادة — رعاية منتظمة ومنظمة تضمن لكِ ولجنينكِ أفضل متابعة.
              </p>
              <Link
                to="/pregnancy-care"
                className="inline-flex items-center gap-2 bg-white text-[#5C2D5C] px-5 py-2.5 rounded-full hover:bg-[#FDF0F5] transition-colors text-sm"
                style={{ fontWeight: 700 }}
              >
                اعرفي أكثر <ChevronLeft size={14} />
              </Link>
            </div>
            <div
              className="p-8 rounded-3xl border border-white/15"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "rgba(168,206,201,0.2)" }}
              >
                <Stethoscope size={26} style={{ color: "#A8CEC9" }} />
              </div>
              <h3 className="text-white mb-3 text-xl" style={{ fontWeight: 800 }}>مسار تخطيط الولادة</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                الاستعداد للولادة بوعي وهدوء — معرفة الخيارات والإجابة على التساؤلات مع الدكتورة.
              </p>
              <Link
                to="/obstetrics"
                className="inline-flex items-center gap-2 bg-white text-[#5C2D5C] px-5 py-2.5 rounded-full hover:bg-[#FDF0F5] transition-colors text-sm"
                style={{ fontWeight: 700 }}
              >
                اعرفي أكثر <ChevronLeft size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 px-4 bg-[#FDF8F5]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-7 rounded-2xl border border-[#5C2D5C]/10 shadow-sm">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs mb-3"
              style={{ background: "#F0E8EE", color: "#5C2D5C", fontWeight: 700 }}
            >
              التسعير والدفع
            </span>
            <h3 className="text-[#2A1A2E] mb-3 text-lg" style={{ fontWeight: 700 }}>
              شفافية كاملة في التكاليف
            </h3>
            <p className="text-[#7A6080] text-sm leading-relaxed mb-5">
              تتفاوت تكاليف الخدمات حسب نوع الاستشارة والإجراءات المُجراة. نسعى دائماً للشفافية الكاملة — تواصلي معنا للاستفسار عن تكلفة الخدمة التي تحتاجينها.
            </p>
            <a
              href="https://wa.me/213XXXXXXXXX?text=السلام عليكم، أرغب في الاستفسار عن تكلفة الخدمات"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#20b859] transition-colors text-sm"
              style={{ fontWeight: 700 }}
            >
              <MessageCircle size={16} /> استفسري عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="أسئلة عن الخدمات"
            title="أسئلة شائعة حول خدماتنا"
            center
          />
          <FAQAccordion items={servicesFaq} />
        </div>
      </section>

      <CTABanner
        title="احجزي موعدك وابدئي رحلة صحة أفضل"
        subtitle="اختاري الخدمة التي تناسبكِ وتواصلي معنا لتحديد الموعد الأنسب."
      />
    </div>
  );
}
