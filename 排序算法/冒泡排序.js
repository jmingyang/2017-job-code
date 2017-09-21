function BubbleSort(arr){
	var n = arr.length;
	var isSwap;
	for(var i=0;i<n-1;i++){//n-1次排序
		isSwap = false;
		for(var j= 0;j<n-i;j++){//i之后的无序记录
			if(arr[j]>arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				isSwap = true;
			}
		}
		if(isSwap == false){
			return arr;
		}
	}
	return arr;
}


var inputs = [];
while (line = readline()) {
    var lines = line.split(' ');
    inputs.push(lines);
}

var ARR = inputs[0].map(function(x) {
    return parseInt(x)
});
var K = parseInt(inputs[1][0]);

function getNokMax(arr,k)
{
    if(arr.length===0 || k>arr.length){
        return 0;
    }
    var uniqueArr = arr.unique();
    var n = uniqueArr.length;
	var isSwap;
    outFor:
	for(var i=0;i<k-1;i++){//n-1次排序
		isSwap = false;
		for(var j= 0;j<n-i;j++){//i之后的无序记录
			if(uniqueArr[j]>uniqueArr[j+1]){
				var temp = uniqueArr[j];
				uniqueArr[j] = uniqueArr[j+1];
				uniqueArr[j+1] = temp;
				isSwap = true;
			}
		}
		if(isSwap == false){
			break outFor;
		}
	}
	return uniqueArr.splice(-k)[0];
}

Array.prototype.unique = function(){
 var res = [this[0]];
 for(var i = 1; i < this.length; i++){
  if(this[i] !== res[res.length - 1]){
   res.push(this[i]);
  }
 }
 return res;
}
print(getNokMax(ARR,K));
