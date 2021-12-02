function countingSheeps(sheeps) {
  const filterSheeps = sheeps.filter((sheep) => {
    let sheepName = sheep.name.toLowerCase();

    return (
      sheep.color === 'rojo' &&
      sheepName.includes('n') &&
      sheepName.includes('a')
    );
  })

  return filterSheeps;
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'Ki N M', color: 'rojo'},
  { name: 'navidad', color: 'rojo'}
];

console.log(countingSheeps(ovejas));