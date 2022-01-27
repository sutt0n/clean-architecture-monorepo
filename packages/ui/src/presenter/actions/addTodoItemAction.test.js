const { createOvermindMock } = require("overmind");
const { config } = require("../presenter");

describe("addTodoItemAction", () => {
  let overmind;
  let addTodoItemInteractorStub;
  let mockTodo = { title: "TODO Title", description: "TODO Description" };

  beforeEach(() => {
    addTodoItemInteractorStub = jest.fn().mockReturnValue([mockTodo]);

    // TODO: refactor
    overmind = createOvermindMock(
      {
        ...config,
        state: { todoTitle: "TODO Title", todoDescription: "TODO Description" },
      },
      {
        getUseCases: () => ({
          addTodoItemInteractor: addTodoItemInteractorStub,
        }),
      }
    );
  });

  it("calls the interactor to add a todo item", async () => {
    await overmind.actions.addTodoItemAction();

    expect(addTodoItemInteractorStub).toHaveBeenCalled();
    expect(addTodoItemInteractorStub).toHaveBeenCalledWith({
      applicationContext: expect.anything(),
      ...mockTodo,
    });
    expect(overmind.state).toEqual(
      expect.objectContaining({
        todos: [mockTodo],
      })
    );
  });
});
