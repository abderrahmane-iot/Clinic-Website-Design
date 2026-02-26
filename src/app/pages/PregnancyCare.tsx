import { Link } from "react-router";
import {
  Baby, Shield, CheckCircle, CalendarDays,
  Microscope, Heart, AlertCircle, FileText
} from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTABanner } from "../components/CTABanner";

const PREGNANT_IMG = "https://images.unsplash.com/photo-1543270216-7c25819fe5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const ULTRASOUND_IMG = "https://images.unsplash.com/photo-1752240879764-97bb683bf0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";

const visitSchedule = [
  { week: "أسبوع 4–8", title: "التأكيد وبداية المتابعة", desc: "تأكيد الحمل، فصيلة الدم، فحوصات أولية شاملة، إيكوغرافيا أولى." },
  { week: "أسبوع 11–14", title: "الثلث الأول", desc: "إيكوغرافيا الثلث الأول، قياس قفا الرقبة، كشف الشذوذات المبكرة." },
  { week: "أسبوع 18–22", title: "الإيكوغرافيا الشاملة", desc: "مسح مورفولوجي مفصل لأعضاء الجنين ومتابعة النمو." },
  { week: "أسبوع 24–28", title: "اختبار السكر الحملي", desc: "فحص السكر الحملي، متابعة وزن الجنين، تقييم المشيمة." },
  { week: "أسبوع 30–34", title: "متابعة النمو والوضعية", desc: "قياس النمو، تقييم وضعية الجنين، تقدير وزنه التقريبي." },
  { week: "أسبوع 36–40", title: "التحضير للولادة", desc: "تقييم عنق الرحم، مناقشة خطة الولادة، استعداد كامل للتوليد." },
];

const included = [
  { icon: Microscope, title: "الفحوصات المخبرية", desc: "تحاليل الدم، البول، والفحوصات المرتبطة بالحمل وفق البروتوكول الطبي." },
  { icon: Baby, title: "الإيكوغرافيا الدورية", desc: "موجات فوق صوتية في المراحل المحددة لمتابعة النمو ورصد أي تغيرات." },
  { icon: Heart, title: "الإرشاد الغذائي", desc: "توجيهات غذائية مناسبة لكل مرحلة من مراحل الحمل." },
  { icon: Shield, title: "التلقيحات الحملية", desc: "جدول التلقيح الموصى به خلال الحمل لحماية الأم والجنين." },
  { icon: FileText, title: "خطة الرعاية الفردية", desc: "خطة متابعة مخصصة لكل حالة تأخذ بعين الاعتبار وضعكِ الصحي." },
  { icon: CalendarDays, title: "التواصل بين الزيارات", desc: "إمكانية الاستفسار وطرح الأسئلة بين المواعيد عبر واتساب." },
];

const preparationTips = [
  "إحضار دفتر تطعيماتكِ أو سجل مرضي سابق إن توفر",
  "كتابة قائمة بأسئلتكِ ومخاوفكِ قبل الزيارة",
  "الحضور بمعدة فارغة جزئياً في حال تحديد تحاليل مخبرية",
  "إخبار الدكتورة بأي أدوية تأخذينها حالياً",
  "إحضار نتائج فحوصات سابقة إن وجدت",
  "يُسمح بمرافق واحد إن رغبتِ في ذلك",
];

const pregnancyFaq = [
  {
    question: "متى أبدأ متابعة الحمل؟",
    answer: "يُنصح ببدء المتابعة فور التأكد من الحمل، ويُفضل في الأسابيع الأولى (4-8 أسابيع) للحصول على تقييم شامل منذ البداية.",
  },
  {
    question: "هل متابعة الحمل عالي الخطورة مختلفة؟",
    answer: "نعم، تستلزم الحالات عالية الخطورة (كضغط الدم، السكري، الأحمال المتعددة) متابعة أكثر تكراراً وإجراءات إضافية يُحددها الطبيب.",
  },
  {
    question: "كم مرة أجري الإيكوغرافيا خلال الحمل؟",
    answer: "توجد مواعيد إيكوغرافيا أساسية في كل ثلث من الحمل، ويمكن إجراء موجات إضافية حسب الحاجة الطبية.",
  },
  {
    question: "هل أحتاج وصفة لإجراء فحوصات مخبرية؟",
    answer: "تُصدر الدكتورة الوصفات اللازمة للفحوصات خلال كل زيارة متابعة، وتُشرح لكِ النتائج في الزيارة التالية.",
  },
  {
    question: "ماذا يحدث إن شعرتُ بشيء غير طبيعي بين الزيارات؟",
    answer: "يمكنكِ التواصل مع العيادة عبر واتساب في أي وقت. في الحالات الطارئة (نزيف، ألم حاد، انعدام الحركة) توجهي فوراً لأقرب طوارئ طبية.",
  },
];

export function PregnancyCare() {
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
                متابعة الحمل
              </span>
              <h1
                className="text-white mb-4"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.25 }}
              >
                رعاية حملكِ من البداية حتى اليوم الأول
              </h1>
              <p className="text-white/75 leading-relaxed mb-8 max-w-lg">
                نرافقكِ في كل خطوة من رحلة الأمومة — فحوصات دورية، إيكوغرافيا، وإرشاد طبي مستمر في بيئة دافئة وآمنة.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-white text-[#5C2D5C] px-6 py-3.5 rounded-full hover:bg-[#FDF0F5] transition-colors text-sm"
                  style={{ fontWeight: 700 }}
                >
                  <CalendarDays size={16} /> احجزي موعد المتابعة
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{ background: "linear-gradient(135deg, #E8A0B4, #A8CEC9)", transform: "translate(10px, 10px)", borderRadius: "1.5rem" }}
              />
              <img
                src={PREGNANT_IMG}
                alt="متابعة الحمل"
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

      {/* Visit Schedule */}
      <section className="py-16 md:py-20 px-4 bg-[#FDF8F5]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="جدول المتابعة"
            title="مواعيد المتابعة الموصى بها"
            subtitle="هذا جدول إرشادي عام. يُعدَّل حسب وضع كل مريضة وتوصية الدكتورة. المعلومات لأغراض توعوية فقط."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visitSchedule.map((visit, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-[#5C2D5C]/08 hover:shadow-md transition-shadow">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs mb-3"
                  style={{ background: "#F0E8EE", color: "#5C2D5C", fontWeight: 700 }}
                >
                  {visit.week}
                </div>
                <h3 className="text-[#2A1A2E] mb-2 text-sm" style={{ fontWeight: 700 }}>
                  {visit.title}
                </h3>
                <p className="text-[#7A6080] text-xs leading-relaxed">{visit.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-[#EDF5F4] rounded-2xl border border-[#5C8F89]/20 flex items-start gap-3">
            <AlertCircle size={16} className="text-[#5C8F89] mt-0.5 shrink-0" />
            <p className="text-[#2A1A2E] text-xs leading-relaxed">
              <strong>تنبيه طبي:</strong> هذه التواريخ إرشادية عامة ولا تُغني عن توصية الطبيبة. يُحدد الجدول الفعلي حسب وضع كل حالة على حدة.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="ما تشمله الرعاية"
                title="خدمات شاملة لحملٍ مطمئن"
                subtitle="نوفر كل ما تحتاجينه تحت سقف واحد — من الفحوصات إلى الإرشاد."
              />
              <div className="grid grid-cols-1 gap-4">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#FDF8F5] rounded-2xl border border-[#5C2D5C]/06">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#F0E8EE" }}
                    >
                      <item.icon size={18} style={{ color: "#5C2D5C" }} />
                    </div>
                    <div>
                      <h4 className="text-[#2A1A2E] text-sm mb-0.5" style={{ fontWeight: 700 }}>{item.title}</h4>
                      <p className="text-[#7A6080] text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{ background: "linear-gradient(135deg, #5C2D5C, #E8A0B4)", transform: "translate(8px, 8px)", borderRadius: "1.5rem" }}
              />
              <img
                src={ULTRASOUND_IMG}
                alt="الموجات فوق الصوتية"
                className="relative z-10 w-full rounded-3xl object-cover shadow-xl"
                style={{ maxHeight: 500, objectFit: "cover" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* High Risk */}
      <section
        className="py-16 md:py-20 px-4"
        style={{ background: "linear-gradient(135deg, #5C2D5C 0%, #3D1E3C 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="الحمل عالي الخطورة"
            title="متابعة متخصصة لحالات تحتاج عناية أكبر"
            subtitle="إن كنتِ تعانين من حالة صحية خاصة، فنحن هنا لتقديم الرعاية الأنسب لكِ."
            center
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              { title: "السكري الحملي", desc: "متابعة مكثفة لضبط السكر وحماية الأم والجنين." },
              { title: "ارتفاع ضغط الدم", desc: "مراقبة دقيقة ومستمرة للضغط الشرياني خلال الحمل." },
              { title: "الأحمال المتعددة", desc: "توائم أو أكثر — رعاية مزدوجة وبروتوكول مخصص." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl text-center"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <h4 className="text-white mb-2 text-sm" style={{ fontWeight: 700 }}>{item.title}</h4>
                <p className="text-white/65 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-white/70 text-xs mb-5">
              يُحدد تصنيف الحمل كـ "عالي الخطورة" من قِبل الطبيبة بعد التقييم الأولي الشامل.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#5C2D5C] px-7 py-3.5 rounded-full hover:bg-[#FDF0F5] transition-colors text-sm"
              style={{ fontWeight: 700 }}
            >
              <CalendarDays size={16} /> طلب استشارة تخصصية
            </Link>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-16 md:py-20 px-4 bg-[#FDF8F5]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="الاستعداد للزيارة"
            title="كيف تستعدين لزيارتكِ الأولى"
            subtitle="بعض الخطوات البسيطة تجعل زيارتكِ أكثر فائدة وإنتاجية."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {preparationTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-[#5C2D5C]/08">
                <CheckCircle size={16} className="text-[#5C8F89] mt-0.5 shrink-0" />
                <span className="text-[#2A1A2E] text-sm">{tip}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-[#FDF0F5] rounded-2xl border border-[#E8A0B4]/30 text-center">
            <p className="text-[#5C2D5C] text-sm" style={{ fontWeight: 600 }}>
              لا تقلقي إن جئتِ بدون أي أوراق — الدكتورة ترافقكِ من حيث أنتِ الآن.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="أسئلة شائعة"
            title="إجابات على أسئلة الحمل"
            center
          />
          <FAQAccordion items={pregnancyFaq} />
        </div>
      </section>

      {/* Doctor Reassurance */}
      <section className="py-12 px-4 bg-[#F5EBE8]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-[#5C2D5C]/08">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "#F0E8EE" }}
            >
              <Heart size={28} style={{ color: "#5C2D5C" }} />
            </div>
            <h3 className="text-[#2A1A2E] mb-3 text-lg" style={{ fontWeight: 800 }}>
              أنتِ لستِ وحدكِ في هذه الرحلة
            </h3>
            <p className="text-[#7A6080] text-sm leading-relaxed mb-5">
              الدكتورة منصورة تؤمن بأن الحمل ليس مجرد حالة طبية — إنه تجربة إنسانية فريدة تستحق رعاية حقيقية. معكِ في كل خطوة.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#5C2D5C] text-white px-7 py-3 rounded-full hover:bg-[#3D1E3C] transition-colors text-sm"
              style={{ fontWeight: 700 }}
            >
              <CalendarDays size={15} /> احجزي موعد المتابعة
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="ابدئي رحلة حملكِ بثقة ورعاية متكاملة"
        subtitle="تواصلي معنا لتحديد موعد متابعة الحمل الأول."
      />
    </div>
  );
}
