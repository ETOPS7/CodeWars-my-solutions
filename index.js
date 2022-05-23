// function positiveSum(arr) {
//   let sum =0
//   for (let i=0; i<arr.length; i++){
//     if (arr[i]>0){
//       sum += arr[i]
//     }
//   }
//   return sum
// }
// console.log(positiveSum([5,2,3,4,-2,-100]))


// const arr = [20, 40, 77, 53];
// const sum = 0;
// function count() {
// for (i = 0; i < arr.length; i++) {
// sum += arr[i];
// }
// return sum;
// }
// console.log(count());

// ВОЗВРАТ ПРОТИВОПОЛОЖНОГО ЧИСЛА 

// function opposite(number) {
//   if (number<0){
//     return number
//   } else {
//     return -number
//   }
// }
// console.log(opposite(1))

// function opposite(number) {
//   return (-number);
// }
// console.log(opposite(-1))


// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает «Четное» для четных чисел или «Нечетное» для нечетных чисел.

// function even_or_odd(number) {
//   if (number%2===0){
//     return 'Even'
//   } else{
//     return 'Odd'
//   }
// }

// console.log(even_or_odd(3))
// Суммируйте все числа заданного массива (cq. list), кроме самого высокого и самого низкого элемента (по значению, а не по индексу!). Самый высокий или самый низкий элемент, соответственно, является одним элементом на каждом ребре, даже если их несколько с одинаковым значением. Помните о проверке ввода.

// function sumArray(array) {
//   let sum=0
//   let arrNew=[]
//   for (let i=0; i<array.length; i++){
//    arrNew=array[i]
//     }
//   }

// console.log(sumArray([ 6, 2, 1, 8, 10 ]))


//  ПОСЛЕДНИЙ ЭЛИМЕНТ МАССИВА 
 // sum=array[array.length - 1]

// function digitize(n) {

//   for (let i=0; i<num.length; i++){
//     newArr=num[i]+newArr
//   }
//     return newArr
// }
// console.log(digitize(35231))

// В вашем классе был тест, и вы его прошли. Поздравляем! Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе. Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат! Верните True, если вам лучше, иначе False! Примечание: Ваши баллы не включены в массив баллов вашего класса. Для расчета среднего балла вы можете добавить свой балл в данный массив!


// function betterThanAverage(classPoints,yourPoints) {
// let sum = 0
//   for (let i=0; i<classPoints.length; i++){
//      sum+=classPoints[i]}
//      sum = sum/classPoints.length
//     if (sum >=yourPoints) {
//       return false
//     } else {
//       return true
//     }
//   }

 // console.log(betterThanAverage([2, 3, 5], 11))

// function betterThanAverage(array){
// let sum=0;
// for(let i = 0; i < array.length; i++){
//     sum += array[i];
// }
//   if (sum>)
// }
// betterThanAverage([2, 3])


// function arraySum(array){
// var sum = 0;
// for(var i = 0; i < array.length; i++){
//     sum += array[i];
//     }
// console.log(sum);
// }
// arraySum([2, 3]);


// function digitize(n) {
// let newN=String(n).split('')
//   for (let i=0; i<newN.length; i++){
//     newN=newN+newN[i]
//   }
//     return newN
// }
// console.log(digitize(35231))


// Завершите решение так, чтобы оно перевернуло переданную в него строку.
//'world'  =>  'dlrow'
//'word'   =>  'drow'

// function solution(str){
//   let newStr=''
//   for (let i of str){
//     newStr=i+newStr
//   }
//   return newStr
// }

// console.log(solution('world'))

//Remove First and Last Character Удалить первый и последний символы

// function removeChar(str){
// let newStr=''
//   for (let i=0; i<str.length-1; i++){
//     if (i>0 && str.length){
//   newStr=newStr+[i]
//     }
// }
//   return newStr
// }

// console.log(removeChar('eloquent'))


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.Завершите метод, который принимает логическое значение и возвращает строку «Да» для значения «истина» или строку «Нет» для значения «ложь».

// function boolToWord(bool){
//   return bool===true ? "Yes" : "No"
// }

// console.log(boolToWord(false))



// Convert a Number to a String! Преобразование числа в строку!

// function numberToString(num) {
//   return String(num)
// }

// console.log(numberToString(9475847))



// String repeat - Напишите функцию с именем repeatStr, которая повторяет заданную строку string ровно n раз.

// function repeatStr (n, s) {
//   let str=''
//   for (i=0; i<n; i++){
//     str+=s
//   }
//   return str
// }

// console.log(repeatStr(3, "*"))


// Grasshopper - Summation Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.

// var summation = function (num) {
//   let sum= 0
//   for (i=0; i<num; i++){
//     sum=sum+i
//   }
//  return sum
// }
// console.log(summation(10))


// function summation(num) {
//   return num * (num + 1) / 2
// }
// console.log(summation(5))


// Remove String Spaces Просто удалите пробелы из строки, затем верните результирующую строку.

// function noSpace(x){
//   let newStr=''
//   for (let i of x){
//     if (i !== ' '){
//       newStr+=i
//     }
//   }
// return newStr
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

// function noSpace(x){
//   return x.split(" ").join("")
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))


// Find the smallest integer in the array Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число. Например: Учитывая [34, 15, 88, 2], ваше решение вернет 2 Учитывая [34, -345, -1, 100], ваше решение вернет -345 Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.

//   function findSmallestInt(args) {
//     let num=0
//     for (let i of args){
//       if (i<i+1){
//         num=i
//       }
  
//     }
//     return num
//   }

// console.log(findSmallestInt([78,56,232,12,8,1]))


//   function findSmallestInt(args) {
//     return Math.max.apply(Math, args) 
//   }

// console.log(findSmallestInt([78,56,232,12,8,1]))

// function  findSmallestInt(args) {
//     return args.sort((a,b)=>b-a)[0];
//   }

// console.log(findSmallestInt([78,56,232,12,8,1]))


// Square(n) Sum Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты. Например, для [1, 2, 2] он должен вернуть 9, потому что 1^2 + 2^2 + 2^2 = 9.

// // ?????????????????
// let sum=0
// function squareSum(numbers){
//  let arr=numbers.map(element => element**2)
//   for (i of arr){
//     sum+=i
//   }
//   return sum
// }
// console.log(squareSum([1,2,5])) //5


// Counting sheep...Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//   [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// function countSheeps(arrayOfSheep) {
//   let result=0
//   for (let i of arrayOfSheep){
//    if (i === true){

//      result+=i
     
//    }
//   }
//  return result
// }
// console.log(countSheeps([true,  true,  true,  false,
//               true,  true,  true,  true ,
//               true,  false, true,  false,
//               true,  false, false, true ,
//               true,  true,  true,  true ,
//               false, false, true,  true ])) //17




// Is n divisible by x and y? Создайте функцию, которая проверяет, делится ли число n на два числа x И y. Все входные данные являются положительными, ненулевыми цифрами.

// function isDivisible(n, x, y) {
//   let div=n/x 
//   let div2=n/y
// if (Number.isInteger(div) && Number.isInteger(div2) ) {
//   return true
// } else {
// return false
// }
// }
// console.log(isDivisible(15,3,4))


// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0
// }
// console.log(isDivisible(15,3,4))



// Century From Year
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// function century(year) {
//  return Math.ceil(year/100)
// }

// console.log(century(1705)) //18

// Keep Hydrated!

// Натан любит кататься на велосипеде. Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде. Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения. Например: время = 3 ----> литр = 1 время = 6,7 ---> литров = 3 время = 11,8 --> литров = 5

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// function litres(time) {
//   return Math.floor(time * 0.5)
// }

// console.log(litres(12.3)) // should return 6 litres


// Basic Mathematical Operations
// Ваша задача — создать функцию, которая выполняет четыре основные математические операции. Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число). Функция должна возвращать числовой результат после применения выбранной операции. Примеры(Оператор, значение1, значение2) --> вывод


// function basicOp(operation, value1, value2){
// switch (operation){
//     case '+':
//       return value1 + value2;
//     case '-':
//       return value1 - value2;
//     case '*':
//       return value1 * value2;
//     case '/':
//       return value1 / value2;
//   default:
//       return 0;
// }
// }
  
// console.log(basicOp('+', 44, 7)) //11



// Abbreviate a Two Word Name
// Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними. На выходе должны быть две заглавные буквы с точкой, разделяющей их. Это должно выглядеть так: Сэм Харрис => SH Патрик Фини => P.F.


// function abbrevName(name){
//    const newArray = name.split(" ")
//    return (newArray[0][0] + "." + newArray[1][0].toUpperCase())

// }

// console.log(abbrevName("Sam Harris")) // "S.H"


// Vowel Count7 ку Возвращает количество (количество) гласных в заданной строке. Мы будем рассматривать a, e, i, o, u как гласные для этой Ката (но не y). Входная строка будет состоять только из строчных букв и/или пробелов.

// function getCount(str) {
//   let vowelsCount = 0;
//   let alphabet='aeiou'
//   // let alphabet= ['a', 'e', 'i', 'o',]
//   for (let i of str){
//      for (let j of alphabet){
//       if (i===j){
//       vowelsCount++ 
//      }
//     }
//   }
//   return vowelsCount;
// }

// console.log(getCount("abracadabra")) // 5


// function getCount(str) {
//   var vowelsCount = 0;
//   for (index in str){
//     switch (str[index]) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     vowelsCount++;
//     break;
//     }   
//   }
//   return vowelsCount;
// }
// console.log(getCount("abracadabra")) // 5

// function getCount(str) {
//   let vowelsCount = 0;
//   for (let index of str){
//     switch (index){
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//     vowelsCount++
//    break;
//     }
//   }
//     return vowelsCount
// }
// console.log(getCount("abracadabra")) // 5

// A Needle in the Haystack Сможете ли вы найти иголку в стоге сена? Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну «иглу». После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится: "найдена игла в положении " плюс индекс, в котором она нашла иглу, поэтому: findNeedle(['сено', 'мусор', 'сено', 'сено', 'большемусора', 'иглы', 'randomJunk']) должен возвращать "найдена игла в позиции 5" (в COBOL "найдена игла в позиции 6"



// function findNeedle(haystack) {
//     if (haystack.indexOf('needle')) {
//       return `"found the needle at position ${haystack.indexOf('needle')}"`
//     } else {
//       return "Your function didn\'t return anything"
//     }
// }
// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

// function findNeedle(haystack) {
//   return haystack.indexOf('needle') ? `"found the needle at position ${haystack.indexOf('needle')}"` : "Your function didn\'t return anything"
// }

// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

// Beginner - Lost Without a Map Учитывая массив целых чисел, вернуть новый массив с удвоением каждого значения. Например: [1, 2, 3] --> [2, 4, 6]

// function maps(x){
//   let newArr=[]
//   for (let i=0; i<x.length; i++){
//     newArr.push(x[i]*2)
//   }
//   return newArr
// }
// console.log(maps([1, 2, 3])) // [2, 4, 6])

//   let newArr=[]
// function maps(x){
//   return x.map((y)=>y*2) 
// }
// console.log(maps([1, 2, 3])) // [2, 4, 6])

// Returning Strings Создайте функцию, которая будет возвращать оператор приветствия, использующий ввод; ваша программа должна вернуть "Привет, <имя>, как дела сегодня?". [Убедитесь, что вы вводите именно то, что я написал, иначе программа может работать неправильно]

// function greet(name){
//       return `"Hello, ${name} how are you doing today?"`
// }
// console.log(greet("Ryan"))

// Square Every Digit Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их. Например, если мы пропустим через функцию 9119, получится 811181, потому что 92 — это 81, а 12 — это 1. Примечание. Функция принимает целое число и возвращает целое число.

// function squareDigits(num){
// let arr=String(num).split('').map((el)=>el**2).join('')
//      return Number(arr)
// }
// console.log(squareDigits(2112)) //4114

// Disemvowel Trolls рулоны атакуют ваш раздел комментариев! Обычный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу. Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные. Например, строка «Этот сайт для неудачников, LOL!» станет «Ths wbst s fr lsrs LL!». Примечание: для этой ката y не считается гласной.


// function disemvowel(str) {
// let result=str.replace(/A|E|I|O|U|a|e|i|o|u/g, '')
//   return result
// }
// console.log(disemvowel("This website is for losers LOL!"))

// Highest and Lowest В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.


// function highAndLow(numbers){
// let result=''
//   let sort=numbers.split(' ').sort((a,b) => a-b)
//   for (i of sort){
//     result=sort[sort.length-1]+' '+sort[0]
//   }
// return result
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) //("42 -9"))

// Descending Order Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.

// function descendingOrder(n){
//   let newStr=String(n).split('').sort((a,b) => b-a).join('')
//   return Number(newStr)
// }

// console.log(descendingOrder(1021)) //2110

// 7 kyu Mumbling На этот раз ни истории, ни теории. В приведенных ниже примерах показано, как написать функцию accum: Примеры: accum("abcd") -> "A-Bb-Ccc-Dddd" accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Ttttt-Yyyyyyy" accum("cwAt") -> "C-Ww-Aaa-Tttt" Параметр accum представляет собой строку, включающую только буквы из a..z и A..Z. 

// function accum(s) {
//   let result=''
//   for (let i=0; i<s.length; i++){
//     result+=s[i].toUpperCase()+s[i].toLowerCase().repeat(i)+(i!==s.length-1?'-':'')
//   }
//   return result
// }
// console.log(accum("ZpglnRxqenU")) //"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");


// Beginner Series #2 Clock Часы показывают ч часов, m минут и s секунд после полуночи. Ваша задача — написать функцию, которая возвращает время с полуночи в миллисекундах.

// let sum=0
// function past(h, m, s){
//   let s1=h*60*60
//   let s2=m*60
//   console.log(s2)
//   return sum=(s1+s2+s)*1000
// }
// console.log(past(0,1,1)) //61000

// Function 1 - hello world

// function greet(){
//   return 'h'+'e'+'l'+'l'+'o'+' '+'w'+'o'+'r'+'l'+'d'+'!'
// }


// Count of positives / sum of negatives
// Дан массив целых чисел. Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным. Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.

// function countPositivesSumNegatives(input) {
//   let countPosirives=0
//   let sumNegatives=0
//   let result=[]
//   // for (let i=0; i<=input.length; i++) {
//   for (let i of input) {
//     if (i>=0){
//     countPosirives++
//     } else if (i<0) {
//       sumNegatives+=i
//     } else {
//      return null
//   }
//   }
//     return result=[countPosirives, sumNegatives]
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10, -65]

// function countPositivesSumNegatives(input) {
//   let countPosirives=0
//   let sumNegatives=0
//   let result=[]
//   for (let i=0; i<=input.length; i++) {
//   // for (let i of input) {
//    switch (input){
//      case (i>0):
//        return countPosirives++
//       case (i<0):
//        return sumNegatives+=i
//      case(undefined):
//        return result
//        break;
//  }
// }
//   return result=[countPosirives, sumNegatives]
// }
// console.log(countPositivesSumNegatives([3434,434,-4343,-34])) //[10, -65]


  // function basicOp(operation, value1, value2){
// switch (operation){
//     case '+':
//       return value1 + value2;
//     case '-':
//       return value1 - value2;
//     case '*':
//       return value1 * value2;
//     case '/':
//       return value1 / value2;
//   default:
//       return 0;
// }
// }
  
// console.log(basicOp('+', 44, 7)) //11


// Invert values Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.

// function invert(array) {
//  return array.map((el => el ? el* -1 : el)
// )}

// console.log(invert([1,-2,3,-4,5])) //[-1,2,-3,4,-5]);

// Reversed Words Завершите решение, чтобы оно перевернуло все слова в переданной строке.

// function reverseWords(str){
//     return str.split(' ').reverse().join(' ')
// }
// console.log(reverseWords("hello world!")) // "world! hello"









