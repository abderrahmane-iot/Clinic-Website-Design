import { Link } from "react-router";
import { AlertCircle } from "lucide-react";

export function Terms() {
  return (
    <div>
      <section
        className="relative pt-32 pb-12 px-4 md:pt-40 md:pb-16 text-center"
        style={{ background: "linear-gradient(135deg, #3D1E3C 0%, #5C2D5C 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(232,160,180,0.2)" }}>
            <AlertCircle size={28} style={{ color: "#E8A0B4" }} />
          </div>
          <h1 className="text-white mb-3" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800 }}>
            إخلاء المسؤولية وشروط الاستخدام
          </h1>
          <p className="text-white/70 text-sm">آخر تحديث: فبراير 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 40 720 0 0 20L0 40Z" fill="#FDF8F5" />
          </svg>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#FDF8F5]">
        <div className="max-w-3xl mx-auto">
          {/* Medical disclaimer banner */}
          <div className="flex items-start gap-3 p-5 bg-[#FDF0F5] rounded-2xl border border-[#E8A0B4]/30 mb-6">
            <AlertCircle size={18} className="text-[#5C2D5C] mt-0.5 shrink-0" />
            <p className="text-[#2A1A2E] text-sm leading-relaxed">
              <strong>إخلاء مسؤولية طبي مهم:</strong> المحتوى الطبي الوارد في هذا الموقع لأغراض توعوية وإعلامية فقط، ولا يُمثل استشارة طبية متخصصة ولا يُغني عنها. يجب مراجعة الطبيب المختص لتشخيص حالتكِ والحصول على التوصيات الطبية الملائمة.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[#5C2D5C]/08 space-y-8">
            {[
              {
                title: "١. الغرض من الموقع",
                content: `موقع عيادة الدكتورة بن الزين منصورة هو موقع إعلامي وتعريفي يهدف إلى:\n- التعريف بالخدمات الطبية المقدمة في العيادة\n- تسهيل التواصل وحجز المواعيد\n- توفير معلومات صحية عامة لأغراض توعوية`,
              },
              {
                title: "٢. إخلاء المسؤولية الطبية",
                content: `لا تُقدم المعلومات الواردة على هذا الموقع بوصفها استشارة طبية أو تشخيصاً أو توصية علاجية. أي معلومة طبية مذكورة هي للتوعية العامة فقط وقد لا تنطبق على حالتكِ الخاصة. لا تعتمدي على محتوى الموقع لاتخاذ قرارات طبية — استشيري طبيبكِ دائماً.`,
              },
              {
                title: "٣. شروط استخدام الموقع",
                content: `باستخدام هذا الموقع، توافقين على:\n- استخدامه للأغراض المشروعة فقط\n- عدم إساءة استخدام أي معلومات أو بيانات\n- عدم محاولة التأثير على أمن الموقع أو بنيته التقنية`,
              },
              {
                title: "٤. الملكية الفكرية",
                content: `جميع محتويات الموقع — من نصوص وصور وتصميمات — هي ملكية العيادة أو مرخصة لها. لا يُسمح بنسخ أو إعادة نشر أي محتوى دون إذن كتابي مسبق.`,
              },
              {
                title: "٥. روابط خارجية",
                content: `قد يحتوي الموقع على روابط لمواقع خارجية. لا تتحمل العيادة أي مسؤولية عن محتوى تلك المواقع أو ممارساتها في التعامل مع البيانات.`,
              },
              {
                title: "٦. التحديثات",
                content: `نحتفظ بحق تحديث أو تعديل هذه الشروط في أي وقت. يُنصح بمراجعة هذه الصفحة بشكل دوري. الاستمرار في استخدام الموقع يعني الموافقة على الشروط المحدّثة.`,
              },
              {
                title: "٧. الاتصال",
                content: `لأي استفسار حول هذه الشروط:\n- البريد الإلكتروني: contact@clinique-bz.dz\n- الهاتف: +213 XX XX XX XX`,
              },
            ].map((section, i) => (
              <div key={i}>
                <h2 className="text-[#5C2D5C] mb-3 text-base" style={{ fontWeight: 800 }}>
                  {section.title}
                </h2>
                <div className="text-[#2A1A2E] text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-[#5C2D5C]/10 flex flex-wrap gap-4">
              <Link
                to="/privacy"
                className="text-[#5C2D5C] text-sm hover:text-[#3D1E3C] transition-colors"
                style={{ fontWeight: 600 }}
              >
                ← سياسة الخصوصية
              </Link>
              <Link
                to="/contact"
                className="text-[#5C2D5C] text-sm hover:text-[#3D1E3C] transition-colors"
                style={{ fontWeight: 600 }}
              >
                ← تواصلي معنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
