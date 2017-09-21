function SelectSort(arr){
	var n = arr.length;
	for(var i=0;i<arr.length-1;i++){//n-1次排序
		for(var j= i+1;j<n;j++){//i之后的无序记录
			if(arr[j]<arr[i]){
				// k=j;
				var temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}
	return arr;
}
//每一趟从待排序记录中选择最小值，顺序放在已排好序的最后，直到排序完成
//书上的垃圾  错了