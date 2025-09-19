const express = require('express');
const router = express.Router();
const { index, renderNewForm, createCampground, showCampground, renderEditForm, updateCampground, deleteCampground } = require('../controllers/campgrounds')
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary')
const upload = multer({ storage });

const Campground = require('../models/campground');


router.route('/')
    .get(index)
    .post(isLoggedIn, upload.array('image'), validateCampground, createCampground);


// test
// .post(upload.array('image'), (req, res) => {
//     console.log(req.body, req.files);
//     res.send("IT Worked")
// })


router.get('/new', isLoggedIn, renderNewForm);

router.route('/:id')
    .get(showCampground)
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, updateCampground)
    .delete(isLoggedIn, isAuthor, deleteCampground);


router.get('/:id/edit', isLoggedIn, isAuthor, renderEditForm)



module.exports = router;