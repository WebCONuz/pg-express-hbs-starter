// const Joi = require("joi");

// const userSchema = Joi.object({
//   username: Joi.string().max(30).required(),
//   password: Joi.string().min(6).required(),
//   confirm_password: Joi.ref("password"),
//   avatar: Joi.string().default("/images/avatar.png"),
//   fullname: Joi.string().max(60).required(),
//   contact: Joi.string()
//     .pattern(/\d{2}-\d{3}-\d{2}-\d{2}/)
//     .message("No'mer xato, namuna: 99-888-77-66.")
//     .required(),
//   email: Joi.string().email().message("Kiritilgan data email emas.").required(),
//   user_category_id: Joi.number().required(),
//   status: Joi.boolean().default(false),
// });

// module.exports = userSchema;
