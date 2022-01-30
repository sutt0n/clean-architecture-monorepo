const { Entity } = require('./Entity');

describe('Entity', () => {
  it('does not allow instantiation from the Entity itself', () => {
    expect(() => new Entity()).toThrow('Cannot instantiate base class "Entity"');
  });
});