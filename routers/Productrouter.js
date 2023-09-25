const express=require("express");
const router=express.Router()

const ProductController=require('../controllers/ProductController')

router.post('/createproduct',ProductController.createProduct)
router.get('/getproduct',ProductController.getProduct)
router.get('/getproductbyid/:id',ProductController.getProductById)
router.put('/updateproduct/:id',ProductController.updateProduct)
router.delete('/deleteproduct/:id',ProductController.deleteProduct)

module.exports = router;                                                