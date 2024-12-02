export function Square({ children, updateBoard, isSelected }) {
  const handleClick = () => {
    updateBoard()
  }
  const className = isSelected ? 'square-is-selected' : 'square'
  return (
    <div
      onClick={handleClick}
      className={className}
    >
      {children}
    </div>
  )
}
