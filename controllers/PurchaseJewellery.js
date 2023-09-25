const PurchaseJewellery= require("../models/PurchaseJewellery")
module.exports={
  createPurchaseJewellery:async(req,res)=>{
    const {OrderID,ProductID,Amount,Tax,CustomerID,Quantity}=req.body;
    try{
        const result=await PurchaseJewellery.create({
            OrderID,
            ProductID,
            Amount,
            Tax,
            CustomerID,
            Quantity
        });
        res.status(200).json({result});
    }
        catch(err){
        res.status(400).json({err});
        }
    },
    getPurchaseJewellery:async(req,res)=>{
        const id=req.params.id
        try {
             const result2=await PurchaseJewellery.find()
             res.status(200).json({result2});
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        },    
   getPurchaseJewelleryById:async(req,res)=>{
    const id=req.params.id
    try {
         const result2=await PurchaseJewellery.findById(id)
         res.status(200).json({result2});
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  updatePurchaseJewellery:async(req,res)=>{
    const id=req.params.id
    try {
         await PurchaseJewellery.findByIdAndUpdate(id,{
            OrderID:req.body.OrderID,
            ProductID:req.body.ProductID,
            Amount:req.body.Amount,
            Tax:req.body.Tax,
            CustomerID:req.body.CustomerID,
            Quantity:req.body.Quantity
         });
         res.status(200).json("success");
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  deletePurchaseJewellery:async(req,res)=>{
        const id=req.params.id
        try {
             await PurchaseJewellery.findByIdAndDelete(id)
             res.status(200).json("success");
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        }}