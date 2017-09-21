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

var quickSort = function(arr) {
    　　if (arr.length <= 1) { return arr; }
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
    　　return quickSort(left).concat([pivot], quickSort(right));
    };
//书上的快排
function Partition(arr,i,j){
	var temp=arr[i];
	while(i<j){
		while(i<j&&arr[j]>=temp){
			j--;
		}
		if(i<j){
			arr[i]=arr[j];
			i++;
		}
		while(i<j&&arr[i]<=temp){
			i++;
		}
		if(i<j){
			arr[j]=arr[i];
			j--;
		}
	}
	arr[i]=temp;
	return i;
}
function QuickSort(arr,s,t){
	var i;
	if(s<t){
		i=Partition(arr,s,t);
		QuickSort(arr,s,i-1);
		QuickSort(arr,i+1,t);
	}
}
var ARR=[2,3,1,55,23,2,2345];
QuickSort(ARR,0,6);
