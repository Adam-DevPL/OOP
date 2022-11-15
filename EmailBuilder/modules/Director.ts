import { IEmailBuilder } from "../interfaces/EmailBuilder";

export class Director {
  private emailBuilder: IEmailBuilder | null = null;

  public setEmailBuilder(emailBuilder: IEmailBuilder) {
    this.emailBuilder = emailBuilder;
  }

  public falsyBuildMailWithoutTo() {
    if (!this.emailBuilder) {
      throw new Error("No email builder!");
    }
    this.emailBuilder;
  }

  public buildBasicEmail(from: string, to: string, title: string) {
    if (!this.emailBuilder) {
      throw new Error("No email builder!");
    }
    this.emailBuilder.withFrom(from).withTo(to).withTitle(title);
  }

  public buildBasicEmailWithCc(from: string, to: string, title: string, cc: string[]) {
    if (!this.emailBuilder) {
      throw new Error("No email builder!");
    }
    this.emailBuilder.withFrom(from).withTo(to).withTitle(title).withCc(cc);
  }
}
