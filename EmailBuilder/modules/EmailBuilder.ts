import { IEmailBuilder } from "../interfaces/EmailBuilder";
import { Validator } from "../validator/Validator";
import { Email } from "./Email";

export class EmailBuilder implements IEmailBuilder {
  private _mail: Email | null = null;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this._mail = new Email();
  }

  public withFrom(from: string): EmailBuilder {
    if (this._mail && Validator.checkIfEmailExist(from)) {
      this._mail.from = from;
    }
    return this;
  }

  public withTo(to: string): EmailBuilder {
    if (this._mail && Validator.checkIfEmailExist(to)) {
      this._mail.to = to;
    }
    return this;
  }

  public withTitle(title: string): EmailBuilder {
    if (this._mail && Validator.checkIfStringExist(title)) {
      this._mail.title = title;
    }
    return this;
  }

  public withCc(cc: string[]): EmailBuilder {
    if (this._mail && Validator.checkIfArrayContainsEmails(cc)) {
      this._mail.cc = [...cc];
    }
    return this;
  }

  public withBcc(bcc: string[]): EmailBuilder {
    if (this._mail && Validator.checkIfArrayContainsEmails(bcc)) {
      this._mail.bcc = bcc;
    }
    return this;
  }

  public withHtml(html: string): EmailBuilder {
    if (this._mail && Validator.checkIfStringExist(html)) {
      this._mail.html = html;
    }
    return this;
  }

  public buildMail() {
    if (this._mail) {
      Validator.checkIfFieldToExist(this._mail.to);
    }

    const result = this._mail;
    this.reset();
    return result;
  }
}
