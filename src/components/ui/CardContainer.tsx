import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  style?: string
  children: React.ReactNode
}

export const CardContainer: React.FC<Props> = ({ style, children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: .2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`bg-white rounded-md drop-shadow-2xl ${style}`}
        children={children}
      />
    </AnimatePresence>
  )
}
