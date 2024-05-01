import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export function GetCourse(courseRepository: CourseRepository, id: string): Course | null {
  return courseRepository.get(id)
}