const { setItem } = require('./setItem');

describe('setItem', () => {
  let setItemStub;
  global.localStorage = {};

  beforeEach(() => {
    setItemStub = jest.fn();

    global.localStorage.setItem = setItemStub;
  });

  it('sets the item given the key/value pair', () => {
    setItem({ key: 'todos', value: 'todos value' });

    expect(setItemStub).toHaveBeenCalled();
    expect(setItemStub).toHaveBeenCalledWith('todos', JSON.stringify('todos value'));
  });
});