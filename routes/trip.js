const router = require('express').Router();
const { Location, Trip, Traveller } = require('../../models');


router.get("/api/trips",(req,res)=>{
  Trip.findAll().then(trips=>{
      includes:[Trip]
      res.json(trips)
  }).then(trips=>{
      res.json(trips)
  })
})

router.post('/', async (req, res) => {
  try {
    const tripData = await Trip.create({
      traveller_id: req.body.traveller_id,
    });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tripData) {
      res.status(404).json({ message: 'No such trip found!' });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});