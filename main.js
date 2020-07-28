'use strict';

// const whySoSad = (person) => {
//     return `Why so sad, ${person}?`;
// }

// const whySoHappy = (person) => {
//     return `Why so happy, ${person}?`;
// }

// const mood = (person, cb) => {
//     return cb(person);
// }

// console.log(mood('Amanda', whySoHappy));
// console.log(mood('Taylor', whySoSad));


// const btnId = document.getElementById('main--btn');
const btnQuery = document.querySelector('#main--btn');

console.log(btnQuery);

const youClickedMe = () => {
    console.log('You clicked me!');
}

btnQuery.addEventListener('click', youClickedMe);