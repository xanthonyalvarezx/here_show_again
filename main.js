/** KATA 01 ⮕
 ***
 *** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
 ***
 **/
// Code produced with - Elisua Hernandez and Tea Mitchell
mainElement = document.querySelector('main')

console.log('%cKATA 1 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let kata1 = document.createElement('div')
mainElement.append(kata1)
kata1.append('Kata 1')
let counter = 0
while (counter < 20) {
    console.log(counter)
    counter += 1
    mainElement.append(counter)
}




/** KATA 02 ⮕
 ***
 *** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
 ***
 ***/

console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') // These console.logs are just to help make the console log better organized and more readable

let kata2 = document.createElement('div')
mainElement.append(kata2)
kata2.append('Kata 2')

counter2 = 2
while (counter2 <= 20) {
    console.log(counter2)
    counter2 = counter2 + 2
    mainElement.append(counter2)
}

/** KATA 03 ⮕2
 ***
 *** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
 ***
 ***/

console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let kata3 = document.createElement('div')
mainElement.append(kata3)
kata3.append('Kata 3')
counter3 = 1
while (counter3 <= 20) {
    console.log(counter3)
    counter3 = counter3 + 2
    mainElement.append(counter3)
}



/** KATA 04 ⮕
 ***
 *** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
 ***
 ***/

console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')



let counter4 = 0
while (counter4 <= 100) {
    console.log(counter4)
    counter4 += 5
}


/** KATA 05 ⮕
 ***
 *** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
 ***
 ***/

console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter5 = 1
while (counter5 <= 100) {
    const isSquare = Number.isInteger(Math.sqrt(counter5))
    if (isSquare) {
        console.log(counter5)
    }
    counter5 += (1)
}




/** KATA 06 ⮕
 ***
 *** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
 ***
 ***/

console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


for (let counter6 = 20; counter6 >= 1; counter6 -= 1)
    console.log(counter6)




/** KATA 07 ⮕
 ***
 *** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
 ***
 ***/

console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter7 = 20
while (counter7 > 0) {
    console.log(counter7)
    counter7 -= 2
}



/** KATA 08 ⮕
 ***
 *** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
 ***
 ***/

console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter8 = 20
while (counter8 > 19) {
    counter8 -= 1
}
while (counter8 > 0) {
    console.log(counter8)
    counter8 -= 2
}



/** KATA 09 ⮕
 ***
 *** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
 ***
 ***/

console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter9 = 100
while (counter9 > 0) {
    console.log(counter9)
    counter9 -= 5
}





/** KATA 10 ⮕
 ***
 *** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
 ***
 ***/

console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


/* Write your KATA 10 code in place of THIS comment. */
let counter10 = 100
while (counter10 >= 0) {
    const isSquare = Number.isInteger(Math.sqrt(counter10))
    if (isSquare) {
        console.log(counter10)
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
const sampleArray6 = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
let sum = 0
for (let index = 0; index < sampleArray6.length; index++) {
   let newSum = sum += sampleArray6[index]
    let newElement6 = document.createElement('div')
    newElement6.append(newSum)
    mainElement.append(newElement6)
     
}