import { expect, it, describe, beforeEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Router } from './Router'

describe('Router', () => {
  beforeEach(() => {
    cleanup()
  })

  it('it should work', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })
})
