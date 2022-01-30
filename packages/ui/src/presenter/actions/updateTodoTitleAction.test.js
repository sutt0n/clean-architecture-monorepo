const { createOvermindMock } = require("overmind");
const { config } = require("../presenter");

describe("updateTodoTitleAction", () => {
  let overmind;

  beforeEach(() => {
    // TODO: refactor
    overmind = createOvermindMock(
      {
        ...config,
        state: { todoTitle: 'Old Todo Title' },
      },
    );
  });

  it("calls the interactor to update the todo title from the input field", async () => {
    await overmind.actions.updateTodoTitleAction('New Todo Title');

    expect(overmind.state).toEqual(
      expect.objectContaining({
        todoTitle: 'New Todo Title',
      })
    );
  });
});
