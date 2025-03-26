import express from "express";
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  crearNuevoSuperheroeController,
  actualizarSuperheroeController,
  eliminarSuperheroePorIdController,
  eliminarSuperheroePorNombreController
} from "../controllers/superheroesController.mjs";

const router = express.Router();

// ENDPOINT SPRINT 2 FINAL //

router.get("/heroes", obtenerTodosLosSuperheroesController);
router.get("/heroes/:id", obtenerSuperheroePorIdController);
router.get("/heroes/buscar/:atributo/:valor",buscarSuperheroesPorAtributoController);
router.get("/heroes/edad/mayores-30", obtenerSuperheroesMayoresDe30Controller);

// ENDPOINT SPRINT 2 FINAL //

// ENDPOINT SPRINT 3 TRABAJO PRACTICO 1 INICIO //

router.get("/heroes", obtenerTodosLosSuperheroesController);
router.post("/heroes/crear", crearNuevoSuperheroeController);
router.put("/heroes/actualizar/:id", actualizarSuperheroeController);
router.delete("/heroes/eliminar/:id", eliminarSuperheroePorIdController);
router.delete("/heroes/eliminar/nombre/:nombre", eliminarSuperheroePorNombreController);

// ENDPOINT SPRINT 3 TRABAJO PRACTICO 1 FINAL //




export default router;
