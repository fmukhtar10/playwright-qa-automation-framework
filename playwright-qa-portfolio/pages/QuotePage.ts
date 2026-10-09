import { Page, Locator } from '@playwright/test';
export class QuotePage {
  readonly name: Locator; readonly amount: Locator; readonly submit: Locator; readonly result: Locator;
  constructor(readonly page: Page) {this.name=page.getByLabel('Applicant name');this.amount=page.getByLabel('Coverage amount');this.submit=page.getByRole('button',{name:'Get sample quote'});this.result=page.getByRole('status');}
  async goto(){await this.page.goto('/');}
  async createQuote(name:string,amount:string){await this.name.fill(name);await this.amount.fill(amount);await this.submit.click();}
}
