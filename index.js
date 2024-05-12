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
    meters.innerHTML = `${input.value} meters = ${(input.value * meterToFeet).toFixed(3)} feet | 
    ${input.value} feet = ${(input.value * feetToMeter).toFixed(3)} meters`
    
    liters.innerHTML = `${input.value} liters = ${(input.value * literToGallon).toFixed(3)} gallons | 
    ${input.value} gallonst = ${(input.value * gallonToliter).toFixed(3)} liters`
    
    kilos.innerHTML = `${input.value} kilos = ${(input.value * kilogramToPound).toFixed(3)} pounds | 
    ${input.value} pounds = ${(input.value * poundToGram).toFixed(3)} kilos`
})