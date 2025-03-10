const { body, validationResult } = require("express-validator")



module.exports = [
  body("name")
    .notEmpty().withMessage("Le nom est requis")
    .isString().withMessage("Le nom doit être un string")
    .trim(),
  body("description")
    .notEmpty().withMessage("La description est requise")
    .isString().withMessage("La description doit être un string")
    .trim(),
  body("date")
    .notEmpty().withMessage("La date est requise")
    .isDate().withMessage("Format date requis"),
  body("prize")
    .notEmpty().withMessage("Le prix est requis")
    .isFloat({ gte: 0}).withMessage("Le prix doit être supérieur à 0"),


  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    next()
  }
]