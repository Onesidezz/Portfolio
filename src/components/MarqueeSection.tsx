import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

const ROW1_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
]

const ROW2_IMAGES = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

function ImageTile({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
    />
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Convert scroll progress to pixel offset: 0 -> -200, 1 -> ~offset range
  // Formula: (scrollY - sectionTop + window.innerHeight) * 0.3
  // We approximate this with scrollYProgress mapped to a range
  const rawOffset = useTransform(scrollYProgress, [0, 1], [-200, 800])

  // Row 1 moves right: translateX(offset - 200)
  const row1X = useTransform(rawOffset, (v) => v - 200)

  // Row 2 moves left: translateX(-(offset - 200))
  const row2X = useTransform(rawOffset, (v) => -(v - 200))

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 - moves right */}
      <motion.div
        className="flex gap-3 mb-3"
        style={{ x: row1X, willChange: 'transform' }}
      >
        {[...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES].map((src, i) => (
          <ImageTile key={i} src={src} />
        ))}
      </motion.div>

      {/* Row 2 - moves left */}
      <motion.div
        className="flex gap-3"
        style={{ x: row2X, willChange: 'transform' }}
      >
        {[...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES].map((src, i) => (
          <ImageTile key={i} src={src} />
        ))}
      </motion.div>
    </section>
  )
}
