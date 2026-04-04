import { useEffect, useRef } from 'react'

const TYPEFORM_URL = 'https://form.typeform.com/to/e4ZYOiQe'
const CARD_IMAGES = [
  'src/img/Banking-1.svg',
  'src/img/Banking-2.svg',
  'src/img/Banking-3.1.svg',
  'src/img/Banking-4.1.svg',
]


export default function HeroHeader({ onOpenSignup }) {
  const sliderRef = useRef(null)

  useEffect(() => {
    const initSplide = () => {
      if (!sliderRef.current) return
      // Wait for Splide global to be available
      if (typeof window.Splide === 'undefined') {
        setTimeout(initSplide, 200)
        return
      }
      try {
        const splide = new window.Splide(sliderRef.current, {
          pagination: false,
          arrows: false,
          autoWidth: true,
          type: 'loop',
          drag: 'free',
          autoScroll: {
            speed: 1,
          },
        })
        // AutoScroll extension is at window.splide.Extensions.AutoScroll
        const AutoScroll = window.splide?.Extensions?.AutoScroll
        if (AutoScroll) {
          splide.mount({ AutoScroll })
        } else {
          splide.mount()
        }
      } catch (e) {
        console.warn('Splide init error', e)
      }
    }

    initSplide()
  }, [])

  return (
    <header className="section-home-header">
      <div className="home-header_wrapper u-position-relative u-stacking-context u-overflow-hidden">
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
        <img
          src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68934e449c232a1db30453a3_line-left.svg"
          loading="eager"
          width="107"
          height="836"
          alt=""
          className="home-header_line cc-left u-select-none u-z-n1 u-position-absolute"
        />
        <img
          src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68934e4458011d08baeda9aa_line-right.svg"
          loading="eager"
          width="109"
          height="836"
          alt=""
          className="home-header_line cc-right u-select-none u-z-n1 u-position-absolute"
        />
        <div className="u-spacing-inline">
          <div className="container">
            <div className="home-header_heading u-text-center u-display-grid u-justify-items-center">
              <h1 className="home-header_title u-color-typography-25 heading-h1 u-weight-700 u-text-center">
                Trusted <span className="home-header_title_inner">cards</span> for advertising
              </h1>
              <p className="home-header_description text-xl u-color-typography-50">
                Our cards work flawlessly with major advertising platforms, ensuring uninterrupted ad spend
              </p>
              <button
                onClick={onOpenSignup}
                className="button-primary w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden"
              >
                <span>Open Account</span>
              </button>
              <div className="home-header_social u-display-grid">
                <img
                  src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68bea08e6450f4d17d1e6560_Socialist-logo.svg"
                  loading="lazy"
                  alt=""
                  className="home-header_social-image cc-desktop"
                />
                <img
                  src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68beadf85ef125759422bf79_Line.svg"
                  loading="lazy"
                  alt=""
                  className="home-header_social-image cc-mobile"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          ref={sliderRef}
          data-slider="marquee"
          className="home-header_slider splide"
          role="region"
          aria-roledescription="carousel"
        >
          <div className="splide__track">
            <ul role="presentation" className="splide__list">
              {[...CARD_IMAGES, ...CARD_IMAGES].map((src, i) => (
                <li
                  key={i}
                  className="home-header_slider_slide splide__slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${(i % 4) + 1} of 4`}
                >
                  <div className="home-header_slider-card u-overflow-hidden">
                    <img src={src} loading="eager" width="380" height="240" alt="" className="u-width-full" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          className="home-header_pattern u-width-full u-select-none u-z-n1 u-position-absolute"
          src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/689352f9437c75c6f2e6f481_home-banner-pattern.png"
          width="1391"
          height="43"
          alt=""
          sizes="(max-width: 1391px) 100vw, 1391px"
          loading="eager"
          srcSet="
            https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/689352f9437c75c6f2e6f481_home-banner-pattern-p-500.png 500w,
            https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/689352f9437c75c6f2e6f481_home-banner-pattern-p-800.png 800w,
            https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/689352f9437c75c6f2e6f481_home-banner-pattern-p-1080.png 1080w,
            https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/689352f9437c75c6f2e6f481_home-banner-pattern.png 1391w
          "
        />
      </div>
    </header>
  )
}
