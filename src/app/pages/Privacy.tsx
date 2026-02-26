import { Link } from "react-router";
import { Shield } from "lucide-react";

export function Privacy() {
  return (
    <div>
      <section
        className="relative pt-32 pb-12 px-4 md:pt-40 md:pb-16 text-center"
        style={{ background: "linear-gradient(135deg, #3D1E3C 0%, #5C2D5C 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(232,160,180,0.2)" }}>
            <Shield size={28} style={{ color: "#E8A0B4" }} />
          </div>
          <h1 className="text-white mb-3" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800 }}>
            سياسة الخصوصية
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
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[#5C2D5C]/08 space-y-8">
            {[
              {
                title: "١. مقدمة",
                content: `تلتزم عيادة الدكتورة بن الزين منصورة بحماية خصوصية مريضاتها وزوارات موقعها. تُوضح هذه السياسة كيفية جمع البيانات الشخصية واستخدامها وحمايتها عند التفاعل مع موقعنا أو خدماتنا.`,
              },
              {
                title: "٢. البيانات التي نجمعها",
                content: `قد نجمع المعلومات التالية:\n- الاسم الكامل ورقم الهاتف عند تقديم طلب حجز\n- معلومات صحية محدودة تُقدمها المريضة طوعاً لأغراض تنسيق الموعد\n- بيانات التصفح الأساسية (عبر ملفات الكوكيز) لتحسين أداء الموقع`,
              },
              {
                title: "٣. كيف نستخدم البيانات",
                content: `تُستخدم البيانات الشخصية حصراً لـ:\n- التواصل معكِ لتأكيد المواعيد أو الرد على استفساراتكِ\n- تحسين جودة خدماتنا الطبية\n- الامتثال للمتطلبات القانونية والتنظيمية المعمول بها`,
              },
              {
                title: "٤. حماية البيانات",
                content: `نطبق إجراءات تقنية وتنظيمية مناسبة لحماية بياناتكِ من الوصول غير المصرح به أو الكشف أو التعديل أو الإتلاف. لا تُشارك بياناتكِ الشخصية مع أطراف ثالثة خارج نطاق تقديم الخدمة المطلوبة.`,
              },
              {
                title: "٥. ملفات الكوكيز",
                content: `قد يستخدم الموقع ملفات كوكيز تقنية ضرورية لضمان عمله الصحيح. يمكنكِ تعطيل الكوكيز من إعدادات المتصفح، مع العلم بأن ذلك قد يؤثر على بعض وظائف الموقع.`,
              },
              {
                title: "٦. حقوقكِ",
                content: `يحق لكِ في أي وقت:\n- الاطلاع على البيانات التي نحتفظ بها عنكِ\n- طلب تصحيح أي معلومات غير دقيقة\n- طلب حذف بياناتكِ وفق الإطار القانوني المتاح\nللاستفسار، تواصلي معنا عبر البريد الإلكتروني أو الهاتف.`,
              },
              {
                title: "٧. التواصل",
                content: `لأي استفسار حول هذه السياسة، يرجى التواصل معنا عبر:\n- البريد الإلكتروني: contact@clinique-bz.dz\n- الهاتف: +213 XX XX XX XX`,
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

            <div className="pt-4 border-t border-[#5C2D5C]/10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[#5C2D5C] text-sm hover:text-[#3D1E3C] transition-colors"
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
