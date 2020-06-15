/** KATA 01 ⮕
 ***
 *** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
 ***
 **/
// Code produced with - Elisua Hernandez and Tea Mitchell
mainElement = document.querySelector('main')

console.log('%cKATA 1 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let kata1 = document.createElement('h1')
mainElement.append(kata1)
kata1.append('Kata 1')
let counter = 0
while (counter < 20) {
    counter += 1
    
    let newElement= document.createElement('div')
    newElement.append(counter)
    mainElement.append(newElement)
}



/** KATA 02 ⮕
 ***
 *** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
 ***
 ***/

console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') // These console.logs are just to help make the console log better organized and more readable

let kata2 = document.createElement('h1')
mainElement.append(kata2)
kata2.append('Kata 2')

counter2 = 0
while (counter2 < 20) {
    
    counter2 = counter2 + 2
  

    let newElement2= document.createElement('div')
    newElement2.append(counter2)
    mainElement.append(newElement2)
}

/** KATA 03 ⮕2
 ***
 *** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
 ***
 ***/

console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let kata3 = document.createElement('h1')
mainElement.append(kata3)
kata3.append('Kata 3')
counter3 = 1
while (counter3 < 19) {
    console.log(counter3)
    counter3 = counter3 + 2

    let newElement3= document.createElement('div')
    newElement3.append(counter3)
    mainElement.append(newElement3)
}



/** KATA 04 ⮕
 ***
 *** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
 ***
 ***/

console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let kata4 = document.createElement('h1')
mainElement.append(kata4)
kata4.append('Kata4')


let counter4 = 0
while (counter4 <= 100) {
    console.log(counter4)
    counter4 += 5

    let newElement4= document.createElement('div')
    newElement4.append(counter4)
    mainElement.append(newElement4)
}


/** KATA 05 ⮕
 ***
 *** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
 ***
 ***/
console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let kata5 = document.createElement('h1')
mainElement.append(kata5)
kata5.append('Kata5')

let counter5 = 1
while (counter5 <= 100) {
    const isSquare = Number.isInteger(Math.sqrt(counter5))
    if (isSquare) {
        
        let newElement5 = document.createElement('div')
        newElement5 .append(counter5 )
        mainElement.append(newElement5 )
    }
    counter5 += (1)

}




/** KATA 06 ⮕
 ***
 *** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
 ***
 ***/
let kata6 = document.createElement('h1')
mainElement.append(kata6)
kata6.append('Kata6')

for (let counter6 = 20; counter6 >= 1; counter6 -= 1){
    console.log(counter6)
        
    let newElement6 = document.createElement('div')
        newElement6 .append(counter6 )
        mainElement.append(newElement6 )
}



/** KATA 07 ⮕
 ***
 *** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
 ***
 ***/

console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let kata7 = document.createElement('h1')
mainElement.append(kata7)
kata7.append('Kata7')

let counter7 = 22
while (counter7 > 2) {
    console.log(counter7)
    counter7 -= 2
    let newElement7 = document.createElement('div')
        newElement7 .append(counter7 )
        mainElement.append(newElement7 )
}



/** KATA 08 ⮕
 ***
 *** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
 ***
 ***/

console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let kata8 = document.createElement('h1')
mainElement.append(kata8)
kata8.append('Kata8')


let counter8 = 21

while (counter8 > 1) {
    console.log(counter8)
    counter8 -= 2
    let newElement8 = document.createElement('div')
        newElement8 .append(counter8 )
        mainElement.append(newElement8 )
}



/** KATA 09 ⮕
 ***
 *** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
 ***
 ***/

console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let kata9 = document.createElement('h1')
mainElement.append(kata9)
kata9.append('Kata9')


let counter9 = 100
while (counter9 > 0) {
    console.log(counter9)
    counter9 -= 5

    let newElement9 = document.createElement('div')
        newElement9 .append(counter9 )
        mainElement.append(newElement9 )
}





/** KATA 10 ⮕
 ***
 *** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
 ***
 ***/

console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


let kata10 = document.createElement('h1')
mainElement.append(kata10)
kata10.append('Kata10')

let counter10 = 100
while (counter10 >= 0) {
    const isSquare = Number.isInteger(Math.sqrt(counter10))
    if (isSquare) {
       
    let newElement10 = document.createElement('div')
    newElement10 .append(counter10 )
    mainElement.append(newElement10 )
    }
    counter10 -= (1)
}

// kata 11
let kata11 = document.createElement('h1')
mainElement.append(kata11)
kata11.append('Kata 11')
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
for (let index = 0; index < sampleArray.length; index++) {
    let newElement = document.createElement('div')
    newElement.append(sampleArray[index])
    mainElement.append(newElement)
}


// kata 12 
let kata12 = document.createElement('h1')
mainElement.append(kata12)
kata12.append('Kata 12')
const sampleArray2 = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
for (index = 0; index < sampleArray2.length; index++) {
    if (sampleArray2[index] % 2 === 0) {
        let newElement2 = document.createElement('div')
        newElement2.append(sampleArray2[index])
        mainElement.append(newElement2)
    }
}
//kata 13
let kata13 = document.createElement('h1')
mainElement.append(kata13)
kata13.append('Kata 13')
const sampleArray3 = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
for (let index = 0; index < sampleArray2.length; index++) {
    if (sampleArray3[index] % 2 !== 0) {
        let newElement3 = document.createElement('div')
        newElement3.append(sampleArray3[index])
        mainElement.append(newElement3)
    }
}
//kata 14
let kata14 = document.createElement('h1')
mainElement.append(kata14)
kata14.append('Kata 14')
const sampleArray4 = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
for (let index = 0; index < sampleArray4.length; index++) {
    square = Math.sqrt(sampleArray4[index])
    let newElement4 = document.createElement('div')
    newElement4.append(square)
    mainElement.append(newElement4)

}
//Kata 15
let kata15 = document.createElement('h1')
mainElement.append(kata15)
kata15.append('Kata 15')
for(let index = 0; index <= 20; index ++){
    let newElement5 = document.createElement('div')
    newElement5.append(index)
    mainElement.append(newElement5)
}
//kata 16
let kata16 = document.createElement('h1')
mainElement.append(kata16)
kata16.append('Kata 16')
let sum = 0

const sampleArray16 = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
for (let index = 0; index < sampleArray16.length; index+= 1) {
    sum += sampleArray16[index]
}
let newElement16 = document.createElement('div')
newElement16.append(sum)
mainElement.append(newElement16)
    


//kata 17
let kata17 = document.createElement('h1')
mainElement.append(kata17)
kata17.append('Kata 17')

const sampleArray17 = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
let smallest = Math.min(...sampleArray17)
   
    
    let newElement17 = document.createElement('div')
    newElement17.append(smallest)
    mainElement.append(newElement17)

//Kata18
let kata18 = document.createElement('h1')
mainElement.append(kata18)
kata18.append('kata18')

const sampleArray18 = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
let largest = Math.max(...sampleArray18)
   
    
let newElement18 = document.createElement('div')
newElement18.append(largest)
mainElement.append(newElement18)

