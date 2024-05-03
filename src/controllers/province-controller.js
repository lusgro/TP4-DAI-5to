import { Router } from "express";
import ProvinceService from "../services/province-service.js";
import ValidacionesHelper from "../helpers/validaciones-helper.js";

const ProvinceRouter = Router();
const svc = new ProvinceService(); // Instanciación del Service.

ProvinceRouter.get("", async (req, res) => {
  let respuesta;
  const returnArray = await svc.getAllAsync();
  if (returnArray != null) {
    respuesta = res.status(200).json(returnArray);
  } else {
    respuesta = res.status(500).send(`Error interno.`);
  }
  return respuesta;
});

ProvinceRouter.get("/:id", async (req, res) => {
  let respuesta;
  const id = req.params.id;
  if (ValidacionesHelper.getIntegerOrDefault(id, 0) > 0) {
    const returnArray = await svc.getByIdAsync(id);
    if (returnArray != null) {
      respuesta = res.status(200).json(returnArray);
    } else {
      respuesta = res.status(500).send(`Error interno.`);
    }
  } else {
    respuesta = res.status(400).send(`Error en la solicitud.`);
  }
  return respuesta;
});

ProvinceRouter.post("", async (req, res) => {
  let respuesta;
  const entity = req.body;
  console.log(entity.name);
  if (entity != null) {
    const returnArray = await svc.createAsync(entity);
    if (returnArray != null) {
      respuesta = res.status(200).json(returnArray);
    } else {
      respuesta = res.status(500).send(`Error interno.`);
    }
  } else {
    respuesta = res.status(400).send(`Error en la solicitud.`);
  }
  return respuesta;
});

ProvinceRouter.put("", async (req, res) => {
  let respuesta;
  const entity = req.body;
  if (entity != null) {
    const returnArray = await svc.updateAsync(entity);
    if (returnArray != null) {
      respuesta = res.status(200).json(returnArray);
    } else {
      respuesta = res.status(500).send(`Error interno.`);
    }
  } else {
    respuesta = res.status(400).send(`Error en la solicitud.`);
  }
  return respuesta;
});

ProvinceRouter.delete("/:id", async (req, res) => {
  const id = req.params.id
  if (ValidacionesHelper.getIntegerOrDefault(id, 0) > 0) {
    const result = svc.deleteByIdAsync(id)
    if (result) {
      res.status(200).send(`Registro eliminado.`);
    } else {
      res.status(500).send(`Error interno.`);
    }
  }
  else {
    res.status(400).send(`Error en la solicitud.`);
  }
});

export default ProvinceRouter;