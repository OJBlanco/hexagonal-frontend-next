
import { useCoursesContext } from "../CoursesContext";
import { CourseCard } from "./CourseCard";

export function CoursesList() {
	const { courses } = useCoursesContext();

	return (
		<section>
			<h2>Current courses</h2>
			<div>
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</section>
	);
}