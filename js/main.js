let elBoxes = document.querySelectorAll('.box')
let elDivs = document.querySelectorAll('.div')

let count = 0
setInterval(() => {
   count = count+1
   if(count  == 10){
    count = 1
   }
   if(count >= 1 && count <= 3){
    fnRed()
   }
   if(count == 4 || count == 9){
    fnYellow()
   }
   if(count >= 5 && count <= 8){
    fnGreen()
   }
}, 1000);


function fnRed(){
    elBoxes[0].classList.add('qizil')
    elBoxes[1].classList.remove('sariq')
    elBoxes[2].classList.remove('yashil')
    elDivs[0].classList.remove('qizil')
    elDivs[1].classList.add('yashil')
}
function fnYellow(){
    elBoxes[0].classList.remove('qizil')
    elBoxes[1].classList.add('sariq')
    elBoxes[2].classList.remove('yashil')
}
function fnGreen(){
    elBoxes[0].classList.remove('qizil')
    elBoxes[1].classList.remove('sariq')
    elBoxes[2].classList.add('yashil')
    elDivs[0].classList.add('qizil')
    elDivs[1].classList.remove('yashil')
}

