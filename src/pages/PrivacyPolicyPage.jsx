import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function PrivacyPolicyPage() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main">
        <header className="section-home-header">
          <div className="home-header_wrapper cc-policy u-position-relative u-stacking-context u-overflow-hidden">
            <div className="home-header_bg u-select-none u-z-n1 u-cover">
              <svg xmlns="http://www.w3.org/2000/svg" style={{ visibility: 'hidden', position: 'absolute' }} aria-hidden="true" width="0" height="0" version="1.1">
                <defs>
                  <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
                    <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
                  </filter>
                </defs>
              </svg>
              <div className="home-header_bg_shape u-cover u-select-none u-z-n1" />
            </div>
            <div className="u-spacing-inline">
              <div className="container cc-1080">
                <div className="common-header_content u-display-flex u-text-center">
                  <h1 className="partner_header_title heading-h6 u-color-typography-25">🚀 GLOBAL AD PAYMENT SOLUTION</h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="section-policy u-spacing-inline u-spacing-block">
          <div className="container cc-738">
            <div className="policy_content">
              <div className="common-richtext w-richtext u-richtext">
                <h2 className="heading-h4 u-text-color-dark u-text-center" style={{ marginBottom: '1rem' }}>For Media Buyers · Agencies · Affiliate Teams</h2>
                <p className="text-xl u-text-color-dark" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                  We provide enterprise-grade virtual card infrastructure for high-volume advertising operations.
                </p>

                <h3 className="heading-h5 u-text-color-dark" style={{ marginTop: '2rem', marginBottom: '1rem' }}>💼 WHAT WE OFFER</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  <li>✔️ Virtual Cards for Ads (Facebook / Google / TikTok)</li>
                  <li>✔️ Instant funding via USDT (1:1 USD)</li>
                  <li>✔️ Unlimited card creation</li>
                  <li>✔️ No spending fees</li>
                  <li>✔️ No card issuance fees</li>
                  <li>✔️ Automated deposit system</li>
                  <li>✔️ 24/7 support</li>
                </ul>

                <h3 className="heading-h5 u-text-color-dark" style={{ marginBottom: '1rem' }}>💰 FUNDING & COST</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                  <li>Funding: USDT → USD (1:1)</li>
                  <li>No hidden fees</li>
                  <li>No transaction fees</li>
                </ul>
                <p className="text-lg u-text-color-dark" style={{ marginBottom: '2rem' }}>👉 The only cost is opportunity-based (cashback model)</p>

                <h3 className="heading-h5 u-text-color-dark" style={{ marginBottom: '1rem' }}>🎯 VOLUME-BASED CASHBACK</h3>
                <p className="text-lg u-text-color-dark" style={{ marginBottom: '0.5rem' }}>The more you spend, the more you earn:</p>
                <table className="text-lg u-text-color-dark" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Monthly Volume</th>
                      <th style={{ textAlign: 'right', padding: '0.5rem', borderBottom: '1px solid #ddd' }}>Cashback</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td style={{ padding: '0.5rem' }}>&lt; $50K</td><td style={{ padding: '0.5rem', textAlign: 'right' }}>0%</td></tr>
                    <tr><td style={{ padding: '0.5rem' }}>$50K – $100K</td><td style={{ padding: '0.5rem', textAlign: 'right' }}>0.2%</td></tr>
                    <tr><td style={{ padding: '0.5rem' }}>$100K – $300K</td><td style={{ padding: '0.5rem', textAlign: 'right' }}>0.3%</td></tr>
                    <tr><td style={{ padding: '0.5rem' }}>$300K – $500K</td><td style={{ padding: '0.5rem', textAlign: 'right' }}>0.4%</td></tr>
                    <tr><td style={{ padding: '0.5rem' }}>$500K – $1M</td><td style={{ padding: '0.5rem', textAlign: 'right' }}>0.5%</td></tr>
                    <tr><td style={{ padding: '0.5rem' }}>$1M+</td><td style={{ padding: '0.5rem', textAlign: 'right' }}>0.6% – 0.8% (custom)</td></tr>
                  </tbody>
                </table>
                <p className="text-lg u-text-color-dark" style={{ marginBottom: '2rem' }}>👉 Designed for scaling teams and professional buyers.</p>

                <h3 className="heading-h5 u-text-color-dark" style={{ marginBottom: '1rem' }}>⚡️ WHY CHOOSE US</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  <li>✔️ We are active advertisers (internal spend ~$300K/month)</li>
                  <li>✔️ High approval rate for ad platforms</li>
                  <li>✔️ Stable infrastructure for scaling</li>
                  <li>✔️ Fast funding (within minutes)</li>
                  <li>✔️ Flexible for agencies & teams</li>
                </ul>

                <h3 className="heading-h5 u-text-color-dark" style={{ marginBottom: '1rem' }}>🔐 SECURITY & STABILITY</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  <li>✔️ Multi-BIN infrastructure</li>
                  <li>✔️ Real usage history cards</li>
                  <li>✔️ Risk monitoring system</li>
                  <li>✔️ Replacement support if needed</li>
                </ul>

                <h3 className="heading-h5 u-text-color-dark" style={{ marginBottom: '1rem' }}>🧩 SUPPORTED USE CASES</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  <li>✔️ Facebook Ads</li>
                  <li>✔️ Google Ads</li>
                  <li>✔️ TikTok Ads</li>
                  <li>✔️ SaaS Tools</li>
                  <li>✔️ E-commerce</li>
                </ul>

                <h3 className="heading-h5 u-text-color-dark" style={{ marginBottom: '1rem' }}>❓ FREQUENTLY ASKED QUESTIONS</h3>
                <div className="text-lg u-text-color-dark" style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: '600' }}>1. How fast is funding?</p>
                  <p>👉 Instant – typically within 1–5 minutes after USDT deposit.</p>
                </div>
                <div className="text-lg u-text-color-dark" style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: '600' }}>2. What networks do you support?</p>
                  <p>👉 TRC20 / ERC20 (USDT)</p>
                </div>
                <div className="text-lg u-text-color-dark" style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: '600' }}>3. Are there any limits?</p>
                  <p>👉 No card limit</p>
                  <p>👉 No strict spending limit (depends on performance)</p>
                </div>
                <div className="text-lg u-text-color-dark" style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: '600' }}>4. Do cards work for Facebook Ads?</p>
                  <p>👉 Yes – optimized for high approval rate on ad platforms.</p>
                </div>
                <div className="text-lg u-text-color-dark" style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: '600' }}>5. What happens if a card gets declined?</p>
                  <p>👉 We provide support and replacement if needed.</p>
                </div>
                <div className="text-lg u-text-color-dark" style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: '600' }}>6. Do you charge any hidden fees?</p>
                  <p>👉 No. Transparent system.</p>
                  <p>👉 Cashback model only.</p>
                </div>
                <div className="text-lg u-text-color-dark" style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: '600' }}>7. Can I create multiple cards?</p>
                  <p>👉 Yes – unlimited.</p>
                </div>
                <div className="text-lg u-text-color-dark" style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: '600' }}>8. Do you provide support?</p>
                  <p>👉 24/7 support via Telegram.</p>
                </div>
                <div className="text-lg u-text-color-dark" style={{ marginBottom: '1rem' }}>
                  <p style={{ fontWeight: '600' }}>9. Can agencies use this?</p>
                  <p>👉 Yes – we support teams, agencies, and affiliate networks.</p>
                </div>
                <div className="text-lg u-text-color-dark" style={{ marginBottom: '2rem' }}>
                  <p style={{ fontWeight: '600' }}>10. Do you offer better rates for large volume?</p>
                  <p>👉 Yes – custom cashback for high-volume partners.</p>
                </div>

                <h3 className="heading-h5 u-text-color-dark" style={{ marginBottom: '1rem' }}>📊 IDEAL CLIENTS</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  <li>✔️ Media Buyers</li>
                  <li>✔️ Affiliate Teams</li>
                  <li>✔️ Advertising Agencies</li>
                  <li>✔️ E-commerce Sellers</li>
                </ul>

                <h3 className="heading-h5 u-text-color-dark" style={{ marginBottom: '1rem' }}>📞 CONTACT</h3>
                <p className="text-lg u-text-color-dark">
                  Telegram: <a href="https://t.me/ZG_Mine" target="_blank" rel="noreferrer" style={{ color: '#8C3CFC' }}>@ZG_Mine</a>
                </p>
                <p className="text-lg u-text-color-dark">
                  Website: <a href="https://uproascards.com" target="_blank" rel="noreferrer" style={{ color: '#8C3CFC' }}>uproascards.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
