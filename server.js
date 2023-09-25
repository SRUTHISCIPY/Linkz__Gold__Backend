const express=require('express');
const mongoose=require('mongoose');

const app= express();
const port=2000;
const bodyParser = require('body-parser')
const UserRouter=require('./routers/UserRouter')
const ProductRouter=require('./routers/Productrouter')
const PurchaseDigitalGoldRouter=require('./routers/PurchaseDigitalGold')
const PurchaseGoldCoinRouter=require('./routers/PurchaseGoldCoin')
const GoldCoinRouter=require('./routers/GoldCoin')
const DigitalGoldRouter=require('./routers/DigitalGold')
const PurchaseJewelleryRouter=require('./routers/PurchaseJewellery')
const signupValidation=require('./validator/SignUp')
app.use(bodyParser.json())

app.use('/user',UserRouter)
app.use('/product',ProductRouter)
app.use('/purchasedigitalgold',PurchaseDigitalGoldRouter)
app.use('/Purchasegoldcoin',PurchaseGoldCoinRouter)
app.use('/Goldcoin',GoldCoinRouter)
app.use('/Digitalgold',DigitalGoldRouter)
app.use('/purchasejewellery',PurchaseJewelleryRouter)
app.listen(port,()=>{
    console.log(`app listening to port ${port}`)
})

const data ={
   
    firstName :"Sruthi",
    lastName :"s",
    email :"sruthi123@gmail.com",
    password:"Esrr343@444"
}

console.log(signupValidation(data))

mongoose.connect(`mongodb+srv://sCIPYTECH71:scipytechnologies71@cluster0.7tlwqki.mongodb.net/?retryWrites=true&w=majority`,{
})
.then(()=>console.log("mongoose connected"))
.catch((err)=>console.log("err"))