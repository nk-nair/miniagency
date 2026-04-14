import { useEffect, useRef, useState } from 'react'

// ---------- Scroll reveal hook ----------
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// ---------- Data ----------
const services = [
  { n: '01', name: 'Corporate Films', desc: 'Scripted, shot, and cut end-to-end.' },
  { n: '02', name: 'Short Films', desc: 'Stories, powerfully told.' },
  { n: '03', name: 'Personal Branding', desc: 'Founder and leader narratives.' },
  { n: '04', name: 'Social Media', desc: 'Scroll-stopping content, managed.' },
  { n: '05', name: 'Brand Campaigns', desc: 'Ads and campaign shoots.' },
  { n: '06', name: 'Branding', desc: 'Identity systems and visual language.' },
  { n: '07', name: 'Product Shoots', desc: 'Photo and video that sells.' },
  { n: '08', name: 'Event Coverage', desc: 'Concerts, conferences, culture.' },
]

const pillars = [
  {
    n: '01',
    title: 'Storytelling at the Core',
    body: 'Every brand has a unique story. We bring it to life in a way that resonates deeply with your audience. Each project is a creative journey where your personality and vision lead.',
  },
  {
    n: '02',
    title: 'Boutique, Yet Bold',
    body: 'Being small makes us agile, responsive, and focused. You are never just another account — you get personal attention from a team of passionate creatives.',
  },
  {
    n: '03',
    title: 'Quality Without the Hefty Price Tag',
    body: 'Same high-quality services as large agencies, delivered through a leaner structure. Brilliant creative should not demand an inflated budget.',
  },
  {
    n: '04',
    title: 'Collaborative, Not Transactional',
    body: 'We see clients as partners. Working closely together ensures the end result truly reflects your brand’s essence and turns projects into lasting success stories.',
  },
]

const works = [
  { t: 'The Green Hero of India', cat: 'Films', tag: 'Documentary', img: 'green-hero.jpg', span: 'md:col-span-2 md:row-span-2' },
  { t: 'A Day in a Life of an Orthopedic Surgeon', cat: 'Films', tag: 'Vlog', img: 'orthopedic.jpg' },
  { t: 'Crest Container Lines', cat: 'Films', tag: 'Corporate', img: 'crest.jpg' },
  { t: 'CMR Surgical Equipments', cat: 'Films', tag: 'Corporate', img: 'cmr-surgical.jpg' },
  { t: 'LTTS × Forest Creators', cat: 'Films', tag: 'CSR', img: 'ltts-forest.jpg' },
  { t: 'Shreeji Hospital', cat: 'Films', tag: 'Corporate', img: 'shreeji.jpg' },
  { t: 'IIM Nagpur', cat: 'Photography', tag: 'Architecture', img: 'iim-nagpur.jpg', span: 'md:col-span-2' },
  { t: 'Kilitch Drugs', cat: 'Photography', tag: 'Industrial', img: 'kilitch.jpg' },
  { t: 'Sports Ortho', cat: 'Branding', tag: 'Identity', img: 'sports-ortho.jpg' },
  { t: 'All Women’s Clinic', cat: 'Branding', tag: 'Identity', img: 'all-womens-clinic.jpg' },
  { t: 'Forest Creators', cat: 'Social Media', tag: 'Reels', img: 'forest-creators.jpg' },
  { t: 'Maahi Ve', cat: 'Films', tag: 'Ad Campaign', img: 'maahi-ve.jpg' },
]

const categories = ['All', 'Films', 'Branding', 'Social Media', 'Photography']

const clients = [
  'L&T Technology Services',
  'Forest Creators',
  'Sports Ortho',
  'Crest Container Lines',
  'Shreeji Hospital',
  'Latest Style Design',
  'All Women’s Clinic',
  'Kilitch Drugs',
  'IIM Nagpur',
  'CMR Surgical',
]

// ---------- Components ----------
function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    ['About', '#about'],
    ['Work', '#work'],
    ['Services', '#services'],
    ['Contact', '#contact'],
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink/70 border-b hair-border">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-sm tracking-tightest uppercase">
          The Mini Agency<span className="text-coral">.</span>
        </a>
        <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em]">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="hover:text-coral transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-block text-xs uppercase tracking-[0.2em] border hair-border px-4 py-2 hover:bg-bone hover:text-ink transition-colors">
          Start a project
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-xs uppercase tracking-[0.2em]">
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t hair-border">
          <div className="px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-[0.2em]">
            {links.map(([l, h]) => (
              <a key={l} href={h} onClick={() => setOpen(false)} className="hover:text-coral">{l}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end pt-24 pb-10 px-6 md:px-12 grain overflow-hidden">
      {/* Background placeholder video slot */}
      {/* <video className="absolute inset-0 w-full h-full object-cover opacity-20" autoPlay muted loop playsInline src="/hero.mp4" /> */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,165,152,0.08),_transparent_60%)]" />

      <div className="relative max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-dim mb-8">
          <span className="text-coral">00</span>
          <span className="h-px w-10 bg-dim" />
          <span>Mumbai · Nagpur</span>
        </div>

        <h1 className="font-display uppercase leading-[0.82] tracking-tightest text-[clamp(3.5rem,14vw,18rem)]">
          <span className="block">The Mini</span>
          <span className="block">
            Agency<span className="text-coral">.</span>
          </span>
        </h1>

        <div className="mt-10 grid md:grid-cols-12 gap-6 items-end">
          <p className="md:col-span-6 text-lg md:text-xl text-bone/70 max-w-xl">
            A boutique creative media production studio telling brand stories that actually
            land — through film, design, and content.
          </p>
          <div className="md:col-span-6 md:text-right">
            <span className="font-serif italic text-2xl md:text-3xl text-bone/90">
              Let’s create something big.
            </span>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-dim">
          <span className="h-px w-8 bg-coral" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="border-t hair-border px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel n="01" label="About" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-6 mt-16">
          <div className="md:col-span-5 reveal">
            <h3 className="text-xs uppercase tracking-[0.3em] text-coral mb-5">Vision</h3>
            <p className="text-2xl md:text-3xl font-display uppercase leading-tight">
              To be the go-to boutique agency that transforms brands through compelling
              storytelling and innovative media production.
            </p>
          </div>

          <div className="md:col-span-1" />

          <div className="md:col-span-6 reveal">
            <h3 className="text-xs uppercase tracking-[0.3em] text-coral mb-5">Mission</h3>
            <p className="text-lg md:text-xl text-bone/80 leading-relaxed">
              We deliver exceptional, affordable creative solutions that resonate with
              audiences. Our passionate team collaborates closely with clients to craft
              engaging narratives that elevate brands and drive meaningful connections.
            </p>
          </div>
        </div>

        <blockquote className="reveal mt-28 md:mt-40 border-t hair-border pt-14">
          <p className="font-serif italic text-4xl md:text-7xl leading-[1.05] max-w-5xl">
            “We believe creativity should be both{' '}
            <span className="text-coral">brilliant</span> and{' '}
            <span className="text-coral">affordable</span>.”
          </p>
        </blockquote>
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section className="border-t hair-border px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel n="02" label="What Sets Us Apart" />

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-bone/10">
          {pillars.map((p) => (
            <div key={p.n} className="bg-ink p-8 md:p-12 reveal group hover:bg-ink2 transition-colors">
              <div className="flex items-start gap-6">
                <span className="font-display text-coral text-xl mt-2">{p.n}</span>
                <div>
                  <h4 className="font-display uppercase text-2xl md:text-3xl leading-tight mb-4 group-hover:text-coral transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-bone/70 leading-relaxed">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="border-t hair-border px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel n="03" label="Services" />

        <div className="mt-16 border-t hair-border">
          {services.map((s) => (
            <a
              key={s.n}
              href="#contact"
              className="reveal group grid grid-cols-12 gap-6 items-baseline py-6 md:py-8 border-b hair-border hover:bg-ink2 px-2 md:px-4 transition-colors"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-xs text-dim">{s.n}</span>
              <h4 className="col-span-10 md:col-span-6 font-display uppercase text-3xl md:text-5xl tracking-tightest group-hover:text-coral group-hover:translate-x-2 transition-all">
                {s.name}
              </h4>
              <p className="col-span-12 md:col-span-4 text-sm text-bone/60 md:text-right">
                {s.desc}
              </p>
              <span className="hidden md:block md:col-span-1 text-right text-coral opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? works : works.filter((w) => w.cat === filter)

  return (
    <section id="work" className="border-t hair-border px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel n="04" label="Selected Work" />

        <div className="mt-12 flex flex-wrap gap-2 md:gap-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-xs uppercase tracking-[0.2em] px-4 py-2 border transition-colors ${
                filter === c ? 'bg-bone text-ink border-bone' : 'hair-border hover:border-coral hover:text-coral'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] md:auto-rows-[280px] gap-4">
          {shown.map((w, i) => (
            <figure
              key={w.t + i}
              className={`reveal relative overflow-hidden bg-ink2 group cursor-pointer ${w.span || ''}`}
            >
              {/* Real image with grayscale-to-color hover */}
              {w.img ? (
                <img
                  src={`./work/${w.img}`}
                  alt={w.t}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-ink2 via-ink to-ink2 group-hover:scale-105 transition-transform duration-700" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(135deg,transparent_25%,rgba(232,165,152,0.1)_50%,transparent_75%)] transition-opacity" />

              <figcaption className="absolute inset-0 p-6 flex flex-col justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-coral">{w.tag}</span>
                <div>
                  <h5 className="font-display uppercase text-xl md:text-2xl leading-tight">{w.t}</h5>
                  <div className="mt-2 text-xs text-bone/60">{w.cat}</div>
                </div>
              </figcaption>
              <div className="absolute bottom-6 right-6 text-coral opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Clients() {
  const row = [...clients, ...clients]
  return (
    <section className="border-t hair-border py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12">
        <SectionLabel n="05" label="Clients" />
      </div>
      <div className="relative">
        <div className="flex gap-16 md:gap-24 marquee-track whitespace-nowrap">
          {row.map((c, i) => (
            <span
              key={i}
              className="font-display uppercase text-3xl md:text-5xl text-bone/40 hover:text-coral transition-colors"
            >
              {c}
              <span className="text-coral ml-16 md:ml-24">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-12 text-right text-xs uppercase tracking-[0.3em] text-dim">
        and more —
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New project inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:contact@theminiagency.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="border-t hair-border px-6 md:px-12 py-24 md:py-36 grain">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel n="06" label="Contact" />

        <h2 className="reveal mt-16 font-display uppercase text-[clamp(3rem,10vw,11rem)] leading-[0.85] tracking-tightest">
          Let’s create <br />
          <span className="italic font-serif normal-case text-coral">something</span> big<span className="text-coral">.</span>
        </h2>

        <div className="mt-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-10">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-coral mb-3">Email</div>
              <a href="mailto:contact@theminiagency.com" className="text-xl md:text-2xl hover:text-coral transition-colors">
                contact@theminiagency.com
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-coral mb-3">Phone</div>
              <div className="text-xl md:text-2xl space-y-1">
                <div><a href="tel:+918073664991" className="hover:text-coral">+91 80736 64991</a></div>
                <div><a href="tel:+917738526985" className="hover:text-coral">+91 77385 26985</a></div>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-coral mb-3">Studios</div>
              <div className="text-xl md:text-2xl">Mumbai &nbsp;·&nbsp; Nagpur</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-7 space-y-6">
            <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <Field label="Tell us about your project" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} />
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-4 font-display uppercase text-2xl md:text-3xl border-b-2 border-coral pb-2 hover:text-coral transition-colors"
            >
              Send <span className="text-coral">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, type = 'text', textarea }) {
  return (
    <label className="block border-b hair-border pb-3 focus-within:border-coral transition-colors">
      <span className="block text-[10px] uppercase tracking-[0.3em] text-dim mb-2">{label}</span>
      {textarea ? (
        <textarea
          required
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent outline-none text-lg resize-none"
        />
      ) : (
        <input
          required
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent outline-none text-lg"
        />
      )}
    </label>
  )
}

function Footer() {
  return (
    <footer className="border-t hair-border px-6 md:px-12 py-12">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <div className="font-display uppercase text-4xl md:text-6xl tracking-tightest leading-none">
            TMA<span className="text-coral">.</span>
          </div>
          <div className="mt-4 text-xs uppercase tracking-[0.2em] text-dim">
            Mumbai · Nagpur · India
          </div>
        </div>
        <div className="flex gap-6 text-xs uppercase tracking-[0.2em] text-dim">
          <a href="#" className="hover:text-coral">Instagram</a>
          <a href="#" className="hover:text-coral">LinkedIn</a>
          <a href="#" className="hover:text-coral">Vimeo</a>
          <a href="#" className="hover:text-coral">YouTube</a>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-dim">
          © {new Date().getFullYear()} The Mini Agency
        </div>
      </div>
    </footer>
  )
}

function SectionLabel({ n, label }) {
  return (
    <div className="reveal flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-dim">
      <span className="text-coral">{n}</span>
      <span className="h-px w-10 bg-dim" />
      <span>{label}</span>
    </div>
  )
}

// ---------- App ----------
export default function App() {
  useReveal()
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Services />
        <Work />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
