'use strict'
let counter = 0;
document.querySelector('.counterBtn1').addEventListener('click' , function(){
    counter++
    document.querySelector('.counter1').textContent = counter
})
document.querySelector('.resetIcon1').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter = 0
        document.querySelector('.counter1').textContent = 0
    }
})
let counter2 = 0;
document.querySelector('.counterBtn2').addEventListener('click' , function(){
    counter2++
    document.querySelector('.counter2').textContent = counter2
})
document.querySelector('.resetIcon2').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter2 = 0;
        document.querySelector('.counter2').textContent = 0
    }
})

let counter3 = 0;
document.querySelector('.counterBtn3').addEventListener('click' , function(){
    counter3++
    document.querySelector('.counter3').textContent = counter3
})
document.querySelector('.resetIcon3').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter3 = 0;
        document.querySelector('.counter3').textContent = 0
    }
})

let counter4 = 0;
document.querySelector('.counterBtn4').addEventListener('click' , function(){
    counter4++
    document.querySelector('.counter4').textContent = counter4
})
document.querySelector('.resetIcon4').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter4 = 0;
        document.querySelector('.counter4').textContent = 0
    }
})

let counter5 = 0;
document.querySelector('.counterBtn5').addEventListener('click' , function(){
    counter5++
    document.querySelector('.counter5').textContent = counter5
})
document.querySelector('.resetIcon5').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter5 = 0;
        document.querySelector('.counter5').textContent = 0
    }
})

let counter6 = 0;
document.querySelector('.counterBtn6').addEventListener('click' , function(){
    counter6++
    document.querySelector('.counter6').textContent = counter6
})
document.querySelector('.resetIcon6').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter6 = 0;
        document.querySelector('.counter6').textContent = 0
    }
})


let counter7 = 0;
document.querySelector('.counterBtn7').addEventListener('click' , function(){
    counter7++
    document.querySelector('.counter7').textContent = counter7
})
document.querySelector('.resetIcon7').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter7 = 0;
        document.querySelector('.counter7').textContent = 0
    }
})

let counter8 = 0;
document.querySelector('.counterBtn8').addEventListener('click' , function(){
    counter8++
    document.querySelector('.counter8').textContent = counter8
})
document.querySelector('.resetIcon8').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter8 = 0;
        document.querySelector('.counter8').textContent = 0
    }
})

let counter9 = 0;
document.querySelector('.counterBtn9').addEventListener('click' , function(){
    counter9++
    document.querySelector('.counter9').textContent = counter9
})
document.querySelector('.resetIcon9').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter9 = 0;
        document.querySelector('.counter9').textContent = 0
    }
})


let counter10 = 0;
document.querySelector('.counterBtn10').addEventListener('click' , function(){
    counter10++
    document.querySelector('.counter10').textContent = counter10
})
document.querySelector('.resetIcon10').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter10 = 0;
        document.querySelector('.counter10').textContent = 0
    }
})

let counter11 = 0;
document.querySelector('.counterBtn11').addEventListener('click' , function(){
    counter11++
    document.querySelector('.counter11').textContent = counter11
})
document.querySelector('.resetIcon11').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter11 = 0;
        document.querySelector('.counter11').textContent = 0
    }
})


let counter12 = 0;
document.querySelector('.counterBtn12').addEventListener('click' , function(){
    counter12++
    document.querySelector('.counter12').textContent = counter12
})
document.querySelector('.resetIcon12').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter12 = 0;
        document.querySelector('.counter12').textContent = 0
    }
})


let counter13 = 0;
document.querySelector('.counterBtn13').addEventListener('click' , function(){
    counter13++
    document.querySelector('.counter13').textContent = counter13
})
document.querySelector('.resetIcon13').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter13 = 0;
        document.querySelector('.counter13').textContent = 0
    }
})


let counter14 = 0;
document.querySelector('.counterBtn14').addEventListener('click' , function(){
    counter14++
    document.querySelector('.counter14').textContent = counter14
})
document.querySelector('.resetIcon14').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter14 = 0;
        document.querySelector('.counter14').textContent = 0
    }
})


let counter15 = 0;
document.querySelector('.counterBtn15').addEventListener('click' , function(){
    counter15++
    document.querySelector('.counter15').textContent = counter15
})
document.querySelector('.resetIcon15').addEventListener('click' , function(){
    let confirming = confirm("هل تريد تصفير العداد؟ ")
    if(confirming === true){
        counter15 = 0;
        document.querySelector('.counter15').textContent = 0
    }
})

const reset = document.querySelectorAll('.cn')
document.querySelector('.resetBtn').addEventListener('click' , function(){
    counter = 0
    counter2 =0
    counter3 =0
    counter4 =0
    counter5 =0
    counter6 = 0
    counter7 =0
    counter8 = 0
    counter9 = 0
    counter10 =0
    counter11 =0
    counter12 =0
    counter13 =0
    counter14 =0
    counter15 =0
    let confirming = confirm("هل تريد تصفير العدادات؟ ")
    if (confirming === true){
        for(let i = 0 ; i<reset.length ; i++){
            reset[i].textContent =0
        }
    }

})

























