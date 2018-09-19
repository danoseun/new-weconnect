import db from '../db/query';

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
  static async registerBusiness(req, res) {
    req.body.owner_id = req.user.user_id;
    const text = 'INSERT INTO businesses(owner_id, businessName, description, email, location, category, phoneNumber) VALUES($1, $2, $3, $4, $5, $6, $7) returning *';
    const values = [
      req.body.owner_id,
      req.body.businessName,
      req.body.description,
      req.body.email,
      req.body.location,
      req.body.category,
      req.body.phoneNumber
    ];
    try {
      const { rows } = await db.query(text, values);
      return res.status(201).json({
        message: 'Business successfully created',
        newBusiness: rows[0]
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  /** static registerBusiness(req, res) {
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
  } */

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

  /**
   * Get all businesses
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} JSON object representing success
   * @memberof BusinessController
   */
  static getAll(req, res) {
    return res.status(200).json({
      message: 'All businesses served successfully',
      businesses
    });
  }

  /**
   * Filter by location and/or Category
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next route handler
   * @returns {object} JSON object representing success
   * @memberof BusinessController
   */
  static filterSearch(req, res, next) {
    const { location, category } = req.query;
    let locationFilter;
    let categoryFilter;
    let filteredArray;
    if (location && !category) {
      locationFilter = businesses.filter(business => business.location.toLowerCase()
      === location.toLowerCase());
      if (locationFilter.length === 0) {
        return res.status(404).json({
          message: 'Location does not exist'
        });
      }
      return res.status(200).json({
        locationFilter
      });
    }
    if (category && !location) {
      categoryFilter = businesses.filter(business => business.category.toLowerCase()
      === category.toLowerCase());
      if (categoryFilter.length === 0) {
        return res.status(404).json({
          message: 'Category does not exist'
        });
      }
      return res.status(200).json({
        categoryFilter
      });
    }
    if (location && category) {
      filteredArray = businesses.filter(business => business.location.toLowerCase()
      === location.toLowerCase()
      && business.category.toLowerCase() === category.toLowerCase());
      if (filteredArray.length === 0) {
        return res.status(404).json({
          message: 'Location and category matching was not found'
        });
      }
      return res.status(200).json({
        filteredArray
      });
    }
    next();
  }
}

export default BusinessController;
