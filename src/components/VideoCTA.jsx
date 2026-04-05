export default function VideoCTA({ onOpenSignup }) {
  return (
    <section className="section-video-cta u-spacing-inline u-spacing-block cc-bottom-0">
      <div className="container">
        <div className="video-cta-card u-position-relative u-overflow-hidden">
          <div>
            <h2 className="video-cta-card_title u-color-typography-25 heading-h4">
              Ready to power up your media buying? Let's make it happen!
            </h2>
            <button
              onClick={onOpenSignup}
              className="button-primary w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden"
            >
              <span>Open Account</span>
            </button>
          </div>
          <img
            className="u-cover u-z-n1"
            src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687a3538d7e125892ceff276_Video-CTA-Poster.png"
            width="1240"
            height="738"
            alt=""
            sizes="(max-width: 1240px) 100vw, 1240px"
            loading="lazy"
            srcSet="
              https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687a3538d7e125892ceff276_Video-CTA-Poster-p-500.png 500w,
              https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687a3538d7e125892ceff276_Video-CTA-Poster-p-800.png 800w,
              https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687a3538d7e125892ceff276_Video-CTA-Poster-p-1080.png 1080w,
              https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/687a3538d7e125892ceff276_Video-CTA-Poster.png 1240w
            "
          />
          <video
            autoPlay loop muted playsInline
            poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68905caad965015d4e8e0c95_Cards%20for%20ads%C2%A0.jpg"
            className="u-cover u-z-n1 lazy"
          >
            <source src="/Coins_run_up_202604042159.mp4" type="video/mp4" />
            <source src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F6825675b1e23d6f431d2a158_3d%20cards%20%282%29-transcode.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  )
}
