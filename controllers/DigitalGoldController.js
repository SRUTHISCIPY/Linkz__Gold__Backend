const DigitalGold= require("../models/DigitalGoldSchema")
module.exports={
  createDigitalGold:async(req,res)=>{
    const {Price,Purity,Region}=req.body;
    try{
        const result=await DigitalGold.create({
            Price,
            Purity,
            Region, 
        });
        res.status(200).json({result});
    }
        catch(err){
        res.status(400).json({err});
        }
    },
    getDigitalGold:async(req,res)=>{
        try {
             const result2=await DigitalGold.find()
             res.status(200).json({result2});
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        },    
   getDigitalGoldById:async(req,res)=>{
    const id=req.params.id
    try {
         const result3=await DigitalGold.findById(id)
         res.status(200).json({result3});
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  updateDigitalGold:async(req,res)=>{
    const id=req.params.id
    try {
         await DigitalGold.findByIdAndUpdate(id,{
            Price:req.body.Price,
            Purity:req.body.Purity,
            Region:req.body.Region,
         });
         res.status(200).json("success");
    }
    catch(err) {
        res.status(400).json({err});
        }
   },
  deleteDigitalGold:async(req,res)=>{
        const id=req.params.id
        try {
             await DigitalGold.findByIdAndDelete(id)
             res.status(200).json("success");
        }
        catch(err) {
            res.status(400).json({err});
            }
    
        }}