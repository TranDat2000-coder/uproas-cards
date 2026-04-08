import { useState } from 'react'

const FAQS = [
  {
    question: 'How do I get started?',
    answer: 'To get started, click Sign up and answer a few quick questions. Afterwards, our support team will contact you to set up your account — or you can reach out to us directly via Telegram or WhatsApp.',
  },
  {
    question: 'Which platforms do your cards work with?',
    answer: 'Our cards are compatible with all major ad platforms, including Google Ads, Meta Ads, TikTok Ads, X (formerly Twitter), Bing, and more. We also provide cards for online payments, like paying for subscriptions (e.g., Midjourney, Netflix) or linking to Apple Pay for everyday spending.',
  },
  {
    question: 'What top-up methods are available?',
    answer: 'We support several top-up methods, including cryptocurrency, SEPA, SWIFT, and Wire transfers — choose the one that works best for you.',
  },
  {
    question: 'Can I choose the billing address on the card?',
    answer: 'Yes, when issuing a card you can select a custom billing address to match your ad account or merchant requirements',
  },
]

function LeadingLogoMini() {
  return (
    <div>
      <img
        src="/Logo-uproadcards.svg"
        loading="lazy"
        width="100"
        height="100"
        alt="Uproas Cards"
        className="cta-card_logo"
      />
    </div>
  )
}

function FAQShapeSVG({ position }) {
  const isTop = position.includes('top')
  const isLeft = position.includes('left')
  const isVertical = position.includes('vertical')
  const isHorizontal = position.includes('horizontal')

  if (isVertical) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="227" viewBox="0 0 8 227" fill="none" className={`faq-wrapper_shape cc-vertical-middle cc-vertical-middle--${isLeft ? 'left' : 'right'} u-position-absolute u-select-none u-z-n1`}>
        <path d="M4 3L4.00001 223" stroke="#E3E5E8" />
        <rect x="0.5" y="0.5" width="7" height="7" rx="1.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 2.18557e-08 219)" fill="white" stroke="#E3E5E8" />
        <rect x="0.5" y="0.5" width="7" height="7" rx="1.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 2.18557e-08 -2.18557e-08)" fill="white" stroke="#E3E5E8" />
      </svg>
    )
  }

  if (isHorizontal) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="504" height="8" viewBox="0 0 504 8" fill="none" className={`faq-wrapper_shape cc-horizontal-middle cc-horizontal-middle--${isTop ? 'top' : 'bottom'} u-mx-auto u-position-absolute u-select-none u-z-n1`}>
        <path d="M4 4H224" stroke="#E6E9EF" />
        <rect x="220.5" y="0.5" width="7" height="7" rx="1.5" fill="white" stroke="#E6E9EF" />
        <rect x="0.5" y="0.5" width="7" height="7" rx="1.5" fill="#F9F9F9" stroke="#E6E9EF" />
        <path d="M280 4H500" stroke="#E6E9EF" />
        <rect x="496.5" y="0.5" width="7" height="7" rx="1.5" fill="white" stroke="#E6E9EF" />
        <rect x="276.5" y="0.5" width="7" height="7" rx="1.5" fill="white" stroke="#E6E9EF" />
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="172" height="210" viewBox="0 0 172 210" fill="none" className={`faq-wrapper_shape cc-${isTop ? 'top' : 'bottom'} cc-${isLeft ? 'left' : 'right'} u-position-absolute u-select-none u-z-n1`}>
      <path d={isTop ? (isLeft ? 'M0 48H168' : 'M172 48H4') : (isLeft ? 'M0 162H168' : 'M172 162H4')} stroke="#E6E9EF" />
      <rect x={isTop ? (isLeft ? 164.5 : -0.5) : (isLeft ? 0.5 : 7.5)} y={isTop ? 44.5 : 165.5} width="7" height="7" rx="1.5" fill="white" stroke="#E6E9EF" />
      <path d={isTop ? (isLeft ? 'M44 0V210' : 'M128 0V210') : (isLeft ? 'M44 210V-3.42727e-06' : 'M128 210V-3.42727e-06')} stroke="url(#paint_linear)" />
      <defs>
        <linearGradient id="paint_linear" x1="44.5" y1={isTop ? 0 : 210} x2="44.5" y2={isTop ? 210 : 0} gradientUnits="userSpaceOnUse">
          <stop offset="0.36942" stopColor="#E7E9EF" />
          <stop offset="1" stopColor="#F8F8F8" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-faq cc-bottom-0 u-spacing-inline u-spacing-block">
      <div className="container cc-1080">
        <div style={{ marginBottom: 'clamp(1.5rem, 0.6643rem + 3.4286vw, 3.75rem)' }} className="section-header">
          <div>
            <h2 className="section-title heading-h2 u-text-color-dark u-text-center">
              <div>
                <span className="section-title-text" style={{ display: 'block' }}>Our Frequently asked</span>
                <span className="section-title-text cc-gradient" style={{ margin: 0 }}>questions</span>
              </div>
            </h2>
          </div>
          <p className="section-text heading-s2 u-text-center u-weight-500" style={{ maxWidth: '40ch' }}>
            Our most common FAQs are below, if you have more questions, feel free to contact us.
          </p>
        </div>

        <div className="faq-wrapper u-overflow-hidden u-position-relative u-stacking-context">
          <div className="container cc-880">
            <div role="list" data-faq="list" className="faq-list">
              {FAQS.map((faq, i) => (
                <div key={i} role="listitem" data-faq="listitem" className="faq-list_item">
                  <div data-faq="card" className={`faq-card${openIndex === i ? ' active' : ''}`}>
                    <button
                      type="button"
                      className="faq-card_header u-bg-white"
                      data-faq="toggler"
                      onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    >
                      <span className="u-color-typography-900 text-xl">{faq.question}</span>
                      <span className="faq-card_header_icon u-position-relative u-ratio-1">
                        <span className="faq-card_header_icon_line cc-vl u-position-absolute" />
                        <span className="faq-card_header_icon_line cc-hr u-position-absolute" />
                      </span>
                    </button>
                    {openIndex === i && (
                      <div data-faq="body" className="faq-card_collapse">
                        <div className="u-overflow-hidden">
                          <div className="faq-card_collapse_wrapper">
                            <div className="faq-card_body u-bg-white">
                              <p className="faq-card_body_text u-color-typography-900 text-xl">{faq.answer}</p>
                            </div>
                            <div className="faq-card_collapse_circle u-bg-white u-ratio-1">
                              <LeadingLogoMini />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <FAQShapeSVG position="top-left" />
          <FAQShapeSVG position="top-right" />
          <FAQShapeSVG position="bottom-left" />
          <FAQShapeSVG position="bottom-right" />
          <FAQShapeSVG position="vertical-left" />
          <FAQShapeSVG position="vertical-right" />
          <FAQShapeSVG position="horizontal-top" />
          <FAQShapeSVG position="horizontal-bottom" />
        </div>
      </div>
    </section>
  )
}
