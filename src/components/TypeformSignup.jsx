import { useEffect, useRef, useState } from 'react'

const TELEGRAM_URL = 'https://t.me/ZG_Mine#'

const spendOptions = [
  { id: 'xwzKDYPbDDhZ', label: '<$1K' },
  { id: 'theEmPqj7Tq1', label: '$1-5K' },
  { id: 'M1B7Rgr8dAz5', label: '$5-10K' },
  { id: 'FSPg9IR4609C', label: '$10-50K' },
  { id: 'tVfJ9fwf0Fin', label: '$50K+' },
]

const ANIMATION_DURATION = 400

export default function TypeformSignup() {
  const [loading, setLoading] = useState(true)
  const [screen, setScreen] = useState('welcome')
  const [fadeIn, setFadeIn] = useState(true)
  const [slideUp, setSlideUp] = useState(false)
  const [currentField, setCurrentField] = useState(1)
  const [fields, setFields] = useState({
    email: '',
    social: '',
    spend: null,
  })
  const [errors, setErrors] = useState({})
  const inputRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(false)
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (screen === 'form' && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [currentField, screen])

  const handleStart = () => {
    setSlideUp(true)
    setTimeout(() => {
      setScreen('form')
    }, ANIMATION_DURATION)
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleNext = () => {
    const newErrors = {}

    if (currentField === 1 && !fields.email) {
      newErrors.email = 'Please enter your email'
    } else if (currentField === 1 && fields.email && !validateEmail(fields.email)) {
      newErrors.email = "Hmm... that email doesn't look right"
    }

    if (currentField === 2 && !fields.social) {
      newErrors.social = 'Please enter your Telegram or WhatsApp'
    }

    if (currentField === 3 && fields.spend === null) {
      newErrors.spend = 'Please select an option'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})

    if (currentField < 3) {
      setCurrentField(currentField + 1)
    } else {
      setScreen('thankyou')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleNext()
    }
  }

  const handleOptionSelect = (optionLabel) => {
    const selectedIndex = spendOptions.findIndex(opt => opt.label === optionLabel)
    setFields({ ...fields, spend: selectedIndex })
    setErrors({ ...errors, spend: null })
    setTimeout(() => handleNext(), 300)
  }

  const renderLoader = () => (
    <div
      id="root-loader"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white ${!fadeIn ? 'out' : ''}`}
    >
      <div className="root-loader-inner">
        <div id="loader-logo" className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="196" height="30" viewBox="0 0 196 30" fill="none" className="navbar_brand_logo" style={{ color: '#000000' }}>
            <g>
              <path d="M16.7093 22.9768L12.6585 15.9277L8.35278 8.42978L10.3781 4.90046L13.1948 -6.10352e-05L17.1032 6.80967L15.4752 9.64465L13.1948 5.67602L11.6122 8.42891L14.0228 12.6255L18.3372 20.1392H21.4936L19.6499 16.9164L21.2779 14.0814L26.3872 22.9776H16.7093V22.9768Z" fill="#8C3CFC" />
              <path d="M-0.00012207 22.9768L6.78253 11.1696L8.41051 14.0045L6.95197 16.5487L4.8873 20.1357H11.9276L13.5591 22.9768H-0.00012207Z" fill="#8C3CFC" />
            </g>
            <text
              x="30"
              y="22"
              font-size="28"
              font-weight="500"
              fill="currentColor"
              letter-spacing="-0.2"
            >UproasCards</text>
          </svg>
        </div>
        <div id="loader-bar" className="mt-4">
          <div className="LoaderWrapper" style={{
            width: '200px',
            height: '4px',
            backgroundColor: '#e5e5e5',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div
              style={{
                width: '30%',
                height: '100%',
                backgroundColor: '#000000',
                borderRadius: '2px',
                animation: 'loaderProgress 0.8s ease-in-out infinite alternate'
              }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes loaderProgress {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 60%; margin-left: 20%; }
          100% { width: 0%; margin-left: 100%; }
        }
        @keyframes fadeIn {
          from { opacity: 0.01; }
          to { opacity: 1; }
        }
        #root-loader {
          animation: fadeIn 400ms ease-in-out 1 forwards;
        }
        #root-loader.out {
          animation: fadeOut 400ms ease-in-out 400ms 1 forwards;
          opacity: 1;
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        #loader-logo {
          transform: translateY(20px);
          animation: slideIn 400ms ease-in-out 1 forwards;
        }
        #root-loader.out #loader-logo {
          animation: slideOut 400ms ease-in-out 400ms 1 forwards;
          transform: translateY(0);
        }
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateY(0); }
          to { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )

  const renderWelcomeScreen = () => (
    <div
      className={`
        flex flex-col items-center justify-center min-h-screen bg-white px-6
        ${fadeIn ? 'animate-fadeIn' : 'opacity-100'}
      `}
    >
      <div className="absolute top-4 left-4 md:left-8">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="196" height="30" viewBox="0 0 196 30" fill="none" className="navbar_brand_logo" style={{ color: '#000000' }}>
          <g>
            <path d="M16.7093 22.9768L12.6585 15.9277L8.35278 8.42978L10.3781 4.90046L13.1948 -6.10352e-05L17.1032 6.80967L15.4752 9.64465L13.1948 5.67602L11.6122 8.42891L14.0228 12.6255L18.3372 20.1392H21.4936L19.6499 16.9164L21.2779 14.0814L26.3872 22.9776H16.7093V22.9768Z" fill="#8C3CFC" />
            <path d="M-0.00012207 22.9768L6.78253 11.1696L8.41051 14.0045L6.95197 16.5487L4.8873 20.1357H11.9276L13.5591 22.9768H-0.00012207Z" fill="#8C3CFC" />
          </g>
          <text
            x="30"
            y="22"
            font-size="28"
            font-weight="500"
            fill="currentColor"
            letter-spacing="-0.2"
          >UproasCards</text>
        </svg>
      </div>

      <div className="flex flex-col items-center text-center max-w-lg mx-auto pt-16">
        <h1
          className="!text-2xl !md:text-3xl !font-light text-black mb-12 leading-tight px-2"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        >
          Complete this quick form to create your account💳
        </h1>

        <button
          onClick={handleStart}
          className="bg-[#8C3CFC] !text-white !px-10 !py-2 !rounded-full !text-lg !font-medium hover:bg-[#7529e6] !transition-colors duration-200"
        >
          Start
        </button>

        <div className="flex items-center gap-2 mt-10 text-gray-400 text-xs">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="animate-clock">
            <g transform="translate(6, 6) translate(0, 0)">
              <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" strokeOpacity="1" d=" M1.56 1.56 C1.56,1.56 0,0 0,0 "></path>
            </g>
            <g transform="translate(6, 6) translate(0, 0)">
              <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" strokeOpacity="1" d=" M0 0 C0,0 0,-2.35 0,-2.35 "></path>
            </g>
            <g transform="translate(6, 6) translate(0, 0)">
              <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" strokeOpacity="1" d=" M0 5.25 C2.9,5.25 5.25,2.9 5.25,0 C5.25,-2.9 2.9,-5.25 0,-5.25 C-2.9,-5.25 -5.25,-2.9 -5.25,0 C-5.25,2.9 -2.9,5.25 0,5.25z "></path>
            </g>
          </svg>
          <span>Takes 30 sec</span>
        </div>
      </div>
    </div>
  )

  const renderFormField = () => {
    const totalFields = 3
    const progress = (currentField / totalFields) * 100

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-8">
        <div className="absolute top-4 left-4 md:left-8">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="196" height="30" viewBox="0 0 196 30" fill="none" className="navbar_brand_logo" style={{ color: '#000000' }}>
            <g>
              <path d="M16.7093 22.9768L12.6585 15.9277L8.35278 8.42978L10.3781 4.90046L13.1948 -6.10352e-05L17.1032 6.80967L15.4752 9.64465L13.1948 5.67602L11.6122 8.42891L14.0228 12.6255L18.3372 20.1392H21.4936L19.6499 16.9164L21.2779 14.0814L26.3872 22.9776H16.7093V22.9768Z" fill="#8C3CFC" />
              <path d="M-0.00012207 22.9768L6.78253 11.1696L8.41051 14.0045L6.95197 16.5487L4.8873 20.1357H11.9276L13.5591 22.9768H-0.00012207Z" fill="#8C3CFC" />
            </g>
            <text
              x="30"
              y="22"
              font-size="28"
              font-weight="500"
              fill="currentColor"
              letter-spacing="-0.2"
            >UproasCards</text>
          </svg>
        </div>

        <div className="w-full max-w-lg mx-auto pt-12">
          <div className="mb-4">
            <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#8C3CFC] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-end mb-6">
            <span className="text-xs text-gray-400 font-medium">
              {currentField}/{totalFields}
            </span>
          </div>

          {currentField === 1 && (
            <div className="animate-slideIn">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-3 leading-snug">
                Email
              </h2>
              <p className="text-gray-500 text-sm mb-5">
                Enter your email to create your account and get started
              </p>
              <input
                ref={inputRef}
                type="email"
                value={fields.email}
                onChange={(e) => {
                  setFields({ ...fields, email: e.target.value })
                  setErrors({ ...errors, email: null })
                }}
                onKeyDown={handleKeyDown}
                placeholder="name@example.com"
                className={`
                  w-full px-4 py-4 text-base border-2 rounded-lg outline-none transition-colors
                  focus:border-[#8C3CFC] bg-white
                  ${errors.email ? 'border-red-500' : 'border-gray-200'}
                `}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">{errors.email}</p>
              )}
            </div>
          )}

          {currentField === 2 && (
            <div className="animate-slideIn">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-3 leading-snug">
                Share your Telegram or WhatsApp
              </h2>
              <p className="text-gray-500 text-sm mb-5">
                so our team can reach you to activate your account fast
              </p>
              <input
                ref={inputRef}
                type="text"
                value={fields.social}
                onChange={(e) => {
                  setFields({ ...fields, social: e.target.value })
                  setErrors({ ...errors, social: null })
                }}
                onKeyDown={handleKeyDown}
                placeholder="@username or phone number"
                className={`
                  w-full px-4 py-4 text-base border-2 rounded-lg outline-none transition-colors
                  focus:border-[#8C3CFC] bg-white
                  ${errors.social ? 'border-red-500' : 'border-gray-200'}
                `}
              />
              {errors.social && (
                <p className="text-red-500 text-xs mt-2">{errors.social}</p>
              )}
            </div>
          )}

          {currentField === 3 && (
            <div className="animate-slideIn">
              <h2 className="text-xl md:text-2xl font-medium text-black mb-3 leading-snug">
                Spend per month (estimated)
              </h2>
              <p className="text-gray-500 text-sm mb-5">
                Your estimated spend helps us customize the most effective pricing for your business
              </p>

              <div className="space-y-2">
                {spendOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.label)}
                    className={`
                      w-full px-5 py-4 text-left text-sm rounded-lg border transition-all duration-150
                      ${fields.spend === index
                        ? 'border-[#8C3CFC] bg-purple-50 text-black'
                        : 'border-gray-200 hover:border-[#8C3CFC] hover:bg-purple-50/30 text-black'}
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {errors.spend && (
                <p className="text-red-500 text-xs mt-2">{errors.spend}</p>
              )}
            </div>
          )}

          <div className="mt-10 flex items-center justify-between">
            <div className="text-xs text-gray-400">
              press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600 font-mono">Enter</kbd> ↵
            </div>
            <button
              onClick={handleNext}
              className="bg-[#8C3CFC] text-white px-10 py-3.5 rounded-full text-sm font-medium hover:bg-[#7529e6] transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }

  const renderThankYouScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-8">
      <div className="absolute top-4 left-4 md:left-8">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="196" height="30" viewBox="0 0 196 30" fill="none" className="navbar_brand_logo" style={{ color: '#000000' }}>
          <g>
            <path d="M16.7093 22.9768L12.6585 15.9277L8.35278 8.42978L10.3781 4.90046L13.1948 -6.10352e-05L17.1032 6.80967L15.4752 9.64465L13.1948 5.67602L11.6122 8.42891L14.0228 12.6255L18.3372 20.1392H21.4936L19.6499 16.9164L21.2779 14.0814L26.3872 22.9776H16.7093V22.9768Z" fill="#8C3CFC" />
            <path d="M-0.00012207 22.9768L6.78253 11.1696L8.41051 14.0045L6.95197 16.5487L4.8873 20.1357H11.9276L13.5591 22.9768H-0.00012207Z" fill="#8C3CFC" />
          </g>
          <text
            x="30"
            y="22"
            font-size="28"
            font-weight="500"
            fill="currentColor"
            letter-spacing="-0.2"
          >UproasCards</text>
        </svg>
      </div>

      <div className="flex flex-col items-center text-center max-w-lg mx-auto pt-12 animate-slideIn">
        <h2 className="!text-xl md:text-2xl !font-medium text-black mb-8 leading-snug px-4">
          To activate your cards now, tap the button to message us on Telegram
          👇
        </h2>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#8C3CFC] text-white px-10 py-4 rounded-full text-base font-medium hover:bg-[#7529e6] transition-colors inline-flex items-center gap-2 mb-6"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          Activate via Telegram
        </a>

        <p className="text-gray-400 text-xs">
          Or wait — our team will contact you soon.
        </p>
      </div>
    </div>
  )

  return (
    <div className={`font-sans ${slideUp ? 'animate-slideUp' : ''}`} style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0.01; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(100vh); }
          to { transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 400ms ease-in-out 1 forwards;
        }

        .animate-slideIn {
          animation: slideIn 400ms ease-in-out 1 forwards;
        }

        .animate-slideUp {
          animation: slideUp 400ms ease-in-out 1 forwards;
        }

        @keyframes clock {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-clock {
          animation: clock 4s linear infinite;
        }
      `}</style>

      {loading && renderLoader()}

      {!loading && screen === 'welcome' && renderWelcomeScreen()}
      {!loading && screen === 'form' && renderFormField()}
      {!loading && screen === 'thankyou' && renderThankYouScreen()}
    </div>
  )
}
