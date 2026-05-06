import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import LiveProjectButton from './LiveProjectButton'

const SCREENSHOT_BASE = `${import.meta.env.BASE_URL}screenshots/`

const PROJECTS = [
  {
    num: '01',
    category: 'Client',
    name: 'Toyota Protect',
    tech: '.NET Core Web API | JWT | 3rd Party API',
    url: 'https://toyota.ttibi.co.in',
    img1: `${SCREENSHOT_BASE}toyota-top.png`,
    img2: `${SCREENSHOT_BASE}toyota-scroll.png`,
    img3: `${SCREENSHOT_BASE}toyota-full.png`,
  },
  {
    num: '02',
    category: 'Client',
    name: 'Vencru',
    tech: '.NET Core API | Shopify | Webhooks',
    url: 'https://vencru.com',
    img1: `${SCREENSHOT_BASE}vencru-top.png`,
    img2: `${SCREENSHOT_BASE}vencru-scroll.png`,
    img3: `${SCREENSHOT_BASE}vencru-full.png`,
  },
  {
    num: '03',
    category: 'Client',
    name: 'Credentia',
    tech: '.NET Core API | AWS | Microservices',
    url: 'https://credentia.com',
    img1: `${SCREENSHOT_BASE}credentia-top.png`,
    img2: `${SCREENSHOT_BASE}credentia-scroll.png`,
    img3: `${SCREENSHOT_BASE}credentia-full.png`,
  },
]

interface ProjectCardProps {
  project: (typeof PROJECTS)[0]
  index: number
  totalCards: number
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const targetScale = 1 - (totalCards - 1 - index) * 0.03

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'start 0.1'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={ref}
      className="sticky h-[85vh] flex items-center justify-center"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{
          scale,
          borderRadius: 'clamp(40px, 5vw, 60px)',
        }}
        className="border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 w-full max-w-6xl mx-4"
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div className="pt-1 sm:pt-2">
              <span className="text-[#D7E2EA] text-xs sm:text-sm font-medium uppercase tracking-widest opacity-70">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <p className="text-[#D7E2EA]/60 text-xs sm:text-sm font-light mt-1">
                {project.tech}
              </p>
            </div>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 hidden sm:inline-flex"
          >
            <LiveProjectButton />
          </a>
        </div>

        {/* Bottom row - image grid */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left column - 40% */}
          <div className="flex flex-col gap-3 sm:gap-4 w-[40%]">
            <img
              src={project.img1}
              alt=""
              loading="lazy"
              className="w-full object-cover"
              style={{
                borderRadius: 'clamp(40px, 5vw, 60px)',
                height: 'clamp(130px, 16vw, 230px)',
              }}
            />
            <img
              src={project.img2}
              alt=""
              loading="lazy"
              className="w-full object-cover"
              style={{
                borderRadius: 'clamp(40px, 5vw, 60px)',
                height: 'clamp(160px, 22vw, 340px)',
              }}
            />
          </div>
          {/* Right column - 60% */}
          <div className="w-[60%]">
            <img
              src={project.img3}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
              style={{
                borderRadius: 'clamp(40px, 5vw, 60px)',
              }}
            />
          </div>
        </div>

        {/* Mobile button */}
        <div className="mt-4 sm:hidden flex justify-center">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <LiveProjectButton />
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section className="bg-[#0C0C0C] px-0 pb-20 relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </div>

      {PROJECTS.map((project, i) => (
        <ProjectCard
          key={project.num}
          project={project}
          index={i}
          totalCards={PROJECTS.length}
        />
      ))}
    </section>
  )
}
