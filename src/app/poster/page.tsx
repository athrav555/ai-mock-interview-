'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mic,
  Brain,
  Sparkles,
  ArrowRight,
  Database,
  Cpu,
  CheckCircle2,
  Trophy,
  Layers,
  Activity,
  Award,
  Users,
  Code2,
  Printer,
  Download,
  ExternalLink,
  ChevronRight,
  Shield,
  Lightbulb,
  Star,
  Settings,
  Rocket,
  FileText,
} from 'lucide-react';

export default function PosterPage() {
  const [activeView, setActiveView] = useState<'digital' | 'graphic'>('digital');

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#EBF3FB] py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white text-slate-900 font-sans">
      {/* Top Controls Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-indigo-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition"
        >
          ← Back to Dashboard
        </Link>

        {/* View Switcher */}
        <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
          <button
            onClick={() => setActiveView('digital')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeView === 'digital'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Digital Poster (Printable)
          </button>
          <button
            onClick={() => setActiveView('graphic')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeView === 'graphic'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Graphic Artwork Image
          </button>
        </div>

        <div className="flex items-center gap-2">
          {activeView === 'digital' ? (
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF
            </button>
          ) : (
            <a
              href="/poster.jpg"
              download="ExecutivePrep_AI_Poster.jpg"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition"
            >
              <Download className="w-4 h-4" />
              Download High-Res JPG
            </a>
          )}
        </div>
      </div>

      {/* VIEW 1: Graphic Artwork Mode */}
      {activeView === 'graphic' && (
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-4 border border-slate-200 text-center space-y-4">
          <div className="flex items-center justify-between px-2 pt-2">
            <h3 className="text-sm font-bold text-slate-800">High-Resolution Rendered Poster</h3>
            <a
              href="/poster.jpg"
              target="_blank"
              className="text-xs font-semibold text-indigo-600 hover:underline flex items-center gap-1"
            >
              Open in full tab <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-inner">
            <img
              src="/poster.jpg"
              alt="ExecutivePrep AI Showcase Poster"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* VIEW 2: Pixel-Perfect Digital Vector Poster */}
      {activeView === 'digital' && (
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0F284E] via-[#EBF3FB] to-[#EBF3FB] p-2 sm:p-4 rounded-3xl shadow-2xl border border-blue-200/50 print:p-0 print:border-none print:shadow-none print:rounded-none">
          <div className="bg-[#EBF3FB] rounded-2xl overflow-hidden space-y-4 p-4 sm:p-6">
            {/* 1. Header Pill: College / Department Banner */}
            <div className="bg-white rounded-full py-2.5 px-6 shadow-md border border-blue-100 text-center max-w-2xl mx-auto">
              <h2 className="text-xs sm:text-sm md:text-base font-black tracking-wider text-[#0F284E] uppercase">
                ZEAL COLLEGE OF ENGINEERING & RESEARCH, PUNE
              </h2>
              <div className="flex items-center justify-center gap-2 mt-0.5">
                <span className="w-8 h-[1px] bg-blue-300 hidden sm:inline-block"></span>
                <p className="text-[10px] sm:text-xs font-semibold text-blue-700 uppercase tracking-wide">
                  Department of Artificial Intelligence & Data Science
                </p>
                <span className="w-8 h-[1px] bg-blue-300 hidden sm:inline-block"></span>
              </div>
            </div>

            {/* 2. Main Hero Card (Deep Navy Container) */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#031533] via-[#0A2554] to-[#0D306C] rounded-3xl p-6 sm:p-7 text-white shadow-xl border border-blue-900/50">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                {/* Robot Avatar & Left Icon */}
                <div className="md:col-span-3 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-1 shadow-lg shadow-cyan-500/30 flex items-center justify-center">
                      <div className="w-full h-full bg-[#071938] rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Robot Head Graphic */}
                        <div className="w-14 h-12 rounded-2xl bg-gradient-to-b from-blue-400 to-indigo-600 p-0.5 flex flex-col items-center justify-center shadow-inner">
                          <div className="w-full h-full bg-[#0a1836] rounded-2xl flex items-center justify-center gap-2">
                            <span className="w-2.5 h-3 bg-cyan-300 rounded-full animate-pulse shadow-sm shadow-cyan-300"></span>
                            <span className="w-2.5 h-3 bg-cyan-300 rounded-full animate-pulse shadow-sm shadow-cyan-300"></span>
                          </div>
                        </div>
                        {/* Robot Ears / Headset */}
                        <span className="absolute left-2 w-1.5 h-6 bg-blue-400 rounded-full"></span>
                        <span className="absolute right-2 w-1.5 h-6 bg-blue-400 rounded-full"></span>
                        {/* Glowing Smile / Audio Wave */}
                        <div className="flex gap-0.5 mt-2">
                          <span className="w-1 h-2 bg-cyan-400 rounded-full"></span>
                          <span className="w-1 h-3 bg-cyan-400 rounded-full"></span>
                          <span className="w-1 h-2 bg-cyan-400 rounded-full"></span>
                        </div>
                      </div>
                    </div>
                    {/* Speech bubble */}
                    <div className="absolute -top-3 -right-2 bg-blue-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> AI
                    </div>
                  </div>
                </div>

                {/* Hero Title & Description */}
                <div className="md:col-span-6 space-y-2 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1">
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                      Inter<span className="text-cyan-400">Vue</span>{' '}
                      <span className="text-indigo-300">AI</span>
                    </h1>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-blue-200">
                    AI Mock Interview Studio for Working Professionals
                  </p>
                  <p className="text-[11px] sm:text-xs text-blue-100/90 italic font-medium">
                    "Practice Smarter. Interview Stronger."
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed pt-1">
                    An AI-powered full-stack platform to practice real-time technical & executive
                    interviews with live voice analysis, adaptive questions, and structured STAR
                    rubric grading.
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/10 text-cyan-300 text-[10px] font-bold border border-white/10 flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-cyan-400" /> Next.js 14
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10 text-emerald-300 text-[10px] font-bold border border-white/10 flex items-center gap-1">
                      <Database className="w-3 h-3 text-emerald-400" /> Supabase RLS
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10 text-indigo-200 text-[10px] font-bold border border-white/10 flex items-center gap-1">
                      <Brain className="w-3 h-3 text-indigo-400" /> Google Gemini
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10 text-amber-300 text-[10px] font-bold border border-white/10 flex items-center gap-1">
                      <Mic className="w-3 h-3 text-amber-400" /> Web Speech
                    </span>
                  </div>
                </div>

                {/* QR Code Container */}
                <div className="md:col-span-3 flex flex-col items-center justify-center">
                  <div className="bg-white p-3 rounded-2xl shadow-xl text-center border border-blue-100 flex flex-col items-center">
                    {/* SVG Rendered QR Code */}
                    <svg
                      className="w-20 h-20 sm:w-24 sm:h-24"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Accurate QR pattern */}
                      <rect width="29" height="29" fill="white" />
                      {/* Top Left Marker */}
                      <rect x="2" y="2" width="7" height="7" fill="#0A2554" />
                      <rect x="3" y="3" width="5" height="5" fill="white" />
                      <rect x="4" y="4" width="3" height="3" fill="#0A2554" />
                      {/* Top Right Marker */}
                      <rect x="20" y="2" width="7" height="7" fill="#0A2554" />
                      <rect x="21" y="3" width="5" height="5" fill="white" />
                      <rect x="22" y="4" width="3" height="3" fill="#0A2554" />
                      {/* Bottom Left Marker */}
                      <rect x="2" y="20" width="7" height="7" fill="#0A2554" />
                      <rect x="3" y="21" width="5" height="5" fill="white" />
                      <rect x="4" y="22" width="3" height="3" fill="#0A2554" />
                      {/* Data dots */}
                      <rect x="11" y="2" width="2" height="2" fill="#0A2554" />
                      <rect x="15" y="2" width="2" height="2" fill="#0A2554" />
                      <rect x="11" y="6" width="3" height="2" fill="#0A2554" />
                      <rect x="16" y="6" width="2" height="2" fill="#0A2554" />
                      <rect x="2" y="11" width="2" height="3" fill="#0A2554" />
                      <rect x="6" y="11" width="3" height="2" fill="#0A2554" />
                      <rect x="11" y="11" width="2" height="2" fill="#0A2554" />
                      <rect x="14" y="11" width="3" height="2" fill="#0A2554" />
                      <rect x="19" y="11" width="2" height="2" fill="#0A2554" />
                      <rect x="23" y="11" width="3" height="2" fill="#0A2554" />
                      <rect x="11" y="15" width="2" height="3" fill="#0A2554" />
                      <rect x="15" y="15" width="3" height="2" fill="#0A2554" />
                      <rect x="20" y="15" width="2" height="2" fill="#0A2554" />
                      <rect x="24" y="15" width="2" height="2" fill="#0A2554" />
                      <rect x="11" y="20" width="3" height="2" fill="#0A2554" />
                      <rect x="16" y="20" width="2" height="3" fill="#0A2554" />
                      <rect x="20" y="20" width="2" height="2" fill="#0A2554" />
                      <rect x="24" y="20" width="3" height="2" fill="#0A2554" />
                      <rect x="11" y="24" width="2" height="2" fill="#0A2554" />
                      <rect x="14" y="24" width="3" height="2" fill="#0A2554" />
                      <rect x="19" y="24" width="2" height="2" fill="#0A2554" />
                      <rect x="23" y="24" width="2" height="3" fill="#0A2554" />
                    </svg>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0A2554] mt-1.5 block">
                      Scan to Explore
                    </span>
                    <span className="text-[8px] text-slate-400 font-mono">GitHub Repo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Middle Section: Project Overview & Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Project Overview Card (40%) */}
              <div className="md:col-span-5 bg-white rounded-2xl p-5 shadow-sm border border-blue-100 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-sm">
                    <Lightbulb className="w-3.5 h-3.5" /> Project Overview
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
                    <strong className="text-[#0A2554]">ExecutivePrep AI (InterVue AI)</strong> is an
                    intelligent, production-grade mock interview system designed to elevate working
                    professionals and students for senior leadership and technical roles. It pairs
                    adaptive question generation with live voice analysis, continuous speech-to-text,
                    and rigorous STAR rubric evaluations saved in the cloud.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                  <span>Target: Mid-level to Executive</span>
                  <span className="text-blue-600">Zero Mock States</span>
                </div>
              </div>

              {/* Key Features Card (60%) */}
              <div className="md:col-span-7 bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-sm">
                  <Star className="w-3.5 h-3.5" /> Key Features
                </div>

                <div className="grid grid-cols-5 gap-2 text-center pt-1">
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5 shadow-sm border border-blue-100">
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">
                      Supabase Auth & RLS
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-1.5 shadow-sm border border-indigo-100">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">
                      Multi-Seniority Tracks
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-1.5 shadow-sm border border-cyan-100">
                      <Mic className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">
                      Live Audio TTS & STT
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5 shadow-sm border border-purple-100">
                      <Activity className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">
                      WPM & Filler Detection
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5 shadow-sm border border-emerald-100">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">
                      STAR Rubric Grading
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Row: Tech Tracks & Robot Mascot Callout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
              {/* Interview Tracks (65%) */}
              <div className="md:col-span-8 bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-sm">
                  <Cpu className="w-3.5 h-3.5" /> Interview Tracks & Competencies
                </div>

                <div className="grid grid-cols-5 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs mb-1.5 shadow-sm">
                      &lt;/&gt;
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">
                      DSA & Technical
                    </span>
                    <span className="text-[8px] text-slate-400 mt-0.5">Algorithms</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-1.5 shadow-sm">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">
                      System Design
                    </span>
                    <span className="text-[8px] text-slate-400 mt-0.5">Distributed Scale</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mb-1.5 shadow-sm">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">
                      Behavioral
                    </span>
                    <span className="text-[8px] text-slate-400 mt-0.5">STAR Framework</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs mb-1.5 shadow-sm">
                      <Activity className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">
                      Concurrency
                    </span>
                    <span className="text-[8px] text-slate-400 mt-0.5">CAP & Leases</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold text-xs mb-1.5 shadow-sm">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">
                      Leadership
                    </span>
                    <span className="text-[8px] text-slate-400 mt-0.5">Executive Level</span>
                  </div>
                </div>
              </div>

              {/* Robot Callout Card (35%) */}
              <div className="md:col-span-4 bg-gradient-to-br from-[#0F284E] to-[#1E3A8A] rounded-2xl p-4 text-white shadow-md flex items-center justify-between relative overflow-hidden">
                <div className="space-y-1 z-10">
                  <div className="inline-block bg-cyan-400 text-[#0F284E] text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                    Ready for the Bar
                  </div>
                  <h4 className="text-base sm:text-lg font-black tracking-tight leading-snug">
                    Ace Your Dream Executive Job!
                  </h4>
                  <p className="text-[10px] text-blue-200 leading-tight">
                    Calibrated against Director & Principal standards.
                  </p>
                </div>

                {/* Robot Graphic */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white/10 rounded-2xl backdrop-blur flex items-center justify-center border border-white/20 shadow-inner z-10">
                  <div className="text-3xl">🤖</div>
                </div>

                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-cyan-400/20 rounded-full blur-xl pointer-events-none"></div>
              </div>
            </div>

            {/* 5. Row: How It Works & Why Choose */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* How It Works (50%) */}
              <div className="md:col-span-6 bg-white rounded-2xl p-5 shadow-sm border border-blue-100 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-sm">
                    <Settings className="w-3.5 h-3.5" /> How It Works
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-2 relative">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center relative z-10">
                      <div className="w-8 h-8 rounded-full bg-[#0A2554] text-white text-xs font-bold flex items-center justify-center mb-2 shadow">
                        1
                      </div>
                      <span className="text-xs font-bold text-slate-900 leading-tight">
                        Start Interview
                      </span>
                      <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                        Choose role, track, seniority & resume
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center relative z-10">
                      <div className="w-8 h-8 rounded-full bg-[#0A2554] text-white text-xs font-bold flex items-center justify-center mb-2 shadow">
                        2
                      </div>
                      <span className="text-xs font-bold text-slate-900 leading-tight">
                        Live Studio
                      </span>
                      <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                        Voice TTS question, STT mic & WPM tracker
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center relative z-10">
                      <div className="w-8 h-8 rounded-full bg-[#0A2554] text-white text-xs font-bold flex items-center justify-center mb-2 shadow">
                        3
                      </div>
                      <span className="text-xs font-bold text-slate-900 leading-tight">
                        Get Feedback
                      </span>
                      <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                        Receive STAR scores, filler counts & model answers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 text-center font-medium">
                  Instant real-time database transactions with Supabase PostgreSQL
                </div>
              </div>

              {/* Why Choose InterVue AI? (50%) */}
              <div className="md:col-span-6 bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-sm">
                  <Star className="w-3.5 h-3.5" /> Why Choose InterVue AI?
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-2">
                    <Brain className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-900 leading-tight">
                        AI-Powered Interviewer
                      </h5>
                      <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">
                        Adaptive Gemini questioning tailored to background
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-2">
                    <Trophy className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-900 leading-tight">
                        Detailed Reports
                      </h5>
                      <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">
                        STAR breakdown, strengths & actionable growth points
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-100 flex items-start gap-2">
                    <FileText className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-900 leading-tight">
                        Resume Grounding
                      </h5>
                      <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">
                        AI cross-examines authentic past career metrics
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-100 flex items-start gap-2">
                    <Rocket className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-900 leading-tight">
                        Confidence Boost
                      </h5>
                      <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">
                        Pacing & filler word analytics ensure poise
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Bottom Row: Developer / Team & Additional Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Team Profile (55%) */}
              <div className="md:col-span-7 bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-sm">
                  <Users className="w-3.5 h-3.5" /> Project Developer & Lead
                </div>

                <div className="flex items-center gap-4 pt-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0A2554] to-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                    AK
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 leading-tight">
                      Atharv Kathale
                    </h4>
                    <p className="text-xs text-blue-600 font-bold">
                      Lead Full-Stack & AI Systems Architect
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      Department of Artificial Intelligence & Data Science • Roll / ID: 2026-AI
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Specifications (45%) */}
              <div className="md:col-span-5 bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider mb-2 shadow-sm">
                  <Trophy className="w-3.5 h-3.5" /> Additional Information
                </div>

                <div className="space-y-1.5 text-[11px] pt-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-500">Tech Stack:</span>
                    <span className="font-bold text-slate-900">
                      Next.js 14, Supabase, Gemini
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-500">Platform:</span>
                    <span className="font-bold text-slate-900">Web App (TypeScript)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-500">Goal:</span>
                    <span className="font-bold text-emerald-600">
                      Prepare, Practice & Excel
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Footer Wave Banner */}
            <div className="bg-gradient-to-r from-[#031533] via-[#0A2554] to-[#031533] rounded-2xl p-3.5 text-center text-white shadow-lg flex items-center justify-center gap-2">
              <Rocket className="w-4 h-4 text-cyan-400 animate-bounce" />
              <span className="text-xs sm:text-sm font-black tracking-wide text-blue-100">
                Build Skills • Practice Rigorously • Get Interview Ready
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
