const reverseString = function(stringy) {
    let split = stringy.split("");
    let reverse = split.reverse(); 
    let final = reverse.join("");
    return final;
};

// Do not edit below this line
module.exports = reverseString;
