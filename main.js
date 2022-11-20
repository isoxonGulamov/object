// parametr sifatida hamma narsa bersa bo'ladi.
// function x(a, b, c) {
//   c(a + b)
// }
// x(10, 20, function (m) {
//   console.log(m)
// })
//// tepadagi funksiya call back funksiya deyiladi 

// function d(c) {
//   console.log(c);
// }
// function x(a, b, func) {
//   func(a + b)
// }
// x(30, 40, d)

/// bu ham call back funksiya hisoblanadi 
/* 2 - qoida  */

// function a() {
//   for(let i = 0; i < 100; i++){
//     console.log(x(i));
//   }
// }

// function x(param) {
//    if (param %2 == 0) {
//     return param;
//    }
// }
// a()

// tepadagi kodni ishlash tartibi 1 - a funksiyani o'qiydi for ga kelganda 1 marta aylanadi i = 1,  consol.logni ko'radi
// console.log da x funksiya chaqirilgan  va  pastga x funksiyani o'qiydi pastga tushguncha i => param aylanib boradi boya aytganimizdek forni 1 marta aylanganda 1 teng boldi deb aytgandik param qiymati = 1 va u x funksiya shartlarini o'qiydi agar true bo'lsa qiymatni oladi false bo'sa undefined beradi. tamom
//* biz shu undefinedni yo'qotishiiz uchun------------- */
// function a() {
//   let str = ''
//   for (let i = 0; i < 100; i++) {
//     if (x(i)) {
//       str = str + "-" + i
//     }
//   }
//   return str;
// }

// function x(param) {
//   if (param % 2 == 0) {
//     return param;
//   }
// }

// console.log(a());
// shunday qilishimiz kerak  buda 1 ta o'zgaruvchi ochib ya'ni let str = '' // x(i) ni biz ifga o'rab olamiz chunki if faqat true qiymat qaytaradi  ifni ichiga str = str + "-" + i ni yozib qo'yamiz bu sonlarni stringa o'girib beradi  x(i)ni if ga o'rab olganimiz sababi shundaki if faat true qiyamat qaytaradi ya'nijuft sonlarni oladi boya undefined chiqib qolgan sonlarni tashlab YUBORADI YA'NI OLMAYDI. return str -- bu ifga return qiladi. Bularnig barchasi ichma - ich funksiya

/* 3-qoida Anonym funksya  */


// function x(a,func) {
//   for(let i = 0; i < a; i++){
//     if (i%2 == 0){
//       func(i)
//     }
//   }
// }
// x(100,function(s){console.log(s)})

// Anony funksiya 1 ta parametrga qaram bo'ladi ya'ni parametr nomi bilan Anonym funksiya ishlatiladi. kod ishlash tartibi 1 - funksiyanii func deb nomlab oldik. va ifda shart berib func(i) ol dedik i =>s bolib boradi va juft sonlar chiqadi.


//* 4 - qoida  */
// Lexical invalt bu o'zini local memorysi va otasini lexical invalti deyliadi


//* 5 - qoida */
// O'z o'zini chaqiradigan funksiya
// (function () {
//   console.log("salom")
// })()

//* 6 - qoida */
// Arrow funksiya
// Har doim o'zgaruvchiga qaram bo'ladi

// const c = () => {"salom"}
// console.log(c)

// tepadagi bu Arrow funksiya hisoblanadi.

//*7 - qoida */
//Recursion funksiya
// recursion funksiy bu --- Ma'lum shart beradi shu shart tugamaguncha o'z o'zini chaqiraveradi

// function x(a) {
//   if (a === 0) {
//     return 1;
//   }
//   else{
//     return a * x(a - 1)
//   }
// }
// console.log(x(5))

// kod o'qish tartibifunksiyani chaqirilgandan keyin funksiyani o'qiydi a = 0 ga return qiladi 1ni lekin biz a = 5 qildik shu sababdan qiymat false bo'ldi va else ga o'tdi bunda a = 5 , 5 * x(5-1) bunda yana 1 ta konteks ochiladi u konteks 4 tenh bo'ladi yana kodni o'qiydi to 0ga teng bolguncha  shu oraliqda har 1 ta qiymatni yig'ib boraveradi oxirida 0 ga teng bo'lasa birin ketin ko'paytiradi 1*2*3*4*5 = 120 shu tarzda

//* 8 - qoida */
// Sinxrom til bu kodni oxirgacha o'qib keyn chiqadi 
// Asinxrom til esa oxirxacha kodni o'qimasdan keyingi ishga o'tib ketadi.

//*9 - qoida */
//Js da 2xil data types mavjud 1 - primitive 2 - non-primitive
//Object bu - o'zida bir necha xil data types ya'ni key : value shaklida saqlaydi. hamma joyning obyekti bo'ladi
// Object yozilishi - Asosan const da yoziladi. Object ichidagi narsalarni o'zgartirsa bo'ladi lekin o'zini o'zgartirib bo'lmaydi.Object bizga ma'lumotlar turini to'plam qilib yig'ib turishga kerak bo'ladi.

// const obj = {
//   name : "Samandar",
//   age : 20,
//   family : false,
//   insof : false,
// }

// console.log(obj)
//Obyekt shu tarzda bo'ladi.Obyekt ichiga obyekt yozsak bo'ladi.
//Example:

// const obj = {
//   name : "Samandar",
//   age : 20,
//   family : false,
//   insof : false,
//   manzil:{
//     town : "Toshkent"
//   }
// }
// console.log(obj)
//Obyekt ichidan 1 ta ma'lumot turini tanlab olish mumkin buning 2 xil usuli bor 


// const obj = {
//   name : "Samandar",
//   age : 20,
//   family : false,
//   insof : false,
//   manzil:{
//     town : "Toshkent"
//   }
// }
// console.log(obj.name)

// 1 - usuli nuqta bilan

// const obj = {
//   name : "Samandar",
//   age : 20,
//   family : false,
//   insof : false,
//   manzil:{
//     town : "Toshkent"
//   }
// }
// console.log(obj['name'])


// 2 - usuli [''] qavs bilan

//*Obyekt ichida funksiya */
//Obyekt ichida funksiya ochsak bo'ladi. Obyekt ichida ochilgan funksiya Obykning methodi deyiladi. Obyekt ichida funksiya ochilganda arrow funksiya ochish tavsiya etimaydi.


// const obj = {
//   name : "Samandar",
//   age : 20,
//   family : false,
//   insof : false,
//   malumot:function() {
//     console.log(this.name,this.age)
//   }
// }
// obj.malumot()

// bu obyeky ichida funksiya edi. buni ishlatish uchun obj.malumot() yozish kerak. Bu narsa shuni ichida yozilgan ma'lumotlarni olib beradi.

//*Obyektga qiymat qo'shish */

// const obj = {
//   name : "Samandar",
//   age : 20,
//   family : false,
//   insof : false,
// }
// obj.manzil = 'Toshkent'
// console.log(obj)

// bu obyektga ma'lumot qo'shish 
//Agar 

// const obj = {
//   name : "Samandar",
//   age : 20,
//   family : false,
//   insof : false,
// }
// obj.manzil = 'Toshkent'
// obj.manzil = 'Samarqand'
// console.log(obj)

///bunda samarqandni oladi ya'ni 2 ta bir xil key bo'lsa har doim 2 - ni oladi.

//*Obyektdag ma'lumotni o'chirish */

// const obj = {
//   name : "Samandar",
//   age : 20,
//   family : false,
//   insof : false,
// }
// delete obj.age
// console.log(obj)


//bunda obyektdagi age ma'lumotini o'chirildi. 

//*10 - qoida  */
//Constructor funksiya

// function User() {
//   this.name = 'Odil';
//   this.age = 40;
// }
// let user = new User();
// console.log(user)

//bu  Constructor funksiya orqali obyekt yasash mumkin agar new siz yozilsa undefined beradi .
// buni biz qo'l bilan ya'ni argment bn qilsak bo'ladi


// function User(ism,yosh) {
//   this.name = ism;
//   this.age = yosh;
// }
// let user = new User("Odil",24);
// console.log(user)

// mana parametr va argument orali obyekt 


let ism = prompt("Ismingizni kriting")
let Familya = prompt("Familyangizni kriting")
let  m  = alert(`Xurmatli ${ism} ${Familya } Moshina olishni xohlaysizmi `)
let  Moshina = prompt("Moshina Nomini kiriting ")
let  Modeli = prompt("Moshina modelini kiriting ")
let  rangi = prompt("Moshina rangini kiriting ")
let  raqami = prompt("Moshina raqamini kiriting ")
let  manzil = prompt("Manzilingizni kriting ")
let  w = alert("Ma'lumotlaringiz qabul qiligi Ok tugmasini bosing 👇👇 ")

const obj = {
   name : `Sizni ismingiz -- ${ism}`,
   surname : `Sizni Familyangiz -- ${Familya}`,
   car : `Sizni Moshinangiz -- ${Moshina}`,
   model : `Sizni Moshina modelingiz -- ${Moshina}`,
   color : `Sizni Moshinangiz rangi -- ${rangi}`,
   number : `Sizni Moshinangiz raqami -- ${raqami}`,
   local : `Sizni manzilingiz -- ${manzil}`,

 }

 console.log(obj)


  document.write( `${obj['name']}` + `<br>` + `${obj['surname']}` + `<br>` +  `${obj['car']}` + `<br>` + `${obj['model']}` + `<br>` + `${obj['color']}` + `<br>` +  `${obj['number']}` + `<br>` + `${obj['local']}`+ `<br>` + `Eh farosatsiz aka !` + `<br>` + `bilaman bilaman promptni to'liq to'ldirmaganizni` + `<br>` + `😡😡`  )



