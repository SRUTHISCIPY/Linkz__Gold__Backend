const GoldCoin= require("../models/GoldCoinSchema")
module.exports={
  createGoldCoin:async(req,res)=>{
    const {Weight,Purity,Type,Stock,Price,Tax,OfferPrice}=req.body;
    try{
        const result=await GoldCoin.create({
            Weight,
            Purity,
            Type,
            Stock,
            Price,
            Tax,
            OfferPrice 
        });
        res.status(200).json({result});
    }
        catch(err){
        res.status(400).json({err});
        }
    },
    getGoldCoin:async(req,res)=>{
        try {
             const result2=await GoldCoin.find()
             res.status(200).json({result2});
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        },    
   getGoldCoinById:async(req,res)=>{
    const id=req.params.id
    try {
         const result3=await GoldCoin.findById(id)
         res.status(200).json({result3});
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  updateGoldCoin:async(req,res)=>{
    const id=req.params.id
    try {
         await GoldCoin.findByIdAndUpdate(id,{
            Weight:req.body.Weight,
            Purity:req.body.Purity,
            Type:req.body.Type,
            Stock:req.body.Stock,
            Price:req.body.Price,
            Tax:req.body.Tax,
            OfferPrice:req.body.OfferPrice,
         });
         res.status(200).json("success");
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  deleteGoldCoin:async(req,res)=>{
        const id=req.params.id
        try {
             await GoldCoin.findByIdAndDelete(id)
             res.status(200).json("success");
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        }}