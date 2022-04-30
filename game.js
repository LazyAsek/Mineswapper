
const grid=document.querySelector(".grid")
const score = document.querySelector(".score")

let clickedId = 0
//create blank squares
function createSquares (){
    for(i=0;i<100;i++){
        const block = document.createElement("button")
        block.classList.add("blank")
        block.setAttribute("id",i)
        grid.appendChild(block)
        block.setAttribute("onClick","clicking(this.id)")
    }
}

createSquares()

const squares = document.querySelectorAll(".blank")

//random number
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }



//place mines
function placeMines(){

    for(i=0;i<20;i++){
        let mine = random(0,99)
        squares[mine].classList.add("mine")
    }

}

placeMines()

//clicking
function clicking (clicked){
clickedId= clicked
parseInt( clickedId )
checkingForMines()
}

//value around mines
function checkingForMines(){
  if(squares[clickedId].classList.contains("mine")){
      lose()
  }
  let minesaround = 0
//check for mines around
  if(squares[clickedId -1].classList.contains("mine")){minesaround+=1}

  if(squares[clickedId +1].classList.contains("mine")){minesaround +=1}

}


function lose(){
score.innerHTML = "You lose"
setTimeout(window.location.reload(true),10000)
}

function One(){
    squares[clickedId].classList.remove("blank")
    squares[clickedId].classList.add("blank2")
    squares[clickedId].innerHTML = '1'
}


