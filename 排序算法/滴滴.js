var n = parseInt(readline());
var ARR = readline().split(" ").map(function(x) {
    return parseInt(x)
});
function getResult(arr) {
    var temp={};
    var count=0;
	for (var i = 1; i < arr.length; ++i) {
        if(arr[i]==0){
            if(temp[0]==undefined){
                count++;
            	temp[0]="Y";
            }       
        }
        else if(arr[i]^arr[i-1]==0){
            if(temp[arr[i]]==undefined){
                var isCorrect=true;
                for (var p in temp){
                    if(p>arr[i]){
                        isCorrect=false;
                    }
                }
         		if(isCorrect==false){
                    count++;
            	temp[arr[i]]="Y";
                }
                
            }
        }
    }
   	return(count);
}
print(getResult(ARR)); 

var n = parseInt(readline());
var ARR = readline().split(" ").map(function(x) {
    return parseInt(x)
});
function getResult(arr) {
    var start=0;
    var m=0;
     for(var i=0; i<arr.length; i++){

        if(arr[i] == 0){
            m++;
            start=i + 1;
            continue;
        }
        for(int j=start;j<i;j++){
            var flag=0;
            for(int k=j; k<=i; k++)
                flag ^= arr[k];
            if(flag == 0){
                m ++;
                start=i + 1;
                continue;
            }
        }
    }
    return(m);
}
function xornumber(st) {
    
    for(var i=0; i<st.length; i++){
        if(st[i] == 0){
                m++;
                start=i + 1;
                continue;
         }
        for(var j=start;j<i;j++){
                var flag=0;
                for(var k=j; k<=i; k++)
                    flag ^= st[k];
                if(flag == 0){
                    m ++;
                    start=i + 1;
                    continue;
                }
            }

    }

    return(number);
}
print(getResult(ARR)); 