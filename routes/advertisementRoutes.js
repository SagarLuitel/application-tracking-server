const express = require('express');
const blogController = require('../controllers/advertisementContrrollers')

const router = express.Router();

// gets all post list
router.get('/', jobController.job);
// creates new post
router.post('/', jobController.create_job);
// get specific post
router.get('/:id', blogController.job_details);
// delete specific post
router.delete('/:id', blogController.job_delete);
// update specific post
router.put('/:id', blogController.job_update);

module.exports = router;