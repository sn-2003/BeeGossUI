'use client'

import { useState } from 'react'
import {
  Ban,
  Camera,
  ChevronLeft,
  Download,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Share2,
  Sparkles,
} from 'lucide-react'

const basePath = process.env.GITHUB_ACTIONS ? '/BeeGossUI' : ''
const profileImage = `${basePath}/pic.jpg`

const tabs = [
  ['Snaps', '0'],
  ['Activities', '5'],
  ['Events', '4'],
]

export default function ProfileReplicaPage() {
  const [activeTab, setActiveTab] = useState('Snaps')
  const [added, setAdded] = useState(false)
  const [saidHi, setSaidHi] = useState(false)

  return (
    <main className="min-h-screen bg-[#f8f7f5] text-[#191719]">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#f8f7f5] shadow-2xl">
        <section className="relative h-[332px] overflow-hidden bg-[#534d4a] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${profileImage})` }}
            role="img"
            aria-label="Sanjeev in a grey blazer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/65" />

          <div className="relative flex items-start justify-between px-4 pt-2.5">
            <button className="flex size-[42px] items-center justify-center rounded-[13px] bg-black/45" aria-label="Go back">
              <ChevronLeft className="size-6" strokeWidth={2.5} />
            </button>
            <div className="flex gap-2.5">
              <button className="flex size-[42px] items-center justify-center rounded-[13px] bg-black/45" aria-label="Block profile">
                <Ban className="size-[22px]" />
              </button>
              <button className="flex size-[42px] items-center justify-center rounded-[13px] bg-black/45" aria-label="Download profile">
                <Download className="size-[22px]" />
              </button>
              <button className="flex size-[42px] items-center justify-center rounded-[13px] bg-black/45" aria-label="Share profile">
                <Share2 className="size-[22px]" />
              </button>
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-7">
            <div className="mb-2 flex items-center gap-3 text-white/60">
              <span className="h-px flex-1 bg-white/40" />
              <span className="font-mono text-[10px] tracking-[0.25em]">@SANJEEV_8125</span>
              <span className="h-px flex-1 bg-white/40" />
            </div>
            <h1 className="font-condensed text-[32px] font-bold leading-none tracking-tight">Sanjeev</h1>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/25 bg-white/20 px-3.5 py-1.5 text-[14px] font-semibold backdrop-blur-sm">Male, 27 Years</span>
              <span className="rounded-full border border-white/25 bg-white/20 px-3.5 py-1.5 text-[14px] font-semibold backdrop-blur-sm">Noida, Uttar Pradesh, India</span>
            </div>
          </div>
        </section>

        <section className="relative z-10 px-4 pt-5">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setAdded(!added)}
              className={`flex h-12 items-center justify-center gap-2 rounded-[15px] text-[16px] font-bold transition ${added ? 'bg-[#262626] text-white' : 'bg-black text-white'}`}
            >
              <Plus className="size-6" strokeWidth={2.5} /> {added ? 'Added' : 'Add Buddy'}
            </button>
            <button
              onClick={() => setSaidHi(!saidHi)}
              className={`flex h-12 items-center justify-center gap-2 rounded-[15px] text-[16px] font-bold transition ${saidHi ? 'bg-[#60743c] text-white' : 'bg-[#71843f] text-white'}`}
            >
              <MessageSquare className="size-5" /> {saidHi ? 'Hi sent!' : 'Say Hi!'}
            </button>
          </div>

          <section className="mt-5 overflow-hidden rounded-[19px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
            <div className="px-5 pb-5 pt-5">
              <div className="flex items-center gap-2 text-[#aa9da2]">
                <Sparkles className="size-4 fill-current" />
                <h2 className="text-[14px] font-bold tracking-[0.12em]">ABOUT</h2>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-[#5e575a]">Hey! Let&apos;s plan some fun activities together with FindBuddy</p>
            </div>
            <div className="border-t border-[#e7e2e2] px-5 pb-5 pt-5">
              <div className="flex items-center gap-2 text-[#aa9da2]">
                <span className="text-lg">◆</span>
                <h2 className="text-[14px] font-bold tracking-[0.12em]">TAGS</h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['#friendly (1)', '#great vibes (1)'].map((tag) => (
                  <span key={tag} className="rounded-xl border-2 border-[#f0e2ba] bg-[#fff8e7] px-4 py-2 text-[14px] font-semibold text-[#c4a84f]">{tag}</span>
                ))}
              </div>
            </div>
          </section>
        </section>

        <nav className="mt-5 grid grid-cols-3 border-b border-[#e3dfdf] bg-white" aria-label="Profile content tabs">
          {tabs.map(([label, count]) => {
            const selected = activeTab === label
            return (
              <button key={label} onClick={() => setActiveTab(label)} className={`relative flex flex-col items-center gap-2 py-3 text-[15px] ${selected ? 'font-bold text-[#242023]' : 'text-[#aaa0a3]'}`} aria-current={selected ? 'page' : undefined}>
                {label}
                <span className={`flex size-7 items-center justify-center rounded-full text-[13px] ${selected ? 'bg-black text-white' : 'bg-[#f2edf2] text-[#aaa0a3]'}`}>{count}</span>
                {selected && <span className="absolute inset-x-2 bottom-0 h-1 rounded-full bg-black" />}
              </button>
            )
          })}
        </nav>

        <div className="flex min-h-[300px] items-center justify-center bg-white pb-10 pt-16">
          {activeTab === 'Snaps' ? <Camera className="size-24 text-[#aaa6a6]" strokeWidth={1.2} /> : <MoreHorizontal className="size-14 text-[#aaa6a6]" />}
        </div>
      </div>
    </main>
  )
}
