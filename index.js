let inputval = document.getElementById("calc-operation")
let outputval = document.getElementById("calc-typed")
let val1 =document.getElementById("1")
let val2 =document.getElementById("2")
let val3 =document.getElementById("3")
let val4 =document.getElementById("4")
let val5 =document.getElementById("5")
let val6 =document.getElementById("6")
let val7 =document.getElementById("7")
let val8 =document.getElementById("8")
let val9 =document.getElementById("9")
let val0 =document.getElementById("0")

let newval=0



let val = [val1,val2,val3,val4,val5,val6,val7,val8,val9,val0]

 
let firstval=""

val.forEach(button =>{
   button.addEventListener("click", function(){
      inputval.value += button.textContent
      firstval= inputval.value
      

       
   })
})




function plus(){
   
   inputval.value = firstval + "+"
   
  newval = parseInt(firstval) + newval
  firstval=""
    inputval.value=""
 
   equalto(newval)
   
   // console.log(inputval.value)
}
function subs(){
   
   inputval.value = firstval + "-"
   
   
   newval -= parseInt(firstval)
   firstval=""
   inputval.value=""
    
   
   
   equalto(newval)
   // console.log(inputval.value)
}
function mult(){
   
   inputval.value = firstval + "*"
   newval = parseInt(firstval) * newval
   firstval=""
    inputval.value=""
 
   equalto(newval)
}
function div(){
   
  
   newval /= parseInt(firstval)
   firstval=""
   inputval.value=""
    
   
   
   equalto(newval)
   
}

 function equalto(newvalue){
   
   
   outputval.textContent = newvalue.toString()
  
 }


    
    
  