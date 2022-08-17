const { json } = require('express');
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

const productController = new ProductController();

router.get('/boots', async (req, res) => {
  res.status(200).send('Here are your boots');
  //   res.status(200).send(await ProductController.GetBoots());
});

// router.get('/projects', async (req, res) => {
//   res.status(200).send(await ProductController.GetProjects());
// });

// router.get('/contact', async (req, res) => {
//   res.status(200).send(await ProductController.GetContacts());
// });

module.exports = router;
