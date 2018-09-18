import db from '../db/query';

/**
 * Class representing User Validations
 * @class UserValidator
 */
class UserValidator {
  /**
     * @param {object} req - The request object
     * @param { object} res - The response object
     * @param {function} next - Calls the next function/route handler
     * @returns {object} JSON representing the failure message.
   */
  static signUpValidator(req, res, next) {
    /* eslint-disable prefer-const */
    let {
      firstName, lastName, username, email, password
    } = req.body;

    if (firstName === undefined) {
      return res.status(400).json({
        message: 'Pls supply your first name'
      });
    }

    if (firstName === '') {
      return res.status(400).json({
        message: 'Pls supply your first name'
      });
    }
    firstName = firstName.trim();
    if (firstName.length < 2 || firstName.length > 20) {
      return res.status(400).json({
        message: 'first name should be 2 to 20 characters'
      });
    }

    if (lastName === undefined) {
      return res.status(400).json({
        message: 'Input field cannot be empty'
      });
    }

    if (lastName === '') {
      return res.status(400).json({
        message: 'Input field cannot be empty'
      });
    }

    lastName = lastName.trim();
    if (lastName.length < 2 || lastName.length > 20) {
      return res.status(400).json({
        message: 'last name should be 2 to 20 characters'
      });
    }

    const nameValidCharacters = /^[A-Za-z]+$/;
    if (!nameValidCharacters.test(firstName)) {
      return res.status(400).json({
        message: 'first name can only contain alphabets'
      });
    }
    if (!nameValidCharacters.test(lastName)) {
      return res.status(400).json({
        message: 'last name can only contain alphabets'
      });
    }

    // Username validations
    if (username === undefined) {
      return res.status(400).json({
        message: 'Username was not supplied'
      });
    }
    if (username === '') {
      return res.status(400).json({
        message: 'username can not be empty'
      });
    }
    username = username.toLowerCase().trim();
    if (username.length < 2 || username.length > 10) {
      return res.status(400).json({
        message: 'username should be 2 to 10 characters long'
      });
    }
    if (username.includes(' ')) {
      return res.status(400).json({
        message: 'use a single name or word as your username'
      });
    }

    const alphaNumeric = /^[A-Za-z0-9]+$/;
    if (!alphaNumeric.test(username)) {
      return res.status(400).json({
        message: 'Username can only contain alphanumeric characters'
      });
    }

    db.query('select username from users where username = $1', [username])
      .then((result) => {
        if (result.rowCount !== 0) {
          return res.status(409).json({
            message: 'Username taken'
          });
        }
      }).catch(error => res.status(500).json({
        message: error.message
      }));

    // Email validations
    if (email === undefined) {
      return res.status(400).json({
        message: 'You have made no input for email'
      });
    }
    if (email === '') {
      return res.status(400).json({
        message: 'email cannot be empty'
      });
    }
    email = email.toLowerCase().trim();
    /* eslint-disable no-useless-escape */
    const emailVerifier = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!emailVerifier.test(email)) {
      return res.status(400).json({
        message: 'Your email format is invalid'
      });
    }
    // I discovered that this validation is suspect during unit testing
    if (email.length < 10 || email.length > 30) {
      return res.status(400).json({
        message: 'Your email should be 10 to 30 characters long'
      });
    }

    db.query('select email from users where email = $1', [email])
      .then((result) => {
        if (result.rowCount !== 0) {
          return res.status(409).json({
            message: 'Email taken'
          });
        }
      }).catch(error => res.status(500).json({
        message: error.message
      }));
    /** const foundEmail = users.find(user => user.email === email);
    if (foundEmail) {
      return res.status(409).json({
        message: 'Email already exists!'
      });
    } */

    // Password validations
    if (password === undefined) {
      return res.status(400).json({
        message: 'You have made no input for password'
      });
    }

    if (password === '') {
      return res.status(400).json({
        message: 'Password field cannot be empty'
      });
    }

    /** Got an idea during testing again!
     * Could have wrritten a function
     * to test password validity with */
    password = password.trim();
    if (password.length > 15) {
      return res.status(400).json({
        message: 'Password should not be greater than 15 characters'
      });
    }
    req.body.firstName = firstName;
    req.body.lastName = lastName;
    req.body.username = username;
    req.body.password = password;
    return next();
  }

  /**
     * login user to the application
     * @param {object} req - The request object
     * @param { object} res - The response object
     * @param {function} next - Calls the next function/route handler
     * @returns {object} JSON representing the failure message.
       */
  static loginValidator(req, res, next) {
    let { username, password } = req.body;
    if (username === undefined) {
      return res.status(401).json({
        message: 'You have made no input for username'
      });
    }

    if (username === '') {
      return res.status(401).json({
        message: 'username field cannot be empty'
      });
    }
    username = username.toLowerCase().trim();
    db.query('select username from users where username = $1', [username])
      .then((result) => {
        if (result.rowCount === 0) {
          return res.status(404).json({
            message: 'Username not found.'
          });
        }
      }).catch(error => res.status(500).json({
        error: error.message
      }));
    /**
    const foundUser = users.find(user => user.username === username);
    if (!foundUser) {
      return res.status(401).json({
        message: 'Authentication failed'
      });
    } */

    if (password === undefined) {
      return res.status(401).json({
        message: 'No password was supplied'
      });
    }

    if (password === '') {
      return res.status(401).json({
        message: 'Fill in your password'
      });
    }
    password = password.trim();
    /**
     * If the user details/object is found
     * and password supplied is not same
     * as password in the database return error
     */
    /** if (foundUser && password !== foundUser.password) {
      return res.status(401).json({
        message: 'Authentication unsuccessful'
      });
    } */
    req.body.username = username;
    req.body.password = password;
    return next();
  }
}
export default UserValidator;
