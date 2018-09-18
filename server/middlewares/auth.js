import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import db from '../db/query';

dotenv.config();

const Auth = {
  /**
     * Verify Token
     * @param {object} req
     * @param {object} res
     * @param {object} next
     * @returns {object} token
     */
  async verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(400).json({ message: 'Token is not provided' });
    }
    try {
      const decoded = await jwt.verify(token, process.env.SECRET);
      const text = 'SELECT * FROM users where user_id = $1';
      const { rows } = await db.query(text, [decoded.user_id]);
      if (!rows[0]) {
        return res.status(400).json({ message: 'The token you provided is invalid' });
      }
      req.user = { user_id: decoded.user_id };
      next();
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
};
export default Auth;
