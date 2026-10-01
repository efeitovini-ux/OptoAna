import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/** Revelação suave ao rolar. Desligada para quem pediu menos movimento. */
export function Revelar({ children, atraso = 0, className = '' }: { children: ReactNode; atraso?: number; className?: string }) {
  const reduzir = useReducedMotion()
  if (reduzir) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: atraso }}
    >
      {children}
    </motion.div>
  )
}
