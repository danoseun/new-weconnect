import db from '../db/query';

/**
 * Class representing Business validator
 *
 * @class BusinessValidator
 */
class BusinessValidator {
  /**
     * Get a specific business
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @param {function} next - Calls the next route handler
     * @returns {object} JSON object representing failure message
     * @memberof BusinessValidator
     */
  static getOneBusiness(req, res, next) {
    /**
     * I think I should do a check to see if typeof businessId
     * is a number then the find will be inside the if block
     * and so there will be two if statements and two elses
     * One if will house the if found and else while the other will house the else for the if
     * i.e if businessId is not a number.
     */
    const { businessId } = req.params;
    const foundBusiness = businesses.find(business => business.id === parseInt(businessId, 10));
    if (!foundBusiness) {
      return res.status(404).json({
        message: 'Business not found'
      });
    }
    req.body.foundBusiness = foundBusiness;
    return next();
  }

  /**
   * Create a business
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {object} next - Calls the next route handler
   * @returns {object} JSON object representing failure message
   * @memberof BusinessValidator
   */
  static businessValidator(req, res, next) {
    /* eslint-disable prefer-const */
    let {
      businessName, description, location, category, email, phoneNumber
    } = req.body;

    // Business name
    if (businessName === undefined) {
      return res.status(400).json({
        message: 'Please specify business name'
      });
    }

    if (businessName === '') {
      return res.status(400).json({
        message: 'Business name field can not be empty'
      });
    }

    businessName = businessName.trim().toLowerCase();
    if (businessName.length > 100) {
      return res.status(400).json({
        message: 'Ensure that your business name is between 1 to 100 characters'
      });
    }
    const alphaNumeric = /^[A-Za-z0-9 ]+$/;
    if (!alphaNumeric.test(businessName)) {
      return res.status(400).json({
        message: 'Only alphanumeric characters are allowed'
      });
    }

    db.query('select businessName from businesses where businessName = $1', [businessName])
      .then((result) => {
        if (result.rowCount !== 0) {
          return res.status(409).json({
            message: 'Businessname taken.'
          });
        }
      }).catch(error => res.status(500).json({
        error: error.message
      }));
    /** const foundBusinessName = businesses.find(business => business.businessName === businessName);
    if (foundBusinessName) {
      return res.status(409).json({
        message: 'Business name already exists'
      });
    } */
    // description
    if (description === undefined) {
      return res.status(400).json({
        message: 'Please give us a brief summary of your business'
      });
    }
    if (description === '') {
      return res.status(400).json({
        message: 'Description field can not be empty'
      });
    }
    description = description.toLowerCase().trim();
    if (description.length < 1 || description.length > 50) {
      return res.status(400).json({
        message: 'Please restrict the description between 1 and 50 characters'
      });
    }
    if (!alphaNumeric.test(description)) {
      return res.status(400).json({
        message: 'Only alphanumeric characters are allowed in this field'
      });
    }
    // Location
    if (location === undefined) {
      return res.status(400).json({
        message: 'Please specify location'
      });
    }
    if (location === '') {
      return res.status(400).json({
        message: 'Location field can not be empty'
      });
    }
    location = location.toLowerCase().trim();
    const nameValidCharacters = /^[A-Za-z]+$/;
    if (!nameValidCharacters.test(location)) {
      return res.status(400).json({
        message: 'location should contain alphabets only'
      });
    }
    if (location.length < 2 || location.length > 30) {
      return res.status(400).json({
        message: 'We recommend for sanity sake that location should be between 2 and 30 characters'
      });
    }
    // Category
    if (category === undefined) {
      return res.status(400).json({
        message: 'You have made no input for category'
      });
    }
    if (category === '') {
      return res.status(400).json({
        message: 'Category field can not be empty'
      });
    }
    category = category.toLowerCase().trim();
    if (!nameValidCharacters.test(category)) {
      return res.status(400).json({
        message: 'Category can contain alphabets only'
      });
    }
    if (category.length < 2 || category.length > 15) {
      return res.status(400).json({
        message: 'For sanity sake, we recommend that characters should be between 2 and 15 characters'
      });
    }
    // Email
    if (email === undefined) {
      return res.status(400).json({
        message: 'You have made no input for email'
      });
    }
    if (email === '') {
      return res.status(400).json({
        message: 'Email field can not be empty'
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

    db.query('select email from businesses where email = $1', [email])
      .then((result) => {
        if (result.rowCount !== 0) {
          return res.status(409).json({
            message: 'email already in use on this platform.'
          });
        }
      }).catch(error => res.status(500).json({
        error: error.message
      }));
    /** const foundEmail = businesses.find(business => business.email === email);
    if (foundEmail) {
      return res.status(409).json({
        message: 'Email already exists'
      });
    } */
    // Phone number
    if (phoneNumber === undefined) {
      return res.status(400).json({
        message: 'Supply your phone number'
      });
    }
    if (phoneNumber === '') {
      return res.status(400).json({
        message: 'Phone number can not be empty'
      });
    }
    const phoneNumberChecker = /^\d{11}$/;
    if (!phoneNumberChecker.test(phoneNumber)) {
      return res.status(400).json({
        message: 'Invalid phone number format'
      });
    }
    req.body.businessName = businessName;
    req.body.description = description;
    req.body.location = location;
    req.body.category = category;
    req.body.email = email;
    req.body.phoneNumber = phoneNumber;
    next();
  }
}
export default BusinessValidator;
