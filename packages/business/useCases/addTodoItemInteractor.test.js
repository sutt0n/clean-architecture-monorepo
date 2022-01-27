const { addTodoItemInteractor } = require("./addTodoItemInteractor");

describe("addTodoItemInteractor", () => {
  let applicationContext;
  let getItemStub;
  let setItemStub;

  beforeAll(() => {
    getItemStub = jest.fn().mockReturnValue([]);
    setItemStub = jest.fn();

    applicationContext = {
      getPersistence: () => ({
        getItem: getItemStub,
        setItem: setItemStub,
      }),
    };
  });

  it("add a todo item into persistence", () => {
    const result = addTodoItemInteractor({
      applicationContext,
      title: "TODO Title",
      description: "TODO Description",
    });

    expect(getItemStub).toHaveBeenCalled();
    expect(getItemStub).toHaveBeenCalledWith({
      key: "todos",
      defaultValue: [],
    });
    expect(setItemStub).toHaveBeenCalled();
    expect(setItemStub).toHaveBeenCalledWith({
      key: "todos",
      value: [
        {
          title: "TODO Title",
          description: "TODO Description",
        },
      ],
    });
    expect(result).toEqual([
      {
        title: "TODO Title",
        description: "TODO Description",
      },
    ]);
  });
});
