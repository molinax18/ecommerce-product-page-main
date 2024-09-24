type Props = {
  style?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export const Button: React.FC<Props> = ({ style, children, onClick, disabled }) => {
  return (
    <button
      className={`p-3 rounded-lg bg-orange text-very-dark-blue transition-d-200 focus:bg-pale-orange hover:bg-pale-orange ${style}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
