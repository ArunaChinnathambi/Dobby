import { CounterCompPage } from './counter.po';

describe('Counter component', () => {
  let page: CounterCompPage;

  beforeEach(() => {
    page = new CounterCompPage();
  });

  it('Should start with Number: 1', () => {
    page.navigateTo();
    expect(page.getNumber()).toEqual('Number:1');
  });

  it('Should increase counter by one', () => {
    page.navigateTo();

    expect(page.getNumber()).toEqual('Number:1');
    page.getIncrementButton().click();

    expect(page.getNumber()).toEqual('Number:2');

    page.getIncrementButton().click();
    page.getIncrementButton().click();
  
    expect(page.getNumber()).toEqual('Number:4');
  });

  it('Should decrease counter by one', () => {
    page.navigateTo();

    page.getIncrementButton().click();
  
    expect(page.getNumber()).toEqual('Number:2');

    page.getDecrementButton().click();

    expect(page.getNumber()).toEqual('Number:1');
  });

});