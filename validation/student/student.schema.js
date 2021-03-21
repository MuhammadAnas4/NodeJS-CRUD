const joi = require("joi");

const schema = {
    student: joi.object({
        name: joi.string().max(20).required(),
        regno: joi.number().integer().max(10000000).message("Invalid Regno").required(),
        class: joi.string().max(8).required(),
        gender: joi.string().valid("M","F","O").required(),
        email: joi.string().email().required(),
        address: joi.string().max(100).required(),
    })
};
module.exports = schema;