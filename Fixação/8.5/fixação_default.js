const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

const anotherPerson = {
    firstName: 'Patricio',
    lastName: 'Nobrega',
}



console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
console.log(getNationality(anotherPerson));