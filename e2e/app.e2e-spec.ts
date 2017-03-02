import { ThinkingInAngularPage } from './app.po';

describe('thinking-in-angular App', () => {
  let page: ThinkingInAngularPage;

  beforeEach(() => {
    page = new ThinkingInAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
