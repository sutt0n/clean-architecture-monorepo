import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from "overmind-react";
import { state } from "./state";
import { applicationContext } from '../applicationContext';
import { addTodoItemAction } from './actions/addTodoItemAction';
import { updateTodoTitleAction } from './actions/updateTodoTitleAction';
import { updateTodoDescriptionAction } from './actions/updateTodoDescriptionAction';

const actions = {
  addTodoItemAction,
  updateTodoTitleAction,
  updateTodoDescriptionAction,
};

export const config = {
  onInitialize: ({ state, effects: applicationContext }) => {
    const todos = applicationContext.getPersistence().getItem({ key: 'todos' });
    state.todos = todos;
  },
  state,
  actions,
  effects: applicationContext,
};

export const useState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook();
