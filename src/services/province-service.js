import ProvinceRepository from "../repositories/province-repository.js";
export default class ProvinceService {
  // Clase con lógica de negocio.
  getAllAsync = async () => {
    const repo = new ProvinceRepository();
    const returnArray = await repo.getAllAsync();
    return returnArray;
  };

  getByIdAsync = async (id) => await new ProvinceRepository().getByIdAsync(id);
  createAsync = async (entity) =>
    await new ProvinceRepository().createAsync(entity);
  updateAsync = async (entity) =>
    await new ProvinceRepository().updateAsync(entity);
  deleteByIdAsync = async (id) =>
    await new ProvinceRepository().deleteByIdAsync(id);
}
