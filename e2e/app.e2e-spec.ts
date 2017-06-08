import { AngularFactoriesPage } from './app.po';

describe('angular-factories App', () => {
  let page: AngularFactoriesPage;

  beforeEach(() => {
    page = new AngularFactoriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
