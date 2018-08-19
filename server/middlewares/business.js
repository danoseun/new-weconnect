import businesses from '../dummyDb/business';

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
  static createBusinessValidator(req, res, next) {
    /* eslint-disable prefer-const */
    let {
      businessName, description, location, category, email, phoneNumber
    } = req.body;

    // Business name
    if (businessName === undefined) {
      return res.status(406).json({
        message: 'Please specify business name'
      });
    }

    if (businessName === '') {
      return res.status(406).json({
        message: 'Business name field can not be empty'
      });
    }

    businessName = businessName.toUpperCase().trim();
    if (businessName.length < 1 || businessName.lebgth > 30) {
      return res.status(406).json({
        message: 'Ensure that your business name is between 1 to 30 characters'
      });
    }
    const alphaNumeric = /^[A-Za-z0-9]+$/;
    if (!alphaNumeric.test(businessName)) {
      return res.status(406).json({
        message: 'Only alphanumeric characters are allowed'
      });
    }
    const foundBusinessName = businesses.find(business => business.businessName === businessName);
    if (foundBusinessName) {
      return res.status(409).json({
        message: 'Business name already exists'
      });
    }
    // description
    if (description === undefined) {
      return res.status(406).json({
        message: 'Please tell us a brief summary of your business'
      });
    }
    if (description === '') {
      return res.status(406).json({
        message: 'Description field can not be empty'
      });
    }
    description = description.toLowerCase().trim();
    if (description.length < 1 || description.length > 50) {
      return res.status(406).json({
        message: 'Please restrict the description between 1 and 50 characters'
      });
    }
    if (!alphaNumeric.test(description)) {
      return res.status(406).json({
        message: 'Only alphanumeric characters are allowed in this field'
      });
    }
    // Location
    if (location === undefined) {
      return res.status(406).json({
        message: 'Please specify location'
      });
    }
    if (location === '') {
      return res.status(406).json({
        message: 'Location field can not be empty'
      });
    }
    location = location.toLowerCase().trim();
    const nameValidCharacters = /^[A-Za-z]+$/;
    if (!nameValidCharacters.test(location)) {
      return res.status(406).json({
        message: 'location should contain alphabets only'
      });
    }
    if (location.length < 2 || location.length > 30) {
      return res.status(406).json({
        message: 'We recommend for sanity sake that location should be between 2 and 30 characters'
      });
    }
    // Category
    if (category === undefined) {
      return res.status(406).json({
        message: 'You have made no input for category'
      });
    }
    if (category === '') {
      return res.status(406).json({
        message: 'Category field can not be empty'
      });
    }
    category = category.toLowerCase().trim();
    if (!nameValidCharacters.test(category)) {
      return res.status(406).json({
        message: 'Category can contain alphabets only'
      });
    }
    if (category.length < 2 || category.length > 15) {
      return res.status(406).json({
        message: 'For sanity sake, we recommend that characters should be between 2 and 15 characters'
      });
    }
    // Email
    if (email === undefined) {
      return res.status(406).json({
        message: 'You have made no input'
      });
    }
    if (email === '') {
      return res.status(406).json({
        message: 'Email field can not be empty'
      });
    }
    email = email.toLowerCase().trim();
    /* eslint-disable no-useless-escape */
    const emailVerifier = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!emailVerifier.test(email)) {
      return res.status(406).json({
        message: 'Your email format is invalid'
      });
    }
    const foundEmail = businesses.find(business => business.email === email);
    if (foundEmail) {
      return res.status(409).json({
        message: 'Email already exists'
      });
    }
    // Phone number
    if (phoneNumber === undefined) {
      return res.status(406).json({
        message: 'Supply your phone number'
      });
    }
    if (phoneNumber === '') {
      return res.status(406).json({
        message: 'Phone number can not be empty'
      });
    }
    const phoneNumberChecker = /^\d{11}$/;
    if (!phoneNumberChecker.test(phoneNumber)) {
      return res.status(406).json({
        message: 'Invalid phone number'
      });
    }
  }
}
export default BusinessValidator;
