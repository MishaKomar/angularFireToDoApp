import { AngularFireToDoAppPage } from './app.po';

describe('angular-fire-to-do-app App', () => {
  let page: AngularFireToDoAppPage;

  beforeEach(() => {
    page = new AngularFireToDoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
