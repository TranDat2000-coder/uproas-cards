import { useState } from 'react'

export default function FormModal({ isOpen, onClose, url }) {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  return (
    <div
      data-target="form-modal"
      className={`form-modal u-stacking-context u-place-items-center u-display-grid${isOpen ? ' cc-open' : ''}`}
    >
      <div className="form-modal_card u-overflow-hidden u-position-relative u-bg-white">
        <button
          type="button"
          className="form-modal_card_btn u-position-absolute"
          title="Close Modal"
          data-trigger="form-modal-close"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none" aria-hidden="true">
            <path d="M6.96486 22.6397C6.74319 22.6397 6.52152 22.558 6.34652 22.383C6.00819 22.0447 6.00819 21.4847 6.34652 21.1464L20.3463 7.07785C20.6847 6.73952 21.2447 6.74024 21.583 7.07858C21.9213 7.41691 21.9213 7.97618 21.583 8.31452L16.4265 13.5397L7.58319 22.383C7.41986 22.558 7.18652 22.6397 6.96486 22.6397Z" fill="currentColor" />
            <path d="M20.9994 22.6052C20.7777 22.6052 20.5561 22.5236 20.3811 22.3486L6.34457 8.38446C6.00624 8.04613 6.00624 7.48613 6.34457 7.14779C6.6829 6.80946 7.2429 6.80946 7.58124 7.14779L21.6177 21.1119C21.9561 21.4502 21.9561 22.0102 21.6177 22.3486C21.4427 22.5236 21.2211 22.6052 20.9994 22.6052Z" fill="currentColor" />
          </svg>
        </button>
        <div data-target="form-modal-iframe" className="form-modal_card_body">
          {isOpen && url ? (
            <iframe
              className="form-modal_card_iframe"
              src={url}
              frameBorder="0"
              allowFullScreen
              onLoad={() => setIframeLoaded(true)}
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          ) : (
            <div className="heading-s1 u-place-items-center u-display-grid u-cover">
              Typeform Loading ...
            </div>
          )}
        </div>
      </div>
      <button
        type="button"
        className="form-modal_backdrop u-cover u-z-n1"
        title="Close Modal"
        data-trigger="form-modal-close"
        onClick={onClose}
      />
    </div>
  )
}
