const palindromes = function (string) {
    cleanString=string.replace(/[^0-9a-z]/gi, '').toLowerCase();
    newString=string.toLowerCase().split("").reverse().join("").replace(/[^0-9a-z]/gi, '');
    if (cleanString==newString){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
