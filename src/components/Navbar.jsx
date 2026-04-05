import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onOpenModal, onOpenSignup }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ratio =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setScrolled(ratio > 0.01);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [mobileOpen]);

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={`navbar w-nav u-spacing-inline u-width-full u-position-absolute${scrolled ? " cc-bg" : ""}`}
    >
      <div className="container cc-1136">
        <div className="navbar_wrapper">
          <div className="navbar_inner">
            {/* Desktop nav - must be first child (Webflow CSS grid positions via w-node- ID) */}
            <nav role="navigation" className="navbar_nav w-nav-menu">
              <ul role="list" className="navbar_nav_list u-list-unstyled">
                <li>
                  <Link
                    to="/partner"
                    className="navbar_nav_link w-inline-block"
                  >
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
                  <a
                    href="#section-contact"
                    className="navbar_nav_link w-inline-block"
                  >
                    <div className="navbar_link_text-wrap">
                      <span className="navbar_link_text">Contact us</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="navbar_nav_buttons u-hide-desktop">
                <a
                  href="https://t.me/telegram/ZG_Mine"
                  className="button-primary cc-secondary cc-nav w-inline-block"
                >
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
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1px",
                textDecoration: "none",
              }}
            >
              <img
                src="/Logo-uproadcards.svg"
                alt=""
                style={{
                  display: "block",
                  height: "28px",
                  width: "auto",
                  flexShrink: 0,
                }}
              />
              <span
                className="navbar_brand_logo"
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                  letterSpacing: "-0.2px",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                UproasCards
              </span>
            </Link>

            {/* Mobile buttons - hamburger + sign in/up */}
            <div className="navbar_nav_buttons cc-mobile">
              <div
                className={`navbar_menu-icon w-nav-button${mobileOpen ? " w--open" : ""}`}
                style={{ WebkitUserSelect: "text" }}
                aria-label="menu"
                role="button"
                tabIndex={0}
                aria-controls="w-nav-overlay-0"
                aria-haspopup="menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                onKeyDown={(e) =>
                  e.key === "Enter" && setMobileOpen(!mobileOpen)
                }
              >
                <img
                  src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/689d9f9a9524189dc6004880_menu.svg"
                  loading="lazy"
                  alt=""
                  className="u-select-none"
                />
              </div>
              <a
                href="https://t.me/telegram/ZG_Mine#"
                className="button-primary cc-secondary u-hide-tablet w-inline-block"
              >
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
        style={mobileOpen ? { height: "100vh", display: "block" } : {}}
      >
        <nav
          role="navigation"
          className={`navbar_nav w-nav-menu${mobileOpen ? "" : ""}`}
          {...(mobileOpen ? { "data-nav-menu-open": "" } : {})}
          style={{
            transform: mobileOpen ? "translateY(0px)" : "translateY(-100%)",
            transition: "all, transform 400ms",
          }}
        >
          <ul role="list" className="navbar_nav_list u-list-unstyled">
            <li>
              <Link
                to="/partner"
                className="navbar_nav_link w-inline-block"
                onClick={() => setMobileOpen(false)}
              >
                <div className="navbar_link_text-wrap">
                  <span className="navbar_link_text">Our Partners</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="navbar_nav_link w-inline-block"
                onClick={() => setMobileOpen(false)}
              >
                <div className="navbar_link_text-wrap">
                  <span className="navbar_link_text">Blog</span>
                </div>
              </Link>
            </li>
            <li>
              <a
                href="#section-contact"
                className="navbar_nav_link w-inline-block"
                onClick={() => setMobileOpen(false)}
              >
                <div className="navbar_link_text-wrap">
                  <span className="navbar_link_text">Contact us</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navbar_nav_buttons u-hide-desktop">
            <a
              href="https://t.me/telegram/ZG_Mine#"
              className="button-primary cc-secondary cc-nav w-inline-block"
            >
              <span>Sign in</span>
            </a>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenSignup();
              }}
              className="button-primary cc-ghost cc-nav w-inline-block"
            >
              <span>Sign up</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
