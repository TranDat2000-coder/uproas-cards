import { Link } from 'react-router-dom'

const FOOTER_SOCIALS = [
  {
    href: 'https://www.facebook.com/LeadingCards?locale=uk_UA',
    src: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/6859a1b78ea1c5e76e3c80f8_d757c96766c3ea81857622f3487cf577_Facebook.webp',
    alt: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/leadingcards.media/',
    src: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/6859a1b7636f74b3000a1918_65d09cc111d93a99caa8d4eea3563dde_Instagram.webp',
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/unavailable/',
    src: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/6859a1b777db08479b8f4185_d01f97baa5835e76352c1d998ba9ee5b_Linkedin.webp',
    alt: 'Linkedin',
  },
  {
    href: 'https://t.me/telegram/ZG_Mine#',
    src: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/6859a1b7763790da7eabc642_eefeb9a88ac35b1d5cf67d3d97c96b87_Telegram.webp',
    alt: 'Telegram',
  },
]

export default function Footer() {
  return (
    <footer className="footer u-spacing-inline">
      <div className="container cc-1072">
        <div className="footer_wrapper u-position-relative">
          <div className="footer_vl u-position-absolute u-select-none" />
          <div className="footer_vl cc-end u-position-absolute u-select-none" />
          <div className="footer_wrapper_item">
            <div className="container cc-940">
              <div className="footer_top">
                <Link to="/" className="w-inline-block w--current">
                  {/* <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/682e3a1ae025d0ef9838436b_leading-cards.svg" loading="lazy" width="196" height="30" alt="Leading Cards" /> */}
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
                </Link>
                <ul role="list" className="footer_top_list u-list-unstyled">
                  <li>
                    <Link to="/blog" className="footer_top_link w-inline-block">
                      <div className="navbar_link_text-wrap"><span className="navbar_link_text cc-footer">Blog</span></div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/partner" className="footer_top_link w-inline-block">
                      <div className="navbar_link_text-wrap"><span className="navbar_link_text cc-footer">Our partners</span></div>
                    </Link>
                  </li>
                  <li>
                    <a href="#section-contact" className="footer_top_link w-inline-block">
                      <div className="navbar_link_text-wrap"><span className="navbar_link_text cc-footer">Contact us</span></div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer_hr u-position-relative u-select-none">
            <div className="footer_hr_dot u-position-absolute" />
            <div className="footer_hr_dot cc-2 u-position-absolute" />
            <div className="footer_hr_dot cc-3 u-position-absolute" />
            <div className="footer_hr_dot cc-4 u-position-absolute" />
            <div className="footer_hr_dot cc-5 u-position-absolute" />
          </div>
          <div className="footer_wrapper_item">
            <div className="container cc-940">
              <div className="footer_bottom">
                <p>© UproasCards 2025</p>
                <ul role="list" className="footer_top_list u-list-unstyled">
                  <li>
                    <a href="/privacy-policy" className="footer_top_link w-inline-block">
                      <div className="navbar_link_text-wrap"><span className="navbar_link_text cc-footer">Privacy Policy</span></div>
                    </a>
                  </li>
                  <li>
                    <a href="/terms-conditions" className="footer_top_link w-inline-block">
                      <div className="navbar_link_text-wrap"><span className="navbar_link_text cc-footer">Terms of Condition</span></div>
                    </a>
                  </li>
                  <li>
                    <a href="/kyc-aml-policy" className="footer_top_link w-inline-block">
                      <div className="navbar_link_text-wrap"><span className="navbar_link_text cc-footer">KYC &amp; AML Policy</span></div>
                    </a>
                  </li>
                </ul>
                <ul role="list" className="cta-card_list u-list-unstyled">
                  {FOOTER_SOCIALS.map((s) => (
                    <li key={s.alt}>
                      <a href={s.href} target="_blank" rel="noreferrer" className="cta-card_list_link w-inline-block">
                        <img src={s.src} loading="lazy" width="50" height="50" alt={s.alt} className="cta-card_list_image cc-small u-select-none u-ratio-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
