'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, FileText, Archive, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* নেভিগেশন */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              RH
            </span>
          </Link>
          <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
            ফিরে যান
          </Link>
        </div>
      </nav>

      {/* মূল কন্টেন্ট */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* শিরোনাম */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              ডাউনলোড করুন
            </h1>
            <p className="text-xl text-gray-600">
              আপনার পোর্টফোলিও ওয়েবসাইটের সম্পূর্ণ সোর্স কোড এবং ডকুমেন্টেশন
            </p>
          </div>

          {/* ডাউনলোড কার্ড */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* সোর্স কোড */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center">
                  <Archive className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    সম্পূর্ণ সোর্স কোড
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    সুপারিশকৃত
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-amber-600 font-bold">📦</span>
                  <span>ফাইল: riyad-portfolio-source.tar.gz</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-amber-600 font-bold">📊</span>
                  <span>আকার: 1.7 MB</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-amber-600 font-bold">✅</span>
                  <span>সব ফাইল এবং ছবি অন্তর্ভুক্ত</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                স্থানীয়ভাবে চালানোর জন্য সম্পূর্ণ প্রকল্প। Node.js ইনস্টল করে npm install এবং npm run dev চালান।
              </p>

              <a
                href="/downloads/riyad-portfolio-source.tar.gz"
                download
                className="w-full block"
              >
                <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white">
                  <Download className="w-5 h-5 mr-2" />
                  ডাউনলোড করুন (1.7 MB)
                </Button>
              </a>
            </Card>

            {/* ডাউনলোড নির্দেশিকা */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    ডাউনলোড নির্দেশিকা
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    বিস্তারিত গাইড
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-amber-600 font-bold">📄</span>
                  <span>ফাইল: DOWNLOAD_INSTRUCTIONS.md</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-amber-600 font-bold">📊</span>
                  <span>আকার: 12 KB</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-amber-600 font-bold">✅</span>
                  <span>ইনস্টলেশন এবং কাস্টমাইজেশন গাইড</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                বিস্তারিত ইনস্টলেশন নির্দেশিকা, কাস্টমাইজেশন টিপস এবং সমস্যা সমাধান।
              </p>

              <a
                href="/downloads/DOWNLOAD_INSTRUCTIONS.md"
                download
                className="w-full block"
              >
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Download className="w-5 h-5 mr-2" />
                  ডাউনলোড করুন (12 KB)
                </Button>
              </a>
            </Card>
          </div>

          {/* অতিরিক্ত ফাইল */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              অতিরিক্ত ডকুমেন্টেশন
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* প্রকল্প সারসংক্ষেপ */}
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">প্রকল্প সারসংক্ষেপ</h3>
                    <p className="text-sm text-gray-500">PROJECT_SUMMARY.md</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  প্রকল্পের সম্পূর্ণ সারসংক্ষেপ, বৈশিষ্ট্য এবং পরিসংখ্যান।
                </p>
                <a href="/downloads/PROJECT_SUMMARY.md" download className="block">
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    ডাউনলোড
                  </Button>
                </a>
              </Card>

              {/* ফাইল সারসংক্ষেপ */}
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">ফাইল সারসংক্ষেপ</h3>
                    <p className="text-sm text-gray-500">FILES_SUMMARY.txt</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  সমস্ত তথ্যের দ্রুত রেফারেন্স এবং কমান্ড গাইড।
                </p>
                <a href="/downloads/FILES_SUMMARY.txt" download className="block">
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    ডাউনলোড
                  </Button>
                </a>
              </Card>
            </div>
          </div>

          {/* দ্রুত শুরু */}
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🚀 দ্রুত শুরু করুন
            </h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold">ফাইল ডাউনলোড করুন</p>
                  <p className="text-sm text-gray-600">riyad-portfolio-source.tar.gz ডাউনলোড করুন</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold">এক্সট্র্যাক্ট করুন</p>
                  <p className="text-sm text-gray-600">tar -xzf riyad-portfolio-source.tar.gz</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold">ইনস্টল করুন</p>
                  <p className="text-sm text-gray-600">cd riyad-portfolio && npm install</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <p className="font-semibold">চালান</p>
                  <p className="text-sm text-gray-600">npm run dev এবং http://localhost:3000 খুলুন</p>
                </div>
              </div>
            </div>
          </Card>

          {/* সাহায্য */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              সাহায্য প্রয়োজন?
            </h2>
            <p className="text-gray-600 mb-6">
              DOWNLOAD_INSTRUCTIONS.md ফাইলে বিস্তারিত গাইড এবং সমস্যা সমাধান পাবেন।
            </p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white">
                পোর্টফোলিওতে ফিরে যান
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
