import { useState } from "react";
import {
  Phone, MapPin, Clock, MessageCircle,
  CalendarDays, CheckCircle, Shield, Send
} from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

type FormData = {
  name: string;
  phone: string;
  contactMethod: string;
  service: string;
  preferredTime: string;
  pregnancyWeek: string;
  notes: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const services = [
  "متابعة الحمل",
  "الحمل عالي الخطورة",
  "استشارة التوليد",
  "الموجات فوق الصوتية",
  "رعاية ما بعد الولادة",
  "تنظيم الأسرة",
  "الاستشارة النسائية",
  "الفحص الدوري",
  "أخرى",
];

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    contactMethod: "whatsapp",
    service: "",
    preferredTime: "",
    pregnancyWeek: "",
    notes: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "الاسم الكامل مطلوب";
    if (!formData.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";
    if (!formData.service) newErrors.service = "يرجى اختيار الخدمة المطلوبة";
    if (!formData.consent) newErrors.consent = "يجب الموافقة على سياسة الخصوصية";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

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
            تواصلي معنا
          </span>
          <h1
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.25 }}
          >
            احجزي موعدك اليوم
          </h1>
          <p className="text-white/75 leading-relaxed max-w-xl mx-auto">
            نرد على طلبات الحجز خلال أقل من 24 ساعة في أيام العمل. بيانات تواصلكِ تُعامَل بسرية تامة.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 40 720 0 0 20L0 40Z" fill="#FDF8F5" />
          </svg>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-10 px-4 bg-[#FDF8F5]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://wa.me/213XXXXXXXXX?text=السلام عليكم، أرغب في حجز موعد"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#5C2D5C]/10 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle size={22} className="text-[#25D366]" />
              </div>
              <div>
                <div className="text-[#2A1A2E] text-sm" style={{ fontWeight: 700 }}>واتساب</div>
                <div className="text-[#7A6080] text-xs">تواصل فوري</div>
              </div>
            </a>
            <a
              href="tel:+213XXXXXXXXX"
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#5C2D5C]/10 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#5C2D5C]/08 group-hover:bg-[#5C2D5C]/15 transition-colors">
                <Phone size={22} style={{ color: "#5C2D5C" }} />
              </div>
              <div>
                <div className="text-[#2A1A2E] text-sm" style={{ fontWeight: 700 }}>اتصال مباشر</div>
                <div className="text-[#7A6080] text-xs" dir="ltr">+213 XX XX XX XX</div>
              </div>
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#5C2D5C]/10 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#5C8F89]/10 group-hover:bg-[#5C8F89]/20 transition-colors">
                <MapPin size={22} className="text-[#5C8F89]" />
              </div>
              <div>
                <div className="text-[#2A1A2E] text-sm" style={{ fontWeight: 700 }}>الاتجاهات</div>
                <div className="text-[#7A6080] text-xs">عرض الخريطة</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-12 md:py-16 px-4 bg-[#FDF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-[#5C2D5C]/08">
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: "#EDF5F4" }}
                    >
                      <CheckCircle size={36} style={{ color: "#5C8F89" }} />
                    </div>
                    <h3 className="text-[#2A1A2E] mb-3 text-xl" style={{ fontWeight: 800 }}>
                      تم إرسال طلبكِ بنجاح!
                    </h3>
                    <p className="text-[#7A6080] text-sm leading-relaxed mb-2">
                      شكراً لكِ. سنتواصل معكِ خلال أقل من 24 ساعة لتأكيد الموعد.
                    </p>
                    <p className="text-[#7A6080] text-xs">
                      يمكنكِ أيضاً التواصل مباشرة عبر واتساب لتأكيد أسرع.
                    </p>
                    <a
                      href="https://wa.me/213XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#20b859] transition-colors mt-5 text-sm"
                      style={{ fontWeight: 700 }}
                    >
                      <MessageCircle size={16} /> تأكيد عبر واتساب
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="text-[#2A1A2E] mb-1 text-xl" style={{ fontWeight: 800 }}>
                        نموذج حجز الموعد
                      </h2>
                      <p className="text-[#7A6080] text-sm flex items-center gap-1.5">
                        <Shield size={13} className="text-[#5C8F89]" />
                        بياناتكِ محمية وسرية تماماً
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block text-[#2A1A2E] text-sm mb-1.5" style={{ fontWeight: 600 }}>
                          الاسم الكامل <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="أدخلي اسمكِ الكامل"
                          className={`w-full px-4 py-3 rounded-xl border bg-[#FDF8F5] text-[#2A1A2E] placeholder:text-[#7A6080]/60 focus:outline-none focus:ring-2 transition-all text-sm ${
                            errors.name
                              ? "border-red-400 focus:ring-red-300"
                              : "border-[#5C2D5C]/15 focus:ring-[#5C2D5C]/30 focus:border-[#5C2D5C]/40"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[#2A1A2E] text-sm mb-1.5" style={{ fontWeight: 600 }}>
                          رقم الهاتف <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0X XX XX XX XX"
                          dir="ltr"
                          className={`w-full px-4 py-3 rounded-xl border bg-[#FDF8F5] text-[#2A1A2E] placeholder:text-[#7A6080]/60 focus:outline-none focus:ring-2 transition-all text-sm ${
                            errors.phone
                              ? "border-red-400 focus:ring-red-300"
                              : "border-[#5C2D5C]/15 focus:ring-[#5C2D5C]/30 focus:border-[#5C2D5C]/40"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      {/* Contact Method */}
                      <div>
                        <label className="block text-[#2A1A2E] text-sm mb-2" style={{ fontWeight: 600 }}>
                          طريقة التواصل المفضلة
                        </label>
                        <div className="flex gap-3">
                          {[
                            { value: "whatsapp", label: "واتساب" },
                            { value: "call", label: "اتصال هاتفي" },
                            { value: "sms", label: "رسالة قصيرة" },
                          ].map((opt) => (
                            <label
                              key={opt.value}
                              className={`flex-1 text-center px-3 py-2.5 rounded-xl border cursor-pointer transition-all text-xs ${
                                formData.contactMethod === opt.value
                                  ? "bg-[#5C2D5C] text-white border-[#5C2D5C]"
                                  : "bg-[#FDF8F5] text-[#2A1A2E] border-[#5C2D5C]/15 hover:border-[#5C2D5C]/30"
                              }`}
                              style={{ fontWeight: 600 }}
                            >
                              <input
                                type="radio"
                                name="contactMethod"
                                value={opt.value}
                                checked={formData.contactMethod === opt.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              {opt.label}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block text-[#2A1A2E] text-sm mb-1.5" style={{ fontWeight: 600 }}>
                          الخدمة المطلوبة <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-[#FDF8F5] text-[#2A1A2E] focus:outline-none focus:ring-2 transition-all text-sm ${
                            errors.service
                              ? "border-red-400 focus:ring-red-300"
                              : "border-[#5C2D5C]/15 focus:ring-[#5C2D5C]/30 focus:border-[#5C2D5C]/40"
                          }`}
                        >
                          <option value="">اختاري الخدمة...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                        )}
                      </div>

                      {/* Preferred Time */}
                      <div>
                        <label className="block text-[#2A1A2E] text-sm mb-1.5" style={{ fontWeight: 600 }}>
                          الوقت المفضل (اختياري)
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#5C2D5C]/15 bg-[#FDF8F5] text-[#2A1A2E] focus:outline-none focus:ring-2 focus:ring-[#5C2D5C]/30 transition-all text-sm"
                        >
                          <option value="">أي وقت مناسب</option>
                          <option value="morning">صباحاً (9:00 – 12:00)</option>
                          <option value="afternoon">بعد الظهر (12:00 – 15:00)</option>
                          <option value="evening">مساءً (15:00 – 18:00)</option>
                        </select>
                      </div>

                      {/* Pregnancy Week (optional) */}
                      <div>
                        <label className="block text-[#2A1A2E] text-sm mb-1.5" style={{ fontWeight: 600 }}>
                          أسبوع الحمل الحالي (اختياري)
                        </label>
                        <input
                          type="text"
                          name="pregnancyWeek"
                          value={formData.pregnancyWeek}
                          onChange={handleChange}
                          placeholder="مثال: 12 أسبوعاً"
                          className="w-full px-4 py-3 rounded-xl border border-[#5C2D5C]/15 bg-[#FDF8F5] text-[#2A1A2E] placeholder:text-[#7A6080]/60 focus:outline-none focus:ring-2 focus:ring-[#5C2D5C]/30 transition-all text-sm"
                        />
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="block text-[#2A1A2E] text-sm mb-1.5" style={{ fontWeight: 600 }}>
                          ملاحظات إضافية (اختياري)
                        </label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          rows={3}
                          placeholder="أي معلومات إضافية تودين مشاركتها..."
                          className="w-full px-4 py-3 rounded-xl border border-[#5C2D5C]/15 bg-[#FDF8F5] text-[#2A1A2E] placeholder:text-[#7A6080]/60 focus:outline-none focus:ring-2 focus:ring-[#5C2D5C]/30 transition-all resize-none text-sm"
                        />
                      </div>

                      {/* Consent */}
                      <div>
                        <label className={`flex items-start gap-3 cursor-pointer ${errors.consent ? "text-red-500" : ""}`}>
                          <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="mt-0.5 w-4 h-4 accent-[#5C2D5C] cursor-pointer"
                          />
                          <span className="text-xs text-[#7A6080] leading-relaxed">
                            أوافق على{" "}
                            <a href="/privacy" className="text-[#5C2D5C] underline hover:text-[#3D1E3C]">
                              سياسة الخصوصية
                            </a>{" "}
                            وأمنح إذناً للتواصل معي لتأكيد الموعد. بياناتي لن تُشارك مع أطراف خارجية.
                          </span>
                        </label>
                        {errors.consent && (
                          <p className="text-red-500 text-xs mt-1 mr-7">{errors.consent}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-[#5C2D5C] text-white py-4 rounded-xl hover:bg-[#3D1E3C] transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md text-sm"
                        style={{ fontWeight: 700 }}
                      >
                        {loading ? (
                          <span>جارٍ الإرسال...</span>
                        ) : (
                          <>
                            <Send size={16} /> إرسال طلب الحجز
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <SectionHeader eyebrow="معلومات الاتصال" title="طرق التواصل المباشر" />

              <div className="space-y-4">
                {[
                  { icon: Phone, label: "هاتف العيادة", value: "+213 XX XX XX XX", href: "tel:+213XXXXXXXXX", color: "#5C2D5C", bg: "#F0E8EE" },
                  { icon: MessageCircle, label: "واتساب", value: "تواصل فوري وسريع", href: "https://wa.me/213XXXXXXXXX", color: "#25D366", bg: "#E8F8EE" },
                  { icon: MapPin, label: "عنوان العيادة", value: "عنوان العيادة، المدينة، الجزائر", href: "https://maps.google.com", color: "#5C8F89", bg: "#EDF5F4" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#5C2D5C]/08 hover:shadow-md transition-shadow"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: item.bg }}
                    >
                      <item.icon size={20} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-[#7A6080] text-xs mb-0.5" style={{ fontWeight: 600 }}>{item.label}</div>
                      <div className="text-[#2A1A2E] text-sm" style={{ fontWeight: 600 }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="bg-white p-5 rounded-2xl border border-[#5C2D5C]/08">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#F0E8EE" }}>
                    <Clock size={18} style={{ color: "#5C2D5C" }} />
                  </div>
                  <h4 className="text-[#2A1A2E] text-sm" style={{ fontWeight: 700 }}>ساعات العمل</h4>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "الأحد – الخميس", time: "9:00 – 18:00" },
                    { day: "السبت", time: "9:00 – 13:00" },
                    { day: "الجمعة", time: "مغلق" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-[#2A1A2E]" style={{ fontWeight: 500 }}>{item.day}</span>
                      <span
                        className={item.time === "مغلق" ? "text-[#7A6080]" : "text-[#5C2D5C]"}
                        style={{ fontWeight: 600 }}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#5C2D5C]/08">
                  <p className="text-[#7A6080] text-xs flex items-center gap-1.5">
                    <CalendarDays size={12} className="text-[#5C2D5C]" />
                    نرد على طلبات الحجز خلال أقل من 24 ساعة
                  </p>
                </div>
              </div>

              {/* Privacy note */}
              <div className="p-4 bg-[#EDF5F4] rounded-2xl border border-[#5C8F89]/20">
                <div className="flex items-start gap-2">
                  <Shield size={14} className="text-[#5C8F89] mt-0.5 shrink-0" />
                  <p className="text-[#2A1A2E] text-xs leading-relaxed">
                    <strong>خصوصية وسرية تامة:</strong> جميع بيانات التواصل والمعلومات الطبية تُحفظ بسرية مطلقة ولا تُشارك مع أي طرف خارجي.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="موقعنا" title="كيف تصلين إلينا" center />
          <div className="rounded-2xl overflow-hidden bg-[#F0E8EE] flex items-center justify-center min-h-72 shadow-md border border-[#5C2D5C]/10">
            <div className="text-center p-8">
              <MapPin size={36} className="mx-auto mb-3 text-[#5C2D5C]" />
              <p className="text-[#5C2D5C] text-sm" style={{ fontWeight: 600 }}>تضمين خريطة Google Maps التفاعلية</p>
              <p className="text-[#7A6080] text-xs mt-1 mb-4">عنوان العيادة، المدينة، الجزائر</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#5C2D5C] text-white px-5 py-2.5 rounded-full hover:bg-[#3D1E3C] transition-colors text-sm"
                style={{ fontWeight: 700 }}
              >
                <MapPin size={14} /> احصلي على الاتجاهات
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final reassurance */}
      <section className="py-12 px-4 bg-[#FDF8F5]">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="p-8 rounded-3xl"
            style={{ background: "linear-gradient(135deg, #5C2D5C 0%, #3D1E3C 100%)" }}
          >
            <h3 className="text-white mb-3 text-lg" style={{ fontWeight: 800 }}>
              نحن هنا لخدمتكِ
            </h3>
            <p className="text-white/75 text-sm leading-relaxed mb-5">
              لا تترددي في التواصل معنا — سواء لحجز موعد أو للاستفسار. كل سؤال يستحق إجابة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#20b859] transition-colors text-sm"
                style={{ fontWeight: 700 }}
              >
                <MessageCircle size={16} /> واتساب مباشر
              </a>
              <a
                href="tel:+213XXXXXXXXX"
                className="flex items-center gap-2 bg-white/15 text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white/25 transition-colors text-sm"
                style={{ fontWeight: 700 }}
              >
                <Phone size={16} /> اتصال هاتفي
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
