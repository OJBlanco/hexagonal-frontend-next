export class CourseImageUrl {
	static readonly regexExp =
  /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/;

	constructor(readonly value: string) {
		if (!CourseImageUrl.isValid(value)) {
			throw new Error(CourseImageUrl.invalidMessage(value));
		}
	}

	public static isValid(value: string): boolean {
		return CourseImageUrl.regexExp.test(value);
	}

	public static invalidMessage(value: string): string {
		return `The image url ${value} is not valid`;
	}
}