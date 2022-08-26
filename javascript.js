let sayi1 = 7; // Global Scope
console.log(sayi1); // 7
// function fonk (){ //! declariton yöntemi
// const fonk = function name() { //! expression yöntemi
const fonk = () => {
  //! arrow yöntemi

  // let sayi1= 11 //!function scope

  sayi1 = 11;
  console.log(sayi1); // 11
};
fonk();
console.log(sayi1++); //11
console.log(sayi1); //12

//!--------------------------------------------------------
let str1 = "Clarusway";
let str2 = " Full";
let str3 = " Stack";
let str4 = " Hello";

console.log(str1, str2, str3, str4);

console.log(str1.concat(str4, " World"));

const myName = "Hakan Bilgi";
console.log(myName);
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.toLocaleUpperCase());

//!---------------------------------------------------------

const esitMi = (str1, str2) => {
  return str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    ? `${str1} ile ${str2} Eşittir.`
    : `${str1} ile ${str2} Eşit değildir.`;
};
console.log(esitMi("merhaba", "MERHABA"));
console.log(esitMi("hello", "HELL"));

//!-------------------------------------------------------------

const str6 = "Full Stack Path";
console.log(str6.charAt(5)); //! S
console.log(str6.charAt()); //! F
console.log(str6.charAt(7)); //! a
console.log(str6.length); //! 15
console.log(str6.charAt(str6.length-1)); //! h son elemanı gösterir.


//!----------------------------------------------------------------

const word = "To be or not to be, that is the question";
console.log(new String(word));
console.log(word.includes("to be")); //! true
console.log(word.includes("That")); //! false
console.log(word.includes("")); //! true(yapısal bir özellikten dolayı)
console.log(word.includes("to be", 14)); //! false
console.log(word.includes("to be", 13)); //! true


//!-----------------------------------------------------------------

const toBe = word.indexOf("or");
console.log(toBe); //! 6
const be = word.indexOf("be");
console.log(be); //! 3
const be1 = word.lastIndexOf("be");
console.log(be1); //! 16
const be2 = word.lastIndexOf("BE");
console.log(be2); //! -1 yani yok demek çünkü bir string in index numarası negatif olamaz


//!-----------------------------------------------------------------

let oku = "Oku baban gibi, saf olma, saf olma.";
console.log(oku); // !Oku baban gibi, saf olma.

oku = oku.replace("saf olma", "basarili ol"); //! Oku baban gibi, basarili ol.
// oku = oku.replace(/saf olma/gi, "basarili ol"); //! g ile yapınca globalde bulduklarının tamamını değiştirir.
console.log(oku);


oku = oku.replace(/BASARILI/i, "Zengin");
// oku = oku.replace(/BASARILI/gi, "Zengin"); //!//! g ile yapınca globalde bulduklarının tamamını değiştirir.
console.log(oku);


//!--------replace in (gi) li kullanımın kolayı var o da replaceALL

let degistir = "daglar daglar yol ver gecem..";
console.log(degistir);

degistir = degistir.replaceAll("daglar", "Daglar");
console.log(degistir);

//? Regex de kullanılabilir.

let degistir2 = "No woman, no cry" +
" No woman, no cry, eh , yeah" +
" Little darling, don't shed no tears" +
" No woman, no cry. eh";

console.log(degistir2);
console.log(degistir2.replaceAll(/no/gi, "Hayir"));

//!----------------------------------------------------------

const veysel = "Uzun ince bir yoldayım yuruyorum gunduz gece..";

console.log(veysel);

const sliced = veysel.slice(33);

console.log(sliced); //! gunduz gece..

console.log(veysel.slice(17,30)); //! dayım yuruyor

console.log(veysel.slice(-10)); //! duz gece..

console.log(veysel.slice(-23, -19)); //!yuru

console.log(veysel.substring(17, 30)); //! dayım yuruyor... eski bir kullanım eksi işlemez o yüzden bunun yerine slice kullan!

//!--------------------------------------------------------------

const tarkan = "Gel gunduzle gece olalım";
const spited = tarkan.split(" ");
console.log(spited);  //! (4) ['Gel', 'gunduzle', 'gece', 'olalım'] 

const chars = tarkan.split("");
console.log(chars); //! (24) ['G', 'e', 'l', ' ', 'g', 'u', 'n', 'd', 'u', 'z', 'l', 'e', ' ', 'g', 'e', 'c', 'e', ' ', 'o', 'l', 'a', 'l', 'ı', 'm']


//!-----------------------------------------------------------------


//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.

//! ODEV2:
//! ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE












