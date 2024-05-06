export class ImageUrl {
  constructor(public readonly imageUrl: string) {
    this.ensureIsValidImageUrl(imageUrl);
  }

  private ensureIsValidImageUrl(imageUrl: string): void {
    const regexExp =
      /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/;

    if (!regexExp.test(imageUrl)) {
      throw new Error(`Image url ${imageUrl} is not valid`);
    }
  }
}