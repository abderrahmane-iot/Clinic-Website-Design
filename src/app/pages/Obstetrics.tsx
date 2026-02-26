import { Link } from "react-router";
import {
  Baby, Heart, Shield, AlertCircle, CheckCircle,
  CalendarDays, Stethoscope, Users, Clock
} from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTABanner } from "../components/CTABanner";

const BABY_IMG = "https://images.unsplash.com/photo-1759802147292-628443195315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";

const deliverySupport = [
  {
    icon: Stethoscope,
    title: "استشارة ما قبل الولادة",
    desc: "جلسة شاملة لمناقشة خيارات الولادة، الاستعداد النفسي والجسدي، والأسئلة المتعلقة بيوم الوضع.",
    color: "#5C2D5C",
  },
  {
    icon: Shield,
    title: "تخطيط مسار الولادة",
    desc: "وضع خطة واضحة تأخذ بعين الاعتبار وضعكِ الصحي، تاريخكِ الطبي، وتفضيلاتكِ بشكل علمي.",
    color: "#5C8F89",
  },
  {
    icon: Heart,
    title: "متابعة ما بعد الولادة",
    desc: "فحوصات النفاس لمتابعة تعافيكِ، التوجيه حول الرضاعة، والدعم النفسي للأم الجديدة.",
    color: "#E8A0B4",
  },
  {
    icon: Baby,
    title: "العناية بحديث الولادة",
    desc: "إرشادات أولية حول رعاية المولود وتغذيته في الأيام والأسابيع الأولى.",
    color: "#5C2D5C",
  },
  {
    icon: Users,
    title: "التنسيق مع المستشفيات",
    desc: "في حال الولادة في مستشفى، تُرشدكِ الدكتورة للمسار الأنسب وتنسق معكِ الإجراءات.",
    color: "#5C8F89",
  },
  {
    icon: CalendarDays,
    title: "متابعة النفاس الكاملة",
    desc: "زيارة ما بعد الولادة لتقييم التعافي، جرح الولادة، والحالة الصحية العامة للأم.",
    color: "#E8A0B4",
  },
];

const patientJourney = [
  {
    step: "01",
    title: "استشارة التخطيط",
    desc: "قبل الأسبوع 36 — مناقشة مسار الولادة وإعداد خطة مخصصة.",
  },
  {
    step: "02",
    title: "التحضير للوضع",
    desc: "في الأسابيع الأخيرة — متابعة وضعية الجنين، تقدير الوزن، تقييم عنق الرحم.",
  },
  {
    step: "03",
    title: "يوم الولادة",
    desc: "التوجه حسب الخطة المحددة مسبقاً — التواصل مع الدكتورة للتوجيه والدعم.",
  },
  {
    step: "04",
    title: "فترة النفاس",
    desc: "زيارات متابعة بعد الولادة للتأكد من تعافيكِ وصحة مولودكِ.",
  },
];

const emergencyGuidelines = [
  "نزيف مهبلي غزير غير طبيعي",
  "ألم بطني حاد أو مستمر لا يزول",
  "صداع شديد مع اضطراب في الرؤية",
  "انتفاخ مفاجئ في الوجه أو اليدين",
  "غياب أو تراجع ملحوظ لحركات الجنين",
  "تسرب سائل مائي من المهبل",
];

const obstetricsFaq = [
  {
    question: "هل يمكنني اختيار طريقة الولادة؟",
    answer: "يُناقش هذا الخيار بشكل علمي وصريح مع الدكتورة. تُحدد طريقة الولادة المناسبة حسب الوضع الطبي للأم والجنين، مع احترام تفضيلات المريضة قدر الإمكان.",
  },
  {
    question: "متى يجب أن أبدأ بالتحضير للولادة؟",
    answer: "يُنصح ببدء استشارة تخطيط الولادة من الأسبوع 32-34، للحصول على وقت كافٍ لمناقشة كل الجوانب واتخاذ القرارات المناسبة.",
  },
  {
    question: "ما هي فترة النفاس الطبيعية؟",
    answer: "تمتد فترة النفاس عادةً من 6 إلى 8 أسابيع. خلالها تُجرى فحوصات متابعة لتقييم التعافي الكامل للأم.",
  },
  {
    question: "هل تدعم العيادة الرضاعة الطبيعية؟",
    answer: "نعم، نشجع على الرضاعة الطبيعية ونقدم التوجيه والدعم اللازمين — خاصةً للأمهات الجدد.",
  },
  {
    question: "هل يمكنني التواصل مع الدكتورة أثناء المخاض؟",
    answer: "نعم، يمكن التواصل مع العيادة لتلقي التوجيه والإرشاد. في حالات الطوارئ الحادة، التوجه الفوري للمستعجلات ضروري.",
  },
];

export function Obstetrics() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 px-4 md:pt-40 md:pb-20"
        style={{ background: "linear-gradient(135deg, #3D1E3C 0%, #5C2D5C 100%)" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
                style={{ background: "rgba(232,160,180,0.2)", color: "#E8A0B4", fontWeight: 700 }}
              >
                التوليد والولادة
              </span>
              <h1
                className="text-white mb-4"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.25 }}
              >
                تخطيط ولادة آمنة ومدروسة
              </h1>
              <p className="text-white/75 leading-relaxed mb-8 max-w-lg">
                نرافقكِ في التحضير ليوم الوضع بكل هدوء وثقة — من الاستشارة الأولى وحتى التعافي الكامل بعد الولادة.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#5C2D5C] px-6 py-3.5 rounded-full hover:bg-[#FDF0F5] transition-colors text-sm"
                style={{ fontWeight: 700 }}
              >
                <CalendarDays size={16} /> احجزي استشارة التوليد
              </Link>
            </div>
            <div className="hidden lg:block relative">
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{ background: "linear-gradient(135deg, #E8A0B4, #A8CEC9)", transform: "translate(10px, 10px)", borderRadius: "1.5rem" }}
              />
              <img
                src={BABY_IMG}
                alt="رعاية حديث الولادة"
                className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
                style={{ maxHeight: 420, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 40 720 0 0 20L0 40Z" fill="#FDF8F5" />
          </svg>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="py-16 md:py-20 px-4 bg-[#FDF8F5]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="نهجنا في التوليد"
            title="كيف نتعامل مع كل حالة"
            subtitle="لا توجد نسختان متطابقتان من الولادة — نُؤمن بأن كل قرار يُبنى على تقييم دقيق للحالة."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "السلامة أولاً",
                desc: "كل قرار يُتخذ بناءً على ما هو آمن وأفضل للأم والجنين وفق الأدلة الطبية.",
                color: "#5C2D5C",
                bg: "#F0E8EE",
              },
              {
                icon: Heart,
                title: "الرعاية الفردية",
                desc: "نأخذ بعين الاعتبار حالتكِ الصحية، رغباتكِ، وتاريخكِ الطبي في كل قرار.",
                color: "#5C8F89",
                bg: "#EDF5F4",
              },
              {
                icon: Users,
                title: "الشراكة الحقيقية",
                desc: "نُشرككِ في كل قرار ونشرح لكِ الخيارات بوضوح واحترام تام.",
                color: "#E8A0B4",
                bg: "#FDF0F5",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-[#5C2D5C]/08 hover:shadow-md transition-shadow text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: item.bg }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="text-[#2A1A2E] mb-2 text-sm" style={{ fontWeight: 700 }}>{item.title}</h3>
                <p className="text-[#7A6080] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Support */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="ما نقدمه"
            title="خدمات التوليد وما حوله"
            subtitle="رعاية متكاملة قبل وأثناء وبعد الولادة."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverySupport.map((item, i) => (
              <div key={i} className="p-5 bg-[#FDF8F5] rounded-2xl border border-[#5C2D5C]/08 hover:bg-white hover:shadow-md transition-all">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${item.color}15` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <h4 className="text-[#2A1A2E] mb-1.5 text-sm" style={{ fontWeight: 700 }}>{item.title}</h4>
                <p className="text-[#7A6080] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section
        className="py-16 md:py-20 px-4"
        style={{ background: "linear-gradient(135deg, #5C2D5C 0%, #3D1E3C 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="رحلة المريضة"
            title="من التخطيط إلى التعافي"
            center
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {patientJourney.map((step, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <span className="text-white" style={{ fontSize: "1.1rem", fontWeight: 800 }}>{step.step}</span>
                </div>
                <h4 className="text-white mb-2 text-sm" style={{ fontWeight: 700 }}>{step.title}</h4>
                <p className="text-white/65 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Guidance */}
      <section className="py-16 px-4 bg-[#FDF8F5]">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white rounded-3xl border border-[#E8A0B4]/30 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "#FDF0F5" }}
              >
                <AlertCircle size={22} style={{ color: "#5C2D5C" }} />
              </div>
              <div>
                <h3 className="text-[#2A1A2E] mb-1 text-lg" style={{ fontWeight: 800 }}>
                  متى تتوجهين للمستعجلات فوراً
                </h3>
                <p className="text-[#7A6080] text-sm">
                  هذه إرشادات عامة فقط — في حالة الشك، لا تترددي في طلب المساعدة الطبية الفورية.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {emergencyGuidelines.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-[#FDF8F5] rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[#5C2D5C] shrink-0" />
                  <span className="text-[#2A1A2E] text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 p-4 bg-[#EDF5F4] rounded-xl border border-[#5C8F89]/20">
              <p className="text-[#2A1A2E] text-xs leading-relaxed flex items-start gap-2">
                <AlertCircle size={13} className="text-[#5C8F89] mt-0.5 shrink-0" />
                <span>
                  <strong>تنبيه طبي:</strong> هذه الإرشادات لأغراض توعوية فقط ولا تُغني عن التشخيص الطبي المتخصص. في حالات الطوارئ، اتصلي بالإسعاف أو توجهي لأقرب مستعجلات.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Postpartum */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader
            eyebrow="رعاية ما بعد الولادة"
            title="الاهتمام بكِ لا يتوقف عند الولادة"
            subtitle="فترة النفاس تحتاج اهتماماً خاصاً — جسداً وعقلاً."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: "زيارة ما بعد الأسبوع الأول", desc: "تقييم التعافي وجرح الولادة والاستجابة للرضاعة." },
              { icon: Heart, title: "دعم الصحة النفسية", desc: "رصد اكتئاب ما بعد الولادة وتقديم الدعم اللازم." },
              { icon: CheckCircle, title: "فحص الأسبوع السادس", desc: "تقييم شامل للعودة للحياة الطبيعية وتنظيم الأسرة." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[#FDF8F5] rounded-2xl border border-[#5C2D5C]/08">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#F0E8EE" }}
                >
                  <item.icon size={22} style={{ color: "#5C2D5C" }} />
                </div>
                <h4 className="text-[#2A1A2E] mb-2 text-sm" style={{ fontWeight: 700 }}>{item.title}</h4>
                <p className="text-[#7A6080] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-[#FDF8F5]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="أسئلة شائعة" title="أسئلة حول التوليد والولادة" center />
          <FAQAccordion items={obstetricsFaq} />
        </div>
      </section>

      <CTABanner
        title="خططي لولادتكِ مع طبيبة موثوقة"
        subtitle="لا تتركي يوم الوضع للصدفة — تواصلي معنا لبدء تخطيط ولادتكِ."
      />
    </div>
  );
}
