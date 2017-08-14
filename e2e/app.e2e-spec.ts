import { AerrisPage } from './app.po';

describe('aerris App', () => {
  let page: AerrisPage;

  beforeEach(() => {
    page = new AerrisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
