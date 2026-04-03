import { useEffect, useRef } from 'react'

const ICONS = [
  {
    name: 'openai',
    src: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687b2be850d3fd572f32800c_openai.svg',
    style: { transform: 'translate3d(910.421px, 441.927px, 0px) scale(0.0011)', opacity: 0.0011 },
  },
  {
    name: 'midjourney',
    src: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687b2be85ae71c3a521e6e83_midjourney.svg',
    style: { transform: 'translate3d(857.621px, 361.94px, 0px)', opacity: 1 },
  },
  {
    name: 'netflix',
    src: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687b2be8d5b13165822a838f_netflix.svg',
    style: { transform: 'translate3d(911.526px, 304.933px, 0px)', opacity: 1 },
  },
  {
    name: 'digitalocean',
    src: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687b2be800007ddcc5ba559f_digitalocean.svg',
    style: { transform: 'translate3d(1591.75px, 80.4401px, 0px) scale(0.8039)', opacity: 0.8039 },
  },
  {
    name: 'amazon',
    src: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687b2be833b231556d1416c7_amazon.svg',
    style: { transform: 'translate3d(1181.49px, 112.799px, 0px)', opacity: 1 },
  },
  {
    name: 'airbnb',
    src: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687b2be88eff450e5ef64b86_airbnb.svg',
    style: { transform: 'translate3d(1496.89px, 140.933px, 0px)', opacity: 1 },
  },
  {
    name: 'spotify',
    src: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687b2be8ad466abd53ed120f_spotify.svg',
    style: { transform: 'translate3d(1574.42px, 152.93px, 0px)', opacity: 1 },
  },
]

export default function IntegrationsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const initAnimation = () => {
      if (typeof window.gsap === 'undefined' || typeof window.MotionPathPlugin === 'undefined') {
        setTimeout(initAnimation, 300)
        return
      }

      const gsap = window.gsap
      gsap.registerPlugin(window.MotionPathPlugin)

      // Kill existing animations
      const existingTween = sectionRef.current?._gsapTween
      if (existingTween) existingTween.kill()

      // Find all path elements with data-line attribute
      const paths = sectionRef.current?.querySelectorAll('[data-line]')
      if (!paths || paths.length === 0) return

      const masterTimeline = gsap.timeline({ repeat: -1 })

      Array.from(paths).forEach((path) => {
        const svgParent = path.closest('svg')
        if (svgParent && getComputedStyle(svgParent).display === 'none') return

        const iconName = path.getAttribute('data-line')
        const icon = sectionRef.current?.querySelector(`[data-icon="${iconName}"]`)
        if (!icon) return

        // Reset icon
        gsap.set(icon, { clearProps: 'all' })

        // Get initial inline style values
        const inlineTransform = icon.style.transform || ''
        const inlineOpacity = parseFloat(icon.style.opacity) || 1

        const iconTimeline = gsap.timeline({
          repeat: -1,
          defaults: { transformOrigin: '50% 50%' },
        })

        // Fade in + scale up
        iconTimeline.from(icon, { opacity: 0, scale: 0, duration: 0.5 })
        // Move along path
        iconTimeline.to(
          icon,
          {
            duration: gsap.utils.random(4, 8),
            ease: 'power2.inOut',
            motionPath: {
              path: path,
              align: path,
              alignOrigin: [0.5, 0.5],
            },
          },
          0,
        )
        // Fade out + scale down
        iconTimeline.to(
          icon,
          {
            opacity: 0,
            scale: 0,
            duration: 0.5,
            ease: 'power4.out',
          },
          '>-1',
        )

        masterTimeline.add(iconTimeline, gsap.utils.random(0, 5))
      })
    }

    // Wait for GSAP and MotionPathPlugin to be available
    const checkReady = () => {
      if (typeof window.gsap !== 'undefined' && typeof window.MotionPathPlugin !== 'undefined') {
        initAnimation()
      } else {
        setTimeout(checkReady, 200)
      }
    }
    checkReady()

    // Handle resize — reinit
    const onResize = () => {
      if (typeof window.gsap !== 'undefined' && typeof window.MotionPathPlugin !== 'undefined') {
        initAnimation()
      }
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-integrations u-position-relative u-overflow-hidden u-spacing-block">
      <div className="integrations_header u-spacing-inline u-text-center">
        <div style={{ marginBottom: '1.5rem' }} className="section-header">
          <div>
            <h2 className="section-title heading-h2 u-text-color-dark u-text-center" style={{ maxWidth: '20ch' }}>
              <div>
                <span className="section-title-text" style={{ textWrap: 'balance' }}>Pay for all your</span>
                <span className="section-title-text cc-gradient">business services</span>
                <span className="section-title-text" style={{ textWrap: 'balance' }}>from one platform</span>
              </div>
            </h2>
          </div>
        </div>
        <p className="integrations_header_text u-mx-auto heading-s1">
          Clearly organized, managed in one place<br />
        </p>
      </div>
      <div className="integrations_elements u-select-none">
        <div className="u-display-grid u-position-relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="1344" height="455" viewBox="0 0 1344 455" fill="none" className="integrations_elements_svg u-width-full u-mx-auto">
            <g id="new-lines-group">
              <path id="Vector 8017" d="M1344 455H831.62C828.967 455 826.389 454.121 824.288 452.5L689.668 348.603C686.724 346.331 685 342.822 685 339.103V91" stroke="#DFE4EC" strokeLinecap="round" />
              <path id="Vector 8012" d="M0 455H512.274C514.926 455 517.503 454.122 519.602 452.502L654.328 348.603C657.274 346.331 659 342.821 659 339.1V90" stroke="#DFE4EC" strokeLinecap="round" />
              <path data-line="spotify" d="M1344 382.5H1164.26C1161.81 382.5 1159.42 381.751 1157.41 380.354L1022.59 286.646C1020.58 285.249 1018.19 284.5 1015.74 284.5H877.788C874.714 284.5 871.757 283.32 869.527 281.204L778.473 194.796C776.243 192.68 773.286 191.5 770.212 191.5H673" stroke="#DFE4EC" strokeLinecap="round" />
              <path data-line="airbnb" d="M1344 290.5H1199.37C1196.96 290.5 1194.61 289.773 1192.61 288.414L1053.56 193.586C1051.57 192.227 1049.21 191.5 1046.8 191.5H673" stroke="#DFE4EC" strokeLinecap="round" />
              <path data-line="amazon" d="M1344 128H989.231C985.895 128 982.71 129.388 980.44 131.832L928.56 187.668C926.29 190.112 923.105 191.5 919.769 191.5H673" stroke="#DFE4EC" strokeLinecap="round" />
              <path data-line="digitalocean" d="M1344 70H952.733C950.302 70 947.928 70.7384 945.926 72.1175L809.074 166.382C807.072 167.762 804.698 168.5 802.267 168.5H673" stroke="#DFE4EC" strokeLinecap="round" />
              <path data-line="netflix" d="M0 313.5H394.598C397.051 313.5 399.444 312.749 401.457 311.347L537.409 216.653C539.421 215.251 541.815 214.5 544.267 214.5H673" stroke="#DFE4EC" strokeLinecap="round" />
              <path id="Vector 8010" d="M0 253.5H356.77C360.271 253.5 363.597 251.972 365.876 249.316L411.909 195.684C414.188 193.028 417.514 191.5 421.014 191.5H673" stroke="#DFE4EC" strokeLinecap="round" />
              <path data-line="midjourney" d="M0 92H148.257C150.695 92 153.074 92.7421 155.079 94.1275L292.921 189.372C294.926 190.758 297.305 191.5 299.743 191.5H673" stroke="#DFE4EC" strokeLinecap="round" />
              <path data-line="openai" d="M0 0H182.257C184.695 0 187.074 0.742084 189.079 2.12753L326.921 97.3725C328.926 98.7579 331.305 99.5 333.743 99.5H470.285C473.316 99.5 476.234 100.647 478.454 102.71L570.546 188.29C572.766 190.353 575.684 191.5 578.715 191.5H673" stroke="#DFE4EC" strokeLinecap="round" />
            </g>
            <g id="dot">
              {[
                { x: 662, y: 86 }, { x: 110, y: 88 }, { x: 977, y: 66 }, { x: 688, y: 86 },
                { x: 337, y: 188 }, { x: 1067, y: 124 }, { x: 397, y: 96 }, { x: 267, y: 50 },
                { x: 1127, y: 66 }, { x: 156, y: 250 }, { x: 856, y: 188 }, { x: 296, y: 250 },
                { x: 1106, y: 223 }, { x: 484, y: 188 }, { x: 1194, y: 124 }, { x: 465, y: 265 },
                { x: 1215, y: 287 }, { x: 155, y: 310 }, { x: 1106, y: 338 }, { x: 1260, y: 378 },
              ].map((p, i) => (
                <rect key={i} x={p.x - 0.5} y={p.y + 0.5} width="7" height="7" rx="1.5" transform={`matrix(-1 0 0 1 ${p.x * 2} 0)`} fill="white" stroke="#DFE4EC" />
              ))}
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="1344" height="455" viewBox="0 0 1344 455" fill="none" className="integrations_elements_svg cc-logo u-position-absolute u-width-full u-mx-auto">
            <g id="Button">
              <g clipPath="url(#clip1_7001_789)">
                <g id="Badge">
                  <mask id="path-33-inside-1_7001_789" fill="white">
                    <path d="M617 147C617 135.954 625.954 127 637 127H707C718.046 127 727 135.954 727 147V217C727 228.046 718.046 237 707 237H637C625.954 237 617 228.046 617 217V147Z" />
                  </mask>
                  <path d="M617 147C617 135.954 625.954 127 637 127H707C718.046 127 727 135.954 727 147V217C727 228.046 718.046 237 707 237H637C625.954 237 617 228.046 617 217V147Z" fill="url(#paint0_linear_7001_789)" />
                  <path d="M615 147C615 134.85 624.85 125 637 125H707C719.15 125 729 134.85 729 147H725C725 137.059 716.941 129 707 129H637C627.059 129 619 137.059 619 147H615ZM727 237H617H727ZM637 237C624.85 237 615 227.15 615 215V147C615 134.85 624.85 125 637 125V129C627.059 129 619 137.059 619 147V217C619 228.046 627.059 237 637 237ZM707 125C719.15 125 729 134.85 729 147V215C729 227.15 719.15 237 707 237C716.941 237 725 228.046 725 217V147C725 137.059 716.941 129 707 129V125Z" fill="#A96DFD" mask="url(#path-33-inside-1_7001_789)" />
                  <g id="Group">
                    <path id="Vector" d="M679.344 206L670.882 191.273L661.887 175.609L666.119 168.236L672.003 158L680.168 172.226L676.766 178.149L672.003 169.857L668.697 175.609L673.732 184.375L682.746 200.071H689.34L685.488 193.338L688.89 187.416L699.563 206H679.344Z" fill="white" />
                    <path id="Vector_2" d="M644.437 206L658.607 181.335L662.008 187.257L658.961 192.571L654.648 200.065H669.356L672.763 206H644.437Z" fill="white" />
                  </g>
                </g>
              </g>
              <rect x="616" y="126" width="112" height="112" rx="21" stroke="#8C3CFC" strokeWidth="2" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_7001_789" x1="672" y1="238.618" x2="672" y2="128.618" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8C3CFC" stopOpacity="0.72" />
                <stop offset="1" stopColor="#8C3CFC" />
              </linearGradient>
              <clipPath id="clip1_7001_789">
                <rect x="617" y="127" width="110" height="110" rx="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="integrations_elements_icons u-position-absolute">
          {ICONS.map((icon) => (
            <div key={icon.name} data-icon={icon.name} className="integrations_elements_icon u-place-items-center u-display-grid u-ratio-1" style={icon.style}>
              <img src={icon.src} loading="lazy" width="44" height="44" alt="" className="integrations_elements_icon_image" />
            </div>
          ))}
        </div>
      </div>
      <div className="integrations_footer u-text-center u-spacing-inline u-display-grid">
        <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687b3c4587646a040d347d81_apple-pay.svg" loading="lazy" width="103" height="62" alt="" className="integrations_footer_logo u-mx-auto" />
        <div className="integrations_footer_text heading-s2 u-mx-auto">
          <strong>Connect to Apple Pay</strong>
        </div>
      </div>
    </section>
  )
}
