import helper from './helper';
import db from '../db/query';

/**
 * Class representing UserController
 * @class UserController
 */
class UserController {
  /**
     * Signup a user to the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
     * @memberof UserController
     */
  static async signUp(req, res) {
    const createQuery = 'INSERT INTO users(firstName, lastName, username, email, password) VALUES($1, $2, $3, $4, $5) returning *';
    const hashPassword = helper.hashPassword(req.body.password);
    const values = [
      req.body.firstName,
      req.body.lastName,
      req.body.username,
      req.body.email,
      hashPassword,
    ];

    try {
      const { rows } = await db.query(createQuery, values);
      const token = helper.generateToken(rows[0].user_id);
      return res.status(201).json({
        newUser: rows[0],
        message: 'Signup was successful',
        token
      });
    } catch (error) {
      if (error.rutine === ' _bt_check_unique') {
        return res.status(400).json({
          message: 'User exists'
        });
      }
      return res.status(400).json(error);
    }
  }
  /** static signUp(req, res) {
    const newUser = {
      id: users.length + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    };
    users.push(newUser);
    return res.status(201).json({
      newUser,
      message: 'Signup was successful'
    });
  } */

  /**
     * Login a user to the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
     * @memberof UserController
     */
  static login(req, res) {
    const { foundUser } = req.body;
    return res.status(200).json({
      message: `Welcome ${foundUser.username}!`
    });
  }
}
export default UserController;
