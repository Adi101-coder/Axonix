import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { img } from './images'

const ease = [0.22, 1, 0.36, 1] as const

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

function Pill({ children }: { children: ReactNode }) {
  return <span className="pill">{children}</span>
}

function Btn({
  children,
  href = '#contact',
  variant = 'dark',
}: {
  children: ReactNode
  href?: string
  variant?: 'dark' | 'light' | 'ghost'
}) {
  return (
    <motion.a
      href={href}
      className={`btn btn-${variant}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  )
}

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const dur = 1400
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(to * eased))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to])

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}

const logos = [img.logoA, img.logoB, img.logoC, img.logoD]
const services = [
  { icon: img.iconNlp, label: 'NATURAL LANGUAGE PROCESSING (NLP)' },
  { icon: img.iconStrategy, label: 'AI STRATEGY & CONSULTING' },
  { icon: img.iconCustom, label: 'CUSTOM AI DEVELOPMENT' },
  { icon: img.iconMl, label: 'MACHINE LEARNING MODELS' },
  { icon: img.iconRpa, label: 'AUTOMATION & RPA' },
]

const cases = [
  {
    brand: 'Fresh Care',
    image: img.caseFresh,
    copy: 'Integrated AI-driven product recommendations based on real-time user behavior and historical data.',
  },
  {
    brand: 'Kondam Loius',
    image: img.caseKondam,
    copy: 'Integrated AI-driven product recommendations based on real-time user behavior and historical data.',
  },
  {
    brand: 'Lokos Estate',
    image: img.caseLokos,
    copy: 'Integrated AI-driven product recommendations based on real-time user behavior and historical data.',
  },
]

const faqs = [
  {
    q: 'Why is a strong brand identity or website important?',
    a: 'A robust brand identity and website serve as the face of your business, shaping how it is perceived by potential customers. They not only convey professionalism but also establish trust and credibility, vital factors in today’s competitive market.',
  },
  {
    q: 'What service do you offer?',
    a: 'We design, build, and deploy custom AI systems — including automation, machine learning models, NLP, and strategy consulting — tailored to your workflows and industry.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Our monthly plans can be cancelled at any time. We’ll wrap remaining work cleanly and hand over everything that’s been delivered.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We partner with companies across finance, healthcare, e-commerce and more, working remotely with teams worldwide.',
  },
  {
    q: 'How long before I see results?',
    a: 'Most clients see measurable workflow gains within the first 4–8 weeks, depending on scope. We start with a focused assessment so impact shows up early.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We specialize in finance, healthcare, e-commerce, and operations-heavy businesses that need automation, analytics, and custom AI systems.',
  },
]

export default function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [slide, setSlide] = useState(0)
  const [homeOpen, setHomeOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % cases.length)
    }, 5200)
    return () => window.clearInterval(id)
  }, [])

  const current = cases[slide]
  const prev = cases[(slide + cases.length - 1) % cases.length]
  const next = cases[(slide + 1) % cases.length]

  return (
    <div className="page">
      <nav className="nav">
        <a href="#top" className="brand">
          <img src={img.logo} alt="Axonix" />
        </a>
        <ul className="nav-links">
          <li
            className="has-menu"
            onMouseEnter={() => setHomeOpen(true)}
            onMouseLeave={() => setHomeOpen(false)}
          >
            <a href="#top">
              Home <span className="caret">▾</span>
            </a>
            <AnimatePresence>
              {homeOpen && (
                <motion.div
                  className="menu"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                >
                  <a href="#top">Home</a>
                  <a href="#about">About us</a>
                  <a href="#features">Features</a>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li
            className="has-menu"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <a href="#about">
              Pages <span className="caret">▾</span>
            </a>
            <AnimatePresence>
              {pagesOpen && (
                <motion.div
                  className="menu"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                >
                  <a href="#about">About us</a>
                  <a href="#cases">Case Study</a>
                  <a href="#pricing">Pricing</a>
                  <a href="#blog">Blog</a>
                  <a href="#contact">Contact</a>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>
        <Btn>Book a Demo</Btn>
      </nav>

      <header className="hero" id="top">
        <img className="hero-bg" src={img.heroBg} alt="" />
        <Reveal className="hero-copy">
          <Pill>
            <img src={img.badge} alt="" />
            AI AUTOMATION FOR BUSINESSES
          </Pill>
          <h1>
            Smarter Solutions,
            <br />
            Powered by AI
          </h1>
          <p>
            We build intelligent tools, systems, and strategies that help businesses scale,
            automate, and innovate—faster.
          </p>
          <div className="hero-actions">
            <Btn>Book a Demo</Btn>
            <Btn href="#cases" variant="light">
              Explore Our Work
            </Btn>
          </div>
        </Reveal>
        <motion.img
          className="hero-hands"
          src={img.heroHands}
          alt=""
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease }}
        />
      </header>

      <section className="logos">
        <p>Trusted by 2.200 Companies</p>
        <div className="marquee">
          <div className="marquee-track">
            {[...logos, ...logos, ...logos, ...logos].map((src, i) => (
              <img key={i} src={src} alt="Logoipsum" />
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <Reveal>
          <div className="center">
            <Pill>ABOUT US</Pill>
            <h2 className="lead">
              We are a forward-thinking AI agency focused on transforming businesses with
              intelligent automation, machine learning, and predictive analytics. Our team of
              data scientists, engineers, and creatives craft tailored AI solutions that solve
              real-world challenges across industries.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about-panel">
            <h3>
              Empowering the Future
              <br />
              with Artificial Intelligence
            </h3>
            <img className="cubes" src={img.cubes} alt="" />
            <div className="stats">
              <article>
                <strong>
                  $<CountUp to={5} />M+
                </strong>
                <span>Performance Snapshot</span>
              </article>
              <article>
                <strong>
                  <CountUp to={250} />+
                </strong>
                <span>Digital Reach</span>
              </article>
              <article>
                <strong>
                  <CountUp to={98} />%
                </strong>
                <span>Client Trust</span>
              </article>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="features" id="features">
        <Reveal className="center">
          <Pill>OUR FEATURES</Pill>
          <h2>
            Partner with an AI agency
            <br />
            delivering smart solutions.
          </h2>
          <p className="sub">
            We’ve partnered with companies in finance, healthcare, e-commerce, and more to
            deliver transformative AI solutions.
          </p>
        </Reveal>
        <div className="feature-grid">
          {[
            {
              src: img.analytics,
              title: 'Real-Time Analytics',
              copy: 'Stay ahead with accurate, real-time performance tracking.',
              delay: 0,
            },
            {
              src: img.growth,
              title: 'AI-Driven Growth',
              copy: 'Make smarter moves with accurate, real-time business insights.',
              delay: 0.08,
            },
            {
              src: img.chat,
              title: 'Superfast AI response',
              copy: 'Discover how Al can enhance every aspect of your web design workflow.',
              delay: 0.16,
            },
          ].map((card) => (
            <Reveal key={card.title} delay={card.delay}>
              <article className="feature-card">
                <div className="feature-visual">
                  <img src={card.src} alt="" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="services">
        <div className="marquee-track slow">
          {[...services, ...services, ...services].map((s, i) => (
            <span className="service-chip" key={i}>
              <img src={s.icon} alt="" />
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <section className="process">
        <Reveal>
          <Pill>
            <img src={img.iconWorkflow} alt="" className="mini" />
            OUR PROCESS
          </Pill>
          <h2>
            A transparent process of
            <br />
            collaboration and feedback
          </h2>
          <p className="sub left">
            We are a forward-thinking AI agency focused on transforming businesses with
            intelligent automation, machine learning, and predictive analytics.
          </p>
          <ul className="steps">
            <li>
              <span className="step-icon">
                <img src={img.iconWorkflow} alt="" />
              </span>
              <div>
                <h4>Workflow Assessment</h4>
                <p>
                  We begin by examining your existing workflows to identify where AI can
                  deliver the greatest impact.
                </p>
              </div>
            </li>
            <li>
              <span className="step-icon">
                <img src={img.iconDeploy} alt="" />
              </span>
              <div>
                <h4>Deploy with Confidence</h4>
                <p>
                  Our team develops custom AI systems built around your goals, ensuring safe
                  and reliable deployment.
                </p>
              </div>
            </li>
            <li>
              <span className="step-icon">
                <img src={img.iconSupport} alt="" />
              </span>
              <div>
                <h4>Ongoing Support & Optimization</h4>
                <p>
                  After deployment, we provide support and refine your AI systems to keep them
                  performing at their best.
                </p>
              </div>
            </li>
          </ul>
          <Btn>Book a Demo</Btn>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="process-visual">
            <img className="shake" src={img.handshake} alt="" />
            <img className="shake-overlay" src={img.handshakeOverlay} alt="" />
            <div className="client-card">
              <img src={img.nicolas} alt="Nicolas Jakson" />
              <div>
                <strong>Nicolas Jakson</strong>
                <span>San Francisco, CA</span>
              </div>
              <div className="client-meta">
                <strong>$180.64</strong>
                <span>8 Orders</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="why" id="why">
        <Reveal className="center">
          <Pill>WHY CHOOSE US?</Pill>
          <h2>
            Unlock the potential of
            <br />
            AI for your business.
          </h2>
          <p className="sub">
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </Reveal>
        <div className="why-grid">
          {[
            [img.why1, 'Fast, scalable, and tailored solutions', 'Send, receive, and manage payments—all in one place, fully encrypted and compliant.'],
            [img.why2, 'Hands-on AI expertise, not just theory', 'Connect with your favorite tools: QuickBooks, Stripe, Xero, Plaid, and more.'],
            [img.why3, 'Results-driven with measurable ROI', 'Stay ahead of regulations with automated KYC/AML checks and audit trails.'],
            [img.why4, 'Cross-industry experience', 'Send, receive, and manage payments—all in one place, fully encrypted and compliant.'],
            [img.why5, 'Security and privacy at every step', 'Connect with your favorite tools: QuickBooks, Stripe, Xero, Plaid, and more.'],
          ].map(([icon, title, copy], i) => (
            <Reveal key={title} delay={i * 0.05}>
              <article className="why-card">
                <span className="why-icon">
                  <img src={icon} alt="" />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <article className="why-card dark">
              <h3>
                We’ve partnered with companies in <em>e-commerce</em> and more to deliver
                transformative AI solutions.
              </h3>
              <Btn href="#contact" variant="ghost">
                Get Started
              </Btn>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="cases" id="cases">
        <Reveal className="center">
          <h2>Proven Results, Real Impact</h2>
          <p className="sub">
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </Reveal>
        <div className="case-stage">
          <button className="case-side left" onClick={() => setSlide((s) => (s + cases.length - 1) % cases.length)} aria-label="Previous">
            <img src={prev.image} alt="" />
          </button>
          <AnimatePresence mode="wait">
            <motion.article
              key={current.brand}
              className="case-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease }}
            >
              <img className="case-photo" src={current.image} alt={current.brand} />
              <div className="case-body">
                <img className="case-logo" src={img.caseLogo} alt="Logoipsum" />
                <h3>{current.brand}</h3>
                <p>{current.copy}</p>
                <Btn href="#contact">See Case Study</Btn>
                <div className="case-metrics">
                  <div>
                    <strong>90%</strong>
                    <span>Average selling product</span>
                  </div>
                  <div>
                    <strong>43%</strong>
                    <span>Improved team output</span>
                  </div>
                </div>
              </div>
              <img className="case-photo right-photo" src={img.caseRight} alt="" />
            </motion.article>
          </AnimatePresence>
          <button className="case-side right" onClick={() => setSlide((s) => (s + 1) % cases.length)} aria-label="Next">
            <img src={next.image} alt="" />
          </button>
        </div>
      </section>

      <section className="quotes" id="testimonials">
        <Reveal className="center">
          <Pill>TESTIMONIALS</Pill>
          <h2>What Our Clients Say</h2>
          <p className="sub">
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </Reveal>
        <div className="quote-grid">
          {[
            ['“Their predictive analytics helped us forecast trends more accurately than our previous tools. It’s like having a crystal ball for our business.”', img.avatar1, 'Samson Betawi'],
            ['“Routine tasks are now fully automated, and we can focus on strategic work that really moves the needle. It’s like having an extra set of hands—only smarter.”', img.avatar2, 'Gile Mandra'],
            ['“The AI chatbot handles over 80% of our support tickets—and customers love the 24/7 response time.”', img.avatar3, 'Jamie Rundals'],
            ['“Their helped us automate 70% of our manual work in under 3 months and helped triple our online engagement just in six months. Real game-changer!”', img.avatar4, 'Bills Terra'],
            ['“Before this, we were juggling spreadsheets and manual updates. Now everything’s automated. “', img.avatar5, 'Kalio Huosen'],
          ].map(([quote, avatar, name], i) => (
            <Reveal key={name} delay={i * 0.05}>
              <article className="quote-card">
                <img className="ql" src={img.quoteLogo} alt="Logoipsum" />
                <p>{quote}</p>
                <div className="quote-foot">
                  <img src={avatar} alt="" />
                  <div>
                    <strong>{name}</strong>
                    <span>CMO at GreenTech</span>
                  </div>
                  <span className="rating">★ 4.9</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pricing" id="pricing">
        <Reveal className="center">
          <Pill>PRICING</Pill>
          <h2>Flexible Plans for Every Stage</h2>
          <p className="sub">
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </Reveal>
        <div className="price-grid">
          {([
            ['Starter', '$999', false],
            ['Growth', '$2.999', true],
            ['Enterprise', '$3.200', false],
          ] as const).map(([name, price, popular], i) => (
            <Reveal key={String(name)} delay={i * 0.08}>
              <article className={`price-card ${popular ? 'popular' : ''}`}>
                {popular ? <span className="badge">Most Popular</span> : null}
                <h3>{name}</h3>
                <p className="amount">
                  {price} <small>/mo</small>
                </p>
                <p className="price-copy">
                  Integrated AI-driven product recommendations based on real-time user behavior.
                </p>
                <ul>
                  {['1 Campaign', 'Monthly Reports', 'Email Support', 'Priority Support', '4x Revisions'].map(
                    (item) => (
                      <li key={item}>
                        <img src={img.check} alt="" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
                <Btn href="#contact" variant={popular ? 'dark' : 'light'}>
                  Choose Plan
                </Btn>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="blog" id="blog">
        <Reveal className="center">
          <Pill>BLOG & INSIGHT</Pill>
          <h2>Insights on AI, Automation & Innovation</h2>
          <p className="sub">Explore trends, case studies, and insights from our AI experts.</p>
        </Reveal>
        <div className="blog-grid">
          {[
            [img.blog1, 'Explore trends, case studies, and insights from our AI experts.'],
            [img.blog2, 'Discover trends, case studies, and insights from our AI specialists.'],
            [img.blog3, 'Explore the latest trends, success stories,from our AI experts.'],
          ].map(([src, title], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="blog-card">
                <img src={src} alt="" />
                <div>
                  <h3>{title}</h3>
                  <Btn href="#blog" variant="light">
                    Read Blog
                  </Btn>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="faq" id="contact">
        <Reveal>
          <Pill>FREQUENTLY ASKED QUESTIONS</Pill>
          <h2>
            Questions? We’re
            <br />
            here to assist!
          </h2>
          <p className="sub left">
            Position your brand at the forefront, leading trends, captivating audiences, and
            creating lasting market impressions.
          </p>
          <Btn>Contact Us</Btn>
        </Reveal>
        <div className="faq-list">
          {faqs.map((item, i) => {
            const open = openFaq === i
            return (
              <motion.article
                key={item.q}
                className={`faq-item ${open ? 'open' : ''}`}
                layout
              >
                <button type="button" onClick={() => setOpenFaq(open ? -1 : i)}>
                  <span>{item.q}</span>
                  <img src={img.chevron} alt="" className={open ? 'rot' : ''} />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="cta">
        <Reveal>
          <div className="cta-card">
            <div>
              <Pill>
                <img src={img.badge} alt="" />
                AI AUTOMATION FOR BUSINESSES
              </Pill>
              <h2>Let’s Build the Future, Together</h2>
              <p>
                Whether you’re exploring AI for the first time or scaling an existing system,
                we’re ready to help.
              </p>
            </div>
            <Btn>Book a Free Consultation</Btn>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <img className="footer-art" src={img.footerCubes} alt="" />
        <div className="footer-grid">
          <div>
            <h3>Axonix.</h3>
            <p>Your AI-Powered Workflow, Reinvented.</p>
            <a href="mailto:hello@Axonix.com">hello@Axonix.com</a>
          </div>
          <div>
            <span>QUICK LINK</span>
            <a href="#about">About Us</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#cases">Case Study</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <span>SOCIAL MEDIA</span>
            <a href="#">YouTube</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
          <div>
            <span>OUR OFFICE</span>
            <p>
              88 Market Street, San
              <br />
              Francisco, CA 94103
              <br />
              United States
            </p>
            <span>OUR PHONE</span>
            <p>+117 2345 6948</p>
          </div>
        </div>
        <div className="footer-bar">
          <small>© 2025 Axonix. All Rights Reserved.</small>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Condition</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
