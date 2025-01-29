/*let total=0;
for (i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i;
  }
}
console.log(total)*/

/* Facteur premier
let i=1;
let i1=1;
let result=0;
let nbr=0;

for(i=1; i<13195; i++){
    if(13195 % i === 0){
        nbr=0;
        for(i1 =1; i1<=i; i1++){
            if(i % i1 ===0){
                nbr+=1;
            }
 
        }
        if(nbr===2){
            result=i;
        }

    }
    
}
console.log(result)
*/

/*palindrome trouvé
let a = 60;
let b = 30;
let result;

for (let i = a; i < 100; i++) {
  for (let j = b; j < 100; j++) {
    result = i * j;
    let resultStr = result.toString();
    let reversed = resultStr.split('').reverse().join('');

    if (resultStr === reversed) {
        palin+=palin;
    }
  }
}
console.log(`Palindrome trouvé: ${result}`);*/

/* PPCM des 20 premiers nombres
function pgcd(a,b){
    return b===0 ? a:pgcd(b, a % b);
}
function ppcm(a,b){
    return (a*b)/pgcd(a,b);
}

let result=1;
for( let i=2; i<=20; i++){
    result=ppcm(result,i)
}

console.log(result)*/

/* Diference des sommes des carres et des carres des sommes
function SommeDesCarre(){
    let somme=0;
    for(let i=1; i<=100;i++){
        somme+=i*i;
    }
return somme;
}
console.log(SommeDesCarre())

function CarreDesSommes(){
    let carre=0;
    let somme=0;
    for(let i=1; i<=100;i++){
        somme +=i;      
    }
    carre=(somme*somme);
    return(carre);
}
console.log(CarreDesSommes())
function difference(a,b){
    if(b>a){
        return (b-a)
    }else{
        console.log("Opération impossible")
    }
    
}

console.log(difference(SommeDesCarre(),CarreDesSommes(),))*/

/*
function NbrPremier(nbrSaisi) {
  //nbrSaisi le nombre d'entier premier à atteindre
  let entier = 2;
  let dernierElement;
  let nPremier=0;
  let nbrDiviseur=0;
  while(nPremier<nbrSaisi){
    nbrDiviseur=0;
    for(let i=2; i<=Math.sqrt(entier); i++){
      if(entier % i===0){
        nbrDiviseur++;
      }
    }
    if(nbrDiviseur===0){
      dernierElement = entier;
      nPremier++;
    }
    entier++;
  }
  return dernierElement
}

console.log(NbrPremier(10000))*/


 /*
function Pythagore() {
  let entierA = 1;
  let entierB = 2;
  let entierC = 3;
  for (entierC = 3; entierC < 1000; entierC++) {
    for (entierB = 2; entierB < 1000; entierB++) {
      for (entierA = 1; entierA < 1000; entierA++) {
        if (entierA + entierB + entierC === 1000) {
          if (entierA * entierA + entierB * entierB === entierC * entierC) {
            if (entierC > entierB && entierB > entierA) {
              console.log(`Entier a : ${entierA}`);
              console.log(`Entier b : ${entierB}`);
              console.log(`Entier c : ${entierC}`);
            }
          } else {
            break;
          }
        }
      }
    }
  }
  return 1;
}

console.log(Pythagore());*/


//Fonction factorielle
function factorielle(n){
  let fact=1;
  if(n===0 || n===1){
    console.log(`Le factorielle de ${n} est ${fact}`)
  }else{
    for(i=1; i<n; i++){
      fact*=(i+1);
    }
    console.log(`Le factorielle de ${n} est ${fact}`)
  }
  return fact;
}
console.log(factorielle(5))