
/**
 * @jest-environment jsdom
 */

import {describe, it, expect} from 'vitest'

import {render,screen} from "@testing-library/react"

import Testing from './Testing'
import App from './App'






// describe("App Component", () => {
//   it("renders correct", () => {
//     render(<App />)
//     expect(screen.getByRole("heading").textContent).toMatch("xyz")
//   })
// })

describe("Testing Component", () => {
  it("renders correct", () => {
    render(<Testing />)
    
    expect(screen.getByRole("heading").textContent).toMatch("Heading")
  })
})
