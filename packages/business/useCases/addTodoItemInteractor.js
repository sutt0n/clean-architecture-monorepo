const { Todo } = require('../entities/Todo');

/**
 * use-case for adding a todo item to persistence
 *
 * @param {object} provider provider object
 */
module.exports.addTodoItemInteractor = ({ applicationContext, title, description }) => {
  const todo = new Todo({ title, description }).validate().toRawObject();
  
  const todos = [];
  const currentTodos = applicationContext.getPersistence().getItem({
    key: 'todos',
  });

  if (currentTodos) {
    todos.push(...currentTodos);
  }

  todos.push(todo);

  applicationContext.getPersistence().setItem({ key: 'todos', value: todos });

  return todos;
};
