export default function ExperienceSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title heading-h2 u-text-color-dark u-text-center" style={{ maxWidth: '18ch', margin: '0 auto 1.5rem' }}>
            <div>
              <span className="section-title-text" style={{ textWrap: 'balance' }}>Everything to Ensure the Best </span>
              <span className="section-title-text cc-gradient">Experience</span>
            </div>
          </h2>
          <p className="section-text heading-s2 u-text-center u-weight-500" style={{ maxWidth: '52ch', margin: '0 auto' }}>
            Bringing you everything you need for a flawless experience.
          </p>
        </div>

        {/* Large Video Card - CC SIX */}
        <div className="video-card mb-8">
          <div className="video-card_inner cc-six u-position-relative u-overflow-hidden" style={{ display: 'flex', flexDirection: 'row', minHeight: '480px', borderRadius: '20px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
            <div className="video-card_content" style={{ flex: '0 0 40%', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cdcab58a7b9b6498761da_wide-choice-of-BINs-icon.svg" loading="lazy" alt="" style={{ width: '56px', height: '56px', marginBottom: '1.5rem' }} />
              <h3 className="video-card_title cc-small heading-h6 u-text-color-dark" style={{ fontSize: '1.625rem', lineHeight: '1.3', marginBottom: '1rem', color: '#1a1a1a' }}>
                <span>Wide choice of&nbsp;&nbsp;</span>
                <span className="u-color-primary">BINs</span>
              </h3>
              <div className="video-card_text cc-two text-xl" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#666', marginBottom: '0' }}>
                More than 50 reliable BINs minimize the risks associated with payments and ad account blocking.
              </div>
              <div className="button-wrapper" style={{ marginTop: '1.5rem' }}>
                <a data-trigger="form-modal-open" href="https://form.typeform.com/to/e4ZYOiQe" className="button-primary w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden" style={{ display: 'inline-block', padding: '0.875rem 2rem', fontSize: '0.9375rem', fontWeight: '500', background: '#8c3cfc', color: 'white', borderRadius: '9999px', textDecoration: 'none' }}>
                  <span>Open Account</span>
                </a>
              </div>
            </div>
            <video autoPlay loop muted playsInline className="video-element cc-desktop cc-last" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd50d3e1e36106c5ce041_video-poster-6.png." style={{ flex: '0 0 60%', width: '60%', height: 'auto', minHeight: '480px', objectFit: 'cover' }}>
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.mp4" type="video/mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.mp4" />
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.webm&quot;" type="video/webm" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.webm&quot;" />
            </video>
            <video autoPlay loop muted playsInline className="video-element cc-mobile lazy" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68b94e4d516ea438fbb2fe65_mobile-view-poster-for-video-six.png" style={{ display: 'none' }}>
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68e1f84634626e3842575999_card_06_mobile%20%281%29-transcode.mp4" type="video/mp4" />
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68e1f84634626e3842575999_card_06_mobile%20%281%29-transcode.webm&quot;" type="video/webm" />
            </video>
          </div>
        </div>

        {/* Small Cards Grid */}
        <div className="video-card_grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', margin: '2rem 0' }}>
          {/* Card 1 - Analytics & Reports */}
          <div className="video-card cc-two">
            <div className="video-card_inner cc-two u-position-relative u-overflow-hidden" style={{ display: 'flex', flexDirection: 'column', minHeight: 'auto', borderRadius: '16px', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)' }}>
              <div className="video-card_content cc-two" style={{ flex: 'none', padding: '1.75rem' }}>
                <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688ccc78222c5eed3b33f01f_analytics-%26-reports.svg" loading="lazy" alt="" style={{ width: '44px', height: '44px', marginBottom: '1rem' }} />
                <h3 className="video-card_title cc-small heading-h5 u-text-color-dark" style={{ fontSize: '1.125rem', lineHeight: '1.4', marginBottom: '0' }}>
                  <span className="u-color-primary">Analytics </span>
                  <span>&amp; Reports</span>
                </h3>
              </div>
              <video autoPlay loop muted playsInline className="video-element cc-two" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688ccac0526a9c1d60bcd6fa_video-poster-3.png" style={{ flex: 'none', width: '100%', height: '220px' }}>
                <source type="video/mp4" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684fa0d45a2b95252bafbfa1_card_02%20%283%29%20%281%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684fa0d45a2b95252bafbfa1_card_02%20%283%29%20%281%29-transcode.mp4" />
                <source type="video/webm" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684fa0d45a2b95252bafbfa1_card_02%20%283%29%20%281%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684fa0d45a2b95252bafbfa1_card_02%20%283%29%20%281%29-transcode.mp4" />
              </video>
            </div>
          </div>

          {/* Card 2 - 3DS Support */}
          <div className="video-card cc-two">
            <div className="video-card_inner cc-three u-position-relative u-overflow-hidden" style={{ display: 'flex', flexDirection: 'column', minHeight: 'auto', borderRadius: '16px', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)' }}>
              <div className="video-card_content cc-two" style={{ flex: 'none', padding: '1.75rem' }}>
                <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd08011ee092601cc2aab_24-support.svg" loading="lazy" alt="" style={{ width: '44px', height: '44px', marginBottom: '1rem' }} />
                <h3 className="video-card_title heading-h5 u-text-color-dark" style={{ fontSize: '1.125rem', lineHeight: '1.4', marginBottom: '0' }}>
                  <span className="u-color-primary">3DS </span>
                  <span>support</span>
                </h3>
              </div>
              <video autoPlay loop muted playsInline className="video-element cc-two" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688ccfe04416b468314aa270_video-poster-2.png" style={{ flex: 'none', width: '100%', height: '220px' }}>
                <source type="video/mp4" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255baba957c5ef54c92403_Card_03%20%281%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255baba957c5ef54c92403_Card_03%20%281%29-transcode.mp4" />
                <source type="video/webm" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255baba957c5ef54c92403_Card_03%20%281%29-transcode.webm" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255baba957c5ef54c92403_Card_03%20%281%29-transcode.webm" />
              </video>
            </div>
          </div>

          {/* Card 3 - Dedicated Support Team */}
          <div className="video-card cc-two">
            <div className="video-card_inner cc-four u-position-relative u-overflow-hidden" style={{ display: 'flex', flexDirection: 'column', minHeight: 'auto', borderRadius: '16px', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)' }}>
              <div className="video-card_content cc-two" style={{ flex: 'none', padding: '1.75rem' }}>
                <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd18d511b4c750e668b00_Online_Support.svg" loading="lazy" alt="" style={{ width: '44px', height: '44px', marginBottom: '1rem' }} />
                <h3 className="video-card_title cc-small heading-h5 u-text-color-dark" style={{ fontSize: '1.125rem', lineHeight: '1.4', marginBottom: '0' }}>
                  <span>Dedicated </span>
                  <span className="u-color-primary">support </span>
                  <span>team</span>
                </h3>
              </div>
              <video autoPlay loop muted playsInline className="video-element cc-two" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd32bc65837aab696bb87_video-poster-4.png" style={{ flex: 'none', width: '100%', height: '220px' }}>
                <source type="video/mp4" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255d603b18e1094f7fbd04_Card_04%20%282%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255d603b18e1094f7fbd04_Card_04%20%282%29-transcode.mp4" />
                <source type="video/webm" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255d603b18e1094f7fbd04_Card_04%20%282%29-transcode.webm" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68255d603b18e1094f7fbd04_Card_04%20%282%29-transcode.webm" />
              </video>
            </div>
          </div>

          {/* Card 4 - Convenient Customization */}
          <div className="video-card cc-two">
            <div className="video-card_inner cc-five u-position-relative u-overflow-hidden" style={{ display: 'flex', flexDirection: 'column', minHeight: 'auto', borderRadius: '16px', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)' }}>
              <div className="video-card_content cc-two" style={{ flex: 'none', padding: '1.75rem' }}>
                <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd3559f137270dbfb555a_setting-4.svg" loading="lazy" alt="" style={{ width: '44px', height: '44px', marginBottom: '1rem' }} />
                <h3 className="video-card_title cc-small heading-h5 u-text-color-dark" style={{ fontSize: '1.125rem', lineHeight: '1.4', marginBottom: '0' }}>
                  <span className="u-color-primary">Convenient </span>
                  <span>customization</span>
                </h3>
              </div>
              <video autoPlay loop muted playsInline className="video-element cc-two" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd1f58d3665efa500f0ff_video-poster-5.png" style={{ flex: 'none', width: '100%', height: '220px' }}>
                <source type="video/mp4" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F683fe8eca146b3c1c83d8464_card_05%20%283%29-transcode.mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F683fe8eca146b3c1c83d8464_card_05%20%283%29-transcode.mp4" />
                <source type="video/webm" data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F683fe8eca146b3c1c83d8464_card_05%20%283%29-transcode.webm" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F683fe8eca146b3c1c83d8464_card_05%20%283%29-transcode.webm" />
              </video>
            </div>
          </div>
        </div>

        {/* Large Video Card - CC FIRST (Reversed) */}
        <div className="video-card">
          <div className="video-card_inner cc-first u-position-relative u-overflow-hidden" style={{ display: 'flex', flexDirection: 'row-reverse', minHeight: '480px', borderRadius: '20px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
            <div className="video-card_content" style={{ flex: '0 0 40%', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cabc1905674bbd3f3fa4d_instant-issuance-icon.svg" loading="lazy" alt="" style={{ width: '56px', height: '56px', marginBottom: '1.5rem' }} />
              <h2 className="video-card_title heading-h6 u-color-typography-25" style={{ fontSize: '1.625rem', lineHeight: '1.3', marginBottom: '1rem', color: '#1a1a1a' }}>
                Instant Issuance
              </h2>
              <div className="video-card_text text-xl" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#666', marginBottom: '0' }}>
                Generate cards instantly and run your advertising campaigns without delays or hassles.
              </div>
              <div className="button-wrapper" style={{ marginTop: '1.5rem' }}>
                <a data-trigger="form-modal-open" href="https://form.typeform.com/to/e4ZYOiQe" className="button-primary w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden" style={{ display: 'inline-block', padding: '0.875rem 2rem', fontSize: '0.9375rem', fontWeight: '500', background: '#8c3cfc', color: 'white', borderRadius: '9999px', textDecoration: 'none' }}>
                  <span>Open Account</span>
                </a>
              </div>
            </div>
            <video autoPlay loop muted playsInline className="video-element cc-mobile lazy" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68b949a1f35bd2a156bf7806_mobile-view-poster-for-video-one.png" style={{ flex: '0 0 60%', width: '60%', height: 'auto', minHeight: '480px', objectFit: 'cover', display: 'none' }}>
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684134a9f544bc64251b56e5_insane%20issuance_mobile%20%281%29-transcode.mp4" type="video/mp4" />
              <source data-src="src=&quot;https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F684134a9f544bc64251b56e5_insane%20issuance_mobile%20%281%29-transcode.webm&quot;" type="video/webm" />
            </video>
            <video autoPlay loop muted playsInline className="video-element cc-desktop" poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688c9f449aaf6671f51e848b_video-poster-1.jpg" style={{ flex: '0 0 60%', width: '60%', height: 'auto', minHeight: '480px', objectFit: 'cover' }}>
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.mp4" type="video/mp4" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.mp4" />
              <source data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.webm" type="video/webm" src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F682486ae86deecdc8d59725e_Card_01%20%281%29-transcode.webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}