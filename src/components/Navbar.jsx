import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ onOpenModal, onOpenSignup }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const ratio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setScrolled(ratio > 0.01)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => document.body.classList.remove('no-scroll')
  }, [mobileOpen])

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={`navbar w-nav u-spacing-inline u-width-full u-position-absolute${scrolled ? ' cc-bg' : ''}`}
    >
      <div className="container cc-1136">
        <div className="navbar_wrapper">
          <div className="navbar_inner">
            {/* Desktop nav - must be first child (Webflow CSS grid positions via w-node- ID) */}
            <nav role="navigation" className="navbar_nav w-nav-menu">
              <ul role="list" className="navbar_nav_list u-list-unstyled">
                <li>
                  <Link to="/partner" className="navbar_nav_link w-inline-block">
                    <div className="navbar_link_text-wrap">
                      <span className="navbar_link_text">Our Partners</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="navbar_nav_link w-inline-block">
                    <div className="navbar_link_text-wrap">
                      <span className="navbar_link_text">Blog</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <a href="#section-contact" className="navbar_nav_link w-inline-block">
                    <div className="navbar_link_text-wrap">
                      <span className="navbar_link_text">Contact us</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="navbar_nav_buttons u-hide-desktop">
                <a href="https://t.me/telegram/ZG_Mine" className="button-primary cc-secondary cc-nav w-inline-block">
                  <span>Sign in</span>
                </a>
                <button
                  onClick={onOpenSignup}
                  className="button-primary cc-ghost cc-nav w-inline-block"
                >
                  <span>Sign up</span>
                </button>
              </div>
            </nav>

            <Link
              to="/"
              aria-label="Leading Card"
              id="w-node-_8d013b26-2e9b-e72a-1ab7-707d68aae2fb-68aae2d4"
              className="navbar_brand w-inline-block w--current"
            >
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="196" height="30" viewBox="0 0 196 30" fill="none" className="navbar_brand_logo">
                <g>
                  <path d="M16.7093 22.9768L12.6585 15.9277L8.35278 8.42978L10.3781 4.90046L13.1948 -6.10352e-05L17.1032 6.80967L15.4752 9.64465L13.1948 5.67602L11.6122 8.42891L14.0228 12.6255L18.3372 20.1392H21.4936L19.6499 16.9164L21.2779 14.0814L26.3872 22.9776H16.7093V22.9768Z" fill="#8C3CFC" />
                  <path d="M-0.00012207 22.9768L6.78253 11.1696L8.41051 14.0045L6.95197 16.5487L4.8873 20.1357H11.9276L13.5591 22.9768H-0.00012207Z" fill="#8C3CFC" />
                </g>
                <text
                  x="30"
                  y="22"
                  fontSize="28"
                  fontWeight="500"
                  fill="currentColor"
                  letterSpacing="-0.2"
                >UproasCards</text>
              </svg>
            </Link>

            {/* Mobile buttons - hamburger + sign in/up */}
            <div className="navbar_nav_buttons cc-mobile">
              <div
                className={`navbar_menu-icon w-nav-button${mobileOpen ? ' w--open' : ''}`}
                style={{ WebkitUserSelect: 'text' }}
                aria-label="menu"
                role="button"
                tabIndex={0}
                aria-controls="w-nav-overlay-0"
                aria-haspopup="menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                onKeyDown={(e) => e.key === 'Enter' && setMobileOpen(!mobileOpen)}
              >
                <img
                  src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/689d9f9a9524189dc6004880_menu.svg"
                  loading="lazy"
                  alt=""
                  className="u-select-none"
                />
              </div>
              <a href="https://t.me/telegram/ZG_Mine#" className="button-primary cc-secondary u-hide-tablet w-inline-block">
                <span>Sign in</span>
              </a>
              <button
                onClick={onOpenSignup}
                className="button-primary cc-ghost u-hide-tablet w-inline-block"
              >
                <span>Sign up</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay - always rendered, toggled via styles */}
      <div
        className="w-nav-overlay"
        data-wf-ignore=""
        id="w-nav-overlay-0"
        style={mobileOpen ? { height: '100vh', display: 'block' } : {}}
      >
        <nav
          role="navigation"
          className={`navbar_nav w-nav-menu${mobileOpen ? '' : ''}`}
          {...(mobileOpen ? { 'data-nav-menu-open': '' } : {})}
          style={{
            transform: mobileOpen ? 'translateY(0px)' : 'translateY(-100%)',
            transition: 'all, transform 400ms',
          }}
        >
          <ul role="list" className="navbar_nav_list u-list-unstyled">
            <li>
              <Link to="/partner" className="navbar_nav_link w-inline-block" onClick={() => setMobileOpen(false)}>
                <div className="navbar_link_text-wrap"><span className="navbar_link_text">Our Partners</span></div>
              </Link>
            </li>
            <li>
              <Link to="/blog" className="navbar_nav_link w-inline-block" onClick={() => setMobileOpen(false)}>
                <div className="navbar_link_text-wrap"><span className="navbar_link_text">Blog</span></div>
              </Link>
            </li>
            <li>
              <a href="#section-contact" className="navbar_nav_link w-inline-block" onClick={() => setMobileOpen(false)}>
                <div className="navbar_link_text-wrap"><span className="navbar_link_text">Contact us</span></div>
              </a>
            </li>
          </ul>
          <div className="navbar_nav_buttons u-hide-desktop">
            <a href="https://t.me/telegram/ZG_Mine#" className="button-primary cc-secondary cc-nav w-inline-block">
              <span>Sign in</span>
            </a>
            <button
              onClick={() => { setMobileOpen(false); onOpenSignup(); }}
              className="button-primary cc-ghost cc-nav w-inline-block"
            >
              <span>Sign up</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}
