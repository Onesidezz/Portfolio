import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const characters = text.split('')

  return (
    <p
      ref={ref}
      className={className}
      style={{ position: 'relative', ...style }}
    >
      {/* Invisible placeholder to maintain layout */}
      <span style={{ visibility: 'hidden' }}>{text}</span>
      <span
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {characters.map((char, i) => {
          const start = i / characters.length
          const end = (i + 1) / characters.length
          const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

          return (
            <motion.span
              key={i}
              style={{ opacity }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          )
        })}
      </span>
    </p>
  )
}
