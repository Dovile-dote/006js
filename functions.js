function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('-----1-----');
// Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;

function tekstas(t) {
  console.log(t);
}

const strelineFunkc = (t) => console.log(t);

tekstas('labas');
strelineFunkc('krabas');

console.log('-----2-----');
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;
function pasikartojantisTekstas(t, s) {
  for (let i = 0; i < s; i++) {
    console.log(t);
  }
}

const strelinePasikartojanti = (t, s) => {
  for (let i = 0; i < s; i++) {
    console.log(t);
  }
};

pasikartojantisTekstas('eik pasivaikscioti', 6);
strelinePasikartojanti('pareik jau', 3);

console.log('-----3-----');
console.log(' ');
console.log('-----4-----');
// Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)
function kiekSveikuSkaiciu(sk) {
  let sum = 0;
  for (let i = 2; i < sk; i++) {
    if (sk % i === 0) {
      sum++;
    }
  }
  return sum;
  //   console.log(`${sk} dalinasi is ${sum} sveiku skaiciu.`);
}

// const kiekSveikuSkaiciu = (sk) => {
//   let sum = 0;
//   for (let i = 2; i < sk; i++) {
//     if (sk % i === 0) {
//       sum++;
//     }
//   }
//   return sum;
// };
console.log(kiekSveikuSkaiciu(46));

console.log('-----5-----');
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.

const masyvas = [];
for (let i = 0; i < 100; i++) {
  let skaiciukas = rand(33, 77);
  masyvas[i] = skaiciukas;
}
masyvas.sort((a, b) => {
  if (kiekSveikuSkaiciu(a) > kiekSveikuSkaiciu(b)) {
    return -1;
  }
  if (kiekSveikuSkaiciu(a) < kiekSveikuSkaiciu(b)) {
    return 1;
  }
  return 0;
});
console.log(masyvas);
// for (let a = 0; a < masyvas.length; a++) {
//   console.log(kiekSveikuSkaiciu(masyvas[a]));
// }

console.log('-----6-----');
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.
const masyvas1 = [];
for (let i = 0; i < 100; i++) {
  let skaicius = rand(333, 777);
  if (kiekSveikuSkaiciu(skaicius)) {
    masyvas1[i] = skaicius;
  }
}
console.log(masyvas1);

console.log('-----7-----');
// Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;
const masyvas2 = function () {
  const masyvas = [];
  masyvas.length = rand(10, 20);
  for (let i = 0; i < masyvas.length; i++) {
    for (let a = 0; a < masyvas.length - 1; a++) {
      masyvas[a] = rand(0, 10);
      masyvas[i] = masyvas[a];
    }
    masyvas[i] = [];
  }
  console.log(masyvas);
};
masyvas2();

console.log('-----8-----');
// Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.
console.log('-----9-----');
// Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento.
const masyvasIsTriju = [];
for (let i = 0; i < 3; i++) {
  masyvasIsTriju[i] = rand(1, 33);
}
console.log(masyvasIsTriju);
// console.log(kiekSveikuSkaiciu(masyvasIsTriju[masyvasIsTriju.length - 1]));
// console.log(kiekSveikuSkaiciu(masyvasIsTriju[masyvasIsTriju.length - 2]));
// console.log(kiekSveikuSkaiciu(masyvasIsTriju[masyvasIsTriju.length - 3]));

while (
  kiekSveikuSkaiciu(masyvasIsTriju[masyvasIsTriju.length - 1]) != 0 ||
  kiekSveikuSkaiciu(masyvasIsTriju[masyvasIsTriju.length - 2]) != 0 ||
  kiekSveikuSkaiciu(masyvasIsTriju[masyvasIsTriju.length - 3]) != 0
) {
  masyvasIsTriju.push(rand(1, 33));
}
console.log(masyvasIsTriju);
// console.log(kiekSveikuSkaiciu(masyvasIsTriju[masyvasIsTriju.length - 1]));
// console.log(kiekSveikuSkaiciu(masyvasIsTriju[masyvasIsTriju.length - 2]));
// console.log(kiekSveikuSkaiciu(masyvasIsTriju[masyvasIsTriju.length - 3]));

console.log('----10-----');
// Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite.
const masyvasIsMasyvu = [];
let pirminiuSkaiciuSuma = 0;
let pirminiaiSkaiciai = 0;
let maziausias = 100;

// do {
for (let i = 0; i < 10; i++) {
  const vidinisMasyvas = [];
  for (let a = 0; a < 10; a++) {
    vidinisMasyvas[a] = rand(1, 100);

    if (kiekSveikuSkaiciu(vidinisMasyvas[a]) === 0) {
      pirminiaiSkaiciai += 1;
      pirminiuSkaiciuSuma += vidinisMasyvas[a];
    }
    if (vidinisMasyvas[a] < maziausias) {
      maziausias = vidinisMasyvas[a];
    }
  }
  masyvasIsMasyvu[i] = vidinisMasyvas;
}
// } while (pirminiuSkaiciuSuma / pirminiaiSkaiciai < 70);
console.log(masyvasIsMasyvu);
console.log('Maziausias skaicius: ' + maziausias);
console.log(
  'Vidurkis pirminiu skaiciu: ' + pirminiuSkaiciuSuma / pirminiaiSkaiciai
);
