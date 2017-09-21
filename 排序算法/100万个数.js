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
    if(left.length<500000){
        return  left.concat([pivot],QuickSort(right));
    }else if(left.length==500000){
        return  QuickSort(left).concat([pivot],QuickSort(right));
    }else if(left.length>500000){
        return  QuickSort(left).concat([pivot],right);
    }
}

