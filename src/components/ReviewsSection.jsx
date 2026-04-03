const REVIEWS = [
  {
    colorClass: 'cc-pink',
    name: 'Виктор Ларичев',
    country: 'Israel',
    date: 'Feb 4, 2025',
    expDate: 'April 11, 2025',
    rating: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68792d3cef79710dbf2b28ac_review-stars.png',
    title: 'Excellent Services',
    text: 'They always respond quickly and help, the cards work, they are very encouraging!\n\nI recommend it!',
    avatar: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68a5ae59b875a3b950cd7b8f_Victor-Larichev.avif',
  },
  {
    colorClass: 'cc-green',
    name: 'Sergei Kashaev',
    country: 'Cyprus',
    date: 'Feb 4, 2025',
    expDate: 'December 18, 2024',
    rating: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68792d3cef79710dbf2b28ac_review-stars.png',
    title: 'Good service with cards.',
    text: 'I recommend it to everyone. We have been using it for about three years now. Convenient interface for work. Prompt customer support. Regular update card BINs.',
    avatar: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68a5afe540be55218fbe0a9d_Sergei-Kashaev.avif',
  },
  {
    colorClass: 'cc-blue',
    name: 'Elsa Finance',
    country: 'Romania',
    date: 'Feb 4, 2025',
    expDate: 'February 03, 2024',
    rating: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68792d3cef79710dbf2b28ac_review-stars.png',
    title: 'Excellent Services',
    text: "I've been working with these guys for almost four years, they provide great and fast service, excellent products and it's a pleasure to work with them! I highly recommend them",
    avatar: 'https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68792babba3cda3db93f790c_765cb68293d0972e4326545b36c4a57e_review-image.png',
  },
]

export default function ReviewsSection() {
  return (
    <section className="section-review u-spacing-inline u-spacing-block cc-bottom-0">
      <div className="container">
        <div style={{ marginBottom: 'clamp(1.25rem, 0.2377rem + 4.3192vw, 4.125rem)' }} className="section-header">
          <div>
            <h2 className="section-title heading-h2 u-text-color-dark u-text-center">
              <div>
                <span className="section-title-text">Reviews from</span>
                <span className="section-title-text u-text-color-green-100">Trustpilot</span>
              </div>
            </h2>
          </div>
        </div>
        <div
          data-autoplay-speed="3000"
          data-autoplay="true"
          data-slider="list"
          className="review_slider u-mx-auto"
          style={{ '--_items-length': 3, '--_animation-duration': '500ms' }}
        >
          {REVIEWS.map((review, i) => (
            <div key={i} data-slider="item" className="review_slider_slide" style={{ '--_position-index': i - 1 }}>
              <div className={`review-card ${review.colorClass}`}>
                <div className="review-card_header u-display-flex">
                  <div className="review-card_user u-display-flex">
                    <img
                      src={review.avatar}
                      loading="lazy"
                      width="56"
                      height="57"
                      alt=""
                      className="review-card_user_image u-overflow-hidden u-ratio-1"
                    />
                    <div>
                      <div className="heading-s2 u-text-color-dark u-weight-500">{review.name}</div>
                      <div className="review-card_user_text text-xl">{review.country}</div>
                    </div>
                  </div>
                  <time className="text-xl">{review.date}</time>
                </div>
                <div className="review-card_body">
                  <div className="review-card_body_top u-text-color-dark u-display-grid">
                    <img src={review.rating} loading="lazy" width="150" height="28" alt="" className="review-card_body_rating" />
                    <div className="text-xl">{review.title}</div>
                    <p className="heading-s1 u-weight-500">{review.text}</p>
                  </div>
                  <div className="review-card_body_bottom text-xl">
                    <span className="u-text-color-dark">Date of experience: </span>
                    <span>{review.expDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
