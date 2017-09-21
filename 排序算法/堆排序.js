Array.prototype.buildMaxHeap=function(){
	for(var i=Math.floor(this.length/2)-1;i>=0;i--){
		this.heapAdjust(i,this.length);
	}
};
 
Array.prototype.swap=function(i,j){
	var tmp=this[i];
	this[i]=this[j];
	this[j]=tmp;
};
 
Array.prototype.heapAdjust=function(i,j){
	var largest=i;
	var left=2*i+1;//堆
	var right=2*i+2;
 
	if(left<j&&this[largest]<this[left]){
		largest=left;
	}
	 
	if(right<j&&this[largest]<this[right]){
		largest=right;
	}
	 
	if(largest!=i){
		this.swap(i,largest);
		this.heapAdjust(largest,j);//交换之后可能造成被交换的孩子节点不满足堆的性质，因此每次交换之后要重新对被交换的孩子节点进行调整
	}
};

Array.prototype.heapSort=function(){
	this.buildMaxHeap();//建立初始堆
	for(var i=this.length-1;i>0;i--){//调整成新堆
		this.swap(0,i);
		this.heapAdjust(0,i);
	}
	return this;
};

var a=new Array();
[].push.apply(a,[2,3,89,57,23,72,43,105]);
console.log(a.heapSort());
//升序用大根堆  降序用小根对 