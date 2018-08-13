import users from '../dummyDb';

/**
 * Class representing UserController
 * @class UserController
 */

class UserController {
  /**
      * Sign user up on the platform
      *
      *@static
      *@param {object} req - The request object
      *@param {object} res - The response object
      *@returns {object} JSON object representing success message
      *@memberof UserController
      */
  static signUp(req, res) {
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
  }
}
export default UserController;
