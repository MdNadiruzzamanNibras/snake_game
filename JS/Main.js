let direction ={x:0, y:0}

let speed =2;
let pastTime= 0;
let snakearray= [
    {x:13 , y:15}
]
const main=(time)=>{
    window.requestAnimationFrame(main)
    console.log(time)
    if((time - pastTime)/1000 < 1/speed)
    {
       return
    }
    pastTime = time
    gameScreen()
}

const gameScreen=()=>{
    board.innerHTML= ""
    snakearray.forEach((e, index)=>{
        snakeElement =document.createElement('div')
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        snakeElement.classList.add('food')
        board.appendChild(snakeElement)
        
    })
}

window.requestAnimationFrame(main)