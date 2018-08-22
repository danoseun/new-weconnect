import businesses from '../dummyDb/business';

/**
 * Class representing business controller
 *
 * @class BusinessController
 */
class BusinessController {
  /**
     * Register a business on the platform
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON representing success message
     * @memberof BusinessController
     */
  static registerBusiness(req, res) {
    const {
      businessName, description, location, category, email, phoneNumber
    } = req.body;
    const id = businesses[businesses.length - 1].id + 1;
    const newBusiness = {
      id,
      businessName,
      description,
      location,
      category,
      email,
      phoneNumber
    };
    businesses.push(newBusiness);
    res.status(201).json({
      message: 'Business successfully created',
      newBusiness
    });
  }

  /**
   * Modify Business
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - JSON object representing success
   * @memberof BusinessController
   */
  static updateBusiness(req, res) {
    const { foundBusiness } = req.body;
    /**
     * I don't know why eslint flags this destructuring below
     * It says the variables have been declared but not used
     * Hence the no-unused-vars error and ultimately
     * it isn't receiving what is being passed
     * from the request body
     */
    /** let {
      businessName, description, location, category, email, phoneNumber
    } = foundBusiness; */
    const {
      businessName: reqBusinessName, description: reqDescription, location: reqLocation,
      category: reqCategory, email: reqEmail,
      phoneNumber: reqPhoneNumber
    } = req.body;
    foundBusiness.businessName = reqBusinessName;
    foundBusiness.description = reqDescription;
    foundBusiness.location = reqLocation;
    foundBusiness.category = reqCategory;
    foundBusiness.email = reqEmail;
    foundBusiness.phoneNumber = reqPhoneNumber;
    return res.status(205).json({
      message: 'Profile updated successfully',
      foundBusiness
    });
  }

  /**
   * Delete business
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} JSON object representing success
   * @memberof BusinessController
   */
  static deleteBusiness(req, res) {
    const { foundBusiness } = req.body;
    businesses.splice(foundBusiness.id - 1, 1);
    return res.status(200).json({
      message: 'Business successfully removed',
      businesses
    });
  }

  /**
   * Get one Business
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} JSON object representing success
   * @memberof BusinessController
   */
  static getOne(req, res) {
    const { foundBusiness } = req.body;
    return res.status(200).json({
      message: 'Business successfully served',
      foundBusiness
    });
  }
}

export default BusinessController;
