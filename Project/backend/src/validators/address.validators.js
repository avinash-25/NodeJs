import Joi from "joi";


//! Add address
export const addAddressSchema = Joi.object({
  addressLine: Joi.string()
    .min(5)
    .max(200)
    .required()
    .messages({
      "string.empty": "Address line is required",
      "string.min": "Address line must be at least 5 characters",
      "string.max": "Address line cannot exceed 200 characters",
    }),
  
  city: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      "string.empty": "City is required",
      "string.min": "City must be at least 2 characters",
      "string.max": "City cannot exceed 50 characters",
    }),
  
  state: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      "string.empty": "State is required",
      "string.min": "State must be at least 2 characters",
      "string.max": "State cannot exceed 50 characters",
    }),
  
  pinCode: Joi.string()
    .length(6)
    .pattern(/^[1-9][0-9]{5}$/)
    .required()
    .messages({
      "string.empty": "Pin code is required",
      "string.length": "Pin code must be exactly 6 digits",
      "string.pattern.base": "Invalid pin code format",
    }),
  
  phone: Joi.string()
    .length(10)
    .pattern(/^[6-9]\d{9}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.length": "Phone number must be exactly 10 digits",
      "string.pattern.base": "Invalid phone number format",
    }),
  
  notes: Joi.string()
    .max(500)
    .optional()
    .allow("") // Allow empty string
    .messages({
      "string.max": "Notes cannot exceed 500 characters",
    }),
});

//! update address
export const updateAddressSchema = Joi.object({
  addressLine: Joi.string()
    .min(5)
    .max(200)
    .optional()
    .messages({
      "string.min": "Address line must be at least 5 characters",
      "string.max": "Address line cannot exceed 200 characters",
    }),
  
  city: Joi.string()
    .min(2)
    .max(50)
    .optional()
    .messages({
      "string.min": "City must be at least 2 characters",
      "string.max": "City cannot exceed 50 characters",
    }),
  
  state: Joi.string()
    .min(2)
    .max(50)
    .optional()
    .messages({
      "string.min": "State must be at least 2 characters",
      "string.max": "State cannot exceed 50 characters",
    }),
  
  pinCode: Joi.string()
    .length(6)
    .pattern(/^[1-9][0-9]{5}$/)
    .optional()
    .messages({
      "string.length": "Pin code must be exactly 6 digits",
      "string.pattern.base": "Invalid pin code format",
    }),
  
  phone: Joi.string()
    .length(10)
    .pattern(/^[6-9]\d{9}$/)
    .optional()
    .messages({
      "string.length": "Phone number must be exactly 10 digits",
      "string.pattern.base": "Invalid phone number format",
    }),
  
  notes: Joi.string()
    .max(500)
    .optional()
    .allow("") // Allow empty string
    .messages({
      "string.max": "Notes cannot exceed 500 characters",
    }),
});