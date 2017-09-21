青蛙跳台阶
function jumpFloor(number)
{
    // write code here
    if(number<=3){
        return number;
    }
    var res=[1,2,3];
    for(var i=3;i<number;i++){
        res[i]=res[i-1]+res[i-2];
    }
    return res.pop();
}
运行时间：14ms
占用内存：5172k


function jumpFloor(number)
{
    if(number<=3){
        return number;
    }
    return jumpFloor(number-1)+jumpFloor(number-2);
}
运行时间：709ms
占用内存：5296k
