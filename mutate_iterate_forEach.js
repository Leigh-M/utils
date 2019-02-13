const values = ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"];
let count = 0;
values.slice().forEach((value, index) => {
  if (value === "A2" || value === "A5") {
    values.splice(index - count++, 1);
  }
  // replaces value
  if (value === "A3" || value === "A4" || value === "A7") {
    values.splice(index, 1, 'newVal');
  }
  // insert value before
  if (value === "A0" || value === "A6" || value === "A8") {
    values.splice(index - count--, 0, 'newVal');
  }
  // insert value after
  if (value === "A0" || value === "A6" || value === "A8") {
    values.splice(index - --count, 0, 'newVal');
  }
});
console.log(values);

// Note: if implementing before + after insertions, implement before first
// does not work as expected otherwise
