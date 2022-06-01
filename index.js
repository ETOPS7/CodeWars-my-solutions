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

// Training JS #2: Basic data types--Number Я написал пять функций equal1,equal2,equal3,equal4,equal5, определяет шесть глобальных переменных v1 v2 v3 v4 v5 v6, каждая функция имеет две локальные переменные a,b, установите соответствующие значения для двух переменных (выберите из v1 --v6), что делает возвращаемое значение этой функции равным 100. Функция equal1 завершена, обратитесь к этому примеру, чтобы выполнить следующие функции. Когда вы закончите работу, нажмите «Выполнить тесты», чтобы проверить, правильно ли работает ваш код. В конце нажмите «Отправить», чтобы отправить свой код для прохождения этого ката.

// var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
// function equal1(){
//   var a=v1   
//   var b=v1   
//   return a+b;
// }
//Please refer to the example above to complete the following functions
// function equal2(){
//   var a=v4   //set number value to a
//   var b=v2   //set number value to b
//   return a-b;
// }
// function equal3(){
//   var a=v1   //set number value to a
//   var b=v5   //set number value to b
//   return a*b;
// }
// function equal4(){
//   var a=v4   //set number value to a
//   var b=v5   //set number value to b
//   return a/b;
// }
// function equal5(){
//   var a=v2   //set number value to a
//   var b=v4   //set number value to b
// //   return a%b;
// }

// Training JS #3: Basic data types--String
// var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
// function Dad(){
//   //select some variable to combine "Dad"
//   return d1+a2+d2;
// }
// function Bee(){
//   //select some variable to combine "Bee"
//   return b1+e2+e2;
// }
// function banana(){
//   //select some variable to combine "banana"
//   return b2+a2+n2+a2+n2+a2;
// }

// //answer some questions if you finished works above
// function answer1(){
//   //the answer should be "yes" or "no"
//   return "no";
// }
// function answer2(){
//   //the answer should be "yes" or "no"
//   return "no";
// }
// function answer3(){
//   //the answer should be "yes" or "no"
//   return "yes";
// }

// Training JS #4: Basic data types--Array

// function getLength(arr){
//   //return length of arr
//   return arr.length
// }
// function getFirst(arr){
//   //return the first element of arr
//   return arr[0]
// }
// function getLast(arr){
//   //return the last element of arr
//   return arr[arr.length-1]
// }
// function pushElement(arr){
//   var el=1;
//   arr.push(el)

//   return arr
// }
// function popElement(arr){
//   arr.pop()

//   return arr
// }

// Training JS #5: Basic data types--Object

// function animal(obj){

//   return 'This ' + obj.color +' '+obj.name +' has'+ ' ' + obj.legs +' legs.'
// }

// //Training JS #7: if..else and ternary operator
// Полная функция saleHotdogs/SaleHotDogs/sale_hotdogs, функция принимает 1 параметр: n, n — количество клиентов, покупающих хот-доги, разные числа имеют разные цены (см. следующую таблицу), возвращает число, которое покупатель должен заплатить, сколько денег .
// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

// function saleHotdogs(n){
//   let total=0

//     n<5 ? total=n*100 : 
//     n >= 5 && n < 10 ? total=n*95 :
//     n >= 10	? total=n*90 : null

//   return total
// }
// console.log(saleHotdogs(10))

// Training JS #8: Conditional statement--switch
// Завершите функцию howManydays, функция принимает 1 параметр: месяц, означает месяц года, разные месяцы имеют разные дни (см. следующую таблицу), возвращает число, указывающее, сколько дней в этом месяце (месяц всегда больше 0, меньше чем или равно 12).

// function howManydays(month){
//   var days=0
//     switch (month){
//       case 1:  
//          days=31
//       break;
//     case 2:
//          days=28
//       break;
//     case 3:
//         days=31
//     break;
//        case 4:
//         days=30
//     break;
//        case 5:
//         days=31
//     break;
//        case 6:
//        days=30
//     break;
//        case 7:
//       days=31
//     break;
//        case 8:
//         days=31
//     break;
//        case 9:
//         days=30
//     break;
//        case 10:
//        days=31
//     break;
//        case 11:
//         days=30
//     break;
//        case 12:
//         days=31
//     break;

//   default: 
//   }
//   return days;
// }
// console.log(howManydays(12)) //31

// Training JS #9: loop statement --while and do..while
//   Кодирование в функции padIt, функция принимает 2 параметра: str, это строка, представляющая строку для дополнения, нам нужно добавить некоторые "*" слева или справа от str n, это число, сколько раз нужно дополнить строку.

// const padIt = (string, n) => {
//   let result = string
//   let i = 0
//   while (i < n) {
//     if (i % 2 === 0) {
//       result = `*${result}`
//     } else {
//       result = `${result}*`
//     }
//     i += 1
//   }
//   return result
// }
// console.log(padIt("a",5)) //("***a**")


// Training JS #10: loop statement --for
//   Кодирование в функции pickIt, функция принимает 1 параметр:arr, это числовой массив, нам нужно пройти arr с помощью цикла for, если элемент нечетный номер, поместите его в нечетный массив, если это четное число, поместите его в четный массив. Я определил два массива нечетных и четных в функции, а также написал оператор возврата. ваша работа - написать цикл for.

// function pickIt(arr){
//   var odd=[],even=[];
//   for (let i=0; i<arr.length; i++){
//     if (arr[i]%2!==0){
//       odd.push(arr[i])
//     } else {
//       even.push(arr[i])
//     }
//   }
//   return [odd,even];
// }
// console.log(pickIt([8,1,5,4,6,1,1])) // [[1,5,1,1],[8,4,6]]);


// // Training JS #12: loop statement --for..in and for..of
// // Кодирование в функции giveMeFive, функция принимает 1 параметр: obj, это объект. Вам нужно пройти по obj, если длина ключа объекта равна 5, то запихнуть значение ключа в массив (вам нужно определить массив самостоятельно, в этот раз я вам не помогу). Дополнительно протолкните значение в массив, если длина значения равна 5.

// function giveMeFive(obj){
//   let newArr=[]
//   for (let i in obj){
//     if (obj.hasOwnProperty(i)){
//     if  (i.length==5) newArr.push(i)
//     if  (obj[i].length === 5) newArr.push(obj[i])
//   }
//   }
//   return newArr
// }

// console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}))//["earth","world"]);


// Fake Binary Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1». Верните полученную строку.

// function fakeBin(x){
//   let bin=''
//   for (i of x){
//     if (i<5){
//       bin=bin+0
//     } else {
//       bin=bin+1
//     }
//   }
// return bin
// }

// console.log(fakeBin('45385593107843568')) //'01011110001100111'

// Reversed sequence Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0. Пример: n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
//   let arr=[]
//   for (i=n; i>0; i--){
//     arr.push(i)
//   }
//   return arr
// }
// console.log(reverseSeq(5))



// Beginner Series #1 School Paperwork Ваши одноклассники попросили вас скопировать для них некоторые документы. Вы знаете, что есть «n» одноклассников, а в документах «m» страниц. Ваша задача — посчитать, сколько чистых страниц вам нужно. Если n < 0 или m < 0, вернуть 0. Пример: п= 5, м=5: 25 п=-5, м=5:0

// function paperwork(n, m) {
//  if (n > 0 && m > 0){
//     return n*m

// // }  if (n < 0 && m > 0){
// //     return n*m

// } 
//   if (n <= 0 || m <= 0){
//     return 0
// }
// }
// console.log(paperwork(-5,5)) // 25, 'Failed at paperwork(5, 5)');


// Calculate BMI Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост2)
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//   let bmiNew=weight / (height**2)
//   if (bmiNew <= 18.5) {
//         return "Underweight"
//   } else if (bmiNew <= 25.0) {
//         return "Normal" 
//   } else if (bmiNew <= 30.0) {
//         return "Overweight"
//   } else if (bmiNew > 30.0){
//         return "Obese"  
//   }
// }
// console.log(bmi(80, 1.80)) // "Normal"


//     break;
//        case 12:
//         days=31
//     break;

//   default: 
//   }
//   return days;
// }
// console.log(howManydays(12)) //31



// sequenceSum.js
// Допишите (с использованием рекурсивного процесса) функцию sequenceSum(), которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

// function smallestDivisor(num){
//   let sum=0

//   return sum
// }
// console.log(smallestDivisor(15)

//             Попробуйте разделить число на 2.
// Если число делится без остатка, то это наименьший делитель.
// Если нет, то попробуйте следующий делитель.
// Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)

// Переворот строки
// function makeReverse(string){
// return string.split('').reverse().join('')
// }

// console.log(makeReverse('hello, world!'))  


// Training JS #14: Methods of Number object Кодирование в функции colorOf. функция принимает 3 параметра:r g b. Это означает значение цвета красного, зеленого и синего. диапазон значений 0-255. Используйте toString(16) Преобразование чисел r g b в шестнадцатеричную форму строки. наконец, объедините их в цветовой веб-код и верните его. код цвета должен начинаться с «#». а затем используйте 2 символа на цвет.

// function colorOf(r,g,b){
//   let f = function (x) {
//     return (x<16 ? '0' : '') + x.toString(16) 
//   };
//   return "#" +  f(r) + f(g) + f(b);
// }

// console.log(colorOf(255,0,0)) // "#ff0000");)

//  НЕ РЕШЕНА!!

// #15: Methods of Number object--toFixed(), toExponential() and toPrecision() Кодирование в функции howManySmaller, функция принимает 2 параметра: прибытие. arrпредставляет собой десятичный массив. nявляется десятичной дробью. Первая миссия: пусть все элементы в массиве хранят два десятичных знака (не нужно преобразовывать число n). Вторая миссия: Обход обр, подчитай номер элемента меньше n и верни его.


// function howManySmaller(arr,n){
//   let newArr=[]
//   newArr=arr.split('')
//   console.log(newArr) 
// }

// console.log(howManySmaller([1.234,1.235,1.228],1.24))  //// 2);)



// // howManySmaller([1.234,1.235,1.228],1.24) should return 2
// // howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
// // howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2


//  НЕ РЕШЕНА!!


// Training JS #16: Methods of String object--slice(), substring() and substr()
//  Кодирование в функции cutIt, функция принимает 1 параметр: обр. arr — массив строк. Первая миссия: Обходя обр, найти кратчайшую длину строки. Вторая миссия: снова пройти через arr, перехватить все строки до кратчайшей длины строки (начиная с index0). вы можете использовать один из slice() substring() или substr() сделать это. вернуть результат после завершения работы.
// 0, output[0].length

// function cutIt(arr){
//   let output = arr.sort((a, b) => a.length - b.length)
//   let newArr=[]
//   for (let i=0; i<arr.length; i++){
//      newArr.push(arr[i].slice(0, output[0].length))
//   }
//   return newArr
// }

// console.log(cutIt(["abc","ijklmn","defgh","ijklmn"])) // ["abc","def","ijk"]);

// Opposites Attract Тимми и Сара думают, что они влюблены, но там, где они живут, они узнают об этом, только когда каждый сорвет по цветку. Если у одного из цветов четное количество лепестков, а у другого нечетное количество лепестков, это означает, что они влюблены. Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true, если они влюблены, и false, если нет.

// function lovefunc(flower1, flower2){
//   if (flower1 %2 !== 0 && flower2 %2 === 0 || flower1 %2 === 0 && flower2 %2 !== 0){
//     return true
//   }
//   return false
// } 

// console.log(lovefunc(1,2)) // true

// Get the mean of an array

// function getAverage(marks){
//  return Math.trunc(marks.reduce((a,b) => (a+b))/marks.length)
// }
// console.log(getAverage([1,5,87,45,8,8])) //2


// Array plus array

// function arrayPlusArray(arr1, arr2) {
//    return arr1.reduce((a,b)=>(a+b)) + arr2.reduce((c,d)=>(c+d))
// }

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) // 21 


// // Beginner - Reduce but Grow
// Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку. Пример: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x){
//    let mult=0
//   if (x!==[]){
//     mult=x.reduce((a,b)=>(a*b))
//   } else {
//     return 0
//   }
//   return mult
// }
// console.log(grow([2, 2, 2, 2, 2, 2])) // 64

// function grow(x){
// return mult=x.reduce((a,b)=>(a*b))
// }
// console.log(grow([2, 2, 2, 2, 2, 2])) // 64

// Is he gonna survive?
// Герой направляется в замок, чтобы выполнить свою миссию. Однако ему сказали, что замок окружен парочкой могущественных драконов! каждому дракону требуется 2 пули, чтобы быть побежденным, наш герой понятия не имеет, сколько пуль он должен нести.. Предполагая, что он собирается схватить определенное количество пуль и двигаться вперед, чтобы сразиться с другим заданным количеством драконов, выживет ли он? Верните True, если да, False в противном случае :)

// function hero(bullets, dragons){
// if (dragons * 2  <= bullets){
//   return true
// } return false
// } 
// console.log(hero(1, 2)) // true

// Get the Middle Character Вам дадут слово. Ваша задача — вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, верните средние 2 символа.

// function getMiddle(s){
//   let str=''
//     for (let i of s){
//       if ((s.length)%2 !== 0){
//         // console.log('1',Math.trunc(s.length/2))
//         str=s[Math.trunc(s.length/2)]
//       } else {
//       str=s[Math.trunc(s.length/2)-1]+s[Math.trunc(s.length/2)]
//       }
//     }
//   return str
// }
// console.log(getMiddle("middle")) //"dd"

// You're a square! Учитывая целое число, определите, является ли оно квадратным числом: В математике квадратное число или идеальный квадрат — это целое число, являющееся квадратом целого числа; другими словами, это произведение некоторого целого числа на самого себя. В тестах всегда будет использоваться некоторое целое число, так что не беспокойтесь об этом в языках с динамической типизацией.

// var isSquare = function(n){
//   if (Number.isInteger(Math.sqrt(n))) {
//     return true
//   }
//   return false
// }
// console.log(isSquare(25))
// //true, "25 is a square number (5 * 5)");

// Isograms! Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв.

// function isIsogram(str){
//    str = str.toLowerCase();
//    for(i = 0; i < str.length; ++i) {
//      for(j = i + 1; j < str.length; ++j) {
//        if(str[i] === str[j]) {
//          return false;
//        }
//      }
//    }
//    return true;
// }
// Сложное решение через Set
// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length;
// }
// console.log('1 true',isIsogram("isogram")) // true );
// console.log('2 false',isIsogram("aba")) // false, "same chars may not be adjacent" );
// console.log('3 true',isIsogram("")) 
// console.log('4 false',isIsogram("moOse"))
// console.log('5 true', isIsogram("Dermatoglyphics")) //true );

  // let find1=str.split('').filter((item, index) => str.indexOf(item) !== index)
// List Filtering В этом ката вы создадите функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

// function filter_list(l) {
//   let newArr=[]
//   for (let i of l){
//       if (i=== Number(i)){
//       newArr.push(i)
//     }
//   }
//   return newArr
// }

// console.log(filter_list([1,2,'a','b'])) //,[1,2], 'For input [1,2,"a","b"]');