function listGifts(letter) {
  const arrLetter = letter.split(' ');
  const objectGifts = {};

  for (let i = 0; i < arrLetter.length; i++) {
    if (arrLetter[i] !== '' && !arrLetter[i].startsWith('_')) {
      objectGifts[arrLetter[i]] ? objectGifts[arrLetter[i]]++ : objectGifts[arrLetter[i]] = 1;
    }
  }

  return objectGifts;
}

const carta = 'bici coche balón _playstation bici coche peluche  holi';

console.log(listGifts(carta));
