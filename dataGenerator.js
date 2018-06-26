const fs = require('fs');
const faker = require('faker');

// let counter = 0;

const generateRandomData = () => {
  const start = new Date();

  const partySize = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const times = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM',
    '10:30 AM', '11:00 AM', '11:30 AM', '12:00PM', '1:00 PM',
    '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM',
    '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM',
  ];

  const addDigit = n => (n < 10 ? `0${n}` : `${n}`);
  const fakerDate = faker.date.between('2018-06-20', '2018-10-01');
  const fakerYear = fakerDate.getFullYear();
  const fakerMonth = addDigit(fakerDate.getMonth());
  const fakerDay = addDigit(fakerDate.getDate());

  const randomPartySize = partySize[Math.floor(Math.random() * partySize.length)];
  const randomDate = `${fakerYear}-${fakerMonth}-${fakerDay}`;
  const min = 10;
  const randomMaxSize = partySize[Math.floor(Math.random() * (partySize.length - min)) + min];
  const randomLength = Math.floor(Math.random() * (12 - 5)) + 5;

  const randomTimeTiles = (array, n) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, n);
    const reSort = selected.sort((a, b) => new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b));
    return reSort.toString(' ');
  };
  const randomTimes = randomTimeTiles(times, randomLength);

  const seedString = `${randomPartySize}|${randomDate}|${randomMaxSize}|${randomTimes}\n`;
  return seedString;
};

const writeData = () => {
  const start = new Date();

  let generations = 0;
  while (generations < 10) {
    const generateData = () => {
      let dataSeed = '';
      for (let i = 0; i < 1000000; i += 1) {
        // counter += 1;
        dataSeed += generateRandomData();
      }
      return dataSeed;
    };

    try {
      fs.appendFileSync('./fakedata.txt', generateData());
      generations += 1;
      console.log(`\nData Generation ${generations} complete.\n`);
    } catch (err) {
      console.log(`\n${err}\n`);
    }
  }

  const end = new Date() - start;
  console.log(`\nFinished in ${end}ms.\n`);
};

module.exports = {
  writeData,
};
