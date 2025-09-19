const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');

const Campground = require('../models/campground');
const Review = require('../models/review');
const { createReview, deleteReview } = require('../controllers/reviews')


const catchAsync = require('../utils/catchAsync');


router.post('/', isLoggedIn, validateReview, createReview)

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, deleteReview)

module.exports = router;