type Props = {
  style?: string
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ style, children }) => {
  return (
    <button className={`p-3 rounded-lg bg-orange text-very-dark-blue transition-d-200 focus:bg-pale-orange hover:bg-pale-orange ${style}`}>
      {children}
    </button>
  )
}
