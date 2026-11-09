import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Award,
  CheckCircle,
  Star,
  Quote,
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { PageRoute } from '../types';
import {
  courses,
  testimonials,
  ACADEMY_CONFIG,
} from '../data/academyData';

interface HomePageProps {
  onNavigate: (page: PageRoute, courseSlug?: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnroll }) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // 3 Distinct Slides with 2 different children per slide
  const heroSlides = [
    {
      id: 1,
      leftImage: '/assets/images/boy_quran_student_1792430316665.jpg',
      leftAlt: 'Young boy student reciting Holy Quran on wooden rehal',
      rightImage: '/assets/images/girl_black_hijab_quran_1792432274793.jpg',
      rightAlt: 'Young girl in black hijab studying Holy Quran',
    },
    {
      id: 2,
      leftImage: '/assets/images/boy_holding_quran_1792430342987.jpg',
      leftAlt: 'Young student holding Holy Quran with devotion',
      rightImage: '/assets/images/girl_teal_hijab_1792430343468.jpg',
      rightAlt: 'Young female student in teal hijab learning Quran',
    },
    {
      id: 3,
      leftImage: '/assets/images/girl_white_hijab_1792430342115.jpg',
      leftAlt: 'Young student in white hijab reciting Holy Quran',
      rightImage: '/assets/images/girl_online_laptop_1792430342816.jpg',
      rightAlt: 'Young student attending online Quran class on laptop',
    },
  ];

  // Automatic Slider Interval (every 4.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Statistics
  const stats = [
    { label: 'Students', value: '1000+' },
    { label: 'Teachers', value: '150+' },
    { label: 'Courses', value: '10+' },
    { label: 'Countries', value: '24+' },
  ];

  const journeySteps = [
    {
      num: '01',
      title: 'Contact Academy',
      desc: 'Fill out our short enrollment form or send a WhatsApp message to +92 318 7779954 with your learning goals.',
    },
    {
      num: '02',
      title: 'Select Course',
      desc: 'Choose from Noorani Qaida, Tajweed, Nazra, Hifz, Translation, Basic Arabic, Quranic Arabic, or Islamic Studies based on your current level.',
    },
    {
      num: '03',
      title: 'Schedule Your Class',
      desc: 'Pick your preferred days and convenient class times according to your family’s local timezone.',
    },
    {
      num: '04',
      title: 'Meet Your Teacher',
      desc: 'Begin with your 3-Day Free Trial class via Zoom/Google Meet. Experience our methodology first-hand with no obligations.',
    },
    {
      num: '05',
      title: 'Start Learning',
      desc: 'Enjoy engaging 1-on-1 sessions with custom digital workbooks, interactive Quran boards, and personal feedback.',
    },
    {
      num: '06',
      title: 'Track Your Progress',
      desc: 'Receive regular evaluations, voice notes, and formal milestone certificates as you advance towards Quran mastery.',
    },
  ];

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Home Page – Hero Section */}
      <section className="relative w-full bg-transparent overflow-hidden">
        
        {/* Desktop Golden Curved Background on Left with Smooth Horizontal Gradient and Completely Round End */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 bottom-0 w-full lg:w-[48%] xl:w-[46%] pointer-events-none hidden lg:block overflow-hidden z-0"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 560 680"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Smooth horizontal gradient matching official logo amber/gold #FCB205 */}
              <linearGradient id="heroGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FCB205">
                  <animate attributeName="stopColor" values="#FCB205;#FDBF2A;#FCB205" dur="7s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#FDBF2A">
                  <animate attributeName="offset" values="0.50;0.62;0.50" dur="7s" repeatCount="indefinite" />
                </stop>
                <stop offset="85%" stopColor="#FCB205" />
                <stop offset="97%" stopColor="#FAF8F5" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FAF9F5" stopOpacity="0" />
              </linearGradient>

              {/* Completely Round End Curve (Smooth Semi-circular Arc) */}
              <clipPath id="yellowCurveSilhouette">
                <path d="M 0,0 L 320,0 C 560,0 560,680 320,680 L 0,680 Z" />
              </clipPath>
            </defs>

            {/* Secondary Soft Translucent Rim behind round curve for smooth blend */}
            <path
              d="M 0,0 L 340,0 C 585,0 585,680 340,680 L 0,680 Z"
              fill="#F4EFE6"
              opacity="0.65"
            />

            {/* Main Vibrant Gold Shape matching logo color */}
            <g clipPath="url(#yellowCurveSilhouette)">
              <path
                d="M 0,0 L 320,0 C 560,0 560,680 320,680 L 0,680 Z"
                fill="url(#heroGoldGradient)"
              />
            </g>
          </svg>
        </motion.div>

        {/* Mobile Bismillah between Header and Slider */}
        <div className="block lg:hidden w-full text-center pt-4 pb-2 px-4 select-none z-20 relative">
          <div className="font-arabic text-2xl sm:text-3xl text-[#0A3826] font-bold tracking-wider leading-relaxed">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* Left Side: Golden Panel with Automatic 3-Slide Quran Learning Carousel */}
            <motion.div
              initial={{ x: -140, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex justify-start items-center"
            >
              {/* Mobile/Tablet Golden Card Wrapper */}
              <div className="w-full lg:contents">
                <div className="rounded-[2.5rem] lg:rounded-none bg-gradient-to-r from-[#FCB205] via-[#FDBF2A] to-[#FCB205] animate-horizontal-gradient lg:bg-none p-5 sm:p-7 lg:p-0 text-white relative overflow-hidden shadow-lg lg:shadow-none">
                  
                  {/* Overlapping Rounded Student Quran Reading Cards with Automatic Slider */}
                  <div className="relative z-20 flex flex-col items-center lg:items-start py-3 sm:py-5 lg:py-8 pl-0 sm:pl-2 w-full">
                    <div className="relative h-[260px] sm:h-[320px] md:h-[350px] w-full flex items-end justify-center lg:justify-start">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0, x: 45 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -45 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-end justify-center lg:justify-start"
                        >
                          {/* Background Student Card (Left) */}
                          <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/95 shadow-2xl w-36 sm:w-44 md:w-48 aspect-[3/4] bg-slate-800 shrink-0 -mr-8 sm:-mr-10 mb-2 z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                            <img
                              src={heroSlides[currentSlide].leftImage}
                              alt={heroSlides[currentSlide].leftAlt}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          </div>

                          {/* Foreground Student Card (Right) */}
                          <div className="relative rounded-[2.3rem] overflow-hidden border-4 border-white shadow-2xl w-48 sm:w-56 md:w-64 aspect-[3/4] bg-slate-900 shrink-0 z-20 transform hover:scale-[1.02] transition-transform duration-300">
                            <img
                              src={heroSlides[currentSlide].rightImage}
                              alt={heroSlides[currentSlide].rightAlt}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Automatic Slide Indicators (3 Dots) */}
                    <div className="flex items-center gap-2 mt-4 z-30 self-center lg:self-start lg:pl-10">
                      {heroSlides.map((slide, idx) => (
                        <button
                          key={slide.id}
                          onClick={() => setCurrentSlide(idx)}
                          className={`transition-all duration-300 rounded-full cursor-pointer ${
                            currentSlide === idx
                              ? 'w-7 h-2 bg-[#0A3826] shadow-sm'
                              : 'w-2 h-2 bg-slate-400/70 hover:bg-slate-700'
                          }`}
                          aria-label={`Switch to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Clean Background with Bismillah, Title & CTA */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 lg:pl-10 xl:pl-14 relative z-20">
              
              {/* Desktop Bismillah centered in the middle above Online Quran Academy */}
              <div className="hidden lg:flex w-full justify-center select-none">
                <div className="font-arabic text-3xl md:text-4xl text-[#0A3826] font-bold tracking-wider leading-relaxed text-center">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </div>
              </div>

              {/* Main Heading: Online Quran Academy on single line, completely black on mobile, emerald & gold on desktop */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-serif font-extrabold leading-[1.15] tracking-tight text-center lg:text-left whitespace-nowrap">
                <span className="text-black lg:text-[#072C1E]">Online </span>
                <span className="text-black lg:text-[#FCB205]">Quran Academy</span>
              </h1>

              {/* Premier International Islamic Online Academy Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A3826] text-[#FCB205] text-xs sm:text-sm font-bold shadow-md">
                <Sparkles className="w-4 h-4 text-[#FCB205] shrink-0" />
                <span>Premier International Islamic Online Academy</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onOpenEnroll()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#032918] hover:bg-[#072C1E] active:bg-[#021a0f] text-white rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-xl active:scale-95 cursor-pointer whitespace-nowrap border border-emerald-900/40"
                >
                  <span>Book 3-Day Free Trial</span>
                  <ArrowRight className="w-4 h-4 text-[#FCB205]" />
                </button>

                <a
                  href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    'As-salamu alaykum! I would like to inquire about online Quran classes and book a 3-Day Free Trial.'
                  )}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-sm sm:text-base font-bold transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                  </svg>
                  <span className="whitespace-nowrap">WhatsApp: {ACADEMY_CONFIG.whatsapp}</span>
                </a>
              </div>

              {/* Key Features Section - 4 points in exact order, each in a separate row */}
              <div className="pt-2 flex flex-col items-center lg:items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cost-Effective</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Flexible 24/7 Hours</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1-on-1 Personalized Scholars</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified Male and Female Scholars</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Academy Statistics */}
      <section className="relative py-12 bg-transparent border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs hover:bg-white transition-colors"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#0A3826] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Families Choose Us */}
      <section className="relative py-10 sm:py-14 bg-transparent">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 text-[#0A3826] text-xs sm:text-sm font-bold">
            <Award className="w-4 h-4 text-[#FCB205]" />
            <span>Islamic Academic Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Why Families Choose Us
          </h2>

          <div className="p-6 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md text-center space-y-5">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A3826]">
              Qualified & Experienced Teachers
            </h3>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Our teachers have qualifications and Islamic studies backgrounds from recognized institutions, including Al-Azhar and the Islamic University of Madinah.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 text-[#0A3826] font-semibold rounded-lg whitespace-nowrap">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Ijazah Certified Scholars
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 text-[#0A3826] font-semibold rounded-lg whitespace-nowrap">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Male & Female Tutors
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 text-[#0A3826] font-semibold rounded-lg whitespace-nowrap">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                1-on-1 Dedicated Lessons
              </span>
            </div>

            {/* Two Buttons: Enroll Now & WhatsApp on single line */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenEnroll()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#032918] hover:bg-[#072C1E] active:bg-[#021a0f] text-white rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer whitespace-nowrap border border-emerald-900/40"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 text-[#FCB205]" />
              </button>

              <a
                href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                  'As-salamu alaykum! I would like to inquire about enrolling in Quran Education.'
                )}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-sm font-bold transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                </svg>
                <span className="whitespace-nowrap">WhatsApp: {ACADEMY_CONFIG.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Courses Section */}
      <section className="relative py-10 sm:py-14 bg-transparent">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 text-left">
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#FCB205] uppercase tracking-widest font-serif">
                Comprehensive Curriculum
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#072C1E] mt-1">
                Our Quran & Islamic Studies Courses
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
                Structured programs including Tajweed, Memorization, Translation, and Islamic Studies taught 1-on-1 by certified scholars.
              </p>
            </div>

            <a
              href="#/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A3826] hover:text-[#072C1E] group cursor-pointer"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white/92 backdrop-blur-sm rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-[#0A3826]">
                      {course.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {course.level}
                    </span>
                  </div>

                  <div className="font-arabic text-xl text-[#0A3826] mb-1 font-semibold">
                    {course.arabicTitle}
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#072C1E] mb-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {course.shortDesc}
                  </p>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center gap-2">
                  <a
                    href={`#/course/${course.slug || course.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 transition-colors text-center cursor-pointer"
                  >
                    View Details
                  </a>
                  <button
                    onClick={() => onOpenEnroll(course.id)}
                    className="flex-1 py-2.5 px-3 bg-[#032918] hover:bg-[#072C1E] active:bg-[#021a0f] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors text-center cursor-pointer shadow-md border border-emerald-900/40"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Button: Our Packages */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <a
              href="#/packages"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0A3826] hover:bg-[#072C1E] text-white rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Our Packages</span>
              <ArrowRight className="w-4 h-4 text-[#FCB205]" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. How Your Journey Begins in 6 Simple Steps - Desktop */}
      <section className="hidden md:block relative py-10 sm:py-14 bg-transparent">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs sm:text-sm font-bold">
              <Sparkles className="w-4 h-4 text-[#FCB205]" />
              <span>Simple & Transparent Admissions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
              How Your Journey Begins in 6 Simple Steps
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Getting started takes less than 2 minutes. We match you with the ideal certified scholar and schedule your first trial class at your convenience.
            </p>
          </div>

          {/* 6 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
            {journeySteps.map((step) => (
              <div
                key={step.num}
                className="relative p-6 sm:p-7 rounded-3xl bg-white/92 backdrop-blur-sm border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#FCB205] group-hover:text-[#0A3826] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-emerald-100/70 text-[#0A3826] flex items-center justify-center font-bold text-xs shadow-2xs">
                      ✓
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#072C1E] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons below the 6 steps */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0A3826] hover:bg-[#072C1E] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Contact Academy</span>
              <ArrowRight className="w-4 h-4 text-[#FCB205]" />
            </a>

            <a
              href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                'As-salamu alaykum! I would like to begin my Quran learning journey and schedule my 3-Day Free Trial.'
              )}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
              </svg>
              <span className="whitespace-nowrap">WhatsApp: {ACADEMY_CONFIG.whatsapp}</span>
            </a>

            <button
              onClick={() => onOpenEnroll()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#FCB205] to-[#E5BE1D] hover:from-[#FCE253] hover:to-[#FCB205] text-slate-950 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Book 3-Day Free Trial</span>
              <Sparkles className="w-4 h-4 text-[#072C1E]" />
            </button>
          </div>
        </div>
      </section>


      {/* 7. Student Reviews / Testimonials Section */}
      <section className="relative py-10 sm:py-14 bg-transparent">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="space-y-2.5 mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-bold text-[#FCB205] uppercase tracking-widest font-serif">
              Trusted by 200+ Muslim Families
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#072C1E]">
              What Our Students & Parents Say
            </h2>
          </div>

          <div className="relative bg-white/92 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm max-w-3xl mx-auto">
            <Quote className="w-10 h-10 text-[#FCB205]/40 mx-auto mb-4" />

            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-serif italic mb-6">
              "{testimonials[activeTestimonialIdx]?.quote}"
            </p>

            <div className="flex items-center justify-center gap-1 text-[#FCB205] mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FCB205]" />
              ))}
            </div>

            <h4 className="text-lg font-bold text-[#072C1E]">
              {testimonials[activeTestimonialIdx]?.name}
            </h4>
            <p className="text-sm text-slate-500">
              {testimonials[activeTestimonialIdx]?.role} ·{' '}
              {testimonials[activeTestimonialIdx]?.location}
            </p>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonialIdx === idx
                      ? 'w-8 bg-[#0A3826]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
