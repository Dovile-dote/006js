// parametras yra tuscias kintamasis, neturi reiksmes
// argumentas reiksme, neturinti kintamojo

// deklaracija function fun()
// deklaruojant rasome parametrus

// kvieciame po deklaracijos fun()
// kvieciant rasome argumentus

const b = 'baba';

function fun(ki, li) {
  console.log(ki);
  console.log(li);
}
// ki yra argumentas be reiksmes, jo reiksme perrasome kviesdami

fun(b);
fun('geras', 'zuikis');
fun(b);
fun('blogas');
fun(b);

function fun1(a, b) {
  const rez1 = a + b;
  const rez2 = a * b;
  return [rez1, rez2];
}

const [gavau1, gavau2] = fun1(5, 7);
console.log(gavau1, gavau2);
// fancy budas gauti kelias skirtingas reiksmes

// bevarde funkcija
const beVardo = function () {
  console.log('as neturiu vardo');
};

beVardo();

function suVardu() {
  console.log('as turiu grazu varda');
}
function suVardu() {
  console.log('bla bla bla');
}
suVardu();

// funkcijos be vardo negalima perrasyti

const strele = () => {
  console.log('As streline funkcija');
};

// jeigu turime viena parametra
// galime praleisti skliaustelius
const vienas = (y) => {
  console.log('As streline funkcija');
};

// jeigu funkcija telpa i viena eilute, galim praleisti riestinius sklaustus
const du = (y) => console.log('As streline funkcija');
// const du = (y) => return console.log('As streline funkcija');

strele();

const fancy = () => {
  return (kita = () => {
    console.log('labas');
  });
};
console.log(fancy());

fancy()();

const fancy1 = () => () => console.log('labas');
fancy()();
const ja = fancy();
ja();

function alio(element) {
  console.log(element);
}

const array = ['a', 'b', 'c'];
array.forEach(alio);
// argumentas yra funkcija
array.forEach((element) => console.log(element));

array.forEach((element, i) => console.log(element, i));
// antras argumentas grazina indeksus

const dvimatis = [
  [2, 3, 0, 8, 0],
  [7, 3, 8, 5, 6],
  [9, 3, 9, 8, 0],
  [1, 7, 8, 8, 9],
];
dvimatis.forEach((r) => r.forEach((n) => console.log(n)));

const cat = {
  name: 'Pilkis',
  voice: function () {
    console.log('Miauuuuuu says ' + this.name);
  },
  kazkas: function () {
    console.log(this);
  },
};

cat.voice();
cat.kazkas();
// savybes, kurios yra funkcijos, vadinamos metodais
// voice yra objekto metodas

const n = ['Petras', 'Asilas', 'Barsukas', 'Kate', 'a', 'A'];

n.sort();
console.table(n);

n.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});
console.log(n);

n.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
});
console.log(n);
// i kita puse susortino
