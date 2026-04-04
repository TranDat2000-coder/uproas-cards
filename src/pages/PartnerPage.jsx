import { useState } from 'react'
import ContactSection from '../components/ContactSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import FormModal from '../components/FormModal'
import Navbar from '../components/Navbar'

const ALL_PARTNERS = [
  {
    id: 1,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686f97eedbd24aa28ef5c719_mylead-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686fa82d086b1bfa34d4cbe8_My-lead-logo.png',
    category: 'Affiliate Network',
    promo: 'Lsiklh',
    promoNote: '+10% to generated leads for 48 hours from the moment of code activation',
    url: 'https://mylead.global/en',
    desc: `<p>MyLead is an earning platform tested by hundreds of thousands of publishers. It's known for its individual approach to any affiliate who is willing to maximize their profits with advanced affiliate marketing.</p>
    <ul role="list"><li>over 4300 affiliate programs</li><li>about 30 smartlink offers</li><li>free knowledge resources</li><li>free affiliate tools</li><li>payouts in PayPal, Revolut, Skrill, Qiwi, Bitcoin, Tether, and more</li><li>exclusive bonuses for users</li></ul>`,
  },
  {
    id: 2,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686f97fedbd24aa28ef5da2c_magic-click-log.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686fa83891204443443cf8da_Magig-click-partners-logo.png',
    category: 'Tools',
    promo: 'LeadingClick',
    promoNote: 'Write the LeadingClick promo code when registering in the affiliate network and get 5% on your first payout.',
    url: 'https://panel.magicclick.partners/login?utm_source=leadingcards&utm_medium=partners&utm_campaign=cross',
    desc: `<h4>A reliable affiliate network in iGaming vertical, with more than 800 affiliate offers.</h4>
    <p>The most reliable affiliate network in the Gambling & Betting vertical is waiting for your traffic!</p>
    <ul role="list"><li>Submit an application for registration</li><li>Within a day, a manager will contact you</li><li>We provide creatives and necessary tools</li><li>Experienced managers</li><li>Individual conditions for teams</li></ul>`,
  },
  {
    id: 3,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686f98131a2f486905fa3db7_keitaro.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686fa83f28ef4fceae74fc62_keitaro-logo.png',
    category: 'Traffic Source',
    promo: 'LEADINGCARDS',
    promoNote: '20% discount on the first purchase of any license for up to 3 months',
    url: 'https://keitaro.io/en/?utm_source=leadingcards',
    desc: `<p>Keeping track of all your data, especially when dealing with a variety of traffic - this is exactly what every marketer needs.</p>
    <h4>Now you can install Keitaro in just a few clicks</h4>
    <p><strong>Keitaro allows:</strong></p>
    <ul role="list"><li>to park domains and use them as campaign links</li><li>upload local landing pages</li><li>send postbacks from order forms</li><li>auto-update Facebook costs</li><li>edit landing pages code right inside Keitaro</li><li>send and receive postbacks via API</li><li>build reports using 30+ metrics</li><li>create and use smart links</li><li>create users with different levels of access</li></ul>`,
  },
  {
    id: 4,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686f981cca491de496db3fc4_multilogin-logo-big.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686fa84635ab30751bfe5a1e_multilogin-logo.png',
    category: 'Tools',
    promo: 'LEADML',
    promoNote: 'New Multilogin users will get 50% off their purchase in the second month.',
    url: 'https://multilogin.com/pricing/?utm_source=referrer&utm_medium=website&utm_campaign=leadingads_2022',
    desc: `<p>Being the authority of browser fingerprint industry since 2016, Multilogin provides stable virtual browser profiles with customizable, native browser fingerprints.</p>`,
  },
  {
    id: 5,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686fa5c80b033b58b5ca0c5b_aivix-logo-big.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686fa84fb09d214e3aa4138d_aivix-logo.png',
    category: 'Affiliate Network',
    promo: 'UproasCards',
    promoNote: 'to your manager and get +100$ CPA rate boost for the first month',
    url: 'https://aivix.com/blog/',
    desc: `<p>Aivix is an affiliate program that works only with direct and verified advertisers in the financial vertical.</p>
    <p><strong>The main advantages of working with Aivix:</strong></p>
    <ul role="list"><li>No resale of third-party offers</li><li>Personal manager</li><li>Self-written platform for tracking statistics</li><li>Gift shop, Aivix Store</li><li>Smartlink and domain parking</li><li>Creatives on demand</li><li>Bonuses in 30+ arbitrage services</li></ul>`,
  },
  {
    id: 6,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686f98339e8636e3d1c23eff_adgaming-logo-big.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/686fa85931e6d7cb25c763b7_Adgaming-logo.png',
    category: 'Affiliate Network',
    promo: 'UproasCards',
    promoNote: 'Enter promo code and get +30$ to receive for registration from AdGaming',
    url: 'https://adgaming.biz/',
    desc: `<p>AdGaming is an international CPA network that offers more than 200 offers for gambling and betting verticals.</p>
    <h4>AdGaming.biz offers convenient conditions:</h4>
    <ul role="list"><li>Exclusive offers</li><li>High stakes</li><li>Early payments</li><li>Professional support 24/7</li><li>Free apps</li><li>Flexible postbacks</li></ul>`,
  },
  {
    id: 7,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b3b643f9f66c9d2d747a_Partner-mgid-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b3caf0d385ae7580fe43_Popup-magid-logo.png',
    category: 'Affiliate Network',
    promo: '',
    promoNote: 'A welcome bonus of 25% on top of the first replenishment from $500 to $5,000',
    url: 'https://www.mgid.com/signup?hashManager=9a5db36de6afebc6ebefd9ac9ec88ab5',
    desc: `<p>MGID is the global advertising platform for Native, Video, and Display ads that reach unique local audiences at scale with privacy-first technology powered by AI.</p>
    <ul role="list"><li>MGID has adaptive native advertising formats</li><li>In-house integrated DSP</li><li>A wide variety of automation tools</li><li>In-house creative team</li></ul>`,
  },
  {
    id: 8,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b4121d1acee0832f108f_Partner-primeads-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b41f4600b3080cb5ee78_Popup-magid-primeads-logo.png',
    category: 'Affiliate Network',
    promo: 'UproasCards',
    promoNote: 'to get +25% to your commission in the exclusive PrimeXBT revenue share offer',
    url: 'https://primeads.io/',
    desc: `<p>Global Affiliate Network for web 3.0 and crypto projects.</p>
    <ul role="list"><li>20 000 crypto affiliates</li><li>60+ crypto offers (GameFi, Dex, Cex and much more)</li><li>10+ Exclusive offers</li><li>$10m paid to publishers to date</li><li>Weekly payouts</li></ul>`,
  },
  {
    id: 9,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b45cd8e8fe9909f77263_Partner-admobispy-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b468a64388e37af3b102_Popup-magid-admobispy-logo.png',
    category: 'Tools',
    promo: 'UproasCards',
    promoNote: '-30% OFF: powerful analysis competitors ads in mobile advertising',
    url: 'https://admobispy.com/login',
    desc: `<p>Admobispy it's a tool for monitoring and analyzing mobile advertising, popup advertising, myTarger and Google advertising.</p>
    <p><strong>Your best opportunities with Admobispy:</strong></p>
    <ul role="list"><li>Search the most popular combinations of competitors</li><li>Find which offers they promote</li><li>Detailed analysis every ad and landing page</li><li>Determine the best devices, browsers and geos</li><li>Download all creatives and landing pages in one click</li></ul>`,
  },
  {
    id: 10,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b4acd5c2daf5cba04078_Partner-clickadilla-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b4bbe2e41fa1b589b7b1_Popup-magid-clickadilla-logo.png',
    category: 'Traffic Source',
    promo: 'LEADINGCARDS20',
    promoNote: 'Get a $20 bonus for your first-time deposit from $150. The promo code is active till the end of 2023.',
    url: 'https://app.clickadilla.com/register/?ref=9iBwTZBT&utm_source=promo&utm_medium=LeadingCards',
    desc: `<p>ClickAdilla is a high-technology self-serve ad network platform that provides quality adult and mainstream traffic in all major verticals.</p>
    <p><strong>Key features of ClickAdilla:</strong></p>
    <ul role="list"><li>4,5 B of everyday traffic</li><li>240+ GEOs</li><li>13 Ad Formats</li><li>User-friendly interface in 5 languages</li><li>Marketplace where you can buy premium website traffic</li><li>Traffic DSP</li></ul>`,
  },
  {
    id: 11,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b4f460944605a0415ff8_Partner-everad-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b505130e2a54a061654a_Popup-everad-logo.png',
    category: 'Affiliate Network',
    promo: "Hi! I'm from Leading Cards",
    promoNote: 'to your manager and get additional +5$ for the best Everad offers and top GEOs!',
    url: 'https://everad.com/?utm_source=cross-promo--LeadingCards-dashboard',
    desc: `<p>Everad — is a direct nutra advertiser with its own R&D, in-house offers, CPA Network, call centers and delivery.</p>
    <p><strong>Everad in numbers:</strong></p>
    <ul role="list"><li>400+ own offers</li><li>45+ countries in Europe, Latam and Asia</li><li>200К+ affiliates</li><li>10 years on the market</li><li>Payouts up to $49</li></ul>`,
  },
  {
    id: 12,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b562b25c5d2be5f6f53b_Partner-adxad-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b56ff52d0b9f7fbb3458_Popup-magid-adxad-logo.png',
    category: 'Traffic Source',
    promo: 'LEADINGCARDS5',
    promoNote: "when you sign up and you'll get your bonus.",
    url: 'https://td.adxad.com/auth/login?return=%2Fdesk%2Fcampaigns%3Futm_source%3Dleadingcards%26utm_medium%3Dpr%26utm_campaign%3D042023%26lang%3Den&lang=en',
    desc: `<p>ADxAD provides traffic for several mainstream verticals: Dating, Gambling, Gaming, Nutra, Betting, Crypto and others.</p>
    <p><strong>Everad in numbers:</strong></p>
    <ul role="list"><li>HQ traffic</li><li>WW GEOs</li><li>Pops, native, display, banners, MA dating clicks</li><li>CPM, CPC</li><li>Multi-language support</li><li>A wide range of payment methods</li></ul>`,
  },
  {
    id: 13,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b5ac8ed91fa2ab5f1f26_Partner-mostbet-partners-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b5b7c3fdc92bc22867e6_Popup-magid-mostbet-partners-logo.png',
    category: 'Affiliate Network',
    promo: 'leadingcards',
    promoNote: 'during registration and get 200 bonus points in Mostbet Partners Store!',
    url: 'https://mostbet.partners/?utm_source=leadingcards',
    desc: `<p>Mostbet Partners is the official affiliate program of the betting company and online casino Mostbet.</p>
    <p><strong>Partnership with Mostbet Partners is:</strong></p>
    <ul role="list"><li>CPA payment models up to $120 and Revshare up to 50%</li><li>Flexible payout system for active partners</li><li>Wide range of GEOs: UZ, AZ, TR, BD, KZ, IN, PL, CZ</li><li>Free promotional materials</li><li>Own Store for gadgets or branded gifts</li></ul>`,
  },
  {
    id: 14,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b5f380a78b758f97f09a_Partner-adspower-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b5ff0443de4feb6f8902_Popup-magid-adspower-logo.png',
    category: 'Tools',
    promo: 'Leadingcards',
    promoNote: '10% off the first month, 10% off quarterly, 15% off semi-annual, 25% off annual',
    url: 'https://www.adspower.com/?source=LeadingCards',
    desc: `<p>AdsPower is an antidetect browser for traffic arbitrage/affiliate marketing.</p>
    <ul role="list"><li>AdsPower supports all platforms and all use cases</li><li>Free version and 3-day free trial of all plans</li><li>Chromium- and Firefox-based browsers</li><li>No-code automation tools</li><li>Seamless team collaboration with role assignment</li><li>Protect accounts from hijacking</li></ul>`,
  },
  {
    id: 15,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b64f9ad3f4c2f15f327e_Partner-dolphin-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b65178a2d627fa68ca73_Popup-magid-dolphin-logo.png',
    category: 'Tools',
    promo: 'Leadingcards',
    promoNote: 'Get 20% off',
    url: 'https://dolphin-anty.com/?utm_source=bloger&utm_medium=cpc&utm_campaign=leadingcards&utm_content=leadingcardsweb',
    desc: `<p>Dolphin Anty is the #1 anti-detect browser according to Affiliate Space Awards by Conversion Club.</p>
    <p><strong>This anti-detect browser creates unique and real prints that won't set off any alarms</strong></p>
    <ul role="list"><li>Multi-accounting</li><li>Browser Fingerprint Management</li><li>Proxy Manager</li><li>Cookie robot</li><li>User-Friendly Interface</li><li>Free Plan Available</li></ul>`,
  },
  {
    id: 16,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b6991b8d5c27a5bab0d3_octobrowser%201.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b69dbe0265cd734330bd_octobrowser%202.png',
    category: 'Tools',
    promo: 'LEADINGCARDS30',
    promoNote: '30% off your first purchase of any subscription',
    url: 'https://octobrowser.net/',
    desc: `<p>Octo Browser is a secure and efficient anti-detect browser for multi-accounting on any platform using a single device.</p>
    <p>Best digital fingerprint spoofing available on the market. Easily bypass the most advanced security systems.</p>
    <p>Your data is safe thanks to the hack-resistant architecture.</p>
    <p>Simple and convenient management of hundreds of accounts.</p>
    <p>Instant browser kernel updates.</p>
    <p>Stable software for enterprise-grade needs.</p>`,
  },
]

const CATEGORIES = ['All', 'Tools', 'Affiliate Network', 'Traffic Source']

export default function PartnerPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activePartner, setActivePartner] = useState(null)

  const handleOpenModal = (url) => {
    setModalUrl(url)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const filteredPartners = ALL_PARTNERS.filter((partner) => {
    const matchesCategory = activeCategory === 'All' || partner.category === activeCategory
    const matchesSearch = partner.promo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.promoNote.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="page-wrapper">
      <Navbar onOpenModal={handleOpenModal} />
      <main className="main">
        {/* Partner Header */}
        <header className="section-home-header">
          <div className="home-header_wrapper cc-partner u-position-relative u-stacking-context u-overflow-hidden">
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
              <div className="home-header_bg_shape u-cover u-select-none u-z-n1 "></div>
            </div>
            <div className="u-spacing-inline">
              <div className="container cc-1080">
                <div className="common-header_content u-display-flex u-text-center">
                  <h1 className="partner_header_title heading-h6 u-color-typography-25">
                    <strong>Our charging solutions come from trusted partners</strong>
                  </h1>
                  <p className="partner_header_text text-md">
                    UproasCards clients get more — our partners have lined up sweet deals for you. Trusted by the best in the niche!
                    <br />
                  </p>
                  <p className="partner_header_text text-md">
                    For PR activities: <a href="mailto:Partnerships@leadingcards.com"><strong>Partnerships@leadingcards.com</strong></a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Partners Section */}
        <section className="section-partners u-spacing-inline u-spacing-block-sm">
          <div className="container cc-1280">
            {/* Filter Form */}
            <div className="partner-filer_form-block w-form flex flex-col md:flex-row justify-between gap-4">
              <div className="blog-filter_block flex flex-wrap gap-2">
                <div
                  className={`blog-category-item cc-all ${activeCategory === 'All' ? 'is-list-active' : ''}`}
                  onClick={() => setActiveCategory('All')}
                >
                  <div>All</div>
                </div>
                <div className="blog-category-list-wrapper w-dyn-list">
                  <div role="list" className="blog-category-list w-dyn-items flex flex-wrap gap-2">
                    {CATEGORIES.filter(c => c !== 'All').map((category) => (
                      <div key={category} role="listitem" className="blog-category-list-item w-dyn-item">
                        <label className="blog-category-item w-radio text-lg">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom blog-category-item_button w-radio-input ${activeCategory === category ? 'w--redirected-checked' : ''}`}
                          ></div>
                          <span
                            className={`blog-category-item_text w-form-label u-select-none ${activeCategory === category ? 'is-list-active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                          >
                            {category}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="partner-filter_block is-search">
                <div className="partner-form-field-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/685d8b47e4fd914536ddba8e/685d8b47e4fd914536ddbb82_search-normal.png"
                    alt=""
                    className="partner-filter_form-icon"
                  />
                  <input
                    className="partner-filter_search w-input"
                    maxLength="256"
                    name="field"
                    placeholder="Search"
                    type="text"
                    id="field"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Partners Grid */}
            <div className="w-dyn-list">
              <div role="list" className="partners_grid w-dyn-items grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPartners.map((partner) => (
                  <div key={partner.id} role="listitem" className="w-dyn-item">
                    <button
                      data-id={partner.id}
                      className="partner-card"
                      onClick={() => setActivePartner(activePartner === partner.id ? null : partner.id)}
                      style={{ overflow: 'hidden' }}
                    >
                      <img src={partner.logo} loading="lazy" alt="" className="partners_logo u-select-none" />
                      <div className="u-hide">{partner.category}</div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Empty State */}
            {filteredPartners.length === 0 && (
              <div className="partner-filter_empty">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="partner-filter_empty-icon">
                  <g clipPath="url(#clip0_3876_454)">
                    <path d="M15.5003 14H14.7103L14.4303 13.73C15.4103 12.59 16.0003 11.11 16.0003 9.5C16.0003 5.91 13.0903 3 9.50027 3C6.08027 3 3.28027 5.64 3.03027 9H5.05027C5.30027 6.75 7.18027 5 9.50027 5C11.9903 5 14.0003 7.01 14.0003 9.5C14.0003 11.99 11.9903 14 9.50027 14C9.33027 14 9.17027 13.97 9.00027 13.95V15.97C9.17027 15.99 9.33027 16 9.50027 16C11.1103 16 12.5903 15.41 13.7303 14.43L14.0003 14.71V15.5L19.0003 20.49L20.4903 19L15.5003 14Z" fill="currentColor" />
                    <path d="M6.47031 10.82L4.00031 13.29L1.53031 10.82L0.820312 11.53L3.29031 14L0.820312 16.47L1.53031 17.18L4.00031 14.71L6.47031 17.18L7.18031 16.47L4.71031 14L7.18031 11.53L6.47031 10.82Z" fill="currentColor" />
                  </g>
                </svg>
                <div className="sub-heading-3 middle-text color-t-500">There are no available categories matching the current filters.</div>
                <button
                  onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                  className="button-primary w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden"
                >
                  <span>Reset filter</span>
                </button>
              </div>
            )}
          </div>
        </section>

        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <FormModal isOpen={modalOpen} onClose={handleCloseModal} url={modalUrl} />

      {/* Partner Popups */}
      {ALL_PARTNERS.map((partner) => (
        <div
          key={partner.id}
          data-id={partner.id}
          className={`partner-popup-card${activePartner === partner.id ? ' active' : ''}`}
          onClick={(e) => e.target === e.currentTarget && setActivePartner(null)}
        >
          <div className="partner-popup">
            <div className="partner-popup_header">
              <img src={partner.popupLogo} loading="lazy" alt="" className="partner-popup_logo" />
              <button type="button" className="partner-popup_close-button" onClick={() => setActivePartner(null)}>
                <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/686fa8ed9dda028edef7ce23_close.webp" loading="lazy" alt="" className="u-select-none" />
              </button>
            </div>
            <div className="partner-popup_content w-richtext" dangerouslySetInnerHTML={{ __html: partner.desc }} />
            <div className="partner-popup_cta">
              <div className="partner-popup_cta_left">
                <div className="partner-popup_cta_title-wrap">
                  <div className="partner-popup_cta_title">Promo code:</div>
                  {partner.promo ? (
                    <div className="partner-popup_promo-code">{partner.promo}</div>
                  ) : (
                    <div className="partner-popup_promo-code w-dyn-bind-empty"></div>
                  )}
                </div>
                <p className="partner-popup_note">{partner.promoNote || ''}</p>
              </div>
              <div className="partner-popup_right">
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary cc-popup w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden"
                >
                  <span>Get Bonus</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
