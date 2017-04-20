function bubbleSort(array) {
  var bSwitch = true;

  while(bSwitch) {
    bSwitch = false;
    for(var i=0;i<array.length;i++){
      if(array[i] > array[i+1]) {
	var buffer = array[i+1];
	array[i+1] = array[i];
	array[i] = buffer;
	bSwitch = true;
      }
    }
  }

  return array;
}
