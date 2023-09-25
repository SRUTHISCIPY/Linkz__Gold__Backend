const express=require("express");
const router=express.Router()

const GoldCoinController=require('../controllers/GoldCoinController')

router.post('/createGoldCoin',GoldCoinController.createGoldCoin)
router.get('/getGoldCoin',GoldCoinController.getGoldCoin)
router.get('/getGoldCoinbyid/:id',GoldCoinController.getGoldCoinById)
router.put('/updateGoldCoin/:id',GoldCoinController.updateGoldCoin)
router.delete('/deleteGoldCoin/:id',GoldCoinController.deleteGoldCoin)

module.exports = router;                                                