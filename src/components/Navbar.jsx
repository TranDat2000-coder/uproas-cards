import { useState, useEffect } from 'react'

const TYPEFORM_URL = 'https://form.typeform.com/to/e4ZYOiQe'

export default function Navbar({ onOpenModal }) {
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
            <nav role="navigation" className="navbar_nav w-nav-menu">
              <ul role="list" className="navbar_nav_list u-list-unstyled">
                <li>
                  <a href="/partner" className="navbar_nav_link w-inline-block">
                    <div className="navbar_link_text-wrap">
                      <span className="navbar_link_text">Our Partners</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/blog" className="navbar_nav_link w-inline-block">
                    <div className="navbar_link_text-wrap">
                      <span className="navbar_link_text">Blog</span>
                    </div>
                  </a>
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
                <a href="https://app.leadingcards.media/auth/login" className="button-primary cc-secondary cc-nav w-inline-block">
                  <span>Sign in</span>
                </a>
                <a
                  href={TYPEFORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => { e.preventDefault(); onOpenModal(TYPEFORM_URL) }}
                  className="button-primary cc-ghost cc-nav w-inline-block"
                >
                  <span>Sign up</span>
                </a>
              </div>
            </nav>
            <a
              aria-label="Leading Card"
              href="/"
              className="navbar_brand w-inline-block w--current"
            >
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="196" height="30" viewBox="0 0 196 30" fill="none" className="navbar_brand_logo">
                <g>
                  <path d="M16.7093 22.9768L12.6585 15.9277L8.35278 8.42978L10.3781 4.90046L13.1948 -6.10352e-05L17.1032 6.80967L15.4752 9.64465L13.1948 5.67602L11.6122 8.42891L14.0228 12.6255L18.3372 20.1392H21.4936L19.6499 16.9164L21.2779 14.0814L26.3872 22.9776H16.7093V22.9768Z" fill="#8C3CFC" />
                  <path d="M-0.00012207 22.9768L6.78253 11.1696L8.41051 14.0045L6.95197 16.5487L4.8873 20.1357H11.9276L13.5591 22.9768H-0.00012207Z" fill="#8C3CFC" />
                </g>
                <g>
                  <path d="M32.7219 22.9768V2.60962H36.0827V20.0475H44.0732V22.9768H32.7219Z" fill="currentColor" />
                  <path d="M51.8717 23.1602C49.6018 23.1602 47.717 22.4554 46.4218 21.1226C45.1458 19.8108 44.4716 17.9225 44.4716 15.664C44.4716 11.0735 47.2637 8.10663 51.5843 8.10663C55.7818 8.10663 58.5286 10.8717 58.5819 15.1513C58.5819 15.4849 58.5653 15.8081 58.5329 16.105H47.7459V16.8448C47.8419 19.3094 49.393 20.9025 51.6996 20.9025C53.4429 20.9025 54.691 20.0955 55.1835 18.6728H58.2404C57.9399 19.8457 57.2858 20.892 56.3609 21.6641C55.1888 22.6423 53.6368 23.1593 51.8726 23.1593L51.8717 23.1602ZM51.6132 10.3032C49.5765 10.3032 48.0935 11.6508 47.8367 13.7356L47.7659 14.3067H55.5329L55.4456 13.7224C55.1259 11.5818 53.6927 10.304 51.6132 10.304V10.3032Z" fill="currentColor" />
                  <path d="M64.7724 23.1602C63.2658 23.1602 62.002 22.7864 61.1173 22.0781C60.216 21.3567 59.7583 20.3392 59.7583 19.0536C59.7583 17.5575 60.2753 16.3959 61.2954 15.602C62.3741 14.7627 63.9785 14.3365 66.0658 14.3365H69.4729V13.0674C69.4729 11.3242 68.2772 10.2412 66.3532 10.2412C64.7532 10.2412 63.5514 10.9827 63.1662 12.1652H60.1845C60.7077 9.68047 63.1077 8.10577 66.4685 8.10577C69.2283 8.10577 72.5175 9.00885 72.5175 13.3111V18.8693C72.5175 20.1732 73.2668 20.3488 73.9262 20.3514V22.975H72.3323C71.4712 22.975 70.8554 22.7803 70.5017 22.3977C70.203 22.0737 70.0642 21.5925 70.0773 20.9261L70.1122 19.1112L69.1995 20.6457C68.1803 22.3602 66.7741 23.1584 64.7724 23.1584V23.1602ZM66.037 16.1967C64.0658 16.1967 62.8885 17.1505 62.8885 18.7479C62.8885 20.1497 63.9322 21.0545 65.5488 21.0545C67.8999 21.0545 69.4406 19.4684 69.4738 17.0142V16.1967H66.0379H66.037Z" fill="currentColor" />
                  <path d="M80.5411 23.1602C78.6974 23.1602 77.1157 22.4676 75.9672 21.1567C74.7768 19.7986 74.1471 17.878 74.1471 15.6029C74.1471 13.3277 74.7751 11.4849 75.9637 10.125C77.1017 8.8237 78.7166 8.10666 80.5123 8.10666C82.2416 8.10666 83.6529 8.77916 84.5936 10.0517L85.4434 11.2002V2.60962H88.5447V22.9768H85.8757L85.3464 20.1243L84.7062 21.0047C83.666 22.4344 82.2651 23.1602 80.5411 23.1602ZM81.4319 10.608C78.9812 10.608 77.3349 12.6273 77.3349 15.6326C77.3349 18.6379 78.9812 20.6571 81.4319 20.6571C83.8826 20.6571 85.5001 18.6501 85.5001 15.6623C85.5001 12.6386 83.8652 10.6071 81.4319 10.6071V10.608Z" fill="currentColor" />
                  <path d="M90.1935 22.9768V8.29007H93.3237V22.9768H90.1935ZM91.7586 5.60006C90.6861 5.60006 89.8773 4.77996 89.8773 3.6926C89.8773 2.58778 90.6861 1.75458 91.7586 1.75458C92.8311 1.75458 93.6398 2.58778 93.6398 3.6926C93.6398 4.77996 92.8311 5.60006 91.7586 5.60006Z" fill="currentColor" />
                  <path d="M105.379 22.9768V15.2063C105.379 13.1233 104.778 10.6394 101.914 10.6394C99.5467 10.6394 98.1336 12.4377 98.1336 15.4509V22.9777H95.0322V8.29093H97.703L98.1973 10.8788L98.8314 10.0621C99.8664 8.72937 101.203 8.1084 103.035 8.1084C107.536 8.1084 108.481 11.7364 108.481 14.7801V22.9785H105.379V22.9768Z" fill="currentColor" />
                  <path d="M116.883 29.2677C114.931 29.2677 113.288 28.8005 112.131 27.9157C111.092 27.121 110.471 26.0266 110.282 24.6589H113.49C114.021 26.1795 115.324 27.0101 117.2 27.0101C119.804 27.0101 121.298 25.5017 121.298 22.8711V19.7689L120.449 20.9095C119.474 22.2213 118.081 22.886 116.31 22.886H116.251C114.428 22.886 112.86 22.2004 111.717 20.9034C110.538 19.5671 109.916 17.692 109.916 15.4815C109.916 13.2709 110.544 11.4176 111.731 10.0744C112.869 8.78615 114.485 8.07697 116.281 8.07697C118.076 8.07697 119.471 8.8106 120.5 10.2587L121.165 11.1932L121.627 8.29094H124.313V23.0248C124.313 27.1096 121.745 29.2686 116.884 29.2686L116.883 29.2677ZM117.2 10.5469C114.749 10.5469 113.103 12.5417 113.103 15.5112C113.103 18.4806 114.749 20.4449 117.2 20.4449C119.65 20.4449 121.268 18.4745 121.268 15.5417C121.268 12.6089 119.633 10.5469 117.2 10.5469Z" fill="currentColor" />
                  <path d="M134.861 23.1602C129.233 23.1602 125.737 19.1881 125.737 12.7932C125.737 9.68573 126.606 7.0752 128.249 5.24373C129.903 3.4009 132.279 2.42621 135.119 2.42621C139.398 2.42621 142.523 5.07778 143.22 9.23419H139.769C139.091 6.75904 137.291 5.29438 134.89 5.29438C133.152 5.29438 131.692 6.03675 130.669 7.44115C129.697 8.77567 129.183 10.6264 129.183 12.7932C129.183 14.9601 129.69 16.7942 130.649 18.1304C131.664 19.5444 133.111 20.2912 134.832 20.2912C137.269 20.2912 139.09 18.8274 139.769 16.3513H143.194C142.878 18.2693 142.008 19.906 140.656 21.1086C139.147 22.4501 137.144 23.1593 134.86 23.1593L134.861 23.1602Z" fill="currentColor" />
                  <path d="M148.93 23.1602C147.424 23.1602 146.16 22.7864 145.275 22.0781C144.374 21.3567 143.916 20.3392 143.916 19.0536C143.916 17.5575 144.433 16.3959 145.453 15.602C146.532 14.7627 148.136 14.3365 150.224 14.3365H153.631V13.0674C153.631 11.3242 152.435 10.2412 150.511 10.2412C148.912 10.2412 147.709 10.9827 147.324 12.1652H144.342C144.866 9.68047 147.266 8.10577 150.626 8.10577C153.386 8.10577 156.675 9.00885 156.675 13.3111V18.8693C156.675 20.1732 157.425 20.3488 158.084 20.3514V22.975H156.49C155.629 22.975 155.013 22.7803 154.66 22.3977C154.361 22.0737 154.222 21.5925 154.235 20.9261L154.27 19.1112L153.357 20.6457C152.338 22.3602 150.932 23.1584 148.931 23.1584L148.93 23.1602ZM150.195 16.1967C148.224 16.1967 147.046 17.1505 147.046 18.7479C147.046 20.1497 148.09 21.0545 149.707 21.0545C152.058 21.0545 153.599 19.4684 153.632 17.0142V16.1967H150.196H150.195Z" fill="currentColor" />
                  <path d="M159.29 22.9768V8.29006H162.092L162.611 11.5556L163.274 10.3984C163.871 9.35558 164.796 8.28918 167.122 8.28918H167.336V11.1879H166.201C163.744 11.1879 162.392 12.8203 162.392 15.7854V22.9759H159.29V22.9768Z" fill="currentColor" />
                  <path d="M174.015 23.1602C172.171 23.1602 170.59 22.4676 169.441 21.1567C168.251 19.7986 167.621 17.878 167.621 15.6029C167.621 13.3277 168.249 11.4849 169.438 10.125C170.576 8.8237 172.191 8.10666 173.986 8.10666C175.716 8.10666 177.127 8.77916 178.068 10.0517L178.917 11.2002V2.60962H182.019V22.9768H179.35L178.82 20.1243L178.18 21.0047C177.14 22.4344 175.739 23.1602 174.015 23.1602ZM174.906 10.608C172.455 10.608 170.809 12.6273 170.809 15.6326C170.809 18.6379 172.455 20.6571 174.906 20.6571C177.357 20.6571 178.974 18.6501 178.974 15.6623C178.974 12.6744 177.339 10.6071 174.906 10.6071V10.608Z" fill="currentColor" />
                  <path d="M189.749 23.1602C186.07 23.1602 183.616 21.4912 183.207 18.7653H186.137C186.501 20.209 187.854 21.0859 189.778 21.0859C192.671 21.0859 192.984 19.5584 192.984 18.9007C192.984 17.223 191.649 17.0361 189.438 16.726L189.18 16.6893C187.737 16.5103 186.118 16.2369 184.998 15.56C183.956 14.9303 183.47 14.022 183.47 12.7006C183.47 11.3792 184.004 10.2001 185.014 9.37653C186.057 8.52499 187.527 8.0752 189.263 8.0752H189.344C191.222 8.0752 192.81 8.50577 193.942 9.32063C194.905 10.0141 195.509 10.9792 195.709 12.1347H192.757C192.418 10.8953 191.187 10.1189 189.491 10.1189C187.614 10.1189 186.4 10.9521 186.4 12.243C186.4 12.9984 186.788 13.5329 187.553 13.8334C188.152 14.0683 188.969 14.1731 190.004 14.3059L190.22 14.3338C193.788 14.7199 196.001 15.5618 196.001 18.5645C196.001 19.9086 195.422 21.0518 194.327 21.8693C193.198 22.713 191.615 23.1593 189.751 23.1593L189.749 23.1602Z" fill="currentColor" />
                </g>
              </svg>
            </a>
            <div className="navbar_nav_buttons cc-mobile">
              <div
                className={`navbar_menu-icon w-nav-button${mobileOpen ? ' w--open' : ''}`}
                style={{ WebkitUserSelect: 'text' }}
                aria-label="menu"
                role="button"
                tabIndex={0}
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
              <a href="https://app.leadingcards.media/auth/login" className="button-primary cc-secondary u-hide-tablet w-inline-block">
                <span>Sign in</span>
              </a>
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => { e.preventDefault(); onOpenModal(TYPEFORM_URL) }}
                className="button-primary cc-ghost u-hide-tablet w-inline-block"
              >
                <span>Sign up</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0">
        {mobileOpen && (
          <nav role="navigation" className="navbar_nav w-nav-menu w--open" style={{ transform: 'translateY(0px)', transition: 'transform 400ms ease 0s' }}>
            <ul role="list" className="navbar_nav_list u-list-unstyled">
              <li>
                <a href="/partner" className="navbar_nav_link w-inline-block" onClick={() => setMobileOpen(false)}>
                  <div className="navbar_link_text-wrap"><span className="navbar_link_text">Our Partners</span></div>
                </a>
              </li>
              <li>
                <a href="/blog" className="navbar_nav_link w-inline-block" onClick={() => setMobileOpen(false)}>
                  <div className="navbar_link_text-wrap"><span className="navbar_link_text">Blog</span></div>
                </a>
              </li>
              <li>
                <a href="#section-contact" className="navbar_nav_link w-inline-block" onClick={() => setMobileOpen(false)}>
                  <div className="navbar_link_text-wrap"><span className="navbar_link_text">Contact us</span></div>
                </a>
              </li>
            </ul>
            <div className="navbar_nav_buttons u-hide-desktop">
              <a href="https://app.leadingcards.media/auth/login" className="button-primary cc-secondary cc-nav w-inline-block"><span>Sign in</span></a>
              <a href={TYPEFORM_URL} target="_blank" rel="noreferrer" onClick={(e) => { e.preventDefault(); onOpenModal(TYPEFORM_URL); setMobileOpen(false) }} className="button-primary cc-ghost cc-nav w-inline-block"><span>Sign up</span></a>
            </div>
          </nav>
        )}
      </div>
    </div>
  )
}
