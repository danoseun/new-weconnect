// import reviews from '../dummyDb/review';

/**
 * Class representing review validator
 *
 * @class ReviewChecker
 */
class ReviewChecker {
  /**
     * Get a review for a business
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @param {function} next - Calls the next route handler
     * @returns {object} JSON object representing failure
     * @memberof ReviewChecker
     */
  static verifyContent(req, res, next) {
    /* eslint-disable prefer-const */
    let { content } = req.body;

    if (content === undefined) {
      return res.status(400).json({
        message: 'Please specify content here'
      });
    }
    if (content === '') {
      return res.status(400).json({
        message: 'Content can not be empty'
      });
    }
    content = content.toLowerCase().trim();
    if (content.length >= 3000) {
      return res.status(400).json({
        message: 'Please restrict the review to 3000 or less characters'
      });
    }
    const allowedChars = /^[A-Za-z0-9!., ]/;
    if (!allowedChars.test(content)) {
      return res.status(400).json({
        message: 'This field permits only characters,numbers,!,.'
      });
    }
    req.body.content = content;
    next();
  }
}

export default ReviewChecker;
