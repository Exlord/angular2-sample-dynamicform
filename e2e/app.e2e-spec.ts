import { Ng2SamplePage } from './app.po';

describe('ng2-sample App', () => {
  let page: Ng2SamplePage;

  beforeEach(() => {
    page = new Ng2SamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
