import { Course } from "../../../modules/courses/domain/Course";

export function CourseCard({ course }: { course: Course }) {
	return (
		<div>
			<img src={course.imageUrlValue()} alt="" />
			<h3>{course.titleValue()}</h3>
		</div>
	);
}