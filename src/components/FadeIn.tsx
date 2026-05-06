import { motion } from 'framer-motion'
import React from 'react'

type Element = keyof HTMLElementTagNameMap

interface FadeInProps {
  as?: Element
  children?: React.ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  [key: string]: unknown
}

function FadeIn({
  as = 'div',
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  ...rest
}: FadeInProps) {
  const MotionComponent = motion(as)

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}

export default FadeIn
