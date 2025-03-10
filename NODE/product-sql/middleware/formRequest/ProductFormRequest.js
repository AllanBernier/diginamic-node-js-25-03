const { body, validationresult } = require("express-validator")


const validateProduct = [
  body("name")
    .notEmpty().withMessage("Le nom est requis")
    .isString().withMessage("Le nom doit être un string")
    .trim(),
  body("description")
    .notEmpty().withMessage("La description est requis")
    .isString().withMessage("La description doit être un string")
    .trim(),

  body("price")
    .notEmpty().withMessage("Le prix est requis")
    .isFloat({ gt: 0 }).withMessage("Le prix doit être un nombre")
    .trim(),

  body("stock")
    .notEmpty().withMessage("Le prix est requis")
    .isNumeric({ gt: 0 }).withMessage("Le prix doit être un nombre")
    .trim(),

  (req, res, next) => {
    const errors = validationresult(req)
    if (errors) return res.status(400).json({ errors });

    next()
  }
]



module.exports = validateProduct