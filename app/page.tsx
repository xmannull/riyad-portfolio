'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, ExternalLink, Zap, Brain, Code, Download } from 'lucide-react';

export default function Home() {
  // স্মুথ স্ক্রল ফাংশন
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* নেভিগেশন */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              RH
            </span>
          </div>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              পরিচয়
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              দক্ষতা
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              প্রকল্প
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              যোগাযোগ
            </button>
          </div>
        </div>
      </nav>

      {/* হিরো সেকশন */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* বাম দিক - টেক্সট */}
          <div>
            <div className="mb-6">
              <h2 className="text-amber-600 font-semibold text-lg mb-2">আমি</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                <span className="text-amber-600">Riyad</span>
                <br />
                Hossain Huzaifa
              </h1>
              <p className="text-2xl text-gray-700 font-semibold">
                AI Mastering এর মাস্টার
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              আমি AI Handling এ বিশেষজ্ঞ এবং আপনার প্রকল্পকে পরবর্তী স্তরে নিয়ে যেতে প্রস্তুত। আধুনিক প্রযুক্তি এবং সৃজনশীল সমাধানের মাধ্যমে আমি আপনার ব্যবসায়িক লক্ষ্য অর্জনে সহায়তা করি।
            </p>

            {/* CTA বাটন */}
            <div className="flex flex-col gap-4 pt-8">
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  যোগাযোগ করুন
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={() => scrollToSection('projects')}
                >
                  আমার কাজ দেখুন
                </Button>
              </div>
              <a href="/download" className="w-full">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-amber-600 text-amber-600 hover:bg-amber-50"
                >
                  <Download className="w-5 h-5 mr-2" />
                  ডাউনলোড করুন
                </Button>
              </a>
            </div>

            {/* সোশ্যাল লিংক */}
            <div className="flex gap-4 pt-8">
              <a
                href="mailto:riyad@example.com"
                className="p-3 bg-gray-100 hover:bg-amber-100 rounded-full transition-colors"
                title="ইমেইল"
              >
                <Mail className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 hover:bg-amber-100 rounded-full transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 hover:bg-amber-100 rounded-full transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>

          {/* ডান দিক - ছবি */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/profile.png"
                alt="Riyad Hossain Huzaifa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* পরিচয় সেকশন */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            আমার পরিচয়
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* কার্ড ১ */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI বিশেষজ্ঞ
              </h3>
              <p className="text-gray-600">
                আমি কৃত্রিম বুদ্ধিমত্তা এবং মেশিন লার্নিং এ গভীর জ্ঞান রাখি এবং জটিল সমস্যার সমাধান করি।
              </p>
            </Card>

            {/* কার্ড ২ */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                দ্রুত সমাধান
              </h3>
              <p className="text-gray-600">
                আমি দ্রুত এবং কার্যকর সমাধান প্রদান করি যা আপনার ব্যবসায়িক চাহিদা পূরণ করে।
              </p>
            </Card>

            {/* কার্ড ৩ */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                প্রযুক্তি দক্ষতা
              </h3>
              <p className="text-gray-600">
                আমি সর্বশেষ প্রযুক্তি এবং সেরা অনুশীলন ব্যবহার করে উচ্চমানের কোড লিখি।
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* দক্ষতা সেকশন */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            আমার দক্ষতা
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* দক্ষতা বার */}
            <div className="space-y-8">
              {[
                { name: 'AI & Machine Learning', level: 95 },
                { name: 'Python Programming', level: 90 },
                { name: 'Data Analysis', level: 85 },
                { name: 'Problem Solving', level: 92 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">
                      {skill.name}
                    </span>
                    <span className="text-amber-600 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-amber-600 to-amber-700 h-3 rounded-full transition-all"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* প্রযুক্তি স্ট্যাক */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                প্রযুক্তি স্ট্যাক
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Python',
                  'TensorFlow',
                  'PyTorch',
                  'Scikit-learn',
                  'Pandas',
                  'NumPy',
                  'SQL',
                  'JavaScript',
                ].map((tech) => (
                  <div
                    key={tech}
                    className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border border-amber-200 text-center font-semibold text-amber-900"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* প্রকল্প সেকশন */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            আমার প্রকল্প
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI চ্যাটবট',
                description:
                  'একটি উন্নত AI চ্যাটবট যা প্রাকৃতিক ভাষা প্রক্রিয়াকরণ ব্যবহার করে গ্রাহক সেবা প্রদান করে।',
              },
              {
                title: 'ডেটা বিশ্লেষণ প্ল্যাটফর্ম',
                description:
                  'বড় ডেটাসেট বিশ্লেষণ এবং ভিজ্যুয়ালাইজেশনের জন্য একটি শক্তিশালী প্ল্যাটফর্ম।',
              },
              {
                title: 'মেশিন লার্নিং মডেল',
                description:
                  'ভবিষ্যদ্বাণীমূলক বিশ্লেষণের জন্য উন্নত মেশিন লার্নিং মডেল তৈরি এবং প্রশিক্ষণ।',
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" />
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                    AI
                  </span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                    Python
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* যোগাযোগ সেকশন */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            আমার সাথে যোগাযোগ করুন
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            আপনার প্রকল্প সম্পর্কে আলোচনা করতে আমার সাথে যোগাযোগ করুন। আমি আপনার ব্যবসায়িক লক্ষ্য অর্জনে সহায়তা করতে প্রস্তুত।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:riyad@example.com">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                ইমেইল পাঠান
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn এ সংযোগ করুন
            </Button>
          </div>
        </div>
      </section>

      {/* ফুটার */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  RH
                </span>
              </h3>
              <p className="text-gray-400">
                AI Mastering এর মাস্টার এবং প্রযুক্তি সমাধান প্রদানকারী।
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">দ্রুত লিংক</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="hover:text-amber-400 transition-colors"
                  >
                    পরিচয়
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className="hover:text-amber-400 transition-colors"
                  >
                    দক্ষতা
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="hover:text-amber-400 transition-colors"
                  >
                    প্রকল্প
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">সোশ্যাল মিডিয়া</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">যোগাযোগ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="mailto:riyad@example.com"
                    className="hover:text-amber-400 transition-colors"
                  >
                    riyad@example.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    +880 1234 567890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © 2025 Riyad Hossain Huzaifa. সর্বাধিকার সংরক্ষিত।
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
