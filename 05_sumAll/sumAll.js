const sumAll = function(min,max) {
    if(min>max){
        let temp=min;
        min=max;
        max=temp;
    }
    if(min < 0 
        || max < 0
        || !Number.isInteger(max)
        || !Number.isInteger(min)){
        return "ERROR";
    }
    
    let sum=0;
    for (i=min;i<=max;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;