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
}

export default BusinessController;
