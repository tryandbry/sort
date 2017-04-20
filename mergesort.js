function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var firstHalf = wholeArray.slice(0, wholeArray.length/2);
  var secondHalf = wholeArray.slice(wholeArray.length/2);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let merged = []
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1[0])
      arr1 = arr1.slice(1)
    } else {
      merged.push(arr2[0])
      arr2 = arr2.slice(1)
    }
  }
  merged = merged.concat(arr1).concat(arr2)
  return merged
}

function mergeSort(array) {
  // let sorted = []
  if (array.length <= 1) {
    return array
  } else {
    return merge(mergeSort(split(array)[0]), mergeSort(split(array)[1]))
  }
}
