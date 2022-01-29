const { getItem } = require('./getItem');

describe('getItem', () => {
  let getItemStub;
  let mockItem;
  global.localStorage = {};

  beforeEach(() => {
    mockItem = {
      foo: 'bar',
      chef: 'Guy Fieri',
      motto: 'Welcome to Flavortown',
      title: 'Mayor of Flavortown',
    };
    getItemStub = jest.fn().mockImplementation(() => JSON.stringify(mockItem));

    global.localStorage.getItem = getItemStub;
  });

  it('gets the item given the key', () => {
    const result = getItem({ key: 'todos' });

    expect(getItemStub).toHaveBeenCalled();
    expect(getItemStub).toHaveBeenCalledWith('todos');
    expect(result).toEqual(mockItem);
  });

  it('returns null for no value found for a given key', () => {
    getItemStub.mockImplementation(() => undefined);

    const result = getItem({ key: 'null' });

    expect(getItemStub).toHaveBeenCalled();
    expect(getItemStub).toHaveBeenCalledWith('null');
    expect(result).toEqual(null);
  });
});