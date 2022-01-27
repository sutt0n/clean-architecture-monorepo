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
// import { deleteTodoItemAction} from './actions/deleteTodoItemAction'

const actions = {
  addTodoItemAction,
  updateTodoTitleAction,
  updateTodoDescriptionAction,
};

export const config = {
  state,
  actions,
  effects: applicationContext,
};

export const useState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook();
