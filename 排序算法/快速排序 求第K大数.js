function QuickSort(arr){
	if(arr.length<=1){
		return arr;
	}
	var pivotIndex  = Math.floor(arr.length/2);
	var pivot = arr.splice(pivotIndex,1)[0];

	var left = [];
	var right = [];
	for(var i=0;i<arr.length;i++){
		if(arr[i]<pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	return  QuickSort(left).concat([pivot],QuickSort(right));
}

var quickSort = function(arr,k) {
    　　if (arr.length <= 1) { return arr[0]; }
    　　var pivotIndex = Math.floor(arr.length / 2);
    　　var pivot = arr.splice(pivotIndex, 1)[0];
    　　var left = [];
    　　var right = [];
    　　for (var i = 0; i < arr.length; i++){
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);
    　　　　} else {
    　　　　　　right.push(arr[i]);
    　　　　}
    　　}
    	var leftk = arr.length+1-k;
    	if(left.length<leftk){
    		return quickSort(right,k);
    	}
    	if(left.length==leftk){
    			return pivot;
    		}
    	if(left.length>leftk){
    		
    		return quickSort(left,k-right.length-1);
    	}
    };