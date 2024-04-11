const generateMainBoard = function () {
    const generanumero = document.querySelector('.generanumero')
    for (i=0; i<76; i++){
    generanumero.innerHTML += `<div class='cell'>${i + 1}</div>`
    }
}
generateMainBoard();

const fillArray = function () {
   const array  = []
    for (i=0; i<77 ; i++) {
        array.push(i+1)
    }
    return array;
}

const getRandomNum = function (number) {
    let rangen = fillArray()
    return number = Math.ceil(Math.random() * 76)
}
console.log('Random Number', getRandomNum())



const generaterandnumber = function(){
    let generatebutton = document.querySelectorAll('button')
    for (let i=0; i< generatebutton; i++){
        generatebutton[i].addEventListener('click', function(){
            const randomnumber = getRandomNum();
            document.getElementById('number').textcontent = randomnumber;
        })
    }

}

generaterandnumber()