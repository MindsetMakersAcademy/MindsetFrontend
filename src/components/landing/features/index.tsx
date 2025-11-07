import { Atom, BookOpen, GitMerge, Shield, Zap } from "lucide-react";

import FeatureCard from "./card";
import { getLang } from "@/lib/i18n";
import { getDictionary } from "@/src/dictionaries";

export default async function Features() {
  const lang = getLang();
  const dict = await getDictionary(lang);

  const features = [
    {
      Icon: GitMerge,
      title: dict.courses_and_workshops,
      description: "Work together seamlessly with powerful version control and code review tools.",
      image: "/landing/courses-cover.webp",
      iconColor: "text-purple-400",
    },
    {
      Icon: BookOpen,
      title: dict.reading_courses,
      description: "Automate your build, test, and deployment processes with integrated CI/CD.",
      image: "/landing/reading-courses-cover.webp",
      iconColor: "text-blue-400",
    },
    {
      Icon: Atom,
      title: dict.articles,
      description: "Keep your code secure with advanced security features and automated vulnerability detection.",
      image: "/landing/article-cover.webp",
      iconColor: "text-green-400",
    },
  ];

  return (
    <section className="border-b border-border py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-20">
        {features.map((feature, index) => (
          <FeatureCard {...feature} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}
