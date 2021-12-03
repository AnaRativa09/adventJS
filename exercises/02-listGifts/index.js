function listGifts(letter) {
  const arrLetter = letter.split(' ');

  const objectGifts = {};

  for (let i = 0; i < arrLetter.length; i++) {
    if (arrLetter[i] !== '' && !arrLetter[i].startsWith('_')) {
      objectGifts[arrLetter[i]]
        ? objectGifts[arrLetter[i]] += 1
        : objectGifts[arrLetter[i]] = 1;
    }
  }

  return objectGifts;
}

function listGifts2(letter) {
  const arrGifts = letter.split(' ');
  const arrFilterGifts = arrGifts.filter((gift) => gift !== '' && !gift.startsWith('_'));

  const objectGifts = {};

  arrFilterGifts.forEach((gift) => {
    objectGifts[gift]
      ? objectGifts[gift] += 1
      : objectGifts[gift] = 1;
  });

  return objectGifts;
}

const carta = 'bici coche balón _playstation bici coche peluche  holi';

console.log(listGifts(carta));
console.log(listGifts2(carta));
