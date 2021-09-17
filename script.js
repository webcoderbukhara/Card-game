const containerEl  = document.getElementById("container");
const cards_length= 16;
const cards = [];

let previousShownCard = undefined;
let icons = [1,2,3,4,5,6,7,8]


//copy the icons again (double them)
icons.push(...icons);

for(let i=0; i<100; i++){
    const idx1 = Math.floor(Math.random()*icons.length);
    const idx2 = Math.floor(Math.random()*icons.length);
    const temp = icons[idx1];
    icons[idx1]= icons[idx2];
    icons[idx2] = temp;
}

for(let i=0; i < cards_length; i++){

    const cardEl = document.createElement('div');
    cardEl.classList.add('card')
    cardEl.innerHTML = `
    <div class="front">
    <img  class="fa fas-${icons[i]}" src="./images/${icons[i]}.png" alt="">
    </div>

    <div class="back">
    <small> Click me </small>
    </div>
    `
    cardEl.addEventListener('click', () =>{
        if(!cardEl.classList.contains('show')){
            cardEl.classList.add("show");
        }
        // else{
        //     cardEl.classList.remove("show");

        // }
          
        if(!previousShownCard){
            previousShownCard = cardEl;
        } else{
            const iconOne = previousShownCard.querySelector('img').classList[1];
            const iconTwo = cardEl.querySelector('img').classList[1];
            console.log(iconOne)

            if (iconOne !== iconTwo){
            
            const temp = previousShownCard;

            setTimeout(()=>{
                temp.classList.remove("show");
                cardEl.classList.remove('show');
            },1000)
            }
        previousShownCard = undefined;


        }

cardElm = document.querySelectorAll('.container .show')
if(cardElm.length == 16){
    console.log("BINGO!!!")
    document.querySelector('.container').style.display = "none"
    document.querySelector('.price').style.opacity = "1"
    document.querySelector('.price').style.transform = " scale(1)"



   
    

}

    


    })
    cards.push(cardEl);
    containerEl.appendChild(cardEl)
}