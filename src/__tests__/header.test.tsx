import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Header from "../layout/Header"

test("Renders the main page", () => {
    render(<Header />)

    const ApplicationName = screen.getByText("Text Utils")
    expect(ApplicationName).toBeInTheDocument()
})
