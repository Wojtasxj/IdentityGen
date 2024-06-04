const fs = require('fs');

const MALE_FIRST_NAMES = ['John', 'Michael', 'David', 'Robert', 'James'];
const FEMALE_FIRST_NAMES = ['Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth'];
const LAST_NAMES = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];

function generateRandomIdentity() {
  const gender = Math.random() < 0.5 ? 'M' : 'F';
  const firstName = gender === 'M' ?
    MALE_FIRST_NAMES[Math.floor(Math.random() * MALE_FIRST_NAMES.length)] :
    FEMALE_FIRST_NAMES[Math.floor(Math.random() * FEMALE_FIRST_NAMES.length)];
  const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  const age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

  return { gender, firstName, lastName, age };
}

function generateRandomIdentities(count) {
  const identities = [];
  for (let i = 0; i < count; i++) {
    identities.push(generateRandomIdentity());
  }
  return identities;
}

function saveIdentitiesToFile(identities, filename) {
  const jsonContent = JSON.stringify(identities, null, 2);
  fs.writeFile(filename, jsonContent, 'utf8', (err) => {
    if (err) {
      console.error('Error saving identities:', err);
      return;
    }
    console.log('File has been successfully generated! Check people.json');
  });
}

const identities = generateRandomIdentities(20);
saveIdentitiesToFile(identities, 'people.json');