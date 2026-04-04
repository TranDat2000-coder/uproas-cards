import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import CTASection from '../components/CTASection'
import FormModal from '../components/FormModal'

const BLOG_CATEGORIES = ['All', 'Credit Card Tips', 'Ads Payment', 'Debit Cards', 'Virtual Card', 'Banking', 'Payment Process', 'Credit Card']

const BLOG_POSTS = [
  {
    id: 1,
    slug: 'understanding-css-grid',
    title: 'Understanding CSS Grid',
    category: 'Debit Cards',
    date: 'November 18, 2025',
    image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b9dece5b8772bf04a0ca_6840150cb3e507635c83fd39_image7.jpeg',
    excerpt: 'Learn how to master CSS Grid layout system for modern web design.',
  },
  {
    id: 2,
    slug: 'the-evolution-of-virtual-cards-how-fintech-is-redefining-online-payments',
    title: 'The Evolution of Virtual Cards: How Fintech is Redefining Online Payments',
    category: 'Virtual Card',
    date: 'August 20, 2025',
    image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b9dd78a2d627fa6a359d_684e82b09581639c3e12f91c_blog-thumnil.png',
    excerpt: 'Discover how virtual cards are revolutionizing the way we make online payments.',
  },
  {
    id: 3,
    slug: 'how-top-media-buyers-use-virtual-cards-to-scale-safely-o9i5r',
    title: 'How Top Media Buyers Use Virtual Cards to Scale Safely',
    category: 'Virtual Card',
    date: 'September 18, 2025',
    image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5ba58130e2a54a0635659_blog-thumnil.png',
    excerpt: 'Expert insights on using virtual cards for safe and scalable media buying.',
  },
]

export default function BlogPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const handleOpenModal = (url) => {
    setModalUrl(url)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const filteredPosts = BLOG_POSTS.filter((post) => {
    return activeCategory === 'All' || post.category === activeCategory
  })

  return (
    <div className="page-wrapper">
      <Navbar onOpenModal={handleOpenModal} />
      <main className="main">
        {/* Blog Header */}
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
              <div className="home-header_bg_shape u-cover u-select-none u-z-n1"></div>
            </div>
          </div>
        </header>

        {/* Blog Posts Section */}
        <section className="section-blog-post u-spacing-inline u-spacing-block-sm">
          <div className="container cc-1280">
            {/* Filter Form */}
            <div className="blog-filter_form-block w-form">
              <div className="blog-filter_block flex flex-wrap gap-2">
                <div
                  className={`blog-category-item cc-all ${activeCategory === 'All' ? 'is-list-active' : ''}`}
                  onClick={() => setActiveCategory('All')}
                >
                  <div>All</div>
                </div>
                <div className="blog-category-list-wrapper w-dyn-list">
                  <div role="list" className="blog-category-list w-dyn-items flex flex-wrap gap-2">
                    {BLOG_CATEGORIES.filter(c => c !== 'All').map((category) => (
                      <div key={category} role="listitem" className="blog-category-list-item w-dyn-item">
                        <label className="blog-category-item w-radio text-lg">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom blog-category-item_button w-radio-input ${activeCategory === category ? 'w--redirected-checked' : ''}`}
                          ></div>
                          <span
                            className={`blog-category-item_text w-form-label u-select-none ${activeCategory === category ? 'is-list-active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                          >
                            {category}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="w-dyn-list">
              <div role="list" className="blog-post_grid w-dyn-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <div key={post.id} role="listitem" className="w-dyn-item">
                    <div className="blog-post_card">
                      <a href={`/blog/${post.slug}`} className="blog-post_card-link w-inline-block">
                        <figure className="blog-post_figure u-position-relative u-overflow-hidden">
                          <img
                            alt={post.title}
                            src={post.image}
                            loading="lazy"
                            className="u-cover"
                          />
                        </figure>
                      </a>
                      <div className="blog-post_content">
                        <div className="blog-post_badge">{post.category}</div>
                        <a href={`/blog/${post.slug}`} className="blog-post_card-link w-inline-block">
                          <h2 className="blog-post_title u-line-clamp-2 heading-s2 u-text-color-dark u-weight-500">
                            {post.title}
                          </h2>
                        </a>
                        <div className="blog-post_date">{post.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No blog posts found in this category.</p>
              </div>
            )}
          </div>
        </section>

        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <FormModal isOpen={modalOpen} onClose={handleCloseModal} url={modalUrl} />
    </div>
  )
}
