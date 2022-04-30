
const grid=document.querySelector(".grid")
const time = document.querySelector(".timer")

let clickedId = 0
let scoree = 0
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
const allblank = document.querySelectorAll(".blank")

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

const allmines = document.querySelectorAll(".mine")

//clicking
function clicking (clicked){
clickedId= parseInt(clicked)
checkingForMines()
}

//value around mines
function checkingForMines(){
  if(squares[clickedId].classList.contains("mine")){
      lose()
  }
  let minesaround = 0
//check for mines around
  if(clickedId !=0 && 
    clickedId !=10 && 
    clickedId !=20 &&
    clickedId !=30 &&
    clickedId !=40 &&
    clickedId !=50 &&
    clickedId !=60 &&
    clickedId !=70 &&
    clickedId !=80 &&
    clickedId !=90 
    ){
        if(squares[clickedId -1].classList.contains("mine")){minesaround+=1}
    }
  if(clickedId !=9 &&
     clickedId !=19 &&
      clickedId !=29 &&
      clickedId !=39 &&
      clickedId !=49 &&
      clickedId !=59 &&
      clickedId !=69 &&
      clickedId !=79 &&
      clickedId !=89 &&
      clickedId !=99 
    ){
        if(squares[clickedId +1].classList.contains("mine")){minesaround+=1}
    }
  if(clickedId+10<100) {if(squares[clickedId +10].classList.contains("mine")){minesaround+=1}}

  if (clickedId+10<100 &&
     clickedId !=9 &&
      clickedId !=19 &&
       clickedId !=29 &&
       clickedId !=39 &&
       clickedId !=49 &&
       clickedId !=59 &&
       clickedId !=69 &&
       clickedId !=79 &&
       clickedId !=89 &&
       clickedId !=99){
    if(squares[clickedId +11].classList.contains("mine")){minesaround+=1}
  }
  if(clickedId+10<100 &&
     clickedId !=0 &&
      clickedId !=10 &&
       clickedId !=20 &&
       clickedId !=30 &&
       clickedId !=40 &&
       clickedId !=50 &&
       clickedId !=60 &&
       clickedId !=70 &&
       clickedId !=80 &&
       clickedId !=90){
    if(squares[clickedId +9].classList.contains("mine")){minesaround+=1}
  }

  if(clickedId-10>0) {if(squares[clickedId -10].classList.contains("mine")){minesaround+=1}}

  if (clickedId-10>0 &&
     clickedId !=9 &&
      clickedId !=19 &&
       clickedId !=29 &&
       clickedId !=39 &&
       clickedId !=49 &&
       clickedId !=59 &&
       clickedId !=69 &&
       clickedId !=79 &&
       clickedId !=89 &&
       clickedId !=99){
    if(squares[clickedId -9].classList.contains("mine")){minesaround+=1}
  }
  if(clickedId-10>0 &&
     clickedId !=0 &&
      clickedId !=10 &&
       clickedId !=20 &&
       clickedId !=30 &&
       clickedId !=40 &&
       clickedId !=50 &&
       clickedId !=60 &&
       clickedId !=70 &&
       clickedId !=80 &&
       clickedId !=90){
    if(squares[clickedId -11].classList.contains("mine")){minesaround+=1}
  }
  countMines(minesaround)
}

function lose(){
    alert("BOOOOM!!!")
setTimeout(window.location.reload(true),10000)
}

let allblank2 = []

function zero(){
    squares[clickedId].classList.remove("blank")
    squares[clickedId].classList.add("blank2")
    squares[clickedId].innerHTML = '0'
    allblank2 = document.querySelectorAll(".blank2")
}
function One(){
    squares[clickedId].classList.remove("blank")
    squares[clickedId].classList.add("blank2")
    squares[clickedId].innerHTML = '1'
    allblank2 = document.querySelectorAll(".blank2")
}
function two(){
    squares[clickedId].classList.remove("blank")
    squares[clickedId].classList.add("blank2")
    squares[clickedId].innerHTML = '2'
    allblank2 = document.querySelectorAll(".blank2")
}
function three(){
    squares[clickedId].classList.remove("blank")
    squares[clickedId].classList.add("blank2")
    squares[clickedId].innerHTML = '3'
    allblank2 = document.querySelectorAll(".blank2")
}
function four(){
    squares[clickedId].classList.remove("blank")
    squares[clickedId].classList.add("blank2")
    squares[clickedId].innerHTML = '4'
    allblank2 = document.querySelectorAll(".blank2")
}
function five(){
    squares[clickedId].classList.remove("blank")
    squares[clickedId].classList.add("blank2")
    squares[clickedId].innerHTML = '5+'
    allblank2 = document.querySelectorAll(".blank2")
}

function countMines(minesaround){

    if(minesaround == 1){One()}
    if(minesaround == 2){two()}
    if(minesaround == 3){three()}
    if(minesaround == 4){four()}
    if(minesaround >=5){five()}
    if(minesaround == 0){zero()}

}

let s = 0

function timer(){
 time.innerHTML = "Time:"+s
}

function stoper(){
    s +=1
    timer()
}

setInterval(stoper,1000)

