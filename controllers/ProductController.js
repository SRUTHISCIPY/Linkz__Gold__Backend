const Product= require("../models/ProductSchema")
module.exports={
  createProduct:async(req,res)=>{
    const {OrnamentName,Type,Weight,Stock,Material,Purity,StoneType,Description,Images,Price,EMI,OfferPrice}=req.body;
    try{
        const result=await Product.create({
            OrnamentName,
            Type,
            Weight,
            Stock,
            Material,
            Purity,
            StoneType,
            Description,
            Images,
            Price,
            EMI,
            OfferPrice 
        });
        res.status(200).json({result});
    }
        catch(err){
        res.status(400).json({err});
        }
    },
    getProduct:async(req,res)=>{
        try {
             const result2=await Product.find()
             res.status(200).json({result2});
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        },    
   getProductById:async(req,res)=>{
    const id=req.params.id
    try {
         const result3=await Product.findById(id)
         res.status(200).json({result3});
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  updateProduct:async(req,res)=>{
    const id=req.params.id
    try {
         await Product.findByIdAndUpdate(id,{
            OrnamentName:req.body.OrnamentName,
            Type:req.body.Type,
            Weight:req.body.Weight,
            Stock:req.body.Stock,
            Material:req.body.Material,
            Purity:req.body.Purity,
            StoneType:req.body.StoneType,
            Description:req.body.Description,
            Images:req.body.Images,
            Price:req.body.Price,
            EMI:req.body.EMI,
            OfferPrice:req.body.OfferPrice
         });
         res.status(200).json("success");
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  deleteProduct:async(req,res)=>{
        const id=req.params.id
        try {
             await Product.findByIdAndDelete(id)
             res.status(200).json("success");
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        }}