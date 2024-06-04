const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      { model: Product }
  ]}).then((categoryData) => {
    res.json(categoryData);
  });
});

// get one category
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { model: Product }
  ]}).then((categoryData) => {
    res.json(categoryData);
  });
});

// create new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ err: 'Failed to create category' });
    });
});

// update a category
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((category) => {
    res.status(200).json(category);
  }).catch((err) => {
    console.error(err);
    res.status(400).json({ err: `Failed to update category id: ${req.params.id}`});
  })
});

// delete a category by id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((log) => {
    res.json(log)
  });
});

module.exports = router;
