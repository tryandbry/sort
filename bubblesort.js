function bubbleSort(array) {
  var bSwitch = true;

  while(bSwitch) {
    bSwitch = false;
    for(var i=0;i<array.length;i++){
      var buffer2 = array[i];
      array[i] = toLower(array[i],array[i+1]);
      if(array[i] != buffer2){
	bSwitch = true;
	array[i+1] = buffer2;
      }
    }
  }

  return array;
}

function toLower(a,b){
  return a > b ? b : a;
}







//function bubbleSort(array) {
//  var bSwitch = true;
//
//  while(bSwitch) {
//    bSwitch = false;
//    for(var i=0;i<array.length;i++){
//      if(array[i] > array[i+1]) {
//	var buffer = array[i+1];
//	array[i+1] = array[i];
//	array[i] = buffer;
//	bSwitch = true;
//      }
//    }
//  }
//
//  return array;
//}
