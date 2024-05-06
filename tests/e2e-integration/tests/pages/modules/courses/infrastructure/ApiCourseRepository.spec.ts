import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { v4 as uuidv4 } from "uuid";

import { ApiCourseRepository } from "../../../../../../../src/modules/courses/infrastructure/ApiCourseRepository";

import { CourseId } from "../../../../../../../src/modules/courses/domain/CourseId";
import { Course } from "../../../../../../../src/modules/courses/domain/Course";

chai.use(chaiAsPromised);

const expect = chai.expect;

describe("Api Course repository", () => {
	it("lists all courses with the properties id, title and imageUrl", async () => {
		const repository = new ApiCourseRepository();

		const courses = await repository.getAll();

		expect(courses.length).to.be.greaterThan(0);
		expect(courses[0].id).to.equal("717f7637-a101-49e4-8e64-0db607f90b13");
		expect(courses[0].title).to.equal("✌️ Vue 3: Novedades aplicadas al mundo real");
		expect(courses[0].imageUrl).to.equal("http://placekitten.com/500/400");
	});

	it("gets a course by id with the properties id, title and imageUrl", async () => {
		const repository = new ApiCourseRepository();
		const courses = await repository.getAll();
		const courseId = courses[0].id;
		const course = await repository.get(courseId);

		expect(course).to.exist;
		expect(course?.id).to.equal(courseId);
		expect(course?.title).to.equal("✌️ Vue 3: Novedades aplicadas al mundo real");
		expect(course?.imageUrl).to.equal("http://placekitten.com/500/400");
	});

	it("returns null when getting a course that does not exist", async () => {
		const repository = new ApiCourseRepository();

		const course = await repository.get(new CourseId(uuidv4()));

		expect(course).to.be.null;
	});

	it("does not throw when creating a course", () => {
		const repository = new ApiCourseRepository();
		
		const course = Course.create({
			id: uuidv4(),
			title: "Course title",
			imageUrl: "http://placekitten.com/500/400",
		});
		
		return expect(
			repository.save(course)
		).to.be.fulfilled;
	});
});