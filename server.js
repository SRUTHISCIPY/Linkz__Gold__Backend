const express=require('express');
const dotenv = require('dotenv');
const app= express();
const connect = require('./mongodb/config');
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
dotenv.config();

const PORT = process.env.PORT;

connect();

app.use('/user',UserRouter)
app.use('/product',ProductRouter)
app.use('/purchasedigitalgold',PurchaseDigitalGoldRouter)
app.use('/Purchasegoldcoin',PurchaseGoldCoinRouter)
app.use('/Goldcoin',GoldCoinRouter)
app.use('/Digitalgold',DigitalGoldRouter)
app.use('/purchasejewellery',PurchaseJewelleryRouter)
app.listen(PORT, () => { console.log(`Server started at ${PORT}`) })

// const data ={
   
//     firstName :"Sruthi",
//     lastName :"s",
//     email :"sruthi123@gmail.com",
//     password:"Esrr343@444"
// }

// console.log(signupValidation(data))

