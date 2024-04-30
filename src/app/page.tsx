'use client'

import { createLocalStorageCourseRepository } from "@/modules/courses/infrastructure/LocalStorageCourseRepository";
import { CoursesContextProvider } from "@/sections/courses/CoursesContext";
import { CoursesList } from "@/sections/courses/components/CoursesList";
import { CreateCourseForm } from "@/sections/courses/components/CreateCourseForm";


export default function Home() {
  const repository = createLocalStorageCourseRepository();
  return (
    <CoursesContextProvider repository={repository}>
			<div className="App">
				<h1>🍍 Codely</h1>
				<CoursesList />
				<CreateCourseForm />
			</div>
		</CoursesContextProvider>
  );
}
