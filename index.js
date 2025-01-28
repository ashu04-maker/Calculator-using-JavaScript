let input =document.querySelector("input")
function addvalue(val){
    input.value += val
}
function clearvalue(){
    input.value =""
}
function delvalue(){
    input.value =input.value.slice(0, input.value.length-1)
}
function evaluateVal(){
    input.value = eval(input.value)
}