const express=require("express");
const router=express.Router()

const PurchaseDigitalGoldController=require('../controllers/PurchaseDigitalGold')

router.post('/createpurchasedigitalgold',PurchaseDigitalGoldController.createPurchaseDigitalGold)
router.get('/getpurchasedigitalgold',PurchaseDigitalGoldController.getPurchaseDigitalGold)
router.get('/getpurchasedigitalgoldbyid/:id',PurchaseDigitalGoldController.getPurchaseDigitalGoldById)
router.put('/updatepurchasedigitalgold/:id',PurchaseDigitalGoldController.updatePurchaseDigitalGold)
router.delete('/deletepurchasedigitalgold/:id',PurchaseDigitalGoldController.deletePurchaseDigitalGold)

module.exports = router;                                                