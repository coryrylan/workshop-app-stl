import { WorkshopAppPage } from './app.po';

describe('workshop-app App', function() {
  let page: WorkshopAppPage;

  beforeEach(() => {
    page = new WorkshopAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
