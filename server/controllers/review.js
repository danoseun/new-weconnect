import reviews from '../dummyDb/review';

/**
 * Class representing review controller
 *
 * @class ReviewController
 */
class ReviewController {
  /**
     * Post a review for a business
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @returns {object} JSON representing success message
     * @memberof ReviewController
     */
  static postReview(req, res) {
    /* eslint-diasble prefer-const */
    // let busId = req.body.businessId;
    const cont = req.body.content;
    const busId = parseInt(req.params.businessId, 10);
    const id = reviews.length + 1;
    const addedReview = {
      id,
      busId,
      cont
    };
    reviews.push(addedReview);
    return res.status(201).json({
      message: 'Review successfully created',
      addedReview
    });
  }

  /**
   * Get all reviews for a business
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} JSON representing success message
   * @memberof ReviewController
   */
  static getAllReviews(req, res) {
    const { foundBusiness } = req.body;
    const { id } = foundBusiness;
    const allReviews = reviews.filter(review => id === review.businessId);
    if (allReviews.length === 0) {
      return res.status(404).json({
        message: 'No reviews found for this business'
      });
    }
    return res.status(200).json({
      message: 'Reviews served successfully',
      allReviews
    });
  }
}
export default ReviewController;
