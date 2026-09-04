'use client'

import { Search, MessageCircle, MoreVertical, Users, Grid } from 'lucide-react'
import { useState } from 'react'

export default function Page() {
  const [activeTab, setActiveTab] = useState<'activities' | 'people'>('activities')
  const [activityView, setActivityView] = useState<'feed' | 'user'>('feed')
  const activities = [
    {
      id: 1,
      user: {
        name: 'Shikha Rai',
        avatar: 'S',
        avatarColor: '#E91E63',
        distance: '6 m away',
        image: null,
        age: 21,
        gender: 'Female',
      },
      postedIn: 'Music & Entertainment',
      message: 'Looking for buddy in music & entertainment',
      otherActivities: [
        { title: 'City Exploration', category: 'Travel' },
        { title: 'Photography Walk', category: 'Arts' },
      ],
    },
    {
      id: 2,
      user: {
        name: 'Aditya Verma',
        avatar: 'A',
        avatarColor: '#006B7F',
        distance: '7 m away',
        image: null,
        age: 26,
        gender: 'Male',
      },
      postedIn: 'City Exploration',
      message: 'Looking for someone to explore city',
      otherActivities: [
        { title: 'Music Jam', category: 'Music' },
        { title: 'Food Festival', category: 'Food' },
        { title: 'Hiking Trip', category: 'Adventure' },
      ],
    },
    {
      id: 3,
      user: {
        name: 'KnoBee Official',
        avatar: 'K',
        avatarColor: '#FF6B35',
        distance: '7 m away',
        image: null,
        age: 46,
        gender: 'Male',
      },
      postedIn: 'Sports & Fitness',
      message: 'Tennis session this Sunday! All skill levels welcome. Rackets provided, just bring your energy. Let\'s stay active together 🎾',
      otherActivities: [
        { title: 'Basketball', category: 'Sports' },
        { title: 'Gym Buddy', category: 'Fitness' },
      ],
    },
    {
      id: 4,
      user: {
        name: 'Mh Kaif',
        avatar: 'M',
        avatarColor: '#795548',
        distance: '7 m away',
        image: null,
        age: 27,
        gender: 'Male',
      },
      postedIn: 'Spiritual & Wellness',
      message: 'Morning meditation and yoga session in the park',
      otherActivities: [],
    },
    {
      id: 5,
      user: {
        name: 'Mohit Testid',
        avatar: 'M',
        avatarColor: '#7A6C6F',
        distance: '7 m away',
        image: null,
        age: 26,
        gender: 'Male',
      },
      postedIn: 'Social & Comedy',
      message: 'Looking for people who love to laugh',
      otherActivities: [
        { title: 'Movie Night', category: 'Entertainment' },
      ],
    },
  ]

  const userActivities = [
    {
      id: 1,
      user: {
        name: 'Shikha Rai',
        avatar: 'S',
        avatarColor: '#E91E63',
        age: 21,
        gender: 'Female',
        distance: '6 m away',
        image: null,
      },
      lookingFor: ['Music & Entertainment', 'City Exploration'],
      createdActivities: [
        { title: 'Music & Entertainment' },
        { title: 'City Exploration' },
        { title: 'Photography Walk' },
      ],
    },
    {
      id: 2,
      user: {
        name: 'Aditya Verma',
        avatar: 'A',
        avatarColor: '#006B7F',
        age: 26,
        gender: 'Male',
        distance: '7 m away',
        image: null,
      },
      lookingFor: ['Photography partners', 'City explorers', 'Cafe hoppers'],
      createdActivities: [
        { title: 'City Exploration' },
        { title: 'Food Festival' },
        { title: 'Hiking Trip' },
      ],
    },
  ]

  const people = [
    {
      id: 1,
      name: 'Priya Sharma',
      avatar: 'P',
      avatarColor: '#E91E63',
      age: 24,
      gender: 'Female',
      image: null,
      tags: ['New to Beegoss'],
      reputationTags: ['Friendly', 'Great vibes'],
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      avatar: 'R',
      avatarColor: '#006B7F',
      age: 28,
      gender: 'Male',
      image: null,
      tags: ['Interested in gym workout'],
      reputationTags: ['Motivating', 'Reliable'],
    },
    {
      id: 3,
      name: 'Anita Singh',
      avatar: 'A',
      avatarColor: '#9C27B0',
      age: 23,
      gender: 'Female',
      image: null,
      tags: ['You both viewed football activity'],
      reputationTags: ['Caring', 'Fun to be around'],
    },
    {
      id: 4,
      name: 'Vikram Patel',
      avatar: 'V',
      avatarColor: '#FF9800',
      age: 30,
      gender: 'Male',
      image: null,
      tags: ['Looking for tennis partners', 'Music enthusiast'],
      reputationTags: ['Organized', 'Easy-going'],
    },
    {
      id: 5,
      name: 'Sneha Gupta',
      avatar: 'S',
      avatarColor: '#4CAF50',
      age: 25,
      gender: 'Female',
      image: null,
      tags: ['You both like hiking'],
      reputationTags: ['Adventurous', 'Supportive'],
    },
    {
      id: 6,
      name: 'John Doe',
      avatar: 'J',
      avatarColor: '#2196F3',
      age: 27,
      gender: 'Male',
      image: null,
      tags: ['New to Beegoss', 'Photography lover'],
      reputationTags: ['Creative', 'Great listener'],
    },
    {
      id: 7,
      name: 'Emma Wilson',
      avatar: 'E',
      avatarColor: '#E91E63',
      age: 22,
      gender: 'Female',
      image: null,
      tags: ['Interested in yoga sessions'],
      reputationTags: ['Calm', 'Positive energy'],
    },
    {
      id: 8,
      name: 'Mike Johnson',
      avatar: 'M',
      avatarColor: '#795548',
      age: 29,
      gender: 'Male',
      image: null,
      tags: ['You both viewed cooking class'],
      reputationTags: ['Funny', 'Helpful'],
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative">
      {/* Header */}
      <header className="bg-white px-4 py-4 flex items-center justify-between border-b border-gray-200">
        <div className="text-xl font-bold">
          <span className="font-black">findbuddy</span>
          <div className="text-xs tracking-widest font-semibold">
            {activeTab === 'activities' 
              ? (activityView === 'feed' ? 'DISCOVER' : 'USER ACTIVITIES') 
              : 'PEOPLE'}
          </div>
        </div>
        <div className="flex gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Search className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('activities')}
          className={`flex-1 px-4 py-3 font-semibold border-b-2 ${
            activeTab === 'activities' 
              ? 'text-gray-900 border-black' 
              : 'text-gray-400 border-transparent'
          }`}
        >
          Activities <span className={`ml-2 text-xs font-bold rounded-full px-2 py-0.5 ${
            activeTab === 'activities' 
              ? 'bg-gray-900 text-white' 
              : 'bg-gray-300 text-gray-600'
          }`}>15</span>
        </button>
        <button 
          onClick={() => setActiveTab('people')}
          className={`flex-1 px-4 py-3 font-semibold border-b-2 ${
            activeTab === 'people' 
              ? 'text-gray-900 border-black' 
              : 'text-gray-400 border-transparent'
          }`}
        >
          People <span className={`ml-2 text-xs font-bold rounded-full px-2 py-0.5 ${
            activeTab === 'people' 
              ? 'bg-gray-900 text-white' 
              : 'bg-gray-300 text-gray-600'
          }`}>8</span>
        </button>
      </div>

      {/* Activity View Toggle */}
      {activeTab === 'activities' && (
        <div className="flex items-center justify-end px-4 py-2 bg-gray-50 border-b border-gray-100">
          <button
            onClick={() => setActivityView('feed')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full ${
              activityView === 'feed' 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Feed View
          </button>
          <button
            onClick={() => setActivityView('user')}
            className={`ml-2 px-3 py-1.5 text-xs font-medium rounded-full ${
              activityView === 'user' 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Grid View
          </button>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {activeTab === 'activities' ? (
          // Activities View
          activityView === 'feed' ? (
            // Feed View (original design)
            activities.map((activity) => (
              <div key={activity.id} className="border-b border-gray-100 p-4">
                {/* User Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* User Avatar */}
                    <div className="flex-shrink-0">
                      {activity.user.image ? (
                        <img
                          src={activity.user.image}
                          alt={activity.user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold"
                          style={{ backgroundColor: activity.user.avatarColor }}
                        >
                          {activity.user.avatar}
                        </div>
                      )}
                    </div>
                    
                    {/* User Info */}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-gray-900">{activity.user.name}</h3>
                        <span className="text-xs text-gray-500">{activity.user.distance}</span>
                      </div>
                      <p className="text-xs text-gray-400">{activity.user.gender} · {activity.user.age} yr</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full">
                      Connect
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Posted In */}
                <div className="mb-3">
                  <span className="text-xs text-gray-500">Posted in </span>
                  <span className="text-xs font-semibold text-gray-900">{activity.postedIn}</span>
                </div>

                {/* Activity Message */}
                <div className="mb-4">
                  <p className="text-sm text-gray-800 leading-relaxed">{activity.message}</p>
                </div>

                {/* Also Interested In */}
                {activity.otherActivities.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-xs font-semibold text-gray-700">Also interested in</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activity.otherActivities.map((otherActivity, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-2 rounded-lg"
                        >
                          <div className="text-xs font-semibold text-gray-900">{otherActivity.title}</div>
                          <div className="text-xs text-gray-500">{otherActivity.category}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            // User View (new design)
            userActivities.map((userActivity) => (
              <div key={userActivity.id} className="border-b border-gray-100 p-4">
                {/* User Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* User Avatar */}
                    <div className="flex-shrink-0">
                      {userActivity.user.image ? (
                        <img
                          src={userActivity.user.image}
                          alt={userActivity.user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold"
                          style={{ backgroundColor: userActivity.user.avatarColor }}
                        >
                          {userActivity.user.avatar}
                        </div>
                      )}
                    </div>
                    
                    {/* User Info */}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-gray-900">{userActivity.user.name}</h3>
                        <span className="text-xs text-gray-500">{userActivity.user.distance}</span>
                      </div>
                      <p className="text-xs text-gray-400">{userActivity.user.gender} · {userActivity.user.age} yr</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full">
                      Connect
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Hide Open To on Aditya Verma's card for the comparison preview. */}
                {userActivity.id !== 2 && (
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Grid className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-semibold text-gray-700">Open To</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {userActivity.lookingFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                )}

                {/* Leave the first grid card as an Open To-only layout preview. */}
                {userActivity.id !== 1 && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-semibold text-gray-700">Created Activities</span>
                  </div>
                  <div className="space-y-2">
                    {userActivity.createdActivities.map((activity, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-2 rounded-lg flex items-center justify-between"
                      >
                        <div className="text-xs font-semibold text-gray-900">{activity.title}</div>
                        <div className="text-xs text-gray-500">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
                )}
              </div>
            ))
          )
        ) : (
          // People View
          people.map((person) => (
            <div key={person.id} className="border-b border-gray-100 p-4">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                      style={{ backgroundColor: person.avatarColor }}
                    >
                      {person.avatar}
                    </div>
                  )}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {person.gender} · {person.age} yr
                  </p>

                  {/* Contextual Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {person.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Reputation Tags */}
                  {person.reputationTags && person.reputationTags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {person.reputationTags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1"
                        >
                          <span className="text-green-600">#</span> {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full">
                  Connect
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex items-center justify-around py-3 px-4 rounded-t-3xl shadow-lg">
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4v4" />
          </svg>
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 7a2 2 0 100-4 2 2 0 000 4zm0 0H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2v-10a2 2 0 00-2-2h-4" />
          </svg>
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
          </svg>
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
