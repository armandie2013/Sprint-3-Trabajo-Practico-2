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

  /*body("edad")
    .trim()
    .notEmpty()
    .withMessage("La edad es requerida y no puede estar vacia")
    .isNumeric()
    .isInt({ min: 0 })
    .withMessage("La edad es incorrecta"),*/

  body("edad")
    .trim()
    .notEmpty()
    .withMessage("La edad es requerida y no puede estar vacia")
    .custom ((value) => {
      if (!isNaN(Number(value))) {
        throw new Error("La edad debe ser un número");
    }
    }),
    

  /*body("poderes")
  .trim()
    .notEmpty()
    .withMessage("La lista de poderes no puede estar vacia")
    .isArray({ min: 1 })
    .withMessage("Poderes no es un array valido o está vacío"),

  body("poderes.*")
    .isString()
    .withMessage("Cada poder debe ser una cadena de texto")
    .isLength({ min: 3, max: 60 })
    .withMessage("Cada poder debe tener entre 3 y 60 caracteres")
    .trim(),*/

  body("poderes")
    .trim()
    .notEmpty()
    .withMessage("La lista de poderes no puede estar vacía")
    .isArray({ min: 1 })
    .withMessage("Poderes no es un array o está vacío")
    .custom((value) => {
      if (
        value.some(
          (poder) =>
            typeof poder !== "string" ||
            poder.trim().length < 3 ||
            poder.trim().length > 60
        )
      ) {
        throw new Error(
          "Cada poder debe ser un string entre 3 y 60 caracteres"
        );
      }
      return true;
    }),
];
