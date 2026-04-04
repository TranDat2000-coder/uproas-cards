export default function InterfaceSection() {
  return (
    <section className="section-interface u-spacing-block u-spacing-inline">
      <div className="container">
        <div style={{ marginBottom: 'clamp(1.25rem, 0.3697rem + 3.7559vw, 3.75rem)' }} className="section-header">
          <div>
            <h2 className="section-title heading-h2 u-text-color-dark u-text-center" style={{ maxWidth: '16ch' }}>
              <div>
                <span className="section-title-text" style={{ textWrap: 'balance' }}>Our</span>
                <span className="section-title-text cc-gradient">team</span>
                <span className="section-title-text" style={{ textWrap: 'balance' }}>interface is for collaboration</span>
              </div>
            </h2>
          </div>
          <p className="section-text heading-s2 u-text-center u-weight-500" style={{ maxWidth: '52ch' }}>
            Easily create teams, assign roles to new members, and manage users — add, edit, or freeze them whenever needed
          </p>
        </div>
        <div className="interface-card u-position-relative u-overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687a76b594a0b2203346fdeb_team-Interface-poster.png"
            loading="lazy"
            width="1240"
            height="672"
            alt=""
            srcSet="
              https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687a76b594a0b2203346fdeb_team-Interface-poster-p-500.png 500w,
              https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687a76b594a0b2203346fdeb_team-Interface-poster-p-800.png 800w,
              https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687a76b594a0b2203346fdeb_team-Interface-poster-p-1080.png 1080w,
              https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687a76b594a0b2203346fdeb_team-Interface-poster.png 1240w
            "
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="u-cover"
          />
          <video
            autoPlay loop muted playsInline
            poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687a76b594a0b2203346fdeb_team-Interface-poster.png"
            className="u-cover lazy"
          >
            <source src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F685389b4a427b7743f79473a_add%20team%20member%20video%20for%20website%20%281%29-transcode.mp4" type="video/mp4" />
            <source src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F685389b4a427b7743f79473a_add%20team%20member%20video%20for%20website%20%281%29-transcode.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  )
}
