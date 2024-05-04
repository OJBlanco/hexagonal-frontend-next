import { render, screen, fireEvent } from "@testing-library/react"

import { createLocalStorageCourseRepository } from "@/modules/courses/infrastructure/LocalStorageCourseRepository"
import { CoursesContextProvider } from "@/sections/courses/CoursesContext"
import { CreateCourseForm } from "@/sections/courses/components/CreateCourseForm"

import { CourseMother } from "../../modules/courses/domain/CourseMother"

describe("CreateCourseForm component", () => {
  it("displays success message when data is correct", async () => {
    const repository = createLocalStorageCourseRepository()
    const course = CourseMother.create()

    render(
      <CoursesContextProvider repository={repository}>
        <CreateCourseForm />
      </CoursesContextProvider>
    )

    const titleInput = screen.getByLabelText(/title/i)
    fireEvent.change(titleInput, { target: { value: course.title } })

    const imageUrlInput = screen.getByLabelText(/image/i)
    fireEvent.change(imageUrlInput, { target: { value: course.imageUrl } })

    const submitButton = screen.getByText(/create course/i)

    fireEvent.click(submitButton)

    const successMessage = await screen.findByRole("heading", { name: /Course created/i })

    expect(successMessage).toBeInTheDocument()
  })

  it("displays error message if title is too short", async () => {
    const repository = createLocalStorageCourseRepository()
    const { title: invalidTitle } = CourseMother.createWithTooShortTitle()

    render(
      <CoursesContextProvider repository={repository}>
        <CreateCourseForm />
      </CoursesContextProvider>
    )

    const titleInput = screen.getByLabelText(/title/i)
    fireEvent.change(titleInput, { target: { value: invalidTitle } })
    const errorMessage = await screen.findByText("Title must be between 5 and 100 characters")

    expect(errorMessage).toBeInTheDocument()
  })

  it("displays error message if title is too long", async () => {
    const repository = createLocalStorageCourseRepository()
    const { title: invalidTitle } = CourseMother.createWithTooLongTitle()

    render(
      <CoursesContextProvider repository={repository}>
        <CreateCourseForm />
      </CoursesContextProvider>
    )

    const titleInput = screen.getByLabelText(/title/i)
    fireEvent.change(
      titleInput,
      { target: { value: invalidTitle } }
    )

    const errorMessage = await screen.findByText("Title must be between 5 and 100 characters")

    expect(errorMessage).toBeInTheDocument()
  })

  it("displays error message if image url is not a valid url", async () => {
    const repository = createLocalStorageCourseRepository()
    const { imageUrl: invalidImageUrl } = CourseMother.createWithInvalidImageUrl()

    render(
      <CoursesContextProvider repository={repository}>
        <CreateCourseForm />
      </CoursesContextProvider>
    )

    const imageUrlInput = screen.getByLabelText(/image/i)
    fireEvent.change(imageUrlInput, { target: { value: invalidImageUrl } })

    const errorMessage = await screen.findByText("Image url is not valid")

    expect(errorMessage).toBeInTheDocument()
  })
})