import { Primitives } from "@/modules/shared/domain/Primitives";

import { Course } from "../domain/Course";
import { CourseId } from "../domain/CourseId";
import { CourseRepository } from "../domain/CourseRepository";

const BASE_URL = process.env.API_BASE_URL ?? "https://awesome-codely-courses.com/api/courses";

export class ApiCourseRepository implements CourseRepository {
	async save(course: Course): Promise<void> {
		const coursePrimitives = course.toPrimitives();

		await fetch(`${BASE_URL}/create`, {
			method: "POST",
			body: JSON.stringify({
				id: coursePrimitives.id,
				name: coursePrimitives.title,
				imageUrl: coursePrimitives.imageUrl,
			}),
		});
	}

	async get(id: CourseId): Promise<Course | null> {
		const course = await fetch(`${BASE_URL}/${id.value}`).then(
			(response) => response.json() as Promise<Primitives<Course>>
		);

		return Course.create(course);
	}

	async getAll(): Promise<Course[]> {
		const courses = await fetch(BASE_URL).then(
			(response) => response.json() as Promise<Primitives<Course>[]>
		);

		return courses.map((course) => Course.create(course));
	}
}