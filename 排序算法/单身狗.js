function findSingleDog (arr){
	var n=arr.length;
	var temp = [];
	for(var i=n-1;i>=0;i--){
		if(temp.indexOf(arr[i])==-1){
			var isSingleDog=true;
			for(var j=0;j<=i;j++){
				if(arr[i]==arr[j]){
					temp.push(arr[i])
					isSingleDog=false;
				}
			}
		}
		if(isSingleDog==true) return arr[i];
	}
}


function findSingleDog (arr){
	var n=arr.length;
	var temp = [];
	for(var i=n-1;i>=0;i--){
		if(temp.indexOf(arr[i])==-1){
			var isSingleDog=false;
			if(i=0) return arr[i];
			for(var j=0;j<i;j++){
				if(arr[i]==arr[j]){
					temp.push(arr[i])
					isSingleDog=false;
				}else{
					isSingleDog=true;
					break;
				}
			}
		}
		if(isSingleDog==true) return arr[i];
	}
}
findSingleDog([1,1,11,2,2]);