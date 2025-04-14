const btnsEle = document.querySelectorAll("button")

const inputEle = document.getElementById("result")

for(let i = 0; i<btnsEle.length; i++){
    btnsEle[i].addEventListener("click", ()=>{
     
        const btnValue = btnsEle[i].textContent
        if(btnValue === "C"){
            clearResult()
        }
        else if(btnValue === "="){
            calculateResult()
        }else{
            appendValue(btnValue)
        }
    })
}


function clearResult(){
    inputEle.value = ""
}

function calculateResult(){
    inputEle.value = eval(inputEle.value)
}
function appendValue(btnValue){
    inputEle.value += btnValue
}
