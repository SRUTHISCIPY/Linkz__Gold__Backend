const PurcahseGoldCoin= require("../models/PurchaseGoldCoin")
module.exports={
  createPurcahseGoldCoin:async(req,res)=>{
    const {OrderID,Quantity,Category,Amount,Tax,CustomerID,ProductID}=req.body;
    try{
        const result=await PurcahseGoldCoin.create({
            OrderID,
            Quantity,
            Category,
            Amount,
            Tax,
            CustomerID,
            ProductID 
        });
        res.status(200).json({result});
    }
        catch(err){
        res.status(400).json({err});
        }
    },
    getPurcahseGoldCoin:async(req,res)=>{
        try {
             const result2=await PurcahseGoldCoin.find()
             res.status(200).json({result2});
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        },    
   getPurcahseGoldCoinById:async(req,res)=>{
    const id=req.params.id
    try {
         const result3=await PurcahseGoldCoin.findById(id)
         res.status(200).json({result3});
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  updatePurcahseGoldCoin:async(req,res)=>{
    const id=req.params.id
    try {
         await PurcahseGoldCoin.findByIdAndUpdate(id,{
            OrderID:req.body.OrderID,
            Quantity:req.body.Quantity,
            Category:req.body.Category,
            Amount:req.body.Amount,
            Tax:req.body.Tax,
            CustomerID:req.body.CustomerID,
            ProductID:req.body.ProductID,
         });
         res.status(200).json("success");
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  deletePurcahseGoldCoin:async(req,res)=>{
        const id=req.params.id
        try {
             await PurcahseGoldCoin.findByIdAndDelete(id)
             res.status(200).json("success");
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        }}