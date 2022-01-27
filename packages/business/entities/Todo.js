import joi from 'joi';
import { Entity } from './Entity';

export class Todo extends Entity {
  constructor({ title, description }) {
    super();

    this.title = title;
    this.description = description;

    this.validationRules = {
      title: joi.string().min(1).required(),
      description: joi.string().min(1).required(),
    };
  }
}
