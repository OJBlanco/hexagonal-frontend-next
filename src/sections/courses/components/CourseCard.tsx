import { Course } from "../../../modules/courses/domain/Course";

export function CourseCard({ course }: { course: Course }) {
	return (
		<div>
			<img src={course.imageUrl} alt="" />
			<h3>{course.title}</h3>
		</div>
	);
}