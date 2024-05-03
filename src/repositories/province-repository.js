import DBConfig from "./../configs/dbConfig.js";
import sql from "mssql/msnodesqlv8.js";

export default class ProvinceRepository {
  getAllAsync = async () => {
    let returnArray = null;
    try {
      let pool = await sql.connect(DBConfig);
      const query = `SELECT * FROM provinces`;
      const result = await pool.request().query(query);
      returnArray = result.recordsets;
    } catch (error) {
      console.error(error);
    }
    return returnArray;
  };
  getByIdAsync = async (id) => {
    let returnArray = null;
    try {
      let pool = await sql.connect(DBConfig);
      const query = `SELECT * FROM provinces WHERE id = ${id}`;
      const result = await pool.request().query(query);
      returnArray = result.recordsets;
    } catch (error) {
      console.error(error);
    }
    return returnArray;
  };
  createAsync = async (entity) => {
    let returnArray = null;
    try {
      let pool = await sql.connect(DBConfig);
      const query = `INSERT INTO provinces (name, fullName, latitude, longitude, displayOrder) VALUES ('${entity.name}', '${entity.fullName}', ${entity.latitude}, ${entity.longitude}, ${entity.displayOrder})`;
      const result = await pool.query(query);
      returnArray = result.recordsets;
    } catch (error) {
      console.error(error);
    }
    return returnArray;
  };

  updateAsync = async (entity) => {
    let returnArray = null;
    try {
      let pool = await sql.connect(DBConfig);
      const query = `UPDATE provinces SET name = '${entity.name}', fullName = '${entity.fullName}', latitude = ${entity.latitude}, longitude = ${entity.longitude}, displayOrder = ${entity.displayOrder} WHERE id = ${entity.id}`;
      const result = await pool.query(query);
      returnArray = result.recordsets;
    } catch (error) {
      console.error(error);
    }
    return returnArray;
  };
  deleteByIdAsync = async (id) => {
    let returnArray = null;
    try {
      let pool = await sql.connect(DBConfig);
      const query = `DELETE FROM provinces WHERE id = ${id}`;
      const result = await pool.request().query(query);
      returnArray = result.recordsets;
    } catch (error) {
      console.error(error);
    }
    return returnArray;
  };
}
