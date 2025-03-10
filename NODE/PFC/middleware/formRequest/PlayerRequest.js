const { body, validationResult } = require("express-validator")



module.exports = [
  body("name")
    .notEmpty().withMessage("Le nom est requis")
    .isString().withMessage("Le nom doit être un string")
    .trim(),

  body("surname")
    .notEmpty().withMessage("Le nom de famille est requis")
    .isString().withMessage("Le nom de famille doit être un string")
    .trim(),

  body("birth_date")
    .notEmpty().withMessage("La date est requise")
    .isDate().withMessage("Format date requis"),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    next()
  }
]