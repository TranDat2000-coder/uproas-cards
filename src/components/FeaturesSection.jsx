const TYPEFORM_URL = 'https://form.typeform.com/to/e4ZYOiQe'

function VideoCard({ src, poster, posterMobile, title, text, iconSrc, isLarge, isReverse, onOpenModal }) {
  if (isLarge && !isReverse) {
    return (
      <div className="video-card">
        <div className="video-card_inner cc-six u-position-relative u-overflow-hidden">
          <div className="video-card_content">
            <img src={iconSrc} loading="lazy" alt="" />
            <h3 className="video-card_title cc-small heading-h6 u-text-color-dark">
              <span>Wide choice of&nbsp;&nbsp;</span><span className="u-color-primary">BINs</span>
            </h3>
            <div className="video-card_text cc-two text-xl">{text}</div>
            <div className="button-wrapper">
              <a data-trigger="form-modal-open" href={TYPEFORM_URL} className="button-primary w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden">
                <span>Open Account</span>
              </a>
            </div>
          </div>
          <video autoPlay loop muted playsInline className="video-element cc-desktop cc-last" poster={poster}>
            <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.mp4" type="video/mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.mp4" />
            <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.webm" type="video/webm" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.webm" />
          </video>
          <video autoPlay loop muted playsInline className="video-element cc-mobile lazy" poster={posterMobile}>
            <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68e1f84634626e3842575999_card_06_mobile%20%281%29-transcode.mp4" type="video/mp4" />
            <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68e1f84634626e3842575999_card_06_mobile%20%281%29-transcode.webm" type="video/webm" />
          </video>
        </div>
      </div>
    )
  }

  if (isReverse) {
    return (
      <div className="video-card w-full">
        <div className="video-card_inner cc-first u-position-relative u-overflow-hidden">
          <div className="video-card_content">
            <img src={iconSrc} loading="lazy" alt="" />
            <h2 className="video-card_title heading-h6 u-color-typography-25">{title}</h2>
            <div className="video-card_text text-xl">{text}</div>
            <div className="button-wrapper">
              <a data-trigger="form-modal-open" href={TYPEFORM_URL} className="button-primary w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden">
                <span>Open Account</span>
              </a>
            </div>
          </div>
          <video autoPlay loop muted playsInline className="video-element cc-mobile lazy" poster={posterMobile}>
            <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684134a9f544bc64251b56e5_insane%20issuance_mobile%20%281%29-transcode.mp4" type="video/mp4" />
            <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684134a9f544bc64251b56e5_insane%20issuance_mobile%20%281%29-transcode.webm" type="video/webm" />
          </video>
          <video autoPlay loop muted playsInline className="video-element cc-desktop" poster={poster}>
            <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.mp4" type="video/mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.mp4" />
            <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.webm" type="video/webm" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.webm" />
          </video>
        </div>
      </div>
    )
  }

  return (
    <div className="video-card cc-two">
      <div className={`video-card_inner ${src.includes('card_02') ? 'cc-two' : src.includes('card_03') ? 'cc-three' : src.includes('card_04') ? 'cc-four' : 'cc-five'} u-position-relative u-overflow-hidden`}>
        <div className="video-card_content cc-two">
          <img src={iconSrc} loading="lazy" alt="" />
          <h3 className="video-card_title cc-small heading-h5 u-text-color-dark">{title}</h3>
        </div>
        <video autoPlay loop muted playsInline className="video-element cc-two" poster={poster}>
          <source type="video/mp4" data-src={src} src={src} />
          <source type="video/webm" data-src={src} src={src} />
        </video>
      </div>
    </div>
  )
}

const SMALL_CARDS = [
  {
    src: 'https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684fa0d45a2b95252bafbfa1_card_02%20%283%29%20%281%29-transcode.mp4',
    poster: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688ccac0526a9c1d60bcd6fa_video-poster-3.png',
    iconSrc: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688ccc78222c5eed3b33f01f_analytics-%26-reports.svg',
    title: <><span className="u-color-primary">Analytics </span><span>&amp; Reports</span></>,
  },
  {
    src: 'https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255baba957c5ef54c92403_Card_03%20%281%29-transcode.mp4',
    poster: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688ccfe04416b468314aa270_video-poster-2.png',
    iconSrc: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd08011ee092601cc2aab_24-support.svg',
    title: <><span className="u-color-primary">3DS </span><span>support</span></>,
  },
  {
    src: 'https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255d603b18e1094f7fbd04_Card_04%20%282%29-transcode.mp4',
    poster: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd32bc65837aab696bb87_video-poster-4.png',
    iconSrc: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd18d511b4c750e668b00_Online_Support.svg',
    title: <><span>Dedicated </span><span className="u-color-primary">support </span><span>team</span></>,
  },
  {
    src: 'https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F683fe8eca146b3c1c83d8464_card_05%20%283%29-transcode.mp4',
    poster: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd1f58d3665efa500f0ff_video-poster-5.png',
    iconSrc: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd3559f137270dbfb555a_setting-4.svg',
    title: <><span className="u-color-primary">Convenient </span><span>customization</span></>,
  },
]

export default function FeaturesSection({ onOpenModal }) {
  return (
    <section className="section-features u-spacing-inline u-spacing-block u-position-relative">
      <div className="container cc-1125">
        <div style={{ marginBottom: '3.75rem' }} className="section-header">
          <div>
            <h2 className="section-title heading-h2 u-text-color-dark u-text-center" style={{ maxWidth: '18ch' }}>
              <div>
                <span className="section-title-text" style={{ textWrap: 'balance' }}>Everything to Ensure the Best </span>
                <span className="section-title-text cc-gradient">Experience</span>
              </div>
            </h2>
          </div>
          <p className="section-text heading-s2 u-text-center u-weight-500" style={{ maxWidth: '52ch' }}>
            Bringing you everything you need for a flawless experience.
          </p>
        </div>

        <div className="video-card">
          <div className="video-card_inner cc-six u-position-relative u-overflow-hidden">
            <div className="video-card_content ">
              <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cdcab58a7b9b6498761da_wide-choice-of-BINs-icon.svg" loading="lazy" alt="" />
              <h3 className="video-card_title cc-small heading-h6 u-text-color-dark">
                <span>Wide choice of&nbsp;&nbsp;</span><span className="u-color-primary">BINs</span>
              </h3>
              <div className="video-card_text cc-two text-xl">More than 50 reliable BINs minimize the risks associated with payments and ad account blocking.</div>
              <button
                // onClick={onOpenSignup}
                className="button-primary w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden"
              >
                <span>Open Account</span>
              </button>
            </div>
            <video autoPlay loop muted playsInline className="video-element cc-desktop cc-last" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd50d3e1e36106c5ce041_video-poster-6.png.">
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.mp4" type="video/mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.mp4" />
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.webm" type="video/webm" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.webm" />
            </video>
            <video autoPlay loop muted playsInline className="video-element cc-mobile lazy" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68b94e4d516ea438fbb2fe65_mobile-view-poster-for-video-six.png">
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68e1f84634626e3842575999_card_06_mobile%20%281%29-transcode.mp4" type="video/mp4" />
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68e1f84634626e3842575999_card_06_mobile%20%281%29-transcode.webm" type="video/webm" />
            </video>
          </div>
        </div>

        <div className="video-card_grid">
          <div className="video-card cc-two">
            <div className="video-card_inner cc-two u-position-relative u-overflow-hidden">
              <div className="video-card_content cc-two">
                <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688ccc78222c5eed3b33f01f_analytics-%26-reports.svg" loading="lazy" alt="" />
                <h3 className="video-card_title cc-small heading-h5 u-text-color-dark">
                  <span className="u-color-primary">Analytics </span><span>&amp; Reports</span>
                </h3>
              </div>
              <video autoPlay loop muted playsInline className="video-element cc-two" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688ccac0526a9c1d60bcd6fa_video-poster-3.png">
                <source type="video/mp4" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684fa0d45a2b95252bafbfa1_card_02%20%283%29%20%281%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684fa0d45a2b95252bafbfa1_card_02%20%283%29%20%281%29-transcode.mp4" />
                <source type="video/webm" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684fa0d45a2b95252bafbfa1_card_02%20%283%29%20%281%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684fa0d45a2b95252bafbfa1_card_02%20%283%29%20%281%29-transcode.mp4" />
              </video>
            </div>
          </div>

          <div className="video-card cc-two">
            <div className="video-card_inner cc-three u-position-relative u-overflow-hidden">
              <div className="video-card_content cc-two">
                <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd08011ee092601cc2aab_24-support.svg" loading="lazy" alt="" />
                <h3 className="video-card_title heading-h5 u-text-color-dark">
                  <span className="u-color-primary">3DS </span><span>support</span>
                </h3>
              </div>
              <video autoPlay loop muted playsInline className="video-element cc-two" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688ccfe04416b468314aa270_video-poster-2.png">
                <source type="video/mp4" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255baba957c5ef54c92403_Card_03%20%281%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255baba957c5ef54c92403_Card_03%20%281%29-transcode.mp4" />
                <source type="video/webm" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255baba957c5ef54c92403_Card_03%20%281%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255baba957c5ef54c92403_Card_03%20%281%29-transcode.mp4" />
              </video>
            </div>
          </div>

          <div className="video-card cc-two">
            <div className="video-card_inner cc-four u-position-relative u-overflow-hidden">
              <div className="video-card_content cc-two">
                <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd18d511b4c750e668b00_Online_Support.svg" loading="lazy" alt="" />
                <h3 className="video-card_title cc-small heading-h5 u-text-color-dark">
                  <span>Dedicated </span><span className="u-color-primary">support </span><span>team</span>
                </h3>
              </div>
              <video autoPlay loop muted playsInline className="video-element cc-two" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd32bc65837aab696bb87_video-poster-4.png">
                <source type="video/mp4" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255d603b18e1094f7fbd04_Card_04%20%282%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255d603b18e1094f7fbd04_Card_04%20%282%29-transcode.mp4" />
                <source type="video/webm" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255d603b18e1094f7fbd04_Card_04%20%282%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255d603b18e1094f7fbd04_Card_04%20%282%29-transcode.mp4" />
              </video>
            </div>
          </div>

          <div className="video-card cc-two">
            <div className="video-card_inner cc-five u-position-relative u-overflow-hidden">
              <div className="video-card_content cc-two">
                <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd3559f137270dbfb555a_setting-4.svg" loading="lazy" alt="" />
                <h3 className="video-card_title cc-small heading-h5 u-text-color-dark">
                  <span className="u-color-primary">Convenient </span><span>customization</span>
                </h3>
              </div>
              <video autoPlay loop muted playsInline className="video-element cc-two" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd1f58d3665efa500f0ff_video-poster-5.png">
                <source type="video/mp4" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F683fe8eca146b3c1c83d8464_card_05%20%283%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F683fe8eca146b3c1c83d8464_card_05%20%283%29-transcode.mp4" />
                <source type="video/webm" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F683fe8eca146b3c1c83d8464_card_05%20%283%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F683fe8eca146b3c1c83d8464_card_05%20%283%29-transcode.mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="video-card">
          <div className="video-card_inner cc-first u-position-relative u-overflow-hidden">
            <div className="video-card_content">
              <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cabc1905674bbd3f3fa4d_instant-issuance-icon.svg" loading="lazy" alt="" />
              <h2 className="video-card_title heading-h6 u-color-typography-25">Instant Issuance</h2>
              <div className="video-card_text text-xl">Generate cards instantly and run your advertising campaigns without delays or hassles.</div>
              <button
                // onClick={onOpenSignup}
                className="button-primary w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden"
              >
                <span>Open Account</span>
              </button>
            </div>
            <video autoPlay loop muted playsInline className="video-element cc-mobile lazy" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68b949a1f35bd2a156bf7806_mobile-view-poster-for-video-one.png">
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684134a9f544bc64251b56e5_insane%20issuance_mobile%20%281%29-transcode.mp4" type="video/mp4" />
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684134a9f544bc64251b56e5_insane%20issuance_mobile%20%281%29-transcode.webm" type="video/webm" />
            </video>
            <video autoPlay loop muted playsInline className="video-element cc-desktop" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688c9f449aaf6671f51e848b_video-poster-1.jpg">
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.mp4" type="video/mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.mp4" />
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.webm" type="video/webm" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
