import pool from './connect';

export default {
  /**
 * DB Query Abstraction
 * @param {object} req
 * @param {object} res
 * @returns {object} object
 */

  query(text, params) {
    return new Promise((resolve, reject) => {
      pool.query(text, params).then((result) => {
        resolve(result);
      }).catch((error) => {
        reject(error.message);
      });
    });
  }
};
