import { validate } from "uuid";

export class CourseId {

  constructor(readonly value: string) {
    if (!CourseId.isValid(value)) {
      throw new Error(CourseId.invalidMessage(value));
    }
  }

  public static isValid(value: string): boolean {
    return validate(value);
  }

  public static invalidMessage(value: string): string {
    return `The value ${value} is not a valid uuid`;
  }
}