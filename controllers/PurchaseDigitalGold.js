const PurchaseDigitalGold= require("../models/PurchaseDigitalGold")
module.exports={
  createPurchaseDigitalGold:async(req,res)=>{
    const {OrderID,Quantity,Price,Tax,CustomerID,Region}=req.body;
    try{
        const result=await PurchaseDigitalGold.create({
            OrderID,
            Quantity,
            Price,
            Tax,
            CustomerID,
            Region 
        });
        res.status(200).json({result});
    }
        catch(err){
        res.status(400).json({err});
        }
    },
    getPurchaseDigitalGold:async(req,res)=>{
        try {
             const result2=await PurchaseDigitalGold.find()
             res.status(200).json({result2});
        }
        catch(err) {
            res.status(400).json({err});
            }
        },    
   getPurchaseDigitalGoldById:async(req,res)=>{
    const id=req.params.id
    try {
         const result3=await PurchaseDigitalGold.findById(id)
         res.status(200).json({result3});
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  updatePurchaseDigitalGold:async(req,res)=>{
    const id=req.params.id
    try {
         await PurchaseDigitalGold.findByIdAndUpdate(id,{
            OrderID:req.body.OrderID,
            Quantity:req.body.Quantity,
            Price:req.body.Price,
            Tax:req.body.Tax,
            CustomerID:req.body.CustomerID,
            Region:req.body.Region,
         });
         res.status(200).json("success");
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  deletePurchaseDigitalGold:async(req,res)=>{
        const id=req.params.id
        try {
             await PurchaseDigitalGold.findByIdAndDelete(id)
             res.status(200).json("success");
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        }}