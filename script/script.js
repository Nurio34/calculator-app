
const screen = document.querySelector(".result")
const numberInp = document.querySelector("#numberInp")

let value
let numbersArr = []

    numberInp.addEventListener("keyup",(e)=>{

        value = +numberInp.value
    })

    numberInp.addEventListener("keydown",(e)=>{
        
        if(e.key === "+"  || e.key === "-"  || e.key === "*"  || e.key === "/" || e.key === "Enter" ) {

            const operation = e.key

                if(numberInp.value) {
                    numbersArr.push(value)
                }
                numbersArr.push(operation)
                setTimeout(() => {numberInp.value = ""}, 0)
                screen.innerText = numbersArr[0]

                if(numbersArr.length >= 3){
                    if(numbersArr[1] === "+") {
                        const result = numbersArr[0] + numbersArr[2]
                        adjustScreen(result,e)
                    } else if(numbersArr[1] === "-") {
                        const result = numbersArr[0] - numbersArr[2]
                        adjustScreen(result,e)
                    } else if(numbersArr[1] === "*") {
                        const result = numbersArr[0] * numbersArr[2]
                        adjustScreen(result,e)
                    }
                    else if(numbersArr[1] === "/") {
                        const result = numbersArr[0] / numbersArr[2]
                        adjustScreen(result,e)
                    } 
                }
        }
    })



function adjustScreen(result,e) {
        numbersArr = []
        numbersArr.push(result)
        screen.innerText = numbersArr[0]

    const operation = e.key

        if(operation === "Enter") {
           console.log(numbersArr);
        } else {
            numbersArr.push(operation)
        }
}