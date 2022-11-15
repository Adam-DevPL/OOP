export class Email {
  public from: string = "default@mail.com";
  public to: string = "";
  public title: string = "Default title";
  public cc: string[] = [];
  public bcc: string[] = [];
  public html: string = "";

  public showMail(): void {
    console.log(this);
  }
}
