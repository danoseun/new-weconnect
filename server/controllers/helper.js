import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const Helper = {
  /**
     * Hash password method
     * @param {string} password
     * @returns {string} returns hashed password
     */
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  },
  /**
   * comparePassword
   * @param {string} hashPassword
   * @param {string} password
   * @returns {Boolean} return True or False
   */
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
  /**
   * Generate Token
   * @param {string} user_id
   * @returns {string} token
   */

  /* eslint-disable camelcase */
  generateToken(user_id) {
    const token = jwt.sign({
      user_id
    },
    process.env.SECRET, { expiresIn: '7d' });
    return token;
  }
};

export default Helper;
