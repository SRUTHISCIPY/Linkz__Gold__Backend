const express=require("express");
const router=express.Router()

const PurchaseJewelleryController=require('../controllers/PurchaseJewellery')

router.post('/createpurchasejewellery',PurchaseJewelleryController.createPurchaseJewellery)
router.get('/getpurchasejewellery',PurchaseJewelleryController.getPurchaseJewellery)
router.get('/getpurchasejewelleryById/:id',PurchaseJewelleryController.getPurchaseJewelleryById)
router.put('/updatepurchasejewellery/:id',PurchaseJewelleryController.updatePurchaseJewellery)
router.delete('/deletepurchasejewellery/:id',PurchaseJewelleryController.deletePurchaseJewellery)

module.exports = router;                                                