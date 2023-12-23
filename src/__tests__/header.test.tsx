import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Header from "../layout/Header"

test("test header text and logo", () => {
    render(<Header />)

    const applicationName = screen.getByText("Text Utils")
    const applicationLogo = screen.getByRole("img")
    expect(applicationName).toBeInTheDocument()
    expect(applicationLogo).toBeInTheDocument()

})
