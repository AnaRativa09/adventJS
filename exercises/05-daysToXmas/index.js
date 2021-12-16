function daysToXmas(date) {
  const millisXmasDate = new Date('Dec 25, 2021').getTime();
  const millisDateFormat = new Date(date.toDateString()).getTime();

  const diffMillis = millisXmasDate - millisDateFormat;
  const millisToDays = diffMillis / (60 * 60 * 24 * 1000);

  return millisToDays;
}

const date = new Date('Dec 31, 2021');
console.log(daysToXmas(date));
