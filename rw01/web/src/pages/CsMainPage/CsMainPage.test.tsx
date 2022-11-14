import { render } from '@redwoodjs/testing/web'

import CsMainPage from './CsMainPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CsMainPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CsMainPage />)
    }).not.toThrow()
  })
})
