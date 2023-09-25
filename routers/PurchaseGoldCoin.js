const express=require("express");
const router=express.Router()

const PurchaseGoldCoinController=require('../controllers/PurchaseGoldCoin')

router.post('/createpurcahsegoldcoin',PurchaseGoldCoinController.createPurcahseGoldCoin)
router.get('/getpurcahsegoldcoin',PurchaseGoldCoinController.getPurcahseGoldCoin)
router.get('/getpurcahsegoldcoinbyid/:id',PurchaseGoldCoinController.getPurcahseGoldCoinById)
router.put('/updatepurcahsegoldcoin/:id',PurchaseGoldCoinController.updatePurcahseGoldCoin)
router.delete('/deletepurcahsegoldcoin/:id',PurchaseGoldCoinController.deletePurcahseGoldCoin)

module.exports = router;                                                