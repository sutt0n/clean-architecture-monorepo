import { Todo } from '../entities/Todo';

/**
 * use-case for adding a todo item to persistence
 *
 * @param {object} provider provider object
 */
export const addTodoItemInteractor = ({ applicationContext, title, description }) => {
  const todo = new Todo({ title, description }).validate().toRawObject();
  
  const todos = [];
  const currentTodos = applicationContext.getPersistence().getItem({
    key: 'todos',
    defaultValue: [],
  });

  if (currentTodos) {
    todos.push(...currentTodos);
  }

  todos.push(todo);

  applicationContext.getPersistence().setItem({ key: 'todos', value: todos });

  return todos;
};
