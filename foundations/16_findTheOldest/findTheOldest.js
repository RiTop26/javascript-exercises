const findTheOldest = function(people) {
const oldestPerson = people.reduce((oldest, current) => {
    const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
    const currentAge = (current.yearOfDeath || new Date().getFullYear())- current.yearOfBirth;
    if(oldestAge > currentAge) {
        return  oldest;
    }
    else {
        return current;
    }
});
return oldestPerson;
    
};

// Do not edit below this line
module.exports = findTheOldest;
