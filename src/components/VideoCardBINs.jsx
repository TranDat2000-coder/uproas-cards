const VideoCardBINs = () => {
  return (
    <div className="video-card">
      <div className="video-card_inner cc-six u-position-relative u-overflow-hidden">
        <div className="video-card_content">
          <img
            src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cdcab58a7b9b6498761da_wide-choice-of-BINs-icon.svg"
            loading="lazy"
            alt=""
          />
          <h3 className="video-card_title cc-small heading-h6 u-text-color-dark">
            <span>Wide choice of&nbsp;&nbsp;</span>
            <span className="u-color-primary">BINs</span>
          </h3>
          <div className="video-card_text cc-two text-xl">
            More than 50 reliable BINs minimize the risks associated with payments and ad account blocking.
          </div>
          <div className="button-wrapper">
            <a
              data-trigger="form-modal-open"
              href="https://form.typeform.com/to/e4ZYOiQe"
              className="button-primary w-inline-block u-weight-500 u-position-relative u-stacking-context u-overflow-hidden"
            >
              <span>Open Account</span>
            </a>
          </div>
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-element cc-desktop cc-last"
          poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/688cd50d3e1e36106c5ce041_video-poster-6.png"
        >
          <source
            data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.mp4"
            type="video/mp4"
            src="public/Card_popup_bottom_202604042309.mp4"
          />
          <source
            data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68db6b62842664598dea791b_card_06-transcode.webm"
            type="video/webm"
            src="public/Card_popup_bottom_202604042309.mp4"
          />
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-element cc-mobile lazy"
          poster="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68b94e4d516ea438fbb2fe65_mobile-view-poster-for-video-six.png"
        >
          <source
            data-src="public/Card_popup_bottom_202604042309.mp4"
            type="video/mp4"
          />
          <source
            data-src="https://cdn.prod.website-files.com/68185a5ac5e91731a60d1b18%2F68e1f84634626e3842575999_card_06_mobile%20%281%29-transcode.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
};

export default VideoCardBINs;
