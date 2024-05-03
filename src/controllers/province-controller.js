import { Router } from "express";
import ProvinceService from "../services/province-service";
import ValidacionesHelper from "../helpers/validaciones-helper";

const router = Router();
const svc = new ProvinceService(); // Instanciación del Service.

let arrayProvincias = [];

router.get('', async (req, res) => {
  let respuesta;
  const returnArray = await svc.getAllAsync();
  if (returnArray != null) {
    arrayProvincias = returnArray;
    respuesta = res.status(200).json(returnArray);
  } else {
    respuesta = res.status(500).send('Error interno');
  }
  return respuesta;
});

router.get('/:id', async (req, res) => {
    const id = ValidacionesHelper.getIntegerOrDefault(req.params.id, 0)
    const provincia = arrayProvincias.find(provincia => provincia.id === id)
    if (provincia) {
        res.status(200).send(provincia)
    } else {
        res.status(404).send()
    }
});

router.post('', async (req, res) => {
    const name = ValidacionesHelper.getStringOrDefault(req.body.name, "")
    const fullName = ValidacionesHelper.getStringOrDefault(req.body.full_name, "")
    const latitude = ValidacionesHelper.getIntegerOrDefault(req.body.latitude, 0)
    const longitude = ValidacionesHelper.getIntegerOrDefault(req.body.longitude, 0)
    const displayOrder = ValidacionesHelper.getIntegerOrDefault(req.body.display_order, 0)

    if (name.length > 3 && fullName.length > 3 && latitude && longitude && displayOrder) {
      const id = arrayProvincias[arrayProvincias.length - 1].id + 1
        const newProvince = {
            id: id,
            name,
            fullName,
            latitude,
            longitude,
            displayOrder
        }
        arrayProvincias.push(newProvince)
        res.status(201).send()
    }
    else {
        res.status(400).send('El nombre no puede ser vacío y debe tener al menos 3 caracteres.')
    }
});

router.put('', async (req, res) => {
  const id = ValidacionesHelper.getIntegerOrDefault(req.body.id, 0)
  const index = arrayProvincias.findIndex(provincia => provincia.id === id)
    if (index != -1) {
      try {
        const name = ValidacionesHelper.getStringOrDefault(req.body.name, "")
        if (name.length > 3) {
          arrayProvincias[index].name = name
        }
        const fullName = ValidacionesHelper.getStringOrDefault(req.body.full_name, "")
        if (fullName.length > 3) {
          arrayProvincias[index].fullName = fullName
        }
        const latitude = ValidacionesHelper.getIntegerOrDefault(req.body.latitude, 0)
        if (latitude) {
          arrayProvincias[index].latitude = latitude
        }
        const longitude = ValidacionesHelper.getIntegerOrDefault(req.body.longitude, 0)
        if (longitude) {
          arrayProvincias[index].longitude = longitude
        }
        const displayOrder = ValidacionesHelper.getIntegerOrDefault(req.body.display_order, 0)
        if (displayOrder) {
          arrayProvincias[index].displayOrder = displayOrder
        }
        res.status(201).send()
      }
      catch (e) {
        res.status(404).send(e)
      }
  } else {
        res.status(400).send('El id no existe.')
    }
});

router.delete('/:id', async (req, res) => {
    const id = ValidacionesHelper.getIntegerOrDefault(req.params.id, 0)
    const index = arrayProvincias.findIndex(provincia => provincia.id === id)
    if (index != -1) {
        arrayProvincias.splice(index, 1)
        res.status(200).send()
    } else {
        res.status(404).send()
    }
});