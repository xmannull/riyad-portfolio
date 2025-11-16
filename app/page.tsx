'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, ExternalLink, Zap, Brain, Code } from 'lucide-react';

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
      {/* নেভিগেশন বার */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* লোগো */}
          <div className="text-2xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              RH
            </span>
          </div>

          {/* নেভিগেশন লিংক */}
          <div className="hidden md:flex gap-8">
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

          {/* মোবাইল মেনু বাটন */}
          <div className="md:hidden">
            <Button variant="outline" size="sm">
              মেনু
            </Button>
          </div>
        </div>
      </nav>

      {/* হিরো সেকশন */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* ব্যাকগ্রাউন্ড ইমেজ */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* বাম পাশ - টেক্সট */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  আমি <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                    Riyad Hossain Huzaifa
                  </span>
                </h1>
                <p className="text-2xl text-gray-700 font-semibold">
                  AI Mastering এর মাস্টার
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                আমি AI Handling এ বিশেষজ্ঞ এবং আপনার প্রকল্পকে পরবর্তী স্তরে নিয়ে যেতে প্রস্তুত। আধুনিক প্রযুক্তি এবং সৃজনশীল সমাধানের মাধ্যমে আমি আপনার ব্যবসায়িক লক্ষ্য অর্জনে সহায়তা করি।
              </p>

              {/* CTA বাটন */}
              <div className="flex gap-4 pt-4">
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

              {/* সোশ্যাল লিংক */}
              <div className="flex gap-4 pt-4">
                <a
                <a href="/download">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    ডাউনলোড করুন
                  </Button>
                </a>
                </Link>
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

            {/* ডান পাশ - প্রোফাইল ছবি */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-100 rounded-3xl blur-2xl opacity-50"></div>
                <Image
                  src="/images/profile.png"
                  alt="Riyad Hossain Huzaifa"
                  fill
                  className="object-cover rounded-3xl relative z-10 shadow-2xl"
                  priority
                />
              </div>
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
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI বিশেষজ্ঞ
              </h3>
              <p className="text-gray-600">
                আমি কৃত্রিম বুদ্ধিমত্তা এবং মেশিন লার্নিং এর গভীর জ্ঞান রাখি এবং জটিল সমস্যার সমাধান করি।
              </p>
            </Card>

            {/* কার্ড ২ */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
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
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                প্রযুক্তি দক্ষতা
              </h3>
              <p className="text-gray-600">
                সর্বশেষ প্রযুক্তি এবং সরঞ্জাম ব্যবহার করে আমি উদ্ভাবনী সমাধান তৈরি করি।
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
            {/* প্রধান দক্ষতা */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                প্রধান দক্ষতা
              </h3>

              {['AI Handling', 'Machine Learning', 'Data Analysis', 'Problem Solving'].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <span className="text-amber-600 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-amber-600 to-amber-700 h-2 rounded-full"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* প্রযুক্তি স্ট্যাক */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                প্রযুক্তি স্ট্যাক
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {['Python', 'TensorFlow', 'PyTorch', 'JavaScript', 'React', 'Node.js', 'SQL', 'Cloud'].map((tech, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border border-amber-200 hover:shadow-md transition-shadow"
                  >
                    <p className="text-gray-900 font-semibold text-center">{tech}</p>
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
            {/* প্রকল্প ১ */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center">
                <Brain className="w-16 h-16 text-amber-700 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  AI চ্যাটবট
                </h3>
                <p className="text-gray-600 mb-4">
                  উন্নত NLP প্রযুক্তি ব্যবহার করে তৈরি স্মার্ট চ্যাটবট সিস্টেম।
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  বিস্তারিত <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* প্রকল্প ২ */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center">
                <Zap className="w-16 h-16 text-amber-700 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ডেটা বিশ্লেষণ
                </h3>
                <p className="text-gray-600 mb-4">
                  বড় ডেটাসেট থেকে মূল্যবান অন্তর্দৃষ্টি বের করার সিস্টেম।
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  বিস্তারিত <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* প্রকল্প ৩ */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center">
                <Code className="w-16 h-16 text-amber-700 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ওয়েব অ্যাপ্লিকেশন
                </h3>
                <p className="text-gray-600 mb-4">
                  আধুনিক প্রযুক্তি দিয়ে তৈরি স্কেলেবল ওয়েব সমাধান।
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  বিস্তারিত <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
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
            আপনার প্রকল্প সম্পর্কে আলোচনা করতে আমি সর্বদা প্রস্তুত। আমাকে একটি বার্তা পাঠান এবং আমরা একসাথে কাজ করব।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
            >
              <Mail className="w-5 h-5 mr-2" />
              ইমেইল পাঠান
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn এ যোগাযোগ করুন
            </Button>
          </div>
        </div>
      </section>

      {/* ফুটার */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* ব্র্যান্ড */}
            <div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  RH
                </span>
              </h3>
              <p className="text-gray-400">
                AI Mastering এর মাস্টার
              </p>
            </div>

            {/* দ্রুত লিংক */}
            <div>
              <h4 className="font-bold mb-4">দ্রুত লিংক</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">পরিচয়</button></li>
                <li><button onClick={() => scrollToSection('skills')} className="hover:text-amber-400 transition-colors">দক্ষতা</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-amber-400 transition-colors">প্রকল্প</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">যোগাযোগ</button></li>
              </ul>
            </div>

            {/* সোশ্যাল */}
            <div>
              <h4 className="font-bold mb-4">সোশ্যাল মিডিয়া</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Riyad Hossain Huzaifa. সর্বাধিকার সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
