const SOCIALS = [
  {
    href: "https://www.linkedin.com/company/86950206/",
    src: "https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/6859a1b777db08479b8f4185_d01f97baa5835e76352c1d998ba9ee5b_Linkedin.webp",
    alt: "Linkedin",
  },
  {
    href: "https://www.instagram.com/leadingcards.media/",
    src: "https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/6859a1b7636f74b3000a1918_65d09cc111d93a99caa8d4eea3563dde_Instagram.webp",
    alt: "Instagram",
  },
  {
    href: "https://www.facebook.com/Uproa?locale=uk_UA",
    src: "https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/6859a1b78ea1c5e76e3c80f8_d757c96766c3ea81857622f3487cf577_Facebook.webp",
    alt: "Facebook",
  },
  {
    href: "https://t.me/ZG_Mine#",
    src: "https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/6859a1b7763790da7eabc642_eefeb9a88ac35b1d5cf67d3d97c96b87_Telegram.webp",
    alt: "Telegram",
  },
];

export default function CTASection({ onOpenModal }) {
  return (
    <section className="section-cta u-spacing-inline">
      <div className="container">
        <div className="cta-card u-overflow-hidden u-stacking-context u-position-relative u-text-center u-color-typography-25">
          <img
            src="/Logo-uproadcards.svg"
            loading="lazy"
            width="100"
            height="100"
            alt="Uproas Cards"
            className="cta-card_logo"
          />
          <h2 className="cta-card_title heading-h3">
            Unlock exclusive perks! Subscribe &amp; Supercharge your ad spend
          </h2>

          {/* Open Account & Sign Up Buttons */}
          <div
            className="u-display-flex u-justify-content-center"
            style={{ gap: "1rem", marginBottom: "2rem" }}
          >
            <button
              onClick={onOpenModal}
              className="button-primary w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden"
            >
              <span>Open Account</span>
            </button>
            <button
              onClick={onOpenModal}
              className="button-primary cc-ghost w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden"
            >
              <span>Sign Up</span>
            </button>
          </div>

          <ul role="list" className="cta-card_list u-list-unstyled">
            {SOCIALS.map((s) => (
              <li key={s.alt}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-card_list_link w-inline-block"
                >
                  <img
                    src={s.src}
                    loading="lazy"
                    width="50"
                    height="50"
                    alt={s.alt}
                    className="cta-card_list_image u-ratio-1"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
