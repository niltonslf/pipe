import {describe, expect, it} from 'vitest'
import {screen, render} from '@testing-library/react'
import {MainPage} from '@/pages/main'

const makeSUT = () => {
  const sut = render(<MainPage />)

  return {sut}
}

describe('MainPage', () => {
  it('should render main page blank', () => {
    makeSUT()

    const container = screen.getByText('Please, add your first device.')

    expect(container).toBeInTheDocument()
  })
})
