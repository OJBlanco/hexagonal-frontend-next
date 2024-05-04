import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export function GetAllCourses (courseRepository: CourseRepository): Promise<Course[]> {
  return courseRepository.getAll()
}