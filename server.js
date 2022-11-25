var express=require("express")
var app= express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const addNumbers = (number1,number2)=> {
    var num1 = Number(number1)
    var num2 = Number(number2)
    var result = num1 + num2;
    return result;
}
const subNumbers = (number1,number2)=> {
    var num1 = Number(number1)
    var num2 = Number(number2)
    var result = num1 - num2;
    return result;
}
const mulNumbers = (number1,number2)=> {
    var num1 = Number(number1)
    var num2 = Number(number2)
    var result = num1 * num2;
    return result;
}
const divNumbers = (number1,number2)=> {
    var num1 = Number(number1)
    var num2 = Number(number2)
    var result = num1 / num2;
    return result;
}
app.get("/addNumbers", (req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1, number2)
    res.json({statusCode: 200, data: result, message:'Success'})
})
app.get("/subNumbers", (req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = subNumbers(number1, number2)
    res.json({statusCode: 200, data: result, message:'Success'})
})
app.get("/mulNumbers", (req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = mulNumbers(number1, number2)
    res.json({statusCode: 200, data: result, message:'Success'})
})
app.get("/divNumbers", (req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = divNumbers(number1, number2)
    res.json({statusCode: 200, data: result, message:'Success'})
})
var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App listening to:http://localhost:"+port)

})