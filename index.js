export default function binarySearch(arr, target, prev = 0) {
  let middle = Math.floor(arr.length / 2);
  let newPrev = prev;

  if (arr.length === 0) {
    console.log("Not found");
    return -1;
  }

  if (arr[middle] === target) {
    console.log("found", middle + newPrev);
    return middle + prev;
  } else if (arr[middle] > target) {
    console.log(`smaller than ${arr[middle]}`, arr.slice(0, middle));
    return binarySearch(arr.slice(0, middle), target, newPrev);
  } else {
    console.log(`bigger than ${arr[middle]}`, arr.slice(middle + 1));
    newPrev += middle + 1;
    return binarySearch(arr.slice(middle + 1), target, newPrev);
  }
}
