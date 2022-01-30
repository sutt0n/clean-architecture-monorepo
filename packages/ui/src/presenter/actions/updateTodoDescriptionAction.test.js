const { createOvermindMock } = require("overmind");
const { config } = require("../presenter");

describe("updateTodoDescriptionAction", () => {
  let overmind;

  beforeEach(() => {
    // TODO: refactor
    overmind = createOvermindMock(
      {
        ...config,
        state: { todoDescription: 'Old Todo Description' },
      },
    );
  });

  it("calls the interactor to update the todo description from the input field", async () => {
    await overmind.actions.updateTodoDescriptionAction('New Todo Description');

    expect(overmind.state).toEqual(
      expect.objectContaining({
        todoDescription: 'New Todo Description',
      })
    );
  });
});
