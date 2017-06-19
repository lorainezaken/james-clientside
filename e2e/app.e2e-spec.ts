import { JamesClientsidePage } from './app.po';

describe('james-clientside App', () => {
  let page: JamesClientsidePage;

  beforeEach(() => {
    page = new JamesClientsidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
