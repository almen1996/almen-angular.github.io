import { WechatAngularPage } from './app.po';

describe('wechat-angular App', () => {
  let page: WechatAngularPage;

  beforeEach(() => {
    page = new WechatAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
