function Reverse(str)  
{  
    var length=str.length;
    for (var i = 0; i < length / 2; ++i)  
    {  
        str[length] = str[i];  
        str[i] = str[length - 1 - i];  
        str[length - 1 - i] = str[length];  
    }  
    str[length] = 0;  
    return str;  
}  