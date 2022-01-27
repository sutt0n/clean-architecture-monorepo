export const addTodoItemAction = ({ state, effects: { ...applicationContext }}) => {
  const { todoTitle: title, todoDescription: description } = state;

  const todos = applicationContext.getUseCases().addTodoItemInteractor({
    applicationContext,
    title,
    description,
  });

  console.log('le todos', todos)

  state.todos = todos;
}