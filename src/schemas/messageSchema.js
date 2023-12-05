import Joi from "joi";

const messageSchema = Joi.object({
  from: Joi.string().required(),
	to: Joi.string().required(),
	text: Joi.string().required(),
	type: Joi.string().required()
});

const userSchema = Joi.object({
  name: Joi.string().required(),
});

export { messageSchema, userSchema };
