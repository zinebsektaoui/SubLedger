const Joi = require("joi")

const SubscriptionSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string.min': 'Le nom doit contenir au moins 3 caractères',
        'string.max': 'Le nom ne peut pas dépasser 20 caractères',
        'any.required': 'Le nom est requis'
    }),
    price: Joi.number().min(0).required().messages({
        'string.email': 'Prix doit etre un nombre',
        'string.min': 'Prix doit etre supérieure à 0',
        'any.required': 'Le prix est requis'
    }),
    billingCycle: Joi.string().valid('Yearly', 'Monthly'),
    user_id: Joi.string().required().messages({
        'string.base': 'L\'ID utilisateur doit être une chaîne',
        'any.required': 'L\'ID utilisateur est requis'
    })
})


module.exports = SubscriptionSchema;