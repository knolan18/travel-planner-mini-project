const router = require('express').Router();
const { Location, Traveller, Traveller } = require('../../models');


router.get("/api/traveller",(req,res)=>{
  Traveller.findAll().then(travellers=>{
      includes:[Traveller]
      res.json(travellers)
  }).then(trips=>{
      res.json(trips)
  })
})


router.get('/:id', async (req, res) => {
  try {
    const TravellerData = await Traveller.findByPk(req.params.id, {
      include: [{ model: Trip, Location }],
    });

    if (!TravellerData) {
      res.status(404).json({ message: 'No such traveller found!' });
      return;
    }

    res.status(200).json(TravellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const travellerData = await Traveller.create({
      traveller_id: req.body.traveller_id,
    });
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No such traveller found!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});