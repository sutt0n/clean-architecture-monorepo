import { addTodoItemInteractor } from '@clean-arch/business/useCases/addTodoItemInteractor';
import { getItem } from '@clean-arch/persistence/localStorage/getItem';
import { setItem } from '@clean-arch/persistence/localStorage/setItem';
import { deleteItem } from '@clean-arch/persistence/localStorage/deleteItem';

export const applicationContext = {
  getUseCases: () => ({
    addTodoItemInteractor,
  }),
  getPersistence: () => ({
    getItem,
    setItem,
    deleteItem,
  }),
};
