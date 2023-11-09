export function add(numbers) {
  let sum = 0;
  for (const num of numbers) {
    // console.log(num);
    sum += num;
  }
  return sum;
}
