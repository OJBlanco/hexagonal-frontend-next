import { fireEvent, render, screen } from "@testing-library/react"

import { CoursesContextProvider } from "@/sections/courses/CoursesContext"
import { CreateCourseForm } from "@/sections/courses/components/CreateCourseForm"


describe("CreateCourseForm component", () => {
  it("displays success message when data is correct", async () => {
    const save = jest.fn()
    render(
      <CoursesContextProvider
        repository={{
          save,
          get: jest.fn(),
          getAll: jest.fn(),
        }}
      >
        <CreateCourseForm />
      </CoursesContextProvider>
    )

    const titleInput = screen.getByLabelText(/title/i)
    fireEvent.change(titleInput, { target: { value: "Awesome Hexagonal Architecture" } })

    const imageUrlInput = screen.getByLabelText(/image/i)
    fireEvent.change(imageUrlInput, { target: { value: "http://placekitten.com/500/400" } })

    const submitButton = screen.getByText(/create course/i)

    fireEvent.click(submitButton)

    const successMessage = await screen.findByRole("heading", { name: /Course created/i })
    expect(save).toHaveBeenCalled()
    expect(successMessage).toBeInTheDocument()
  })
})