let direction ={x:0, y:0}

let speed =2;
let pastTime= 0;
let score=0;
let snakearray= [
    {x:4 , y:3}
]

food ={x:13 , y:15}
const main=(time)=>{
    window.requestAnimationFrame(main)
   
    if((time - pastTime)/1000 < 1/speed)
    {
       return
    }
    pastTime = time
    gameScreen()
}
const isCollding=(snake)=>{
    return false;
}

const gameScreen=()=>{
   if(isCollding(snakearray)){
    direction ={x:0, y:0}
    alert('Game over')
    snakearray= [ {x:4 , y:3} ]
    score=0
   }
if(snakearray[0].y ===food.y && snakearray[0].x ===food.x){
    snakearray.unshift({x: snakearray[0].x + direction.x, y: snakearray[0].y + direction.y})
    let a =1
    let b = 20
    food ={x:Math.round(a +(b -a)*Math.random()), y:Math.round(a +(b -a)*Math.random())}
}
    
    for (let i = snakearray.length-2; i>0; i--) {
        snakearray[i+1] ={...snakearray[i]}
        
    }

        snakearray[0].x += direction.x
        snakearray[0].y += direction.y

    board.innerHTML= ""
    snakearray.forEach((e, index)=>{
        snakeElement =document.createElement('div')
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index===0)
       { snakeElement.classList.add('head')}
       else{
        snakeElement.classList.add('snakebody')
       }
        board.appendChild(snakeElement)

        foodElement =document.createElement('div')
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food')
        board.appendChild(foodElement)
        
    })
}

window.requestAnimationFrame(main)
window.addEventListener('keydown', e=>{
    direction={x:0, y:1}
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            direction.x=0;
            direction.y=-1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            direction.x=0;
            direction.y=1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            direction.x= -1;
            direction.y= 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            direction.x= 1;
            direction.y= 0;
            break;
    
        default:
            break;
    }
    
})