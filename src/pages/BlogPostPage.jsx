import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import FormModal from '../components/FormModal'
import Navbar from '../components/Navbar'

const BLOG_POSTS = {
  'understanding-css-grid': {
    slug: 'understanding-css-grid',
    title: 'Understanding CSS Grid',
    category: 'Debit Cards',
    badgeClass: 'cc-purple',
    image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b9dcb1b1a2960b1a9142_6840150cb3e507635c83fd56_image18.jpeg',
    date: 'November 18, 2025',
    content: `
      <p>For online shopping or sending money to friends and family across borders, virtual wallets and cards have become essential in our daily lives. PayPal understands the importance of security and convenient payment solutions. It provides services and integrates every advantage of external systems into an ecosystem. Thus, you can use cashback with LinkPay cards and withdraw money to classic banks through one application. That's why it offers a seamless way to confirm banking profiles with this app or attach LinkPay.</p>
      <figure style="max-width:737pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b9dcd9aed9617a28d0f3_684937fbf2b38cb938c8d974_Blog-details-rich-image.png" alt="" loading="lazy"></div></figure>
      <h2>Link Your Banking Account & Verify PayPal Profile</h2>
      <p>Verifying financial payments on site offers many benefits: faster withdrawals, higher sending limits, and smoother overall payment experience. Let's walk you through each step:</p>
      <ul role="list">
        <li>Access Wallet. Log in your profile. Click on "Wallet" tab on main page.</li>
        <li>Locate "Link a Bank" option. Click on "+" symbol near "Banks debit cards".</li>
        <li>Enter personal details. Find your bank from a provided list or enter its name manually. Enter financial profile routing number and profile number.</li>
      </ul>
      <p>Make sure these details are accurate for PayPal to confirm bank account.</p>
      <h2>How Should I Verify an Account On Paypal?</h2>
      <p>There are two ways to verify banking account:</p>
      <ul role="list">
        <li>Instant confirmation (Available for select banks). In PayPal confirm bank account no deposits, only selected banks allow the "approve instantly" option. Upon tapping this option, you can log in through the app's interface.</li>
        <li>Two small deposits. If instant confirmation isn't available for your bank, opt for 2 small payments from $0.01-$0.99. You can receive them in 1-3 business days.</li>
      </ul>
      <p>Check personal bank statement and enter amounts received to verify your profile.</p>
      <h2>Linking via Computer: Step-by-Step Paypal Confirmation Guide</h2>
      <p>Here's a breakdown of linking payments via website:</p>
      <ul role="list">
        <li>Follow steps 1-3 outlined in previous section.</li>
        <li>If available, click "Confirm Instantly", follow on-screen prompts.</li>
        <li>If instant confirmation isn't available, record this expected deposit timeframe.</li>
        <li>Once you receive such deposits, return them to "Wallet".</li>
        <li>Enter dedicated amounts of two deposits received.</li>
        <li>Click "Submit," complete banking verification process.</li>
      </ul>
      <p>How long does it take PayPal to verify a banking account? It takes a maximum of 3 days. This guide is for those who prefer the comfort of their computer to confirm banking profiles.</p>
      <h2>Linking on Your Phone or Tablets</h2>
      <p>Here's what you should do with your personal phone or tablet:</p>
      <ul role="list">
        <li>Open a dedicated mobile app.</li>
        <li>Tap on "<strong>Wallet</strong>" icon.</li>
        <li>Tap on "+" sign next to "<strong>Banks and cards</strong>."</li>
        <li>Select "<strong>Banks</strong>" from the options provided or type yours in.</li>
        <li>Enter bank routing number, including profile number.</li>
        <li>Follow on-screen instructions for either instant confirmation (if available) or two small deposit methods.</li>
        <li>Get funds deposited instantly with instant confirmation. Now, within 3–5 days with 2 small payment deposit methods.</li>
      </ul>
      <p>With this guide, link deposits on the go!</p>
      <h2>Notes About 2 Small Deposits</h2>
      <p>Two small deposit verifications are just verification procedures; that's all! In addition, amounts are automatically credited for deposits within a few business days, and you must enter them accurately on the app.</p>
      <h2>Conclusion</h2>
      <p>Linking deposits to PayPal profile offers many benefits, plus enhances its overall financial experience. Utilizing services like LinkPay can significantly lower transaction fees by up to 70% for merchants and provide a seamless payment experience. This app has great potential which is worth comprehensive understanding and use.</p>
    `,
    relatedPosts: [
      {
        slug: 'the-evolution-of-virtual-cards-how-fintech-is-redefining-online-payments',
        title: 'The Evolution of Virtual Cards: How Fintech is Redefining Online Payments',
        category: 'Virtual Card',
        image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b9dd78a2d627fa6a359d_684e82b09581639c3e12f91c_blog-thumnil.png',
        date: 'August 20, 2025',
      },
      {
        slug: 'how-top-media-buyers-use-virtual-cards-to-scale-safely-o9i5r',
        title: 'How Top Media Buyers Use Virtual Cards to Scale Safely',
        category: 'Virtual Card',
        image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5ba58130e2a54a0635659_blog-thumnil.png',
        date: 'September 18, 2025',
      },
    ],
  },
  'the-evolution-of-virtual-cards-how-fintech-is-redefining-online-payments': {
    slug: 'the-evolution-of-virtual-cards-how-fintech-is-redefining-online-payments',
    title: 'The Evolution of Virtual Cards: How Fintech is Redefining Online Payments',
    category: 'Virtual Card',
    badgeClass: 'cc-purple',
    image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b9dc6ac0e48490046b92_6840150cb3e507635c83fd36_image12.jpeg',
    date: 'August 20, 2025',
    content: `
      <p>Ten years ago, the phrase "virtual card" barely registered outside developer forums or fraud prevention teams. Today, it's at the core of how modern businesses, agencies, and consumers pay online. And with global e-commerce projected to hit <a href="https://www.statista.com/statistics/379046/worldwide-retail-e-commerce-sales/?utm_source=chatgpt.com">$8 trillion by 2027</a>, fintech hasn't just adapted — it's rewriting the rules of how money moves.</p>
      <p>This isn't about flashy neobank apps or sleek UI. It's about control, security, and modular infrastructure that scales with digital life.</p>
      <figure style="max-width:737pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b9dcd9aed9617a28d0f3_684937fbf2b38cb938c8d974_Blog-details-rich-image.png" alt="" loading="lazy"></div></figure>
      <h2>From Disposable Tools to Core Infrastructure</h2>
      <p>Originally, virtual cards were seen as niche tools — often used for single-use purchases or to mask sensitive card info. But as fraud surged and payment complexity grew, companies started to realize the value of software-defined cards. Unlike physical cards, virtual cards are:</p>
      <ul role="list">
        <li>Instantly issued</li>
        <li>Programmatically controlled</li>
        <li>Easy to freeze, replace, or assign to specific merchants</li>
      </ul>
      <p>In other words, they speak the same language as the digital systems around them. That shift made them perfect for modern finance stacks — especially for media buyers, subscription-based businesses, SaaS teams, and decentralized teams handling global transactions.</p>
      <p><em>"Virtual cards gave us back control," says Jonas Kremer, a performance lead at a DTC brand spending over $400K/month on ads. "We went from chasing down failed transactions to setting automated rules that just worked."</em></p>
      <h2>Fintechs Took It Further</h2>
      <p>Traditional banks were slow to adopt this shift — so fintech stepped in. Players like Brex, Ramp, Airwallex, and LeadingCards began offering instant issuance, multi-user controls, and API access — features unheard of in the legacy banking world.</p>
      <p>Fintech's approach wasn't just about making cards virtual. It was about making them programmable.</p>
      <p><strong>One example:</strong></p>
      <p>A mid-size affiliate marketing team using <a href="https://leading-cards.webflow.io/"><strong>LeadingCards</strong></a> now issues over 150 VCCs monthly — one for each campaign and GEO. If Meta flags a payment source, the team can replace the card in seconds without affecting the rest of the ad stack. Before this setup, they relied on 3 shared bank cards — and lost 40% of campaign uptime in a single quarter due to flag chains and payment declines.</p>
      <h2>Why Businesses Are Going All In</h2>
      <p>Security was the starting point. But the real draw today is efficiency and scale. With virtual cards, finance teams no longer need to approve every budget increase or chase down receipts across multiple currencies. Everything is pre-assigned, capped, and logged in real time.</p>
      <p>One startup scaled from $20K to $250K/month in media buying — and never touched a spreadsheet. Why? Every ad account had its own virtual card. Spend caps and alerts were baked in. Accounting became plug-and-play.</p>
      <h2>Where It's Going Next</h2>
      <p>The next frontier?</p>
      <p>Context-aware, intelligent cards. Cards that react to spend patterns, learn from usage, and automatically adjust limits based on business logic.</p>
      <p>Several fintechs are already testing this: cards that auto-freeze if a campaign underperforms. Cards that trigger Slack alerts when a transaction hits an unusual category. Cards that automatically split a budget between departments based on historical spend.</p>
      <p>In parallel, integration with crypto rails is growing. Some platforms now let users fund virtual cards with USDT, USDC, or BTC — unlocking ad spend in countries where traditional banking access is limited or restricted.</p>
      <h2>Conclusion</h2>
      <p>Virtual cards started as a way to protect buyers. But with fintech behind the wheel, they've evolved into a core operating layer for modern businesses. More secure. More programmable. More scalable.</p>
      <p>They're not just the future of payments. For thousands of companies — from ad agencies to SaaS startups — they're already the present.</p>
      <p><strong>👉 Ready to upgrade your payment stack? Start issuing your own virtual cards with LeadingCards in minutes.</strong></p>
    `,
    relatedPosts: [
      {
        slug: 'understanding-css-grid',
        title: 'Understanding CSS Grid',
        category: 'Debit Cards',
        image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b9dece5b8772bf04a0ca_6840150cb3e507635c83fd39_image7.jpeg',
        date: 'November 18, 2025',
      },
      {
        slug: 'how-top-media-buyers-use-virtual-cards-to-scale-safely-o9i5r',
        title: 'How Top Media Buyers Use Virtual Cards to Scale Safely',
        category: 'Virtual Card',
        image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5ba58130e2a54a0635659_blog-thumnil.png',
        date: 'September 18, 2025',
      },
    ],
  },
  'how-top-media-buyers-use-virtual-cards-to-scale-safely-o9i5r': {
    slug: 'how-top-media-buyers-use-virtual-cards-to-scale-safely-o9i5r',
    title: 'How Top Media Buyers Use Virtual Cards to Scale Safely',
    category: 'Virtual Card',
    badgeClass: 'cc-purple',
    image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5ba4ff600b7a70db8dfcd_blog-main.png',
    date: 'September 18, 2025',
    content: `
      <p>According to a 2023 report by <a href="https://thepaymentsassociation.org/article/the-global-payments-report-2023/">The Payments Association</a>, over 60% of performance marketers have experienced campaign interruptions due to traditional card issues. The problem isn't with the platforms—it's with the payment infrastructure most teams still rely on. And that's where virtual cards are quietly becoming a game-changer.</p>
      <figure style="max-width:737pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b9dcd9aed9617a28d0f3_684937fbf2b38cb938c8d974_Blog-details-rich-image.png" alt="How Top Media Buyers Use Virtual Cards to Scale Safely"></div></figure>
      <h2>Why Media Buyers Are Ditching Traditional Cards</h2>
      <p>Traditional credit and debit cards were never built for performance marketing. They're tied to rigid bank processes, limited issuing models, and one-size-fits-all controls that don't reflect how modern media buying works.</p>
      <p>Let's say you're running campaigns across Meta, Google, and TikTok with multiple ad accounts. One flagged payment on your physical card—and suddenly every platform linked to it could go dark. That's not just inconvenient. It's a serious performance risk.</p>
      <p>Banks also don't understand the spending patterns of media buyers. High-frequency payments, cross-border transactions, and ad account testing can easily trigger fraud systems.</p>
      <p>It's no surprise that top agencies and affiliates are switching to virtual cards (VCCs). Unlike a physical card, a virtual card is purpose-built for flexibility:</p>
      <ul role="list">
        <li>It can be issued in seconds</li>
        <li>Set with exact limits</li>
        <li>Assigned to a single ad account or platform</li>
        <li>And replaced instantly if anything goes wrong</li>
      </ul>
      <p>Many buyers still route all ad spend through a single corporate or personal card. This creates a single point of failure. If Facebook or Google detects suspicious activity linked to that card—even if it's just a declined charge or minor mismatch in billing info—they may flag all accounts tied to that payment method.</p>
      <p>Platforms like Meta and TikTok are notorious for aggressively cross-checking payment sources. Their fraud systems don't just evaluate accounts—they trace card numbers, BINs, IPs, and even funding sources to uncover patterns. If your "master card" is linked to 10 accounts, and one violates policy? The other 9 can go with it.</p>
      <p>Virtual cards solve this by segmenting your risk. Instead of putting all your ad accounts on one card, you issue a unique VCC for each account or campaign. If one gets flagged or banned, the damage is contained.</p>
      <p>A mid-size team running 30+ ad accounts might use 30–50 separate virtual cards, each mapped to a campaign, geography, or traffic source.</p>
      <h2>How Virtual Cards Help You Scale Safely</h2>
      <p>Here's how top media buyers leverage VCCs to scale efficiently and protect performance:</p>
      <h4>1. Risk Isolation Per Campaign or Account</h4>
      <p>Instead of running everything through one card, buyers assign one virtual card per ad account. That way, if a platform like Facebook blocks or flags one payment method, the issue is siloed. You don't lose your entire campaign tree—only the affected branch.</p>
      <h4>2. Spending Caps Prevent Budget Leaks</h4>
      <p>Each VCC can be issued with exact limits: per day, per campaign, or per client. You avoid over-delivery and rogue charges, while also enforcing client-specific caps. No surprise invoices. No overspend.</p>
      <h4>3. BIN Flexibility for Geo Matching</h4>
      <p>Ad platforms often cross-check your payment method's country (via BIN) with your account's location. Using a provider with multiple BINs (like LeadingCards) helps you issue cards that match the GEO you're targeting—increasing approval rates and reducing bans.</p>
      <h4>4. Multi-Currency Support</h4>
      <p>VCCs can be issued in USD, EUR, or GBP—whatever matches the ad platform or reduces conversion fees. This is key for agencies and affiliates buying traffic across regions.</p>
      <h2>Operational Benefits for Pro Teams</h2>
      <p>With virtual cards, agencies and performance teams move from "manual chaos" to a structured payment ecosystem, where every card, spend, and campaign is accounted for.</p>
      <h4>Here's how:</h4>
      <h5>Clean, Accountable Budgeting</h5>
      <p>Assigning a dedicated card per campaign or client means every transaction is traceable. End-of-month reports no longer require sorting through messy shared statements—the card is the report.</p>
      <blockquote>💡Example: An agency with 12 clients can issue 12 cards. Each card's transaction log becomes that client's clean ad spend record—no overlaps, no guesswork.</blockquote>
      <h2>Real-Time Visibility</h2>
      <p>Modern VCC platforms offer dashboards that display live spend per card, per platform, or per buyer. If one campaign starts overspending or underdelivering, the team sees it immediately—and acts.</p>
      <h2>Role-Based Access & Controls</h2>
      <p>You can assign cards with custom limits to individual media buyers, departments, or freelancers—all without sharing a single login or exposing sensitive billing info.</p>
      <h4>Team setup example:</h4>
      <ul role="list">
        <li>Buyer A: 3 cards, $1K/day cap</li>
        <li>Buyer B: 5 cards, unlimited, but only for TikTok</li>
        <li>Ops: View-only rights to all cards</li>
        <li>Finance: Top-up and freeze access only</li>
      </ul>
      <h2>Workflow Automation via API</h2>
      <p>Top-tier platforms like LeadingCards allow API access, meaning agencies can:</p>
      <ul role="list">
        <li>Auto-issue a new card when a new campaign is created</li>
        <li>Auto-reload cards when spend hits 80%</li>
        <li>Auto-freeze cards when usage patterns look suspicious</li>
      </ul>
      <p>This turns ad spend operations from reactive to programmatic. Your team scales faster and spends smarter—without bottlenecks in finance.</p>
      <h2>Choosing the Right Card Solution</h2>
      <p>Not all virtual cards work equally well for media buying. A generic fintech card might get issued fast—but that doesn't guarantee Meta or Google will accept it, or that you'll get the GEO-matching BINs needed to run global campaigns.</p>
      <h4>Look for a provider that offers:</h4>
      <ul role="list">
        <li>Multiple GEO-verified BINs</li>
        <li>High acceptance on major ad platforms</li>
        <li>Instant card creation and smart spend controls</li>
      </ul>
      <p>LeadingCards was built for media buyers, affiliates, and agencies. With fast VCC issuance, strong BIN infrastructure, and multi-account support, it helps you scale without friction.</p>
      <p>Try <a href="https://leadingcards.media/">LeadingCards</a> and start issuing your first cards in minutes!</p>
    `,
    relatedPosts: [
      {
        slug: 'understanding-css-grid',
        title: 'Understanding CSS Grid',
        category: 'Debit Cards',
        image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b9dece5b8772bf04a0ca_6840150cb3e507635c83fd39_image7.jpeg',
        date: 'November 18, 2025',
      },
      {
        slug: 'the-evolution-of-virtual-cards-how-fintech-is-redefining-online-payments',
        title: 'The Evolution of Virtual Cards: How Fintech is Redefining Online Payments',
        category: 'Virtual Card',
        image: 'https://cdn.prod.website-files.com/686cbaeec5641801a89078e7/68a5b9dd78a2d627fa6a359d_684e82b09581639c3e12f91c_blog-thumnil.png',
        date: 'August 20, 2025',
      },
    ],
  },
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  const [copied, setCopied] = useState(false)

  const post = BLOG_POSTS[slug]

  const handleOpenModal = (url) => {
    setModalUrl(url)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (!post) {
    return (
      <div className="page-wrapper">
        <Navbar onOpenModal={handleOpenModal} />
        <main className="main">
          <div className="container cc-1280 py-20 text-center">
            <h1 className="heading-h4">Blog post not found</h1>
            <Link to="/blog" className="button-primary mt-8">Back to Blog</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

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
            <div className="u-spacing-inline">
              <div className="container cc-1061">
                <div className="blog-post_header cc-single-post">
                  <div className="blog-post_header_content">
                    <div className={`blog-post_badge ${post.badgeClass}`}>{post.category}</div>
                    <h1 className="blog-post_header_title heading-h6 u-color-typography-25">{post.title}</h1>
                  </div>
                  <figure className="blog-post_header_figure cc-single-post u-position-relative u-overflow-hidden">
                    <img src={post.image} loading="lazy" alt="" className="u-cover" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Blog Content */}
        <section className="section-blog-details u-spacing-inline u-spacing-block-sm cc-bottom-0">
          <div className="container cc-738">
            <div className="blog-detials_content">
              <div className="common-richtext w-richtext u-richtext" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Share Section */}
              <div className="share-social-site-content">
                <div className="share-text-wrapper">
                  <div className="sub-heading-2 color-t900">Share this Post</div>
                </div>
                <div className="social-all-icon">
                  <div className="share-social-icon-wrapper">
                    <button
                      id="copyLink"
                      onClick={handleCopyLink}
                      className={`copy-link w-inline-block ${copied ? 'copied' : ''}`}
                    >
                      <div className="social-icon-image-wrapper">
                        <img loading="lazy" src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68ca869bd69b50a659b174c5_copy-logo.webp" alt="copy logo" className="facbook-dark" />
                      </div>
                    </button>
                  </div>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="link-wrapper w-inline-block">
                    <div className="share-social-icon-wrapper">
                      <div className="copy-link">
                        <div className="social-icon-image-wrapper">
                          <img loading="lazy" src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/6859a1b78ea1c5e76e3c80f8_d757c96766c3ea81857622f3487cf577_Facebook.webp" alt="Facebook" className="facbook-dark" />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="link-wrapper w-inline-block">
                    <div className="share-social-icon-wrapper">
                      <div className="copy-link">
                        <div className="social-icon-image-wrapper">
                          <img loading="lazy" src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/68ca869bd69b50a659b174c7_X-logo.webp" alt="X" className="facbook-dark" />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="link-wrapper w-inline-block">
                    <div className="share-social-icon-wrapper">
                      <div className="copy-link">
                        <div className="social-icon-image-wrapper">
                          <img loading="lazy" src="https://cdn.prod.website-files.com/682e10925e475b2f723fc5bc/6859a1b777db08479b8f4185_d01f97baa5835e76352c1d998ba9ee5b_Linkedin.webp" alt="Linkedin" className="facbook-dark" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="section-related-blog u-spacing-inline u-spacing-block-sm">
          <div className="container cc-1278">
            <div className="w-dyn-list">
              <div role="list" className="blog-post_grid w-dyn-items grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.slug} role="listitem" className="w-dyn-item">
                    <div className="blog-post_card">
                      <Link to={`/blog/${relatedPost.slug}`} className="blog-post_card-link w-inline-block">
                        <figure className="blog-post_figure u-position-relative u-overflow-hidden">
                          <img alt={relatedPost.title} src={relatedPost.image} loading="lazy" className="u-cover" />
                        </figure>
                      </Link>
                      <div className="blog-post_content">
                        <div className="blog-post_badge">{relatedPost.category}</div>
                        <Link to={`/blog/${relatedPost.slug}`} className="blog-post_card-link w-inline-block">
                          <h2 className="blog-post_title u-line-clamp-2 heading-s2 u-text-color-dark u-weight-500">
                            {relatedPost.title}
                          </h2>
                        </Link>
                        <div className="blog-post_date">{relatedPost.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FormModal isOpen={modalOpen} onClose={handleCloseModal} url={modalUrl} />
    </div>
  )
}
