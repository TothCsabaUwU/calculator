let numBox=document.querySelectorAll(".box")
numBox.forEach(obj=>obj.addEventListener("click", numCalc))

function numCalc(){
console.log(this.innerHTML)
let num=this.innerHTML
let box=document.querySelector(".boxResult")
if(num=="C"){ 
    box.innerHTML="" 
}else if(num=="="){
        box.innerHTML=eval(box.innerHTML)
}else{
    box.innerHTML+=num
}
}
