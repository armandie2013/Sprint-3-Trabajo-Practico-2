import { body } from "express-validator";

export const validationDataSuperHeros = () => [
  body("nombreSuperHeroe")
    .trim()
    .notEmpty()
    .withMessage("El nombre del superheroe es requerido y no puede estar vacio")
    .isLength({ min: 3, max: 60 })
    .withMessage("El nombre del superheroe debe tener entre 3 y 60 caracteres"),

  body("nombreReal")
    .trim()
    .notEmpty()
    .withMessage("El nombre real es requerido y no puede estar vacio")
    .isLength({ min: 3, max: 60 })
    .withMessage("El nombre real debe tener entre 3 y 60 caracteres"),

  body("edad")
    .trim()
    .notEmpty()
    .withMessage("La edad es requerida y no puede estar vacia")
    .isInt({ min: 0 })
    .withMessage("La edad es incorrecta"),

  body("poderes")
    .notEmpty()
    .withMessage("La lista de poderes no puede estar vacia")
    .isArray({ min: 1 })
    .withMessage("Poderes no es un array valido o está vacío"),

  body("poderes.*")
    .isString()
    .withMessage("Cada poder debe ser una cadena de texto")
    .isLength({ min: 3, max: 60 })
    .withMessage("Cada poder debe tener entre 3 y 60 caracteres")
    .trim(),
];
