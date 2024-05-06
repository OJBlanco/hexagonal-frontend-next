import { faker } from "@faker-js/faker"
import { Factory } from "fishery"

import { Course } from "@/modules/courses/domain/Course"
import { Primitives } from "@/modules/shared/domain/Primitives"
import { CourseTitle } from "@/modules/courses/domain/CourseTitle"

const CourseFactory = Factory.define<Primitives<Course>>(() => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  imageUrl: faker.image.url(),
}))

export const CourseMother = {
  create: (params?: Partial<Primitives<Course>>): Primitives<Course> => {
    return CourseFactory.build(params)
  },
  createList: (length = 5): Primitives<Course>[] => {
    return CourseFactory.buildList(length)
  },
  createWithTooShortTitle: (): Primitives<Course> => {
		return CourseFactory.build({
			title: faker.lorem.word(CourseTitle.MIN_COURSE_LENGTH - 1),
		});
	},
	createWithTooLongTitle: (): Primitives<Course> => {
		return CourseFactory.build({
			title: faker.lorem.sentence(CourseTitle.MAX_COURSE_LENGTH + 1),
		});
	},
	createWithInvalidImageUrl: (): Primitives<Course> => {
		return CourseFactory.build({
			imageUrl: faker.lorem.word(),
		});
	},
}