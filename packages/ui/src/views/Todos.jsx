import * as React from 'react';
import { useActions, useState } from '../presenter/presenter';

const Todo = ({ todo }) => {
  useState();
  return (
    <li>
      {todo.title} {todo.description}
    </li>
  );
};

export const Todos = () => {
  const state = useState();
  const {
    addTodoItemAction,
    updateTodoTitleAction,
    updateTodoDescriptionAction,
  } = useActions();

  return (
    <>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={e => updateTodoTitleAction(e.target.value)}
      />
      <input
        type="textarea"
        name="description"
        placeholder="Description"
        onChange={e => updateTodoDescriptionAction(e.target.value)}
      />
      <button onClick={addTodoItemAction}>Add</button>
      <ul>
        {state.todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
