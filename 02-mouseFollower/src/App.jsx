import { useEffect, useState } from 'react'
import './App.css'
export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    const handleMove = e => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (
    <>
      <div
        style={{
          position: 'absolute',
          border: '1px solid #fff',
          opacity: 0.8,
          borderRadius: '50%',
          top: -25,
          left: -25,
          width: 50,
          height: 50,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          pointerEvents: 'none',
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button
        onClick={() => {
          setEnabled(!enabled)
        }}
      >
        {enabled ? 'Desactivar' : 'Activar'} Seguir Puntero
      </button>
    </>
  )
}
