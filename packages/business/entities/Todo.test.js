const { Todo } = require('./Todo');

describe('Todo', () => {
  let todo;
  it('instantiates the Todo entity successfully', () => {
    todo = new Todo({ 
      title: 'Todo Title', 
      description: 'Todo description.' 
    });
  });

  // it('toRawObject', () => {

  // });

  describe('Validation', () => {
    it('requires a title', () => {
      todo = new Todo({ 
        description: 'Todo description.' 
      });

      expect(todo.isValid()).toEqual(false);
    });

    it('requires a description', () => {
      todo = new Todo({ 
        title: 'Todo Title' 
      });

      expect(todo.isValid()).toEqual(false);
    });

    it('returns formatted validation errors', () => {
      todo = new Todo({ 
        title: 'Todo Title' 
      });

      expect(todo.validate()).toEqual(
        expect.objectContaining({
          errors: {
            description: '"description" is required',
          },
        }),
      );
    });

    it('returns the entity if validate() is successful', () => {
      todo = new Todo({ 
        title: 'Todo Title',
        description: 'Todo description.',
      });

      const result = todo.validate();

      expect(result.title).toEqual('Todo Title');
      expect(result.description).toEqual('Todo description.');
    });
  });
});