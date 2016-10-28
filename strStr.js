var strStr = function(source, target) {
    if(typeof source == "undefined")
        return -1;
    if(typeof target == "undefined" || target.length == 1)
        return 0;
    for(var i = 0; i < source.length - target.length + 1; i++){
        var j = 0;
        while(j < target.length && source.charAt(i + j) == target.charAt(j)){
            j++;
        }
        if(j == target.length)
            return i;
    }
    return -1;
};

document.write(strStr("target", "target"));
