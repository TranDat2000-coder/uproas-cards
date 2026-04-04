import { useState } from 'react'
import { Link } from 'react-router-dom'

const PARTNERS = [
  {
    id: 16,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b6991b8d5c27a5bab0d3_octobrowser%201.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b69dbe0265cd734330bd_octobrowser%202.png',
    promo: 'LEADINGCARDS30',
    promoNote: '30% off your first purchase of any subscription',
    url: 'https://octobrowser.net/',
    desc: `<p>Octo Browser is a secure and efficient anti-detect browser for multi-accounting on any platform using a single device.</p>
    <p>Best digital fingerprint spoofing available on the market. Easily bypass the most advanced security systems.</p>
    <p>Your data is safe thanks to the hack-resistant architecture we designed from the start.</p>
    <p>Simple and convenient management of hundreds of accounts.</p>
    <p>Instant browser kernel updates.</p>
    <p>Stable software for enterprise-grade needs.</p>`,
  },
  {
    id: 15,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b64f9ad3f4c2f15f327e_Partner-dolphin-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b65178a2d627fa68ca73_Popup-magid-dolphin-logo.png',
    promo: 'Leadingcards',
    promoNote: 'Get 20% off',
    url: 'https://dolphin-anty.com/?utm_source=bloger&utm_medium=cpc&utm_campaign=leadingcards&utm_content=leadingcardsweb',
    desc: `<p>Dolphin Anty is the #1 anti-detect browser according to Affiliate Space Awards by Conversion Club.</p>
    <p><strong>This anti-detect browser creates unique and real prints that won't set off any alarms with antifraud systems</strong></p>
    <ul role="list"><li>Multi-accounting</li><li>Browser Fingerprint Management</li><li>Proxy Manager</li><li>Cookie robot</li><li>User-Friendly Interface</li><li>Free Plan Available</li></ul>`,
  },
  {
    id: 14,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b5f380a78b758f97f09a_Partner-adspower-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b5ff0443de4feb6f8902_Popup-magid-adspower-logo.png',
    promo: 'Leadingcards',
    promoNote: '10-25% off various plans',
    url: 'https://www.adspower.com/?source=LeadingCards',
    desc: `<p>AdsPower is an antidetect browser for traffic arbitrage/affiliate marketing.</p>
    <ul role="list"><li>AdsPower supports all platforms and all use cases</li><li>Free version and 3-day free trial</li><li>Chromium- and Firefox-based browsers</li><li>No-code automation tools</li><li>Seamless team collaboration</li><li>Protect accounts from hijacking</li></ul>`,
  },
  {
    id: 13,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b5ac8ed91fa2ab5f1f26_Partner-mostbet-partners-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b5b7c3fdc92bc22867e6_Popup-magid-mostbet-partners-logo.png',
    promo: 'leadingcards',
    promoNote: 'during registration and get 200 bonus points in Mostbet Partners Store!',
    url: 'https://mostbet.partners/?utm_source=leadingcards',
    desc: `<p>Mostbet Partners is the official affiliate program of the betting company and online casino Mostbet.</p>
    <p><strong>Partnership with Mostbet Partners is:</strong></p>
    <ul role="list"><li>CPA payment models up to $120 and Revshare up to 50%</li><li>Flexible payout system for active partners</li><li>Wide range of GEOs: UZ, AZ, TR, BD, KZ, IN, PL, CZ</li><li>Free promotional materials</li></ul>`,
  },
  {
    id: 12,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b562b25c5d2be5f6f53b_Partner-adxad-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b56ff52d0b9f7fbb3458_Popup-magid-adxad-logo.png',
    promo: 'LEADINGCARDS5',
    promoNote: "when you sign up and you'll get your bonus.",
    url: 'https://td.adxad.com/auth/login?return=%2Fdesk%2Fcampaigns%3Futm_source%3Dleadingcards%26utm_medium%3Dpr%26utm_campaign%3D042023%26lang%3Den&lang=en',
    desc: `<p>ADxAD provides traffic for several mainstream verticals: Dating, Gambling, Gaming, Nutra, Betting, Crypto and others.</p>
    <p><strong>Everad in numbers:</strong></p>
    <ul role="list"><li>HQ traffic</li><li>WW GEOs</li><li>Pops, native, display, banners</li><li>CPM, CPC</li><li>Multi-language support</li></ul>`,
  },
  {
    id: 11,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b4f460944605a0415ff8_Partner-everad-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b505130e2a54a061654a_Popup-everad-logo.png',
    promo: "Hi! I'm from Leading Cards",
    promoNote: 'to your manager and get additional +5$ for the best Everad offers and top GEOs!',
    url: 'https://everad.com/?utm_source=cross-promo--LeadingCards-dashboard',
    desc: `<p>Everad — is a direct nutra advertiser with its own R&D, in-house offers, CPA Network, call centers and delivery.</p>
    <p><strong>Everad in numbers:</strong></p>
    <ul role="list"><li>400+ own offers</li><li>45+ countries in Europe, Latam and Asia</li><li>200К+ affiliates</li><li>10 years on the market</li><li>Payouts up to $49</li></ul>`,
  },
  {
    id: 10,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b4acd5c2daf5cba04078_Partner-clickadilla-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b4bbe2e41fa1b589b7b1_Popup-magid-clickadilla-logo.png',
    promo: 'LEADINGCARDS20',
    promoNote: 'The promo code is active till the end of 2023.',
    url: 'https://app.clickadilla.com/register/?ref=9iBwTZBT&utm_source=promo&utm_medium=LeadingCards',
    desc: `<p>ClickAdilla is a high-technology self-serve ad network platform.</p>
    <p><strong>Key features of ClickAdilla:</strong></p>
    <ul role="list"><li>4,5 B of everyday traffic</li><li>240+ GEOs</li><li>13 Ad Formats</li><li>User-friendly interface in 5 languages</li></ul>`,
  },
  {
    id: 9,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b45cd8e8fe9909f77263_Partner-admobispy-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b468a64388e37af3b102_Popup-magid-admobispy-logo.png',
    promo: 'UproasCards',
    promoNote: '-30% OFF: powerful analysis competitors ads',
    url: 'https://admobispy.com/login',
    desc: `<p>Admobispy it's a tool for monitoring and analyzing mobile advertising.</p>
    <p><strong>Your best opportunities with Admobispy:</strong></p>
    <ul role="list"><li>Search the most popular combinations of competitors</li><li>Find which offers they promote</li><li>Detailed analysis every ad and landing page</li><li>Download all creatives and landing pages in one click</li></ul>`,
  },
  {
    id: 8,
    logo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b4121d1acee0832f108f_Partner-primeads-logo.png',
    popupLogo: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b41f4600b3080cb5ee78_Popup-magid-primeads-logo.png',
    promo: 'UproasCards',
    promoNote: 'to get +25% to your commission in the exclusive PrimeXBT revenue share offer',
    url: 'https://primeads.io/',
    desc: `<p>Global Affiliate Network for web 3.0 and crypto projects.</p>
    <ul role="list"><li>20 000 crypto affiliates</li><li>60+ crypto offers (GameFi, Dex, Cex and much more)</li><li>10+ Exclusive offers</li><li>$10m paid to publishers to date</li><li>Weekly payouts</li></ul>`,
  },
]

export default function PartnersSection() {
  const [activePartner, setActivePartner] = useState(null)

  return (
    <section className="section-partners cc-home u-spacing-inline u-spacing-block-sm">
      <div className="container cc-1280">
        <div style={{ marginBottom: '3.75rem' }} className="section-header">
          <div>
            <h2 className="section-title heading-h2 u-text-color-dark u-text-center">
              <div>
                <span className="section-title-text u-block-moible">Our charging solutions come from</span>
                <span className="section-title-text cc-gradient">trusted</span>
                <span className="section-title-text">partners</span>
              </div>
            </h2>
          </div>
          <p className="section-text heading-s2 u-text-center u-weight-500" style={{ maxWidth: '52ch' }}>
            UproasCards clients get more — our partners have lined up sweet deals for you. Trusted by the best in the niche!
          </p>
        </div>

        <div className="w-dyn-list">
          <div role="list" className="partners_grid cc-home w-dyn-items">
            {PARTNERS.map((partner) => (
              <div key={partner.id} role="listitem" className="partners_grid_item w-dyn-item">
                <button
                  data-id={partner.id}
                  className="partner-card cc-white"
                  onClick={() => setActivePartner(activePartner === partner.id ? null : partner.id)}
                  style={{ borderRadius: '20px', overflow: 'hidden' }}
                >
                  <img src={partner.logo} loading="lazy" alt="" className="partners_logo u-select-none" />
                </button>
                <div data-id={partner.id} className={`partner-popup-card${activePartner === partner.id ? ' active' : ''}`}>
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
                          <div className="partner-popup_promo-code">{partner.promo}</div>
                        </div>
                        <p className="partner-popup_note">{partner.promoNote}</p>
                      </div>
                      <div className="partner-popup_right">
                        <a href={partner.url} target="_blank" rel="noreferrer" className="button-primary cc-popup w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden">
                          <span>Get bonus</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="partners_all-button u-display-flex">
          <Link to="/partner" className="button-primary cc-black w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden">
            <span>More Partners</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
