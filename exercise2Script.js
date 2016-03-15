var averger = function averger(array){
	var sum = 0;
	for(i = 0;i < array.length; i++) {
		sum += array[i];
	}	
	return sum / array.length;
}


var array1 = [1,2,3,4,5,6,7,8,9,12];

console.log(averger(array1));
