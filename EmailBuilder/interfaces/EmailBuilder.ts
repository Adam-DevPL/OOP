import { EmailBuilder } from "../modules/EmailBuilder";

export interface IEmailBuilder {
  withFrom: (from: string) => EmailBuilder;
  withTo: (to: string) => EmailBuilder;
  withTitle: (title: string) => EmailBuilder;
  withCc: (cc: string[]) => EmailBuilder;
  withBcc: (bcc: string[]) => EmailBuilder;
  withHtml: (html: string) => EmailBuilder;
}
