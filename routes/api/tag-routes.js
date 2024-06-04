const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      { model: Product }
  ]}).then((tagData) => {
    res.json(tagData);
  });
});

// get one tag by id
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { model: Product }
  ]}).then((tagData) => {
    res.json(tagData);
  });
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.error(err);
    res.status(400).json({ err: 'Failed to create tag'});
  });
});

// update a tag by id
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => {
    res.status(200).json(tag);
  }).catch((err) => {
    console.error(err);
    res.status(400).json({ err: `Failed to update tag id: ${req.params.id}`});
  })
});

// delete a tag by id
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((log) => {
    res.json(log)
  });
});

module.exports = router;
