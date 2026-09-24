'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  Ban,
  Camera,
  Download,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Share2,
  Sparkles,
} from 'lucide-react'

const profileImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20260924-120743_BeeGoss-AsdnNAQWmJRvuNQt54J2yPFMP0V4cG.jpg'

const stats = [
  { value: '0', label: 'SNAPS' },
  { value: '5', label: 'ACTIVITIES' },
  { value: '4', label: 'EVENTS' },
  { value: '4', label: 'BUDDIES' },
]

const tabs = [
  { label: 'Snaps', value: '0' },
  { label: 'Activities', value: '5' },
  { label: 'Events', value: '4' },
]

export default function ProfileReplicaPage() {
  const [activeTab, setActiveTab] = useState('Snaps')
  const [added, setAdded] = useState(false)
  const [saidHi, setSaidHi] = useState(false)

  return (
    <main className="min-h-screen bg-[#f8f7f5] text-[#171518]">
      <section className="profile-shell relative mx-auto w-full max-w-[430px] overflow-hidden bg-[#f8f7f5] shadow-2xl">
        <div className="hero relative h-[375px] overflow-hidden bg-[#665d58] sm:h-[375px]">
          <img
            src={profileImage}
            alt="Sanjeev wearing glasses and a grey blazer"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/70" />

          <header className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-5 sm:px-4">
            <button aria-label="Go back" className="glass-button h-12 w-12 sm:h-12 sm:w-12">
              <ArrowLeft size={31} strokeWidth={2.5} />
            </button>
            <div className="flex items-center gap-2">
              <button aria-label="Block profile" className="glass-button h-12 w-12 sm:h-12 sm:w-12"><Ban size={29} /></button>
              <button aria-label="Download profile" className="glass-button h-12 w-12 sm:h-12 sm:w-12"><Download size={30} /></button>
              <button aria-label="Share profile" className="glass-button h-12 w-12 sm:h-12 sm:w-12"><Share2 size={29} /></button>
            </div>
          </header>

          <div className="absolute inset-x-0 bottom-7 px-5 sm:bottom-7 sm:px-5">
            <div className="mb-3 flex items-center gap-5 text-white/65">
              <span className="h-px flex-1 bg-white/40" />
              <span className="font-mono text-[14px] tracking-[0.28em] sm:text-[17px]">@SANJEEV_8125</span>
              <span className="h-px flex-1 bg-white/40" />
            </div>
            <h1 className="font-condensed text-[50px] font-bold leading-none text-white sm:text-[50px]">Sanjeev</h1>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="profile-pill">Male, 27 Years</span>
              <span className="profile-pill">Noida, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>

        <section className="relative z-10 -mt-7 px-4 sm:px-4">
          <div className="stats-card grid grid-cols-4 rounded-[28px] bg-white px-2 py-6 shadow-[0_16px_30px_rgba(34,26,28,0.18)] sm:px-8 sm:py-9">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center ${index ? 'border-l border-[#e6e1e2]' : ''}`}>
                <div className="font-condensed text-[44px] font-bold leading-none sm:text-[52px]">{stat.value}</div>
                <div className="mt-4 font-condensed text-[15px] tracking-[0.09em] text-[#a89da0] sm:text-[19px]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button onClick={() => setAdded(!added)} className={`action-button bg-black text-white ${added ? 'opacity-80' : ''}`}>
              <Plus size={31} strokeWidth={2.5} /> {added ? 'Buddy Added' : 'Add Buddy'}
            </button>
            <button onClick={() => setSaidHi(!saidHi)} className={`action-button bg-[#718442] text-white ${saidHi ? 'brightness-90' : ''}`}>
              <MessageSquare size={28} /> {saidHi ? 'Hi Sent!' : 'Say Hi!'}
            </button>
          </div>

          <section className="mt-7 overflow-hidden rounded-[28px] bg-white shadow-[0_8px_12px_rgba(30,25,27,0.18)]">
            <div className="px-5 py-7 sm:px-5">
              <div className="flex items-center gap-3 font-condensed text-[20px] font-bold tracking-[0.12em] text-[#ab9ca1] sm:text-[24px]"><Sparkles size={22} fill="currentColor" /> ABOUT</div>
              <p className="mt-7 font-condensed text-[22px] leading-[1.25] text-[#3e393d] sm:text-[27px]">Hey! Let&apos;s plan some fun activities together with FindBuddy</p>
            </div>
            <div className="border-t border-[#e9e5e6] px-10 py-9 sm:px-12">
              <div className="flex items-center gap-3 font-condensed text-[20px] font-bold tracking-[0.12em] text-[#ab9ca1] sm:text-[24px]"><MoreHorizontal size={22} /> TAGS</div>
              <div className="mt-7 flex flex-wrap gap-5">
                <span className="tag-pill">#friendly (1)</span>
                <span className="tag-pill">#great vibes (1)</span>
              </div>
            </div>
          </section>
        </section>

        <nav className="mt-6 border-b border-[#e3dfe0] bg-white px-3 pt-3 sm:px-3" aria-label="Profile content">
          <div className="grid grid-cols-3">
            {tabs.map((tab) => {
              const selected = activeTab === tab.label
              return (
                <button key={tab.label} onClick={() => setActiveTab(tab.label)} className={`relative flex flex-col items-center gap-2 pb-5 font-condensed text-[20px] ${selected ? 'font-bold text-black' : 'text-[#aa9fa2]'}`}>
                  <span>{tab.label}</span>
                  <span className={`rounded-full px-3 py-1 text-[16px] ${selected ? 'bg-black text-white' : 'bg-[#f0ebf0] text-[#aa9fa2]'}`}>{tab.value}</span>
                  {selected && <span className="absolute bottom-0 h-1 w-full rounded-full bg-black" />}
                </button>
              )
            })}
          </div>
        </nav>

        <div className="flex min-h-[330px] items-center justify-center bg-[#fdfcfb] pb-16 pt-14">
          {activeTab === 'Snaps' ? <Camera size={74} strokeWidth={1.4} className="text-[#c7c2c2]" /> : <div className="font-condensed text-xl text-[#b2abad]">No {activeTab.toLowerCase()} yet</div>}
        </div>
      </section>
    </main>
  )
}
