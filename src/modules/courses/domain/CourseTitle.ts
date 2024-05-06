export class CourseTitle {
	static readonly MAX_COURSE_LENGTH = 100;
	static readonly MIN_COURSE_LENGTH = 5;

	private static isTooShort: boolean;
	private static isTooLong: boolean;

	constructor(readonly value: string) {
		if (!CourseTitle.isValid(value)) {
			throw new Error(CourseTitle.invalidMessage(value));
		}
	}

	public static isValid(value: string): boolean {
		this.isTooShort = value.length < this.MIN_COURSE_LENGTH
		this.isTooLong = value.length > this.MAX_COURSE_LENGTH
		return !this.isTooShort && !this.isTooLong;
	}

	public static invalidMessage(value: string): string {
		if (this.isTooShort) {
			return `The title ${value} is too short. ${this.MIN_COURSE_LENGTH} chars is the min allowed`;
		}

		return `The title is too long. ${this.MAX_COURSE_LENGTH} chars is the max allowed`;

	}
}