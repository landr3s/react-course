const navigate = href => {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event('pushstate')
  window.dispatchEvent(navigationEvent)
}

export function Link({ to, target, ...props }) {
  const handleClick = e => {
    const isPrimary = e.button === 0
    const isModified = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey
    const isManageable = target === '_self' || target === undefined
    if (isPrimary && !isModified && isManageable) {
      e.preventDefault()
      navigate(to)
    }
  }
  return (
    <a
      href={to}
      onClick={handleClick}
      target={target}
      {...props}
    />
  )
}
