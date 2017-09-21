function InsertSort(arr){
	var watch;//监视稍
	for(var i=1;i<arr.length;i++){//n-1次排序
		if(arr[i]<arr[i-1]){
			watch = arr[i];
			var j = i-1;
			while(arr[j]>watch){//大于监视稍后移动
				arr[j+1] = arr[j];
				j--;
			}
			arr[j+1] = watch;//将arr[i]插入应插入的位置
		}
	}
	return arr;
}
//第i次排序时，前i-1项已经排好序。