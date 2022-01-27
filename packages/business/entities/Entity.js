import joi from 'joi';
import { pick, isEmpty } from "lodash";

export class Entity {
  validationRules = {};

  constructor() {
    if (this.constructor.name === "Entity") {
      throw new Error('Cannot instantiate base class "Entity"');
    }
  }

  getValidationRules() {
    return joi.object().keys(this.validationRules);
  }

  isValid() {
    const validate = this.getValidationRules().validate(
      pick(this, Object.keys(this.validationRules))
    );

    return isEmpty(validate.error) && isEmpty(validate.errors);
  }

  validate() {
    const validate = this.getValidationRules().validate(
      pick(this, Object.keys(this.validationRules))
    );

    if (validate.error) {
      // TODO: return formatted
      // throw new Error(validate.error);
    }

    return this;
  }

  toRawObject() {
    return pick(this, Object.keys(this.validationRules));
  }
}
