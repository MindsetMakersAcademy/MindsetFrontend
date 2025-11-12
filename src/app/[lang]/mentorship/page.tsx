import TelegramCta from "@/components/common/telegramCta";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getDictionary } from "@/src/dictionaries";
import { langTypes } from "@/src/types/common";

const testimonials = [
  {
    description:
      "Mohammadreza, thank you so much for the incredible 1:1 meetings during your time as our tech lead! Your guidance wasn't just insightful—it was truly transformative. Whether it was helping me navigate career uncertainties with such care or patiently breaking down challenges, your ability to listen deeply and offer thoughtful advice made every session invaluable.",
    name: "حسام رجائی",
    role: "Senior FrontEnd Software Engineer At Wallex",
  },
  {
    description:
      "من چیزی حدود یک سال با محمدرضا توی این جلسات شرکت می‌کردم از مهم‌ترین مسائلی که در مورد این جلسات برای من وجود داشت این بود که من هرچیزی که توی گوشه کنار ذهنم داشت خاک میخوردو پیداشون میکردم و جسارت فرصت دادن بهشونو به خودم می‌دادم نهایتا بعد اون جلسات هم به خودشناسی بهتری رسیده‌بودم هم توی خیلی از بخشا جسارت ریسک کردن بیش‌تری پیدا کرده‌بودم.",
    name: "علی رستمی",
    role: "Frontend Developer at Finestel",
  },
  {
    description:
      "محمدرضا یکی از بهترین کوچ‌هایی بوده که من تجربه صحبت باهاش رو داشتم توی جلسات one to one که باهاش داشتم، نه تنها کلی چیز یاد گرفتم، بلکه از تجربه‌های بی‌نظیرش هم بهره بردم بحث ها و چالش هایی که باهم مطرح میکردیم و پیش میرفتیم بهم حس بسیار خوبی میداد انگار که یک بخش ناقصی از پازل ناتمام مسیرم رو تکمیل میکرد.",
    name: "پرستش اعلم الهدی",
    role: "Software Engineer",
  },
  {
    description:
      "قبل از هر چیزی از آقای شعبانی بابت وقتی که برای منتورشیب گذاشتن ممنونم همین که کسی باشه راهنمایی کنه یه دنیا ارزش داره، ایشون از همون اول نقشه راه رو واسه من روشن کردند و به من کمک کردند تا فرصت ها چالش های این مسیر رو درک کنم.",
    name: "مهدی مشکاتیان",
    role: "Software engineer backend php, go",
  },
  {
    description:
      "پیشرفت و توسعه‌ی شخصی همیشه برای من مهم بوده و هست، و همیشه با اشتیاق و پشتکار سعی کردم تو مسیرم رشد کنم. اما خیلی وقت‌ها، علاقه و تلاش به تنهایی کافی نیستن و نگرانی من این بود که انرژی‌ای که برای این مسیر می‌ذارم، هدر نره.",
    name: "حسام الدین چراغی",
    role: "Software Engineer @ anar360.com",
  },
  {
    description:
      "جلسات یک یه یک با محمدرضا جزئیاتی زیادی داره که شاید نشه تو یک کامنت به همه‌ش پرداخت، ولی اگه بخوام خلاصه کنم، باید بگم که این جلسات برای من مثل یک نقشه راه بود که بهم کمک می‌کرد تا مسیرم رو بهتر ببینم و تصمیم‌های بهتری بگیرم.",
    name: "امیر احسان احمدزاده",
    role: "Software Developer | Math Enthusiast | Lifelong Learner",
  },
];

const MentorshipPage = async ({ params }: { params: Promise<{ lang: langTypes }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Section */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">{dict.dedicated_mentoring_course}</h1>
          <p className="text-xl text-muted-foreground">{dict.mentor_name}</p>
        </div>
        <p className="text-base whitespace-pre-line leading-loose">{dict.dedicated_mentoring_course_description_1}</p>
        <p className="text-base whitespace-pre-line leading-loose">{dict.dedicated_mentoring_course_description_2}</p>
      </div>

      {/* Registration Process Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{dict.registration_process_title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-loose">{dict.registration_process_description}</p>
          <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
            <li>{dict.registration_requirement_1}</li>
            <li>{dict.registration_requirement_2}</li>
            <li>{dict.registration_requirement_3}</li>
          </ul>
          <p className="text-base leading-loose font-medium">{dict.registration_process_note}</p>
          <p className="text-base leading-loose text-muted-foreground">{dict.registration_process_followup}</p>
        </CardContent>
      </Card>

      {/* Course Structure Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{dict.course_structure_title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-loose">{dict.course_structure_description}</p>
          <ul className="list-disc list-inside space-y-3 text-base text-muted-foreground">
            <li>
              <strong className="text-foreground">{dict.course_structure_item_1}</strong>
            </li>
            <li>
              <strong className="text-foreground">{dict.course_structure_item_2}</strong>
            </li>
            <li>
              <strong className="text-foreground">{dict.course_structure_item_3}</strong>
            </li>
            <li>
              <strong className="text-foreground">{dict.course_structure_item_4}</strong>
            </li>
            <li>
              <strong className="text-foreground">{dict.course_structure_item_5}</strong>
            </li>
          </ul>
          <div className="pt-4">
            <p className="text-base leading-loose font-medium mb-4">{dict.course_structure_cta}</p>
            <TelegramCta />
          </div>
        </CardContent>
      </Card>

      {/* Testimonials Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">{dict.participant_experiences_title}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6 space-y-4">
                <p className="text-base leading-relaxed text-muted-foreground">{testimonial.description}</p>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <p className="text-lg font-medium">{dict.have_question}</p>
        <TelegramCta />
      </div>
    </main>
  );
};

export default MentorshipPage;
