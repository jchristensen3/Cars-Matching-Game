let cardArray = [ 
    { name: "LQ", img: "lq.PNG", }, 
    { name: "LQ", img: "lq.PNG", },
    { name: "Mater", img: "blue.PNG", },
    { name: "mater", img: "blue.PNG", }, 
    { name: "doc", img: "brown.PNG", },
    { name: "doc", img: "brown.PNG", }, 
    { name: "sally", img: "bus.PNG", },
    { name: "sally", img: "bus.PNG", },
    { name: "belle", img: "car.PNG", },
    { name: "belle", img: "car.PNG", },
    { name: "jasmine", img: "Cruz.PNG", },
    { name: "jasmine", img: "Cruz.PNG", }, 
    { name: "pocahontas", img: "Fire.PNG", }, 
    { name: "pocahontas", img: "Fire.PNG", }, 
    { name: "mulan", img: "green.PNG", }, 
    { name: "mulan", img: "green.PNG", }, 
    { name: "tiana", img: "purple.PNG", }, 
    { name: "tiana", img: "purple.PNG", }, 
    { name: "rapunzel", img: "semi.PNG", }, 
    { name: "rapunzel", img: "semi.PNG", }, 
    { name: "merida", img: "truck.PNG", }, 
    { name: "merida", img: "truck.PNG", }, 
    { name: "moana", img: "yellow.PNG", }, 
    { name: "moana", img: "yellow.PNG", }, 
    ]; 
    
    //Setting Variables
    let playAgain = document.querySelector(".playAgain"); 
    let gameBoard= document.querySelector(".gameBoard");
    let clickBoard = document.querySelector(".clickBoard"); 
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let source = document.querySelector("#source");
    let audio = document.querySelector("audio");
    
    let imgs; 
    let cardsId = []; 
    let cardsSelected = []; 
    let cardsWon = 0; 
    let clicks = 0;

    window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    });

    // Click replay 

    createBoard(gameBoard, cardArray); 
    arrangeCard();
    playAgain.addEventListener("click", replay); 

    
    // Click to flip card
    
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img => 
    img.addEventListener("click", flipCard)) 

    // Game board
    
    function createBoard(gameBoard, array) { 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "carsbgnd.PNG");
    img.setAttribute("data-id", index); 
    gameBoard.appendChild(img); 
    })
    }
    
    // Shuffle Cards
    
    function arrangeCard() { 
    cardArray.sort(() => 0.2 - Math.random())
    }
    
    // flip Cards
    
    function flipCard() { 
    let selected = this.dataset.id;
      let clicked =cardArray[selected].name;
    cardsSelected.push(clicked); 
     
    // Click Sound
       source.src=`${clicked}.wav`
      audio.play()
      
      
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", cardArray[selected].img); 
    if (cardsId.length === 2) { 
    setTimeout(checkForMatch, 4000);
    } 
    }
    // Check for match
 
    function checkForMatch() { 
    let imgs = document.querySelectorAll(".gameBoard img"); 
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
    alert("Good Job, you got a match!"); 
    cardsWon += 1; 
    scoreBoard.innerHTML = cardsWon; 
    setTimeout(checkWon,4000) 
    source.src="click.wav"
    audio.load()
    audio.play()
    } 
    else { 
    console.log(imgs)
    imgs[firstCard].setAttribute("src", "carsbgnd.PNG");
    imgs[secondCard].setAttribute("src", "carsbgnd.PNG"); 
   
    imgs[firstCard].classList.remove("flip"); 
    imgs[secondCard].classList.remove("flip");
  
    
    
    
     
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 2; 
    clickBoard.innerHTML = clicks; 
    }
    
    function checkWon() {
    if (cardsWon == cardArray.length / 2) {
    alert("You won")  
    }
    }
    // Reload Game
    
    function replay() { 

    window.location.reload();
  

 
    }