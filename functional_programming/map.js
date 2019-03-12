const schools = [
  { name: 'York' },
  { name: 'Leeds' },
  { name: 'Manch' },
  { name: 'Bristol' },
];

/*
const editName = (oldName, name, arr) =>
  arr.map((item) => {
    if (item.name === oldName) {
      return {
        ...item,
        name,
      };
    }
    return item;
  });
*/

const editName = (oldName, name, arr) => arr.map(item => (item.name === oldName) ?
({...item, name}) : item);

const updatedSchools = editName('Leeds', 'newCity', schools);

console.log(schools);
console.log(updatedSchools); // doesn't mutate original

