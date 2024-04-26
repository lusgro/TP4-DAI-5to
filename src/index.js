import express from "express";
import cors from "cors";
//import ProvinceRouter from "./src/controllers/province-controller.js"

const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS.
app.use(express.json()); // Middleware para parsear y comprender JSON.
//
// Endpoints (todos los Routers)
//

const arrayProvincias = [{
    "id": 1,
    "name": "Buenos Aires",
    "fullName": "Buenos Aires, Argentina",
    "latitude": -34.6037,
    "longitude": -58.3816,
    "displayOrder": 1
  },
  {
    "id": 2,
    "name": "Catamarca",
    "fullName": "Catamarca, Argentina",
    "latitude": -28.4696,
    "longitude": -65.7852,
    "displayOrder": 2
  },
  {
    "id": 3,
    "name": "Chaco",
    "fullName": "Chaco, Argentina",
    "latitude": -26.8406,
    "longitude": -60.7697,
    "displayOrder": 3
  },
  {
    "id": 4,
    "name": "Chubut",
    "fullName": "Chubut, Argentina",
    "latitude": -43.2997,
    "longitude": -65.1023,
    "displayOrder": 4
  },
  {
    "id": 5,
    "name": "Ciudad Autónoma de Buenos Aires",
    "fullName": "Ciudad Autónoma de Buenos Aires, Argentina",
    "latitude": -34.6037,
    "longitude": -58.3816,
    "displayOrder": 5
  },
  {
    "id": 6,
    "name": "Córdoba",
    "fullName": "Córdoba, Argentina",
    "latitude": -31.4201,
    "longitude": -64.1888,
    "displayOrder": 6
  },
  {
    "id": 7,
    "name": "Corrientes",
    "fullName": "Corrientes, Argentina",
    "latitude": -27.4692,
    "longitude": -58.8306,
    "displayOrder": 7
  },
  {
    "id": 8,
    "name": "Entre Ríos",
    "fullName": "Entre Ríos, Argentina",
    "latitude": -31.7747,
    "longitude": -60.4956,
    "displayOrder": 8
  },
  {
    "id": 9,
    "name": "Formosa",
    "fullName": "Formosa, Argentina",
    "latitude": -26.1775,
    "longitude": -58.1781,
    "displayOrder": 9
  },
  {
    "id": 10,
    "name": "Jujuy",
    "fullName": "Jujuy, Argentina",
    "latitude": -24.1858,
    "longitude": -65.2995,
    "displayOrder": 10
  },
  {
    "id": 11,
    "name": "La Pampa",
    "fullName": "La Pampa, Argentina",
    "latitude": -36.6142,
    "longitude": -64.283,
    "displayOrder": 11
  },
  {
    "id": 12,
    "name": "La Rioja",
    "fullName": "La Rioja, Argentina",
    "latitude": -29.4131,
    "longitude": -66.8558,
    "displayOrder": 12
  },
  {
    "id": 13,
    "name": "Mendoza",
    "fullName": "Mendoza, Argentina",
    "latitude": -32.8908,
    "longitude": -68.8272,
    "displayOrder": 13
  },
  {
    "id": 14,
    "name": "Misiones",
    "fullName": "Misiones, Argentina",
    "latitude": -27.3363,
    "longitude": -55.8964,
    "displayOrder": 14
  },
  {
    "id": 15,
    "name": "Neuquén",
    "fullName": "Neuquén, Argentina",
    "latitude": -38.9517,
    "longitude": -68.059,
    "displayOrder": 15
  },
  {
    "id": 16,
    "name": "Río Negro",
    "fullName": "Río Negro, Argentina",
    "latitude": -40.8135,
    "longitude": -62.9967,
    "displayOrder": 16
  },
  {
    "id": 17,
    "name": "Salta",
    "fullName": "Salta, Argentina",
    "latitude": -24.7821,
    "longitude": -65.4232,
    "displayOrder": 17
  },
  {
    "id": 18,
    "name": "San Juan",
    "fullName": "San Juan, Argentina",
    "latitude": -31.5375,
    "longitude": -68.5364,
    "displayOrder": 18
  },
  {
    "id": 19,
    "name": "San Luis",
    "fullName": "San Luis, Argentina",
    "latitude": -33.3017,
    "longitude": -66.3378,
    "displayOrder": 19
  },
  {
    "id": 20,
    "name": "Santa Cruz",
    "fullName": "Santa Cruz, Argentina",
    "latitude": -51.6226,
    "longitude": -69.2181,
    "displayOrder": 20
  },
  {
    "id": 21,
    "name": "Santa Fe",
    "fullName": "Santa Fe, Argentina",
    "latitude": -31.6333,
    "longitude": -60.7,
    "displayOrder": 21
  },
  {
    "id": 22,
    "name": "Santiago del Estero",
    "fullName": "Santiago del Estero, Argentina",
    "latitude": -27.7951,
    "longitude": -64.2615,
    "displayOrder": 22
  },
  {
    "id": 23,
    "name": "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "fullName": "Tierra del Fuego, Antártida e Islas del Atlántico Sur, Argentina",
    "latitude": -54.8078,
    "longitude": -68.307,
    "displayOrder": 23
  },
  {
    "id": 24,
    "name": "Tucumán",
    "fullName": "Tucumán, Argentina",
    "latitude": -26.8083,
    "longitude": -65.2176,
    "displayOrder": 24
  }]

//app.use("/api/province", ProvinceRouter);

app.get('api/province', (req, res) => {
    res.status(200).send(arrayProvincias)
})

app.get('api/province/:id', (req, res) => {
    const id = req.params.id
    const provincia = arrayProvincias.find(provincia => provincia.id === id)
    if (provincia) {
        res.status(200).send(provincia)
    } else {
        res.status(404).send()
    }
})

app.post('api/province/', (req, res) => {
    const name = req.body.name
    const fullName = req.body.full_name
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    const displayOrder = req.body.display_order

    if (name && fullName && latitude && longitude && displayOrder) {
        const newProvince = {
            id: uuidv4(),
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
        res.status(400).send(error)
    }
})

app.put('api/province/', (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const fullName = req.body.full_name
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    const displayOrder = req.body.display_order

    const provincia = arrayProvincias.find(provincia => provincia.id === id)
    if (provincia && name && fullName && latitude && longitude && displayOrder) {
        provincia.name = name
        provincia.fullName = fullName
        provincia.latitude = latitude
        provincia.longitude = longitude
        provincia.displayOrder = displayOrder
        res.status(201).send()
    } else if (!provincia) {
        res.status(404).send(error)
    }
    else {
        res.status(400).send(error)
    }
})

app.delete('api/province/:id', (req, res) => {
    const id = req.params.id
    const provincia = arrayProvincias.find(provincia => provincia.id === id)
    if (provincia) {
        arrayProvincias = arrayProvincias.filter(provincia => provincia.id !== id)
        res.status(200).send()
    } else {
        res.status(404).send()
    }
})
//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})