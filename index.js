/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
convertBtn = document.getElementById("convert-btn")
input = document.getElementById("input")
meters = document.getElementById("meters")
liters = document.getElementById("liters")
kilos = document.getElementById("kilos")

const meterToFeet = 3.281 
const feetToMeter = 0.3048
const literToGallon = 0.264
const gallonToliter = 3.785
const kilogramToPound = 2.204
const poundToGram = 453.592


convertBtn.addEventListener('click',function(){
    let listenValue = input.value
    meters.innerHTML = `${listenValue} meters = ${(listenValue * meterToFeet).toFixed(3)} feet | 
    ${listenValue} feet = ${(listenValue * feetToMeter).toFixed(3)} meters`
    
    liters.innerHTML = `${listenValue} liters = ${(listenValue * literToGallon).toFixed(3)} gallons | 
    ${listenValue} gallonst = ${(listenValue * gallonToliter).toFixed(3)} liters`
    
    kilos.innerHTML = `${listenValue} kilos = ${(listenValue * kilogramToPound).toFixed(3)} pounds | 
    ${listenValue} pounds = ${(listenValue * poundToGram).toFixed(3)} kilos`
})