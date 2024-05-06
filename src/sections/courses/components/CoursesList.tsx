
import { memo } from "react";
import { useCoursesContext } from "../CoursesContext";
import { CourseCard } from "./CourseCard";

function CoursesListComponent() {
	const { courses } = useCoursesContext();
	
	return (
		<section>
			<h2>Current courses</h2>
			<div>
				{courses.map((course) => (
					<CourseCard key={course.idValue()} course={course} />
				))}
			</div>
		</section>
	);
}

export const CoursesList = memo(CoursesListComponent)