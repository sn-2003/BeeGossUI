'use client'

import { ArrowLeft, CalendarDays, ChevronRight, CircleUserRound, Compass, Gift, Home, MessageCircle, Search, Sparkles, Ticket, Users } from 'lucide-react'
import { useState } from 'react'

const buddies = [
  { name: 'Vaibhav', age: '28M', color: '#182c52', image: '/pic.jpg' },
  { name: 'Indushekhar', age: '22M', color: '#d6c6ae', image: '/pic.jpg' },
  { name: 'Yogesh', age: '27M', color: '#697b82', image: '/pic.jpg' },
  { name: 'Sagar', age: '38M', color: '#d9b8bb', image: '/pic.jpg' },
]

const vouchers = [
  ['Movie Night', 'Plan a movie with your circle', 'Start planning', 'bg-[#f5e2d7]'],
  ['Coffee Catch-up', 'Find a buddy for a relaxed coffee', 'Find a buddy', 'bg-[#f1ead5]'],
  ['Weekend Wander', 'Explore somewhere new together', 'Create an outing', 'bg-[#dfe9e1]'],
  ['Game Night', 'Bring people together for a game', 'Invite buddies', 'bg-[#e8e0ed]'],
  ['Fitness Session', 'Move with a new activity partner', 'Plan an activity', 'bg-[#e5eadf]'],
  ['Food Trail', 'Discover your city one bite at a time', 'Build a food trail', 'bg-[#f3e1c9]'],
  ['Creative Hour', 'Make something memorable together', 'Find your people', 'bg-[#e5e5ef]'],
]

function PassScreen({ onBack }: { onBack: () => void }) {
  return (
    <main className="beegoss-shell pass-shell">
      <header className="pass-header">
        <button className="icon-button" onClick={onBack} aria-label="Back to home"><ArrowLeft /></button>
        <div><p className="eyebrow">BEEGOSS</p><h1>My Pass</h1></div>
        <Ticket className="pass-header-icon" />
      </header>
      <section className="pass-hero">
        <div className="pass-seal"><Sparkles /></div>
        <p className="eyebrow">YOUR ACTIVITY PASS</p>
        <h2>More plans.<br />More people.<br /><em>More memories.</em></h2>
        <p className="pass-copy">Your pass unlocks six activity vouchers to use with people you meet on BeeGoss.</p>
        <div className="progress-line"><span /></div>
        <div className="progress-label"><strong>0 of 6 vouchers used</strong><span>6 available</span></div>
      </section>
      <section className="voucher-section">
        <div className="section-heading"><div><p className="eyebrow">MAKE IT HAPPEN</p><h2>Your vouchers</h2></div><span className="voucher-count">6 <small>LEFT</small></span></div>
        <div className="voucher-list">
          {vouchers.map(([title, copy, action, tone]) => <article className={`voucher-card ${tone}`} key={title}><div className="voucher-mark"><Gift /></div><div className="voucher-text"><h3>{title}</h3><p>{copy}</p><button>{action}<ChevronRight /></button></div></article>)}
        </div>
      </section>
    </main>
  )
}

export default function Page() {
  const [showPass, setShowPass] = useState(false)
  const [activeTab, setActiveTab] = useState('All')
  if (showPass) return <PassScreen onBack={() => setShowPass(false)} />
  return <main className="beegoss-shell home-shell">
    <header className="home-header"><div><h1>Hey, S Nikhil <span>👋</span></h1><p>What are you up to today?</p></div><div className="home-actions"><MessageCircle /><img src="/pic.jpg" alt="S Nikhil profile" /></div></header>
    <div className="search-box"><Search /><span>Search buddies, events, activities, circles...</span></div>
    <nav className="category-row" aria-label="Categories">{['All', 'Near You', 'Events', 'Activities', 'Circles', 'Buddies'].map(tab => <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>{tab}</button>)}</nav>
    <button className="pass-card" onClick={() => setShowPass(true)} aria-label="Open BeeGoss Pass details">
      <div className="pass-card-top"><div><p className="eyebrow">BEEGOSS PASS</p><h2>₹599 PASS.<br /><em>FREE FOR YOU.</em></h2><p className="pass-card-copy">Six experiences worth ₹599, included with your BeeGoss membership.</p></div><div className="pass-card-ticket"><Ticket /><span>₹599</span></div></div>
      <div className="pass-card-bottom"><div className="brand-label">USE IT AT</div><div className="brand-row"><span>PVR</span><span>CCD</span><span>SOCIAL</span><span>CAFÉS</span><span>CLUBS</span></div><span className="pass-card-cta">CLAIM YOUR PASS <ChevronRight /></span></div>
    </button>
    <section className="home-section"><div className="section-heading"><h2>Invite New Users for Activities</h2><button>View all <ChevronRight /></button></div><div className="buddy-row">{buddies.map(buddy => <article className="buddy-card" key={buddy.name}><div className="buddy-photo" style={{ backgroundColor: buddy.color }}><img src={buddy.image} alt="" /></div><h3>{buddy.name}</h3><p>{buddy.age}</p><button>Invite as Buddy</button></article>)}</div></section>
    <section className="home-section upcoming"><div className="section-heading"><h2>Upcoming Events</h2><button>View all <ChevronRight /></button></div><div className="event-placeholder"><CalendarDays /><div><strong>Find something to look forward to</strong><p>Discover events happening near you.</p></div></div></section>
    <nav className="bottom-nav"><button className="selected"><Home /><span>Home</span></button><button><CalendarDays /><span>Events</span></button><button className="featured" onClick={() => setShowPass(true)}><Ticket /><span>Pass</span></button><button><Users /><span>Circle</span></button><button><CircleUserRound /><span>My Plans</span></button></nav>
  </main>
}
