const joi  = require('joi')
const registerValidation = joi.object().options({abortEarly:false}).keys({
	name: joi.string().required(),
	password:joi.string().required().min(5),
	email: joi.string().required().email(),
	
})

const loginValidation = joi.object({
	email: joi.string().required().email(),
	password:joi.string().required().min(5),
})

module.exports = {
	registerValidation,
	loginValidation
}