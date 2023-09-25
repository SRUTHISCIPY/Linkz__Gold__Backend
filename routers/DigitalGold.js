const express=require("express");
const router=express.Router()

const DigitalGoldController=require('../controllers/DigitalGoldController')

router.post('/createdigitalgold',DigitalGoldController.createDigitalGold)
router.get('/getdigitalgold',DigitalGoldController.getDigitalGold)
router.get('/getdigitalgoldbyid/:id',DigitalGoldController.getDigitalGoldById)
router.put('/updatedigitalgold/:id',DigitalGoldController.updateDigitalGold)
router.delete('/deletedigitalgold/:id',DigitalGoldController.deleteDigitalGold)

module.exports = router;                                                