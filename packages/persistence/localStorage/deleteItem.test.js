const { deleteItem } = require('./deleteItem');

describe('deleteItem', () => {
  let deleteItemStub;
  global.localStorage = {};

  beforeEach(() => {
    deleteItemStub = jest.fn();

    global.localStorage.deleteItem = deleteItemStub;
  });

  it('calls localStorage.deleteItem with the given key', () => {
    deleteItem({ key: 'todos' });

    expect(deleteItemStub).toHaveBeenCalled();
    expect(deleteItemStub).toHaveBeenCalledWith('todos');
  });
});