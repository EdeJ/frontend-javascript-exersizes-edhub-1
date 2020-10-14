// een variabele die niet veranderd declareer je met const
// een variablere de wel mag veranderen declareer je met let


// ==========================================
// 1. Declareer een variabele om jouw naam in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================
const myName = "itamar";



// ==========================================
// 2. Declareer een variabele om de kleur van jouw ogen in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================
const myEyes = "blue";


// ==========================================
// 3. Declareer een variabele om jouw leeftijd in op te slaan en zet de waarde erin. De variabele moet later overschreven kunnen worden.
// ==========================================
let myAge = 11;


// ==========================================
// 4. Declareer een variabele om jouw beroep in op te slaan en zet de waarde erin. De variabele moet later overschreven kunnen worden.
// ==========================================
let myHobby = "music";


// ==========================================
// 5. Declareer een variabele om jouw schoenmaat in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================
const shoeSize = 40;


// ==========================================
// 6. Declareer een variabele om in op te slaan of je een partner hebt of niet. De variabele moet later overschreven kunnen worden.
// ==========================================
const hasGirlFriend = true;



// ==========================================
// 7. Declareer een variabele om het aantal kinderen in op te slaan. De variabele moet later overschreven kunnen worden.
// ==========================================
let childrenCount = 2;


// ==========================================
// 8. Gebruik jouw variabelen nu om hun waardes te loggen in de terminal. Klopt het allemaal?
// ==========================================
console.log("mijn naam is " + myName);
console.log("mijn kleur ogen zijn " + myEyes);
console.log("ik ben " + myAge + " jaar oud");
console.log("mijn hobby is " + myHobby);
console.log("ik heb " + shoeSize + " als schoenmaat");
if (hasGirlFriend === false) {
    console.log("nee ik heb geen vriendin");
} else {
    console.log("ik heb wel een vriendin");
}
console.log("ik heb " + childrenCount + " kinderen");
